import './App.css'

function App() {
  const handleChange =(event)=>{
    if(event.target.value){
      window.location.assign(event.target.value);
    }
  }

  return (
    <>
      <div>
        <select autoComplete='off' name="links" id="links" onChange={handleChange}>
          <option value="">--Chọn--</option>
          <option value="https://vite.dev">Volvo</option>
          <option value="https://react.dev">Saab</option>
        </select>
      </div>
    </>
  )
}

export default App
