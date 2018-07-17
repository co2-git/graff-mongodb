import { Collection } from 'mongodb'
import { WhereProps, ResponseDocument } from '../types';

const findOne = async (collection: Collection, params: WhereProps): Promise<ResponseDocument | undefined> => {
  return await collection.findOne(params)
}

export default findOne
