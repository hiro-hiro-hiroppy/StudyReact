import React, { Component } from 'react';

//クラスコンポーネント
export default class MyType extends Component {

    render() {
        console.log(this.props.value);
        return <p>結果はコンソールを確認してください。</p>
    }
}
