import { Collection } from 'mongodb'

import { InputProps, OutputProps, ResponseDocument } from '../types'

const updateOne = async (collection: Collection, params: InputProps & OutputProps)
: Promise<ResponseDocument | undefined> => {
  const res = await collection.findOneAndUpdate(params.input, { $set: params.output, upsert: false })
  if (!res.ok) {
    return undefined
  }
  return res.value
}

export default updateOne
