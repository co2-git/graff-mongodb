import { Collection } from 'mongodb'
import { Model, InputProps, ResponseDocument } from '@francoisv/graff-api/dist/types'

import { parseValues } from '../helpers/parseValue'

const deleteOne = async (collection: Collection, params: InputProps, model: Model)
: Promise<ResponseDocument | undefined> => {
  const res = await collection.findOneAndDelete(parseValues(params.input, model))
  if (!res.ok) {
    return undefined
  }
  return res.value
}

export default deleteOne
