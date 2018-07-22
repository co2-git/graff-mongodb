import { Collection, ObjectID } from 'mongodb'
import { Model, ByIdProps, OutputProps, ResponseDocument } from '@francoisv/graff-api/dist/types'
import { parseValues } from '../helpers/parseValue'

import findById from './findById';

const updateById = async (collection: Collection, params: ByIdProps & OutputProps, model: Model)
: Promise<ResponseDocument | undefined> => {
  const { id, output } = params
  const { upsertedId } = await collection.updateOne(
    { _id: new ObjectID(id) },
    { $set: parseValues(output, model) },
  )
  if (upsertedId) {
    return await findById(collection, { id: upsertedId.toString() }, model)
  }
}

export default updateById
