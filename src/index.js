import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import store from './store'
import {HashRouter} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


ReactDOM.render(
<MuiThemeProvider>
<HashRouter>
<Provider store={store}>
<App />
</Provider>
</HashRouter>
</MuiThemeProvider>, document.getElementById('root'));