import React ,{ useState,useEffect} from 'react'
import Modal from './Modal';

const Input = (props) => {
  const [tittle,setTittle]=useState("");
  const [link,setLink]=useState("");

  useEffect(() => {
   
    if (props.editID!=='') {
      const editedInfo = props.informations.find(info => info.id === props.editID);
      if (editedInfo) {
        setTittle(editedInfo.tittle);
        setLink(editedInfo.link);
      }
    }
  }, [props.editID, props.informations]);

 const tittleHandle=(e)=> {
    setTittle(e.target.value)
 }
 const linkHandle=(e)=> {
    setLink(e.target.value);
 }
  const submitDetails=(e)=> {
    e.preventDefault();
    if(props.editID)
    { props.setEditID('')

    }
  else {
    const id=Math.random()
    props.userDetails({ id,tittle,link})
  }
  setLink('');
  setTittle('');
  
  }
  
  return (
    <Modal onHide={props.onHide}> 
    <form onSubmit={submitDetails}>
      <div>
        <label htmlFor=''>Website Tittle</label>
        <input type='text' value={tittle} placeholder='Enter website' id='web-tittle' onChange={tittleHandle} />  
      </div>
      <div>
        <label htmlFor=''>Website Link</label>
        <input type='text' value={link}
        placeholder='Enter Link' id='web-Link' onChange={linkHandle} />  
      </div>
       <div> 
        <input type='submit'/>
       </div>
    </form> </Modal>
  )
}

export default Input
