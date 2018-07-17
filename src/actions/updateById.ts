import { Collection } from 'mongodb'
import { ByIdProps, OutputProps, ResponseDocument } from '../types';
import findById from './findById';

const updateById = async (collection: Collection, params: ByIdProps & OutputProps)
: Promise<ResponseDocument | undefined> => {
  const { id, output } = params
  const { upsertedId } = await collection.updateOne({ _id: id }, { $set: output })
  if (upsertedId) {
    return await findById(collection, { id: upsertedId.toString() })
  }
}

export default updateById
