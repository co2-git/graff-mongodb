import { Collection } from 'mongodb'
import { WhereProps, ResponseDocument } from '../types';

const findMany = async (collection: Collection, params: WhereProps): Promise<ResponseDocument[]> => {
  const res = await collection.find(params)
  return res.toArray()
}

export default findMany
