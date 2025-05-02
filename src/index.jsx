import React from 'react'
import ReactDOM from 'react-dom'
import App from "./main/app"
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from "./main/reducer"
import promise from 'redux-promise'

const devTools = window._REDUX_DEVTOOLS_EXTENSION__ && window._REDUX_DEVTOOLS_EXTENSION__()
const store = applyMiddleware(promise)(createStore)(reducers, devTools)

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>
, document.getElementById('app'))