import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
 

  
  const downloadFile = () => {
    //Download file
    const urlFile = ''
    fetch(urlFile).then(response => {
      response.blob().then(blob => {
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = 'file.xlsm'
        a.click()
      })
    })
  }
  
 

  return (
    <div className="App">
    <h1>Descarga tu plantilla</h1>
       
      <div className="card">
        <button onClick={downloadFile}>
          descargar archivo
        </button>
        
    </div>
    </div>
  )
}

export default App
