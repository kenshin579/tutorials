import React, {Component} from 'react';
import Counter from "../components/Counter";

class App extends Component {
    render() {
        return (
            <div>
                <div>
                    Counter
                </div>
                <div>
                    <Counter />
                </div>
            </div>

        );
    }
}

export default App;