import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { store } from './store'

import './styles/global'
import ChatTheme from './styles/theme'

import ChatApp from './ChatApp'

ReactDOM.render(
    <ThemeProvider theme={ChatTheme}>
        <Provider store={store}>
            <ChatApp />
        </Provider>
    </ThemeProvider>
    ,
    document.getElementById('root') as HTMLElement
)
