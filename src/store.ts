import { createStore, applyMiddleware } from 'redux'
import createSocketIoMiddleware from 'redux-socket.io'
import * as io from 'socket.io-client'

import reducers from './reducers'

const socket = io('http://165.227.173.242:8000')
const socketMiddleware = createSocketIoMiddleware(socket, 'SEND/')

const store = applyMiddleware(socketMiddleware)(createStore)(reducers)
export { store }