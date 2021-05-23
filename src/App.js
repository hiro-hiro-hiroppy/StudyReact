//import logo from './logo.svg';
import './App.css';

//ルーティング関連の機能をインポート
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

//ルーティングで利用するコンポーネントをインポート
import MyTop from './component/MyTop'
import MyHello from './component/MyHello'
import MyArticle from './component/MyArticle'
import { Component } from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//export default App;

export default class App extends Component{
  render(){
    return(
      <Router>
        <div>
          <ul>
            <li><Link to="/">トップ</Link></li>
            <li><Link to="/hello">Hello</Link></li>
            <li><Link to="/article">公開記事ß</Link></li>
          </ul>
          <hr />
          {/* ルーティング設定 */}
          <Switch>
            <Route exact path="/" component={MyTop} />
            <Route path="/hello" component={MyHello} />
            <Route path="/article" component={MyArticle} />
          </Switch>
        </div>
      </Router>
    )
  }
}



