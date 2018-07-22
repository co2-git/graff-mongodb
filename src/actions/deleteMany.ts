import { Collection, ObjectID } from 'mongodb'
import { map } from 'lodash'
import { Model, InputProps, ResponseDocument, ProjectionProps } from '@francoisv/graff-api/dist/types'

import findMany from './findMany'

const deleteMany = async (collection: Collection, params: InputProps & ProjectionProps, model: Model)
: Promise<ResponseDocument[]> => {
  const docs = await findMany(collection, params, model)
  const ids = map(docs, '_id')
  await collection.deleteMany({ _id: { $in: ids.map(id => new ObjectID(id)) } })
  return docs
}

export default deleteMany
