import React from 'react';

function Botton(props) {

  return (
    <button onClick={props.method}>{ props.text }</button>
  );
}

export default Botton;