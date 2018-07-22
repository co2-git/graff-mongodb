import { Collection } from 'mongodb'
import { Model, InputProps, OutputProps, ResponseDocument } from '@francoisv/graff-api/dist/types'

import { parseValues } from '../helpers/parseValue'

const updateOne = async (collection: Collection, params: InputProps & OutputProps, model: Model)
: Promise<ResponseDocument | undefined> => {
  const res = await collection.findOneAndUpdate(
    parseValues(params.input, model),
    { $set: parseValues(params.output, model) }
  )
  if (!res.ok) {
    return undefined
  }
  return res.value
}

export default updateOne
