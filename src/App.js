import './App.module.css';
import './button.css';
import React, { useState } from 'react';
import Header from './header';
import Button from './Button';
import Table from './Table';
import axios from 'axios';

function App() {
  const [isShowTable, setIsShowTable] = useState(false);
  const [qiitaData, setQiitaData] = useState([]);
  const fetchData = () => { 
    axios.get('https://qiita.com/api/v2/items', {
      params: {
        page: 1,
        per_page: 5
      }
    })
    .then(function (response) {
      // handle success
      setQiitaData(response.data);
      setIsShowTable(true)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }

  return (
    <div>
      <Header/>
  	  <Button method = {fetchData} text="Qiita情報取得" />
      { isShowTable && <Table qiitaData={qiitaData}/> }
    </div>
  );
}

export default App;
