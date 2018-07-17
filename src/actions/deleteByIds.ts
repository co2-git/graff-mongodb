import { Collection } from 'mongodb'
import { map } from 'lodash'

import { ByIdsProps, ResponseDocument } from '../types';
import findByIds from './findByIds';

const deleteByIds = async (collection: Collection, params: ByIdsProps): Promise<ResponseDocument[]> => {
  const docs = await findByIds(collection, params)
  const ids = map(docs, '_id')
  const res = await collection.deleteMany({ id: { $in: ids } })
  console.log(res)
  return docs
}

export default deleteByIds
