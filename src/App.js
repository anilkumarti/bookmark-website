import React,{useState} from 'react';
import './App.css';
import Input from './compoments/Input';
import DisplayDetails from './compoments/DisplayDetails';

function App() {
  const [informations,setInformations]=useState('');
  const [editID,setEditID]=useState('');
  const userDetails=(information)=> {
   console.log("The information of user is" ,information)
   
  
    
    setInformations([...informations,information])
   
  }
  const deleteInfo=(id)=> {
   const updatedInfo=informations.filter((info)=> info.id!==id);
   
    setInformations(updatedInfo); 
      
     
  }
  const editInfo=(id)=> {
   ;
 
     setEditID(id);
     console.log("Information edited", id)
  }
  return (
    <div >
   <Input  userDetails={userDetails} editID={editID} informations={informations} setEditID={setEditID}> </Input>
   <DisplayDetails informations={informations} deleteInfo={deleteInfo} editInfo={editInfo}/>
   
    </div>
  );
}

export default App;
