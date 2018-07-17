import { MongoClient } from 'mongodb'

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

import { Connector, ByIdProps, ByIdsProps, InputProps, WhereProps, InputsProps, OutputProps } from '../types'

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
      deleteById: (modelName: string, params: ByIdProps) =>
        actions.deleteById(client.db().collection(modelName), params),
      deleteByIds: (modelName: string, params: ByIdsProps) =>
        actions.deleteByIds(client.db().collection(modelName), params),
      deleteMany: (modelName: string, params: InputProps) =>
        actions.deleteMany(client.db().collection(modelName), params),
      deleteOne: (modelName: string, params: InputProps) =>
        actions.deleteOne(client.db().collection(modelName), params),
      findById: (modelName: string, params: ByIdProps) =>
        actions.findById(client.db().collection(modelName), params),
      findByIds: (modelName: string, params: ByIdsProps) =>
        actions.findByIds(client.db().collection(modelName), params),
      findMany: (modelName: string, params: WhereProps) =>
        actions.findMany(client.db().collection(modelName), params),
      findOne: (modelName: string, params: WhereProps) =>
        actions.findOne(client.db().collection(modelName), params),
      insertMany: (modelName: string, params: InputsProps) =>
        actions.insertMany(client.db().collection(modelName), params),
      insertOne: (modelName: string, params: InputProps) =>
        actions.insertOne(client.db().collection(modelName), params),
      updateById: (modelName: string, params: ByIdProps & OutputProps) =>
        actions.updateById(client.db().collection(modelName), params),
      updateByIds: (modelName: string, params: ByIdsProps & OutputProps) =>
        actions.updateByIds(client.db().collection(modelName), params),
      updateMany: (modelName: string, params: InputProps & OutputProps) =>
        actions.updateMany(client.db().collection(modelName), params),
      updateOne: (modelName: string, params: InputProps & OutputProps) =>
        actions.updateOne(client.db().collection(modelName), params),
    },
  }
}

export default connect
