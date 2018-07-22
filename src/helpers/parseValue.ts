import { Param, Model } from '@francoisv/graff-api/dist/types'
import { ObjectID } from 'mongodb'

export const parseValue = (value: any, field: Param) => {
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
