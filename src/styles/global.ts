import { injectGlobal } from 'styled-components'

const GlobalStyles = injectGlobal`
    html, body {
        font-size: 10px;
        margin: 0;
    }
    a {
        text-decoration: none;
    }
    input, button {
        -webkit-appearance: none;
        &:focus {
            outline: none
        }
    }
`

export default GlobalStyles