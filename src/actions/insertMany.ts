import { Collection } from 'mongodb'
import { Model, InputsProps, ResponseDocument } from '@francoisv/graff-api/dist/types'

import { parseValues } from '../helpers/parseValue'

const insertMany = async (collection: Collection, params: InputsProps, model: Model)
: Promise<ResponseDocument[]> => {
  const { ops } = await collection.insertMany(params.input.map(input => parseValues(input, model)))
  return ops
}

export default insertMany
