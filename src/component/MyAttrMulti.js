import React, { Component } from 'react';

//クラスコンポーネント
export default class MyAttrMulti extends Component {

    render() {
        return <ul>
            <li>{this.props.name}</li>
            <li>{this.props.age}歳</li>
            <li>{this.props.sex}</li>
        </ul>

    }
}
