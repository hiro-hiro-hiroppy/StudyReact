import React, { Component } from 'react';

//クラスコンポーネント
export default class MyHelloContent extends Component {

    render() {
        return <div>
            こんにちは、{this.props.children}さん!
        </div>;
    }
}
