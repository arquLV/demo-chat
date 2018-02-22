import { combineReducers } from 'redux'

import chat, { ChatState } from './chat'
import user, { UserState } from './user'

interface AppState {
    chat: ChatState,
    user: UserState
}

export { AppState }
export default combineReducers({
    chat, user
})