import { Collection, ObjectID } from 'mongodb'
import { Model, ByIdProps, ResponseDocument } from '@francoisv/graff-api/dist/types'

const findById = async (collection: Collection, params: ByIdProps, model: Model)
: Promise<ResponseDocument | undefined> => {
  return await collection.findOne({ _id: new ObjectID(params.id) })
}

export default findById
