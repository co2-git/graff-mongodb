import { Collection } from 'mongodb'
import { map } from 'lodash'

import findMany from './findMany'
import { InputProps, ResponseDocument } from '../types';

const deleteMany = async (collection: Collection, params: InputProps): Promise<ResponseDocument[]> => {
  const docs = await findMany(collection, params.input)
  const ids = map(docs, '_id')
  await collection.deleteMany({ _id: { $in: ids } })
  return docs
}

export default deleteMany
