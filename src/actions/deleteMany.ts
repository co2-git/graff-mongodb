import { Collection, ObjectID } from 'mongodb'
import { map } from 'lodash'

import findMany from './findMany'
import { InputProps, ResponseDocument } from '../types';

const deleteMany = async (collection: Collection, params: InputProps): Promise<ResponseDocument[]> => {
  const docs = await findMany(collection, params)
  const ids = map(docs, 'id')
  console.log(ids)
  const objectIds = map(ids, ObjectID)
  console.log(objectIds)
  const res = await collection.deleteMany({ _id: { $in: objectIds } })
  console.log(res)
  return docs
}

export default deleteMany
