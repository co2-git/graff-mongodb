import { Collection, ObjectID } from 'mongodb'
import { Model, ByIdsProps, OutputProps, ResponseDocument } from '@francoisv/graff-api/dist/types'
import { parseValues } from '../helpers/parseValue'

const updateByIds = async (collection: Collection, params: ByIdsProps & OutputProps, model: Model)
: Promise<ResponseDocument[]> => {
  const res = await collection.updateMany(
    { id: { $in: params.ids.map(id => new ObjectID(id)) } },
    { $set: parseValues(params.output, model) },
  )
  console.log(res)
  return [{ _id: '00' }]
}

export default updateByIds
