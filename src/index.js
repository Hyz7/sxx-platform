import React from 'react'
import ReactDom from 'react-dom'
import store from "./store";
import {BrowserRouter, Route ,Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import MainRoutes from "./routes/index";
import './style/entry.less'
import './common/icons/iconfont'
import 'react-id-swiper/src/styles/css/swiper.css';
const App=()=>(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/' component={ MainRoutes }></Route>
            </Switch>
        </BrowserRouter>
    </Provider>
)

ReactDom.render(<App />,document.getElementById('root'))