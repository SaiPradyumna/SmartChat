import React, { useContext, useState } from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Sidebar = () => {

    const [togglebar, settogglebar] = useState(false)

    const {onSent,newChat,prevprompt,setrecentprompt}=useContext(Context)

const loadprompt= async(prompt)=>{

    setrecentprompt(prompt)
    await onSent(prompt)

}
    return (
        <div className='sidebar'>
            <div className="top">
                <img onClick={()=>settogglebar(prev=>!prev)} className="menu" on src={assets.menu_icon} alt=" " />
                <div onClick={()=>newChat()}  className="newchat">
                    <img src={assets.plus_icon} alt="" className="" />
                    {togglebar ? <p className="">NEW CHAT</p> : null}
                </div>
                {togglebar ? <div className="recent">
                    <p className="recent-title">
                        Recent
                    </p>
                    {prevprompt.map((item, index) => {
      return (
        <div onClick={()=>loadprompt(item)} className="recent-entry" key={index}>
          <img src={assets.message_icon} alt="" className="" />
          
          <p className="">{item.slice(0,18)} ..</p>
        </div>
      );
    })}
                    
                </div> : null}

            </div>
            <div className="bottom">

                <div className="bottom-item recent-entry" >
                    <img src={assets.question_icon} alt="" className="" />
                   {togglebar? <p className="">Help</p>:null}
                </div>
                <div className="bottom-item recent-entry" >
                    <img src={assets.history_icon} alt="" className="" />
                 {togglebar?   <p className="">Activity</p>:null}
                </div>
                <div className="bottom-item recent-entry" >
                    <img src={assets.setting_icon} alt="" className="" />
                   {togglebar ?<p className="">Settings</p>:null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar