import React from 'react';

function Botton(props) {

  const fetchData = () => { 
    props.setHidden(true)
  }

  return (
    <button onClick={fetchData}>{ props.text }</button>
  );
}

export default Botton;