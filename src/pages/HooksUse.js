import React, { useCallback, useEffect, useRef, useState } from 'react'

function HooksUse() {

    let [length ,setLength]  = useState(5)
    let [text , setText] = useState("");
    let [numberAllow ,setNumberAllow] = useState(false)
    let [charAlow ,setCharAllow] = useState(false)

    // userrefHook

    let paswordRef = useRef(null)


    const PasswordGen =  useCallback(()=>{
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(numberAllow){
            str +="012345678"
        }
        if(setCharAllow){
            str += "!@#$%^&*()[]{}~"
        }

        for( let i= 1 ; i <= length ;i++){
            let char = Math.floor(Math.random() * str.length +1)
            pass += str.charAt(char)
        }

        setText(pass)
    } , [numberAllow ,charAlow,setText,length])

    const copyPassToClipBoard = useCallback(()=>{
        //use of ref
        paswordRef.current?.select()
        paswordRef.current?.setSelectionRange(0,5)

        window.navigator.clipboard.writeText(text)
    },[text])

   

    useEffect(()=>{
        PasswordGen()
    },[length , numberAllow , charAlow ,setLength ,setCharAllow ,setNumberAllow])
  return (
   <>
   <div className="container flex bg-primary">
    <div className="textBox" style={{border:'2px', height:'100px' , display:'flex' , alignItems:'center' , justifyContent:'center' }}>
        <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} readOnly ref={paswordRef} />
        <button onClick={copyPassToClipBoard} >Copy</button>
    </div>

     <div>
        <input value={length} onChange={(e)=> {setLength(e.target.value)}} type='range'  />
        Length({length})
    </div>
    <div>
        <input type='checkbox' defaultChecked={numberAllow} onChange={()=> {setNumberAllow((prev) => !prev)}} />
        Numbers
    </div>
    <div>
        <input type='checkbox' defaultChecked={charAlow} onChange={()=> {setCharAllow((prev)=> !prev)}} />
        Characters
    </div>
   </div>
   
   </>
  )
}

export default HooksUse
