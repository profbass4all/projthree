import React,{useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [persons, setPersons] = useState([])
  useEffect(()=>{
    axios.get("localhost.http://localhost:3001/persons")
    .then(response => setPersons(response.data))
    .catch(error => "An error ocurred")
  },[])

    return(
  <div>
      <h1>{persons}</h1>
  </div>
    )
}

export default App;
