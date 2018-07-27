import * as React from 'react';
import './App.css';

import { Chart } from 'components';

import logo from './logo.svg';

class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <div style={{ width: 940, margin: 'auto', marginTop: 300 }}>
                    <Chart />
                </div>
            </div>
        );
    }
}

export default App;
