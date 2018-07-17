import { Collection } from 'mongodb'
import { map } from 'lodash'

import findMany from './findMany'
import { InputProps, ResponseDocument } from '../types';

const deleteMany = async (collection: Collection, params: InputProps): Promise<ResponseDocument[]> => {
  const docs = await findMany(collection, params)
  const ids = map(docs, 'id')
  const res = await collection.deleteMany({ _id: { $in: ids } })
  console.log(res)
  return docs
}

export default deleteMany
