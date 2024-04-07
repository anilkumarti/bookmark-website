import React from 'react'

const DisplayDetails = (props) => {

  
    
  return (
    
    <ul> {
     props.informations && props.informations.map((info)=> 
     <li key={info.id}>  <a href={info.link} > {info.link} </a>- {info.tittle} 
     <button onClick={()=> {
        props.editInfo(info.id);

     }}> Edit</button>
     <button onClick={()=>
            props.deleteInfo(info.id)
    }> Delete</button>
     </li>  )
     } </ul>
  )
}

export default DisplayDetails
