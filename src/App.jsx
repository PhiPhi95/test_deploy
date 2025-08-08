import './App.css';
import datas from './../data.json';
import React, { useState } from 'react';

function App() {
  const [detail, setDetail]= useState();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const detail = params.get('detail');
    if (detail) {
      setDetail(detail)
    }
  }, []);
  const handleChange =(event)=>{
    if(event.target.value){
      window.location.assign(event.target.value);
    }
  }
  return (
    <>
      <div>
        <button onClick={() => {
          window.location.href = `edocmobile://DSVBDenRoute?detail=${detail}`;
          }}>Chuyển hướng</button>
      </div>
    </>
  )
}

export default App
