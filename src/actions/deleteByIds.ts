import { Collection, ObjectID } from 'mongodb'
import { map } from 'lodash'
import { Model, ByIdsProps, ResponseDocument } from '@francoisv/graff-api/dist/types'

import findByIds from './findByIds'

const deleteByIds = async (collection: Collection, params: ByIdsProps, model: Model):
Promise<ResponseDocument[]> => {
  const docs = await findByIds(collection, params, model)
  const ids = map(docs, '_id')
  const res = await collection.deleteMany({ id: { $in: ids.map(id => new ObjectID(id)) } })
  console.log(res)
  return docs
}

export default deleteByIds
