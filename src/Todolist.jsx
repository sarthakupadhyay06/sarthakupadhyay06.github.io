import { useState } from "react";
export default function Todolist() {
    const [title,settitle] = useState('')
    const [description,setdescription]  =useState('')
    function handleChange(event) {
           console.log( event.target.value);

    }
    function descrip(event) {
        console.log( event.target.value);
    }
  function clickhandler(){
    settitle (document.querySelector('#tit').value);   

    setdescription( document.querySelector('#inp').value);          

     
  }

  return (
    <div className="main border">
      <h1>
      Todo APP
      </h1>
      <div className="secondpart ">

      <div className="buttonandinput  ">
        <input type="text" name="" id="tit"className="inp"  onChange={handleChange} placeholder="Title"/>
        <input type="text" className="des" placeholder="Description" id="inp" onChange={descrip}/>
        <button className="but" onClick={clickhandler}>+</button>
      </div>
      <div className="todoshow border">
        <div>
             <div className="titleshow">
              {title}
             </div>
             <div className="descriptionshow">
               {description}
             </div>
        </div>
      </div>
      </div>
    </div>
  );
}
