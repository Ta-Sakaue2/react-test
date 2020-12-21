import styles from './App.module.css';
import Header from './header';

function App() {
  return (
    <div>
      <Header/>
  	  <button>Qiita情報取得</button>
      <table>
        <tr>
          <th>タイトル</th>
          <th>更新日</th>
        </tr>
        <tr>
          <td>WordPressのログインページを変更する</td>
          <td>2020-12-14</td>
        </tr>
        <tr>
          <td>シャローコピーとディープコピー違い</td>
          <td>2020-12-14</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
