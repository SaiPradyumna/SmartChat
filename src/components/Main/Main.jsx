import React,{useContext} from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'
import { marked } from 'marked';

const Main = () => {

    
    const {
        input,setinput,
        onSent,
        recentprompt,showresult,
        loading,resultData}=useContext(Context)
 
        const htmlContent = marked(resultData);
        return (
    <div className="main">
        <div className="nav">
            <p className="">Gemini</p>
            <img src="/luffy.png" alt="" className="" />
        </div>

        <div className="maincontainer">
            {!showresult?<> <div className="greet">
                <p className=""><span>Hello,Luffy</span></p>
                <p>How can I help you today</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p className="">Enter prompt:Tell me a programming joke!</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p className="">Enter prompt:What is the purpose of memoization in programming?</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p className="">Enter prompt:Share tips for staying motivated while learning to code</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p className="">Enter prompt:Give me a challenge for implementing a counter app in React</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div> </>: <div className="result">
                <div className="result-title">
                <img src="/luffy.png" alt="" className="" />
                <p className="">{recentprompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" className="" />
             
             {loading? <div className="loader">
                    <hr />
                    <hr />
                    <hr />

             </div>:<p className=""  dangerouslySetInnerHTML={{__html:htmlContent}}  ></p>
              }
              
                </div>
            </div>
}
            
            <div className="main-bottom">
                <div className="searchbox">
                <input onChange={(e)=>setinput(e.target.value)} value={input} type="text" placeholder='Enter a prompt' />
                <div className="">
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img onClick={()=>onSent()} src={assets.send_icon} alt="" />
                </div>
                </div>
                <p className="bottom-info">
                    Sejldcsld

                </p>
            </div>
        </div>
    </div>
  )
}

export default Main