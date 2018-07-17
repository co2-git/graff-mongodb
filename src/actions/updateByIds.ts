import { Collection } from 'mongodb'
import { ByIdsProps, OutputProps, ResponseDocument } from '../types';

const updateByIds = async (collection: Collection, params: ByIdsProps & OutputProps)
: Promise<ResponseDocument[]> => {
  const res = await collection.updateOne({ id: { $in: params.ids } }, { $set: params.output, multi: true })
  console.log(res)
  return [{ _id: '00' }]
}

export default updateByIds
