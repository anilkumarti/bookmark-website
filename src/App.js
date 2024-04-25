import React,{useState} from 'react';
import './App.css';
import Input from './compoments/Input';
import DisplayDetails from './compoments/DisplayDetails';
import Basic from './compoments/Basic';

function App() {
  const [informations,setInformations]=useState('');
  const [editID,setEditID]=useState('');
  const [showInput,setShowInput]=useState(false);
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
  const showHandle=()=> {
    setShowInput(true)
  }
  const hideHandle=()=> {
    setShowInput(false)
  }

  return (
    <div >
      
      
  { showInput && <Input  userDetails={userDetails} editID={editID} informations={informations} setEditID={setEditID} onHide={hideHandle}> </Input>}
  <Basic onClick={showHandle}/>
   <DisplayDetails informations={informations} deleteInfo={deleteInfo} editInfo={editInfo}/>
   
    </div>
  );
}

export default App;
