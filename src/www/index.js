import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TriviaApp from './components/TriviaApp';
import { Provider } from 'react-redux';
import store from './stores/store';

injectTapEventPlugin();

ReactDOM.render(
    <Provider store={store}>
        <TriviaApp />
    </Provider>,
    document.getElementById('triviaApp')
);