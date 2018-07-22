import { Collection } from 'mongodb'
import { Model, InputProps, ResponseDocument } from '@francoisv/graff-api/dist/types'

import { parseValues } from '../helpers/parseValue'

const insertOne = async (collection: Collection, params: InputProps, model: Model)
: Promise<ResponseDocument> => {
  const { result, ops: [op] } = await collection.insertOne(parseValues(params.input, model))
  if (result.n !== 1 ) {
    throw new Error('Can not insertOne')
  }
  return op
}

export default insertOne
