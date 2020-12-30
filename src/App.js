import React, { useState } from 'react';
import Header from './components/header';
import Button from './components/Button';
import Table from './components/Table';
import './App.module.css';
import './components/button.css';

function App() {
  const [isShowTable, setIsShowTable] = useState(false);
  const fetchData = () => { 
      setIsShowTable(true)
  }

  return (
    <div>
      <Header/>
  	  <Button method = {fetchData} text="Qiita情報取得" />
      { isShowTable && <Table /> }
    </div>
  );
}

export default App;
