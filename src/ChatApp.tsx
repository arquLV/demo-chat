import * as React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { ChatState } from './reducers/chat'
import { AppState } from './reducers'

import ChatInput from './components/ChatInput'
import MessageBubble from './components/MessageBubble'

const ChatContainer = styled.div`
    position: absolute;
    width: 60%;
    height: 80%;
    max-width: 1000px;
    @media (max-width: 768px) {
        width: 95%;
    }

    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
`

const MessagesContainer = styled.div`
    position: absolute;
    bottom: 70px;
    overflow-y: scroll;
    overflow-x: visible;
    max-height: calc(100% - 70px);
    width: 100%;
    max-width: 600px;
    left: 50%;
    transform: translateX(-50%);
    &::-webkit-scrollbar {
        width: 0 !important;
    }
`

const ChatInputPositioned = styled(ChatInput)`
    position: absolute;
    bottom: 0;
    left: 0;
`

interface ChatAppProps {
    chat: ChatState
}
class ChatApp extends React.Component<ChatAppProps, {}> {
    
    private msgContainer: HTMLDivElement

    componentDidUpdate() {
        this.msgContainer.scrollTop = this.msgContainer.scrollHeight
    }

    render() {
        const messages = this.props.chat.messages.map((message, idx) => (
            <MessageBubble 
                color={message.color}
                position={message.own ? 'right' : 'left'}
                key={idx}
            >
                {message.text}
            </MessageBubble>
        ))

        return (
            <ChatContainer>
                <MessagesContainer innerRef={msgContainer => { this.msgContainer = msgContainer }}>
                    {messages}
                </MessagesContainer>
                <ChatInputPositioned />
            </ChatContainer>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    chat: state.chat
})

export default connect(mapStateToProps)(ChatApp)