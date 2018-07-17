export interface ConnectorActions {
  findById: (modelName: string, params: ByIdProps) => Promise<ResponseDocument | undefined | null>
  findByIds: (modelName: string, params: ByIdsProps) => Promise<ResponseDocument[]>
  findMany: (modelName: string, params: WhereProps) => Promise<ResponseDocument[]>
  findOne: (modelName: string, params: WhereProps) => Promise<ResponseDocument | undefined | null>

  insertOne: (modelName: string, params: InputProps) => Promise<ResponseDocument>
  insertMany: (modelName: string, params: InputsProps) => Promise<ResponseDocument[]>

  updateById: (modelName: string, params: ByIdProps & OutputProps) => Promise<ResponseDocument | undefined | null>
  updateByIds: (modelName: string, params: ByIdsProps & OutputProps) => Promise<ResponseDocument[]>
  updateMany: (modelName: string, params: InputProps & OutputProps) => Promise<ResponseDocument[]>
  updateOne: (modelName: string, params: InputProps & OutputProps) => Promise<ResponseDocument | undefined | null>

  deleteById: (modelName: string, params: ByIdProps) => Promise<ResponseDocument | undefined | null>
  deleteByIds: (modelName: string, params: ByIdsProps) => Promise<ResponseDocument[]>
  deleteMany: (modelName: string, params: InputProps) => Promise<ResponseDocument[]>
  deleteOne: (modelName: string, params: InputProps) => Promise<ResponseDocument | undefined | null>
}

export interface Connector {
  actions: ConnectorActions
}

export type ConnectionStatus =
  | 'starting'
  | 'listening'
  | 'stopping'
  | 'stopped'

export interface Connection {
  connector: Connector
  status: ConnectionStatus
}

export interface ByIdProps {
  id: number | string
}

export interface ByIdsProps {
  ids: Array<number | string>
}

export interface ResponseDocument {
  _id: string
}

export interface InputProps {
  input: {
    [k: string]: any
  }
}

export interface OutputProps {
  output: {
    [k: string]: any
  }
}

export interface InputsProps {
  input: Array<{ [k: string]: any }>
}

export interface WhereProps {
  [k: string]: any
}
