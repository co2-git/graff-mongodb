import { Collection } from 'mongodb'

const count = async (collection: Collection, where: any = {}) => {
  return await collection.count(where)
}

export default count
