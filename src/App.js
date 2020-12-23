import './App.module.css';
import './button.css';
import React, { useState } from 'react';
import Header from './header';
import Button from './Button';

function App() {

  const [hidden, setHidden] = useState(false);

  return (
    <div>
      <Header/>
  	  <Button setHidden = {setHidden} text="Qiita情報取得" />
      { hidden ? (
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
      ) : null }
    </div>
  );
}

export default App;
