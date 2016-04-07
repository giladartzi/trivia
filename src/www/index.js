import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import TriviaApp from './components/TriviaApp'

injectTapEventPlugin();

ReactDOM.render(<TriviaApp />, document.getElementById('triviaApp'));