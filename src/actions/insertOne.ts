import { Collection } from 'mongodb'
import { InputProps, ResponseDocument } from '../types';

const insertOne = async (collection: Collection, params: InputProps): Promise<ResponseDocument> => {
  const { result, ops: [op] } = await collection.insertOne(params.input)
  if (result.n !== 1 ) {
    throw new Error('Can not insertOne')
  }
  return op
}

export default insertOne
