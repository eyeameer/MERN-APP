import React,{useState,useEffect} from "react";
import {createRoot} from 'react-dom/client';
import Axios from "axios"
import CreateNewForm from "./components/CreateNewForm";
import AnimalCard from "./components/AnimalCard";
function App(){
    const [animals,setAnimals]=useState([])
    useEffect(()=>{
        async function go(){
            const resp=await Axios.get('/api/animals')
            setAnimals(resp.data)
        }
        go()
    },[])
   
   
   
   
    return(
        <div className='container'>
         <p> <a href='/'>back to public homepage</a></p>
         <CreateNewForm setAnimals={setAnimals}/>
<div className='animal-grid'>
         {animals.map((animal)=><AnimalCard
         key={animal._id}
 name={animal.name}
 species={animal.species}
 photo={animal.photo}
 id={animal._id}
 setAnimals={setAnimals}
 />)}
</div>
          
          
            
        </div>
    )
}
// function Animalcard(props){
    // return(
        // <div>
            {/* hi my name is {props.name} and i am of {props.species} species  */}
        {/* </div> */}
    // )
// }
const root=createRoot(document.querySelector('#root')).render(<App/>)