import { Message } from '../reducers/chat'

const sendMessage = (message: Message) => {
    return {
        type: 'SEND/MESSAGE',
        ...message
    }
}

const chatActions = { sendMessage }
export default chatActions