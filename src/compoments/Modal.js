import React from 'react'
import ReactDOM from 'react-dom';

const Backdrops=(props)=> {
return(<div onClick={props.onClick}> 

</div>)
}
const OverLays=(props)=> {
    return(<div > 
        
      {props.children}
</div>)
}

const Modal = (props) => {
    const portalElement=document.getElementById('overlays')
  return (
    <div>
     {ReactDOM.createPortal( <Backdrops onClick={props.onHide}/>,portalElement)}
     {ReactDOM.createPortal( <OverLays>{props.children}</OverLays>,portalElement)}
    </div>
  )
}

export default Modal
