interface Message {
    author: string
    text: string
    color: string
    own?: boolean
}
interface ChatState {
    messages: Message[]
}

const initialChatState: ChatState = {
    messages: []
}

const chat = (state = initialChatState, action: any) => {
    switch (action.type) {
        case 'SEND/MESSAGE':
            return Object.assign({}, state, { 
                messages: state.messages.concat({
                    author: action.author,
                    text: action.text,
                    color: action.color,
                    own: true
                }) 
            })
        case 'RECEIVE/MESSAGE':
            return Object.assign({}, state, { 
                messages: state.messages.concat({
                    author: action.author,
                    text: action.text,
                    color: action.color,
                    own: false
                }) 
            })
        default:
            return state
    }
}

export { Message, ChatState }
export default chat