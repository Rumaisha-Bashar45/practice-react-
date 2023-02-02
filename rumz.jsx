import React ,{useState}from 'react';
import {useEffect} from 'react'
const Rumz = () => {
   const [first, setfirst] = useState(0)
   useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
   }, [])
   
}

export default Rumz;
