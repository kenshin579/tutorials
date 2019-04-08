import React, {Component} from 'react';
import PhoneInfo from './PhoneInfo';

class PhoneInfoList extends Component {
    static defaultProps = {
        data: [],
        onRemove: () => console.warn('onRemove not defined'),
        onUpdate: () => console.warn('onUpdate not defined')
    };

    //이 함수가 없으면 App가 데이터가 변경될 때마다 아래 자식 모두 render이
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data !== this.props.data; //다음 받아올 data가 현재 data랑 다른 배열일 때 true로 설정하게 하면 됨
    }

    render() {
        console.log('render PhoneInfoList');

        const {data, onRemove, onUpdate} = this.props; //부모(App) 데이터 접근
        const list = data.map(
            info => (
                <PhoneInfo
                    key={info.id}
                    info={info}
                    onRemove={onRemove}
                    onUpdate={onUpdate}
                />)
        );

        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;
