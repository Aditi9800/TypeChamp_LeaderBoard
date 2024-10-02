import React from 'react';
import './Popup.css';

function Popup(props) {
  const {trigger,speed} = props

  return (trigger)?(
    <>
      <div>
        <div className="popup">
          <div className="popup-inner">
              {props.children}
              <button className="submitScore" onClick={()=>props.setTrigger(false)}>OK</button>
          </div>
        </div>
      </div>
    </>
  ):"";
}

export default Popup
