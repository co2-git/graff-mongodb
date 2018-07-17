import { Collection } from 'mongodb'
import { InputProps, OutputProps, ResponseDocument } from '../types';

const updateMany = async (collection: Collection, params: InputProps & OutputProps)
: Promise<ResponseDocument[]> => {
  const res = await collection.updateMany(params.input, { $set: params.output , multi: true })
  console.log(res)
  return [{ _id: '33' }]
}

export default updateMany
