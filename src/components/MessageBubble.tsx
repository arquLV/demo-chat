import * as React from 'react'
import styled from 'styled-components'

import { bounceIn } from '../styles/animation'

interface MessageContainerProps {
    color: string
    position: 'left' | 'right'
}
const MessageContainer = styled.div`
    position: relative;
    /* width: 280px; */
    width: auto;
    min-width: 100px;
    max-width: 80%;
    padding: 10px 12px;
    box-sizing: border-box;
    margin: 5px 0;
    
    clear: both;
    float: ${(props: MessageContainerProps) => props.position};
    border-radius: ${(props: MessageContainerProps) => 
        props.position === 'right' ? '8px 8px 0 8px' : '0 8px 8px 8px'};
    background-color: ${(props: MessageContainerProps) => props.color}; 
    font-family: ${props => props.theme.fontPrimary};
    font-size: 1.6rem;
    animation: ${bounceIn} 0.75s 1;
    word-wrap: break-word;
`

interface MessageBubbleProps extends MessageContainerProps {
    children: any
}
const MessageBubble = (props: MessageBubbleProps) => {
    return (
        <MessageContainer 
            color={props.color}
            position={props.position}
        >
            {props.children}
        </MessageContainer>
    )
}

export default MessageBubble