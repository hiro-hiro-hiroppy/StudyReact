import React, { Component } from 'react';

//クラスコンポーネント
export default class MyPool extends Component {

    //ボタンクリック時にログ出力
    show(e) {

        //プールされ２番目以降はnullとなる
        // console.log(e.type); //click
        // setTimeout(() => {
        //     console.log(e.type);
        // }, 1000); //null(らしいけどclickになった)

        //再利用できるように
        // const t = e.type;
        // console.log(t);
        // setTimeout(() => {
        //     console.log(t);
        // }, 1000);

        //persistでも再利用できる
        e.persist();
        console.log(e.type);
        setTimeout(() => {
            console.log(e.type);
        }, 1000);
    }

    render() {
        return (
            <button type="button" onClick={this.show.bind(this)}>
            イベント情報
            </button>
        );
    }
}
