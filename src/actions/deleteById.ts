import { Collection, ObjectID } from 'mongodb'
import { Model, ResponseDocument, ByIdProps } from '@francoisv/graff-api/dist/types'

import findById from './findById'

const deleteById = async (collection: Collection, params: ByIdProps, model: Model)
: Promise<ResponseDocument | undefined> => {
  const doc = await findById(collection, params, model)
  if (!doc) {
    return undefined
  }
  const res = await collection.deleteOne({ _id: new ObjectID(params.id) })
  if (res.result.n === 0) {
    return undefined
  }
  return doc
}

export default deleteById
