import { Collection } from 'mongodb'
import { Model, InputProps, ProjectionProps } from '@francoisv/graff-api/dist/types'

import { parseValues } from '../helpers/parseValue'

type Params = InputProps & ProjectionProps

const defaultParams = {
  input: {},
  projection: {},
}

const count = async (collection: Collection, params: Params = defaultParams, model: Model) => {
  return await collection.count(parseValues(params.input, model))
}

export default count
