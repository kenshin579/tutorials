import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import MyName from './MyName';
import Counter from './Counter'

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                    <div>
                        {
                            1 + 1 === 2 ? (<div>맞아요!</div>) : (<div>틀려요!</div>)
                        }
                    </div>
                    <MyName name="프랭크" />
                    <Counter />
                </header>
            </div>
        );
    }
}

export default App;
