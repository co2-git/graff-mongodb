import { Collection } from 'mongodb'
import { Model, InputProps, ProjectionProps } from '@francoisv/graff-api/dist/types'

import { parseValues } from '../helpers/parseValue'

type Params = InputProps & ProjectionProps

const defaultParams = {
  input: {},
  projection: {},
}

const count = async (collection: Collection, params: Params = defaultParams, model: Model) => {
  const res = await collection.countDocuments(parseValues(params.input, model))
  console.log({ count: res })
  return res
}

export default count
