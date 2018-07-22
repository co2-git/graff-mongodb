import { Collection } from 'mongodb'
import { map, pick } from 'lodash'
import { Model, InputProps, OutputProps, ResponseDocument, ProjectionProps } from '@francoisv/graff-api/dist/types'

import findMany from './findMany'
import { parseValues } from '../helpers/parseValue'

const updateMany = async (collection: Collection, params: InputProps & OutputProps & ProjectionProps, model: Model)
: Promise<ResponseDocument[]> => {
  const docs = await findMany(collection, pick(params, ['input', 'projection']), model)
  if (!docs.length) {
    return []
  }
  const res = await collection.updateMany(params.input || {}, { $set: parseValues(params.output, model) })
  if (!res.result.ok) {
    return []
  }
  return map(docs, doc => ({
    ...doc,
    ...params.output,
  }))
}

export default updateMany
