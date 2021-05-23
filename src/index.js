//React関連のライブラリをインポート
import React from 'react';
import ReactDOM from 'react-dom';

//アプリ固有のファイルをインポート
import './index.css';
import App from './App';

//キャッシュのためのサービスをインポート
import reportWebVitals from './reportWebVitals';

//import MyHello from './component/MyHello';
//import MyType from './component/MyType';
//import MyAttrMulti from './component/MyAttrMulti';
//import MyHelloContent from './component/MyHelloContent';
//import MyBook from './component/MyBook';
//import MyProp, { Member } from './component/MyProp';
//import MyHelloDef from './component/MyHelloDef';
//import MyArticle from './component/MyArticle';
//import MyEvent from './component/MyEvent';
//import MyPool from './component/MyPool';
//import MyState from './component/MyState';
//import MyParent from './component/MyParent';
//import MyForm from './component/MyForm';
//import MyTextarea from './component/MyTextarea';

//Appコンポーネントを実行
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

//１秒ごとに時刻更新
// setInterval(() => {
//   ReactDOM.render( 
//     <div> 現在時刻は、 {
//       (new Date()).toLocaleString()
//     }
//     です。 </div>,
//     document.getElementById('root')
//   );
// }, 1000);

//変数を埋め込める
// const name = '山田';
// ReactDOM.render(
//   <div>
//     <p>こんにちは、{name}さん!</p>
//     <p>現在の日時は、{ new Date().toLocaleString()}です。</p>
//     <p>2の3乗は、{ 2 ** 3}です。</p>
//   </div>,
//   document.getElementById('root')
// );

//コンポーネントにプロパティを渡す
// ReactDOM.render(
//   <MyHello name="山田"/>,
//   document.getElementById('root')
// );

//コンポーネントに色々なプロパティを渡す
// ReactDOM.render(
//   <div>
//     {/*文字列（{…}を利用しない場合）*/}
//     <MyType value="山田" />
//     {/*文字列*/}
//     <MyType value={'鈴木'} />
//     {/*数値*/}
//     <MyType value={108} />
//     {/*真偽値*/}
//     <MyType value={true} />
//     {/*配列*/}
//     <MyType value={['うめ', 'もも', 'さくら']} />
//     {/*オブジェクト*/}
//     <MyType value={{ name: "山田太郎", age: 40 }} />{/*関数*/}
//     <MyType value={() => console.log('Hoge')} />
//   </div>,
//   document.getElementById('root')
// );

// const data = {
//   name: '山田権左衛門',
//   age: 18,
//   sex: '男'
// };

// ReactDOM.render(
//   <MyAttrMulti {...data} />,
//   document.getElementById('root')
// );

//children経由でコンポーネントを配置
// ReactDOM.render(
//   <MyHelloContent>
//     <b>山田</b>  
//   </MyHelloContent>,
//   document.getElementById('root')
// );

//子コンポーネントを使用して表示
// const book = { 
//   isbn: 'WGS-JST-001', 
//   title: '速習 webpack', 
//   price: 454, 
//   published: 'WINGSプロジェクト' 
// };
// ReactDOM.render(
//   <MyBook info={book} />,
//   document.getElementById('root')
// );

//prop-basic
// ReactDOM.render(
//   <MyHello />,
//   document.getElementById('root')
// );

//prop-typeプロジェクト
// ReactDOM.render(
//   <MyProp prop1={new Member()} />,
//   <MyProp prop2="男" />,
//   <MyProp prop3="山田太郎" />,
//   <MyProp prop4={[10, 20]} />,
//   <MyProp prop5={{name:'山田', age:40, sex:'男'}} />,
//   //間違い
//   //<MyProp prop1="hoge" />
//   //<MyProp prop2="hoge" />
//   //<MyProp prop3={new Member()} />
//   //<MyProp prop4={[1000, '梅']} />
//   //<MyProp prop5={{age:40, sex:'男'}} />
//   document.getElementById('root')
// );

//prop-defプロジェクト
// ReactDOM.render(
//   <MyHelloDef />,
//   document.getElementById('root')
// );

//loop-basicプロジェクト
// const articles = [
//   { 
//     url: 'https://www.atmarkit.co.jp/ait/series/9383/', 
//     title: 'AngularTIPS', 
//     description: '人気のJavaScriptフレームワーク「Angular」の目的別リファレンス', 
//     isNew: true 
//   },
//   {
//     url: 'https://www.atmarkit.co.jp/ait/series/9383/',
//     title: 'AngularTIPS2',
//     description: '人気のJavaScriptフレームワーク「Angular」の目的別リファレンス',
//     isNew: true
//   },
// ];
// ReactDOM.render(
//   <dl>
//     {articles.map((article, index) =>
//       <MyArticle {...article} key={index} />
//     )}
//   </dl>,
//   document.getElementById('root')
// );
//変数Ver
// const list = articles.map((article, index) =>
//   <MyArticle {...article} key={index} />
// );
// ReactDOM.render(
//   <dl>{list}</dl>,
//   document.getElementById('root')
// );

//event-basic
// ReactDOM.render(
//   <MyEvent greet="Hello" />,
//   document.getElementById('root')
// );

//event-pool
// ReactDOM.render(
//   <MyPool />,
//   document.getElementById('root')
// );

//state-basicプロジェクト
// ReactDOM.render(
//   <MyState />,
//   document.getElementById('root')
// );

//state-comプロジェクト
// ReactDOM.render(
//   <MyParent />,
//   document.getElementById('root')
// );

//form-basicプロジェクト
// ReactDOM.render(
//   <MyForm />,
//   document.getElementById('root')
// );

//form-textareaプロジェクト
// ReactDOM.render( 
//   <MyTextarea /> ,
//   document.getElementById('root')
// );

//route-basicオブジェクト
ReactDOM.render( 
  <App/> ,
  document.getElementById('root')
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

//サービスを有効化
reportWebVitals();