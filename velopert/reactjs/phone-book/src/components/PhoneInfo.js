import React, {Component} from 'react';

class PhoneInfo extends Component {
    static defaultProps = {
        info: {
            name: '이름',
            phone: '010-0000-0000',
            id: 0
        }
    }

    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        };

        const {
            name, phone, id
        } = this.props.info; //부모(PhoneInfoLIst)에 접근함

        return (
            <div style={style}>
                <div><b>{name}</b></div>
                <div>{phone}</div>
            </div>
        );
    }
}

export default PhoneInfo;
