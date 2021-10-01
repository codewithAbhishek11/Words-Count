import React, { useEffect, useState } from 'react'
import "./TextArea.css"
function TextArea() {

    const [words, setWords] = useState(0)
    const [first, setFirst] = useState("")
    const [second, setSecond] = useState("")

    let val;
    useEffect(()=>{
        val = document.querySelector(".textArea")
    })
    const count =(self) =>{
        console.log(val);
        var spaces = self.value.match(/\S+/g);
        var words = spaces ? spaces.length : 0;
        setFirst("")
        setFirst("first")
        setWords(words); 
        setSecond("second")
        setSecond("")
        setFirst("first")
      /*  setclass();*/
    }

   /* const setclass = () =>{
        
        
    }*/
    return (
        <>
        <h2 className="title">Count Your Words</h2>
        <div className="textarea-container">
            <textarea className="textArea" placeholder="Write Your Text Here" onKeyUp={()=>count(val)}></textarea>
        </div>
        <h2 className="count">Total Words :</h2>
        <div className="countDisplay">
           <p className={`${first} ${second}`}>{words}</p>
           
        </div>
        </>
    )
}

export default TextArea
