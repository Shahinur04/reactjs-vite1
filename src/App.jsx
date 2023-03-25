

import './App.css'
import Device from './Components/Device/Device'

function App() {
  

  return (
    <div className="App">
      <ViteJs></ViteJs>
      <Device></Device>
    </div>
  )
}

function ViteJs(){
  return (
    <div className='container'>
      <h1>React+Vite</h1>
      <h2>Don't run after to make people happy</h2>
    </div>
  )
}


export default App
