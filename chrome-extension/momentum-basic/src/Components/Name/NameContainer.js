import React, {Component} from 'react';
import NamePresenter from './NamePresenter';

class NameContainer extends Component {
    state = {
        value: '',
    };
    handleChange = e => {
        this.setState({
            value: e.target.value, // 현재 input에 입력된 값 가져오기
        });
    };
    handleSubmit = e => {
        e.preventDefault(); // onSubmit의 기본적인 이벤트 방지(새로고침)
        const {value} = this.state;
        this.props.saveName(value);
    };

    render() {
        const {value} = this.state;
        // Presenter에 prop 값 전달
        return <NamePresenter value={value} handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>;
    }
}

export default NameContainer;
