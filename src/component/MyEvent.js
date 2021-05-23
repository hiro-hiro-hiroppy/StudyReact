import React, { Component } from 'react';

//クラスコンポーネント
export default class MyEvent extends Component {

    constructor(props){
        super(props)
        this.show = this.show.bind(this);
    }

    //入力ボックス変更時にメッセージを出力
    show(e) {
        //greetプロパティ、入力値に基づいて、メッセージを生成`
        console.log(`${this.props.greet},${e.target.value}!!`);
    }


    render() {
        // return <form>
        //     <label htmlFor="txtName"> 名前： </label>
        //     <input id="txtName" type="text" onChange={this.show.bind(this)} />
        // </form>

        //コンストラクター Ver
        // return <form>
        //     <label htmlFor="txtName"> 名前： </label>
        //     <input id="txtName" type="text" onChange={this.show} />
        // </form>

        //アロー関数
        return <form>
            <label htmlFor="txtName"> 名前： </label>
            <input id="txtName" type="text" onChange={(e) => this.show(e) } />
        </form>

    }
}
