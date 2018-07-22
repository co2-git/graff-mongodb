import { Collection } from 'mongodb'
import { Model, InputProps, ResponseDocument } from '@francoisv/graff-api/dist/types'

import { parseValues } from '../helpers/parseValue'

const findOne = async (collection: Collection, params: InputProps, model: Model)
: Promise<ResponseDocument | undefined> => {
  return await collection.findOne(parseValues(params.input, model))
}

export default findOne
