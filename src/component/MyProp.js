import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Member { }

export default class MyProp extends Component {

    render() {
        console.log(this.props);

        return (
            <p>
                結果はコンソールを確認してください。
            </p>
        )
    }
}

//値のチェック
MyProp.propTypes = {
    //値が指定された型のインスタンスであることを意味する
    prop1: PropTypes.instanceOf(Member),
    //値が指定された列挙値の中のひとつであることを意味する
    prop2: PropTypes.oneOf(['男', '女', '不明']),
    //値が指定された型の中のいずれかであることを意味する
    prop3: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.bool,
    ]),
    //配列内の要素型を指定できる
    prop4: PropTypes.arrayOf(PropTypes.number),
    //オブジェクト配下のメンバーを指定できる
    prop5: PropTypes.shape({
        name: PropTypes.string.isRequired,
        age: PropTypes.number,
        sex: PropTypes.oneOf(['男', '女', '不明'])
    }),



};