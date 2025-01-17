import { createContext, useState } from "react";
import run from "../config/gemini";
import { use } from "react";

export const Context=createContext();

const ContextProvider=(props)=>
{
    const [input,setinput]=useState("")
    const [recentprompt,setrecentprompt]=useState("")
    const [prevprompt,setprevprompt]=useState([])
    const [showresult,setshowresult]=useState(false)
    const [loading,setloading]=useState(false)
    const [resultData,setresultData]=useState("")

    const delayPara=(index,nextWord)=>{
        setTimeout(function (){
            setresultData(prev=>prev+nextWord);
        },75*index )
    }

    const newChat=()=>{
        setloading(false)
        setshowresult(false)
    }

    const onSent=async(prompt)=>
    {   setresultData("")
        setloading(true)
        setshowresult(true)
        let response;

        if(prompt!==undefined)
            {

            response= await run(prompt)
            setrecentprompt(prompt)
        }
        else{
            setprevprompt(prev=>[...prev,input])
            setrecentprompt(input)
            response= await run(input)
        }
       
        setresultData(response)
        setloading(false)
        setinput("")
    }

   

    const contextValue={

        prevprompt,setprevprompt,
        input,setinput,
        onSent,setrecentprompt,
        recentprompt,showresult,
        loading,resultData,newChat


    }

    return(<Context.Provider value={contextValue}>
        {props.children}
    </Context.Provider>)
}

export default ContextProvider