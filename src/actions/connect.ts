import { MongoClient } from 'mongodb'

import { Connector } from '@francoisv/graff-api/dist/types'

import count from './count'
import deleteById from './deleteById'
import deleteByIds from './deleteByIds'
import deleteMany from './deleteMany'
import deleteOne from './deleteOne'
import findById from './findById'
import findByIds from './findByIds'
import findMany from './findMany'
import findOne from './findOne'
import insertMany from './insertMany'
import insertOne from './insertOne'
import updateById from './updateById'
import updateByIds from './updateByIds'
import updateMany from './updateMany'
import updateOne from './updateOne'

const actions = {
  count,
  deleteById,
  deleteByIds,
  deleteMany,
  deleteOne,
  findById,
  findByIds,
  findMany,
  findOne,
  insertMany,
  insertOne,
  updateById,
  updateByIds,
  updateMany,
  updateOne,
}

const connect = async (url: string): Promise<Connector> => {
  console.log('CONNECT')
  const client = await MongoClient.connect(url, { useNewUrlParser: true })
  return {
    actions: {
      count: (modelName, params, model) =>
        actions.count(client.db().collection(modelName), params, model),

      deleteById: (modelName, params, model) =>
        actions.deleteById(client.db().collection(modelName), params, model),

      deleteByIds: (modelName, params, model) =>
        actions.deleteByIds(client.db().collection(modelName), params, model),

      deleteMany: (modelName, params, model) =>
        actions.deleteMany(client.db().collection(modelName), params, model),

      deleteOne: (modelName, params, model) =>
        actions.deleteOne(client.db().collection(modelName), params, model),

      findById: (modelName, params, model) =>
        actions.findById(client.db().collection(modelName), params, model),

      findByIds: (modelName, params, model) =>
        actions.findByIds(client.db().collection(modelName), params, model),

      findMany: (modelName, params, model) =>
        actions.findMany(client.db().collection(modelName), params, model),

      findOne: (modelName, params, model) =>
        actions.findOne(client.db().collection(modelName), params, model),

      insertMany: (modelName, params, model) =>
        actions.insertMany(client.db().collection(modelName), params, model),

      insertOne: (modelName, params, model) =>
        actions.insertOne(client.db().collection(modelName), params, model),

      updateById: (modelName, params, model) =>
        actions.updateById(client.db().collection(modelName), params, model),

      updateByIds: (modelName, params, model) =>
        actions.updateByIds(client.db().collection(modelName), params, model),

      updateMany: (modelName, params, model) =>
        actions.updateMany(client.db().collection(modelName), params, model),

      updateOne: (modelName, params, model) =>
        actions.updateOne(client.db().collection(modelName), params, model),
    },
  }
}

export default connect
