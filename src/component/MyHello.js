import React, { Component } from 'react';

//prop-typesをインポート
import PropTypes from 'prop-types';

//クラスコンポーネント
export default class MyHello extends Component {

    render() {
        return <div>こんにちは、{this.props.name}さん!</div>
    }
}

//型情報を宣言
MyHello.propTypes = {
    name: PropTypes.string.isRequired
};

// PropTypes.string : 文字型
// PropTypes.symbol : シンボル型
// PropTypes.number : 数値型
// PropTypes.bool   : 真偽型
// PropTypes.array  : 配列
// PropTypes.object : オブジェクト型
// PropTypes.func   : 関数型
// PropTypes.element: React要素
// PropTypes.node   : element, number, string , arrayのいずれか
// PropTypes.any    : 任意の型


