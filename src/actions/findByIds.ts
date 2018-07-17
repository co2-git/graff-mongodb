import { Collection } from 'mongodb'
import { ByIdsProps, ResponseDocument } from '../types';

const findByIds = async (collection: Collection, params: ByIdsProps): Promise<ResponseDocument[]> => {
  return await collection.find({ id: { $in: params.ids } }).toArray()
}

export default findByIds
