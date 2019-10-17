import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Provider} from "react-redux";
import store from "./atConnect/redux/store";
import App from "./atConnect/App";

const rootElement = document.getElementById('root');
ReactDOM.render(
    // 第一步：导入Provider，初始化store
    <Provider store={store}>
        <App/>
    </Provider>
    , rootElement
);

