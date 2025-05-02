import React from 'react'
import ReactDOM from 'react-dom'
import App from "./main/app"
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from "./main/reducer"
import promise from 'redux-promise'

const store = applyMiddleware(promise)(createStore)(reducers)

ReactDOM.render(
    <Provider store={store}>
        <App></App>
    </Provider>
, document.getElementById('app'))