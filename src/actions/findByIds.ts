import { Collection, ObjectID } from 'mongodb'
import { Model, ByIdsProps, ResponseDocument } from '@francoisv/graff-api/dist/types'

const findByIds = async (collection: Collection, params: ByIdsProps, model: Model)
: Promise<ResponseDocument[]> => {
  return await collection.find({ id: { $in: params.ids.map(id => new ObjectID(id)) } }).toArray()
}

export default findByIds
