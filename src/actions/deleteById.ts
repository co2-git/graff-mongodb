import { Collection } from 'mongodb'

import findById from './findById'
import { ByIdProps, ResponseDocument } from '../types'

const deleteById = async (collection: Collection, params: ByIdProps): Promise<ResponseDocument | undefined> => {
  const doc = await findById(collection, params)
  if (!doc) {
    return undefined
  }
  const res = await collection.deleteOne({ _id: params.id })
  if (res.result.n === 0) {
    return undefined
  }
  return doc
}

export default deleteById
