import * as React from 'react'
import { ChangeEvent, FormEvent } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { UserState } from '../reducers/user'
import { AppState } from '../reducers'
import chatActions from '../actions/chat'

const InputForm = styled.form`
    position: relative;
    width: 100%;
    padding: 9px 20px;
    font-size: 1.6rem;
    border-top: 1px solid ${props => props.theme.lightGray};
`

const InputField = styled.input`
    float: left;
    width: calc(100% - 90px);
    box-sizing: border-box;
    line-height: 1.8em;
    border: none;
    font-family: ${props => props.theme.fontPrimary};
    font-size: 1em;
`

const SendButton = styled.button`
    position: relative;
    width: 90px;
    height: 1.8em;
    box-sizing: border-box;
    padding: 0;
    float: right;
    font-family: ${props => props.theme.fontPrimary};
    font-size: 1.1em;
    font-weight: bold;
    border: none;
    cursor: pointer;

    > svg {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0.8);
        opacity: .5;
        transition: 150ms all ease-out;
        backface-visibility: none;
    }

    &:hover {
        > svg {
            opacity: .75;
            transform: translate(-50%, -50%) scale(1);
        }
    }
`

interface ChatInputProps {
    user: UserState
    actions: typeof chatActions
    className?: string
    placeholder?: string
}
interface ChatInputState {
    currentText: string
}

class ChatInput extends React.Component<ChatInputProps, ChatInputState> {

    private input: HTMLInputElement

    constructor(props: ChatInputProps) {
        super(props)

        this.state = {
            currentText: ''
        }

        this.submit = this.submit.bind(this)
        this.onInput = this.onInput.bind(this)
    }

    componentDidMount() {
        this.input.focus()
    }

    submit(e: FormEvent<HTMLFormElement>) {
        if (this.state.currentText.length) {
            const { user } = this.props
            this.props.actions.sendMessage({
                text: this.state.currentText,
                author: user.id,
                color: user.color
            })

            this.setState({
                currentText: ''
            })
        }
        e.preventDefault()
    }

    onInput(event: ChangeEvent<HTMLInputElement>) {
        this.setState({
            currentText: event.target.value
        })
    }

    render() {
        return (
            <InputForm onSubmit={this.submit} className={this.props.className}>
                <InputField
                    type="text"
                    value={this.state.currentText}
                    innerRef={input => this.input = input}
                    onChange={this.onInput}
                    onBlur={() => { this.input.focus() }}
                />
                <SendButton>
                    <svg width="28px" height="21px" viewBox="0 0 28 21" version="1.1" xmlns="http://www.w3.org/2000/svg">
                        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                            <g fillRule="nonzero" fill="#202859">
                                <path d="M25.2891754,20.0805835 C24.0086032,19.6080118 17.8694567,17.3880104 11.6468815,15.1442948 C-0.745125936,10.6682921 0.00887451625,10.9674352 0.00887451625,10.4708634 C0.00887451625,10.2974348 0.0508745415,10.1897204 0.176303188,10.058006 C0.34373186,9.86657735 4.15544843,7.24571863 4.32287711,7.19800432 C4.39459143,7.18000431 19.4251719,15.0422947 22.3751737,16.64001 C22.6086024,16.7717244 22.8060311,16.8674387 22.8060311,16.8554387 C22.8060311,16.8374387 19.2937432,14.20458 14.9974549,11.0034352 L7.18887883,5.17543168 L7.20687884,2.74600165 C7.21887884,0.448285983 7.22487885,0.304857326 7.3325932,0.185142968 C7.39830752,0.11342864 7.51802188,0.0594286071 7.60173622,0.0594286071 C7.70345056,0.0594286071 8.35573667,0.460285991 9.5045945,1.22628645 C10.4680237,1.86657255 11.2697384,2.39314429 11.2877384,2.39314429 C11.2997384,2.39314429 12.1014532,1.85457254 13.0648824,1.19657215 C14.6565976,0.113714354 14.8420263,5.68434189e-14 15.069455,5.68434189e-14 C15.2668837,5.68434189e-14 15.362598,0.0360000216 15.5003124,0.167428672 C15.5960267,0.257143011 16.1525985,1.12485782 16.7388846,2.09428697 C17.6303137,3.57828786 23.7037459,13.5945796 27.0663193,19.1294401 C27.5928911,19.9971549 28.0117485,20.7508696 27.9997485,20.8048696 C27.9877484,20.876584 27.9220341,20.918584 27.8023198,20.924584 C27.7006054,20.9300126 26.6177476,20.5651552 25.2891754,20.0805835 Z" id="Shape" transform="translate(14.000000, 10.462322) scale(-1, 1) rotate(-180.000000) translate(-14.000000, -10.462322) "/>
                            </g>
                        </g>
                    </svg>
                </SendButton>
            </InputForm>
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    user: state.user
})
const mapDispatchToProps = (dispatch: any) => ({
    actions: bindActionCreators(chatActions, dispatch)
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChatInput)