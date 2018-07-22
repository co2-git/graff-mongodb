import { Collection } from 'mongodb'
import { Model, ResponseDocument, InputProps, ProjectionProps } from '@francoisv/graff-api/dist/types'
import { parseValues } from '../helpers/parseValue'

const findMany = async (collection: Collection, params: InputProps & ProjectionProps, model: Model)
: Promise<ResponseDocument[]> => {
  const res = await collection.find(parseValues(params.input, model))
  if (params.projection) {
    if (typeof params.projection.limit === 'number') {
      res.limit(params.projection.limit)
    }
    if (Array.isArray(params.projection.sort)) {
      const sorter: any = {}
      for (const sort of params.projection.sort) {
        sorter[sort.field] = sort.reverse ? -1 : 1
      }
      res.sort(sorter)
    }
  }
  return res.toArray()
}

export default findMany
