import { Collection } from 'mongodb'
import { ByIdProps, ResponseDocument } from '../types';

const findById = async (collection: Collection, params: ByIdProps): Promise<ResponseDocument | undefined> => {
  return await collection.findOne({ _id: params.id })
}

export default findById
