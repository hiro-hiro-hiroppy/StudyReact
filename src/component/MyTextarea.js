import React, { Component } from 'react';

export default class MyTextarea extends Component {

    constructor(props) {
        super(props);

        //Stateを初期化
        this.state = {
            memo: 'Reactは人気のフレームワーク...'
        };

        //thisを固定
        this.handleChange = this.handleChange.bind(this);
        this.show = this.show.bind(this);
    }

    //入力ボックスの変更をStateに反映
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    //送信ボタンで入力値をログに出力
    show() {
        console.log(`メモ: ${this.state.memo}`);
    }

    render() {
        return (
            <form>
                <label htmlFor="memo">
                    メモ：
                </label>
                <br />
                <textarea id="memo" name="memo"
                cols="30" rows="7" value={this.state.memo} onChange={this.handleChange}></textarea>
                <br/>
                <button type="button" onClick={this.show}>
                    送信
                </button>
            </form>
        );
    }
}