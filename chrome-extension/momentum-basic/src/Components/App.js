import React, {Component} from 'react';
import './App.css';
import GlobalStyle from "./GlobalStyle";
import Name from "./Name/NamePresenter";

class App extends Component {
    state = {
        name: null,
    };
    // 입력받은 데이터를 state의 name과 localStorage에 저장
    saveName = data => {
        this.setState({
            name: data,
        });
        localStorage.setItem('MOMENTUM_NAME', data);
    };
    // localStorage에서 데이터 가져오기
    getName = () => {
        const name = localStorage.getItem('MOMENTUM_NAME');
        if (name !== null) {
            this.setState({
                name,
            });
        }
    };

    componentDidMount() {
        this.getName(); // getName 함수 실행
    }

    render() {
        const {name} = this.state;
        return (
            <>
                <GlobalStyle/>
                {/* name 값 null 체크 */}
                {name === null ? <Name saveName={this.saveName}/> : name}
            </>
        );
    }
}

export default App;
