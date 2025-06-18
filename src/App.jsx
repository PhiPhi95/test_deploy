import './App.css';
import datas from './../data.json';

function App() {
  const handleChange =(event)=>{
    if(event.target.value){
      window.location.assign(event.target.value);
    }
  }
  return (
    <>
      <div>
      <label htmlFor="donVis">Đơn vị</label>
        <select autoComplete='off' name="donVis" id="donVis" onChange={handleChange}>
          <option value="">--Chọn đơn vị--</option>
          {datas.map((item, i)=>
            <option key={i + 1} value={item.url}>{item.ten}</option>
          )}
        </select>
      </div>
    </>
  )
}

export default App
