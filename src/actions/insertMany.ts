import { Collection } from 'mongodb'
import { InputsProps, ResponseDocument } from '../types';

const insertMany = async (collection: Collection, params: InputsProps): Promise<ResponseDocument[]> => {
  const { ops } = await collection.insertMany(params.input)
  return ops
}

export default insertMany
