import { Param, Model } from '@francoisv/graff-api/dist/types'
import { ObjectID } from 'mongodb'
import stringify from 'json-stringify-safe'

export const parseValue = (value: any, field: Param, ignoreArray: boolean = false): any => {
  if (field.isArray && ignoreArray) {
    if (!Array.isArray(value)) {
      throw new Error(`Field ${ field.name } is expecting an array, got ${ stringify(value, null, 2) }`)
    }
    return value.map(val => parseValue(val, field, true))
  }
  switch (field.type) {
    case 'String':
    case 'Float':
    case 'Boolean':
    case 'Int':
      return value
    case 'ID':
    default:
      return new ObjectID(value)
  }
}

interface Parsed {
  [field: string]: any
}

export const parseValues = (values: Parsed, model: Model): Parsed => {
  const parsed: Parsed = {}
  for (const field of model.fields) {
    if (field.name in values) {
      parsed[field.name] = parseValue(values[field.name], field)
    }
  }
  return parsed
}
