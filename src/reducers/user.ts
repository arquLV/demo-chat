import { generateColor } from '../utils'

interface UserState {
    id: string
    color: string
}

const initialUserState: UserState = {
    id: '',
    color: generateColor()
}

const user = (state = initialUserState, action: any) => {
    switch (action.type) {
        case 'RECEIVE/CONNECTED':
            return Object.assign({}, state, {
                id: action.id
            })
        default:
            return state
    }
}

export { UserState }
export default user
