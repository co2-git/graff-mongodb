import { Collection } from 'mongodb'

import { InputProps, ResponseDocument } from '../types'

const deleteOne = async (collection: Collection, params: InputProps)
: Promise<ResponseDocument | undefined> => {
  const res = await collection.findOneAndDelete(params.input)
  if (!res.ok) {
    return undefined
  }
  return res.value
}

export default deleteOne
