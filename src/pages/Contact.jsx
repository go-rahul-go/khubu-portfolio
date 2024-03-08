import React, { useContext, Suspense, useState} from 'react'
import "./contact.css"
import { ThemeContext } from "../App"
import emailjs from '@emailjs/browser';

import { Canvas} from '@react-three/fiber';
import Scene from "../Scene"
import { Stage } from '@react-three/drei'

import { IoLogoWhatsapp } from "react-icons/io";
import { CgMail } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";

import { SiReact } from "react-icons/si";
import { IoIosHeart } from "react-icons/io";
import { IoIosCloseCircleOutline } from "react-icons/io";
const Contact = () => {
  const theme = useContext(ThemeContext)
  const [formData,setFormData]=useState({name:"",email:"",cmp:"",message:""})
  const [seeLoad,updateLoad]=useState(false)
  const [seeSuccess,updateSuccess]=useState(false)
  const [errorBox,updateErrorBox]=useState(false)
  const handleChange=(e)=>{
    const name=e.target.name;
    const value=e.target.value;
    setFormData((prevValue)=>{
      switch(name){
        case "name":
          return{
            name:value,
            email:prevValue.email,
            cmp:prevValue.cmp,
            message:prevValue.message
          }
        case "email":
          return{
            name:prevValue.name,
            email:value,
            cmp:prevValue.cmp,
            message:prevValue.message
          } 
        case "cmp":
          return{
            name:prevValue.name,
            email:prevValue.email,
            cmp:value,
            message:prevValue.message
          }  
        case "message":
          return{
            name:prevValue.name,
            email:prevValue.email,
            cmp:prevValue.cmp,
            message:value
          }   
        default:  
      }
    })
  }
  const submitForm = (e)=>{
   e.preventDefault();
    const templateParams={
      from_name:formData.name,
      from_email:formData.email,
      from_company:formData.cmp,
      message:formData.message
    }
    const serviceId=process.env.REACT_APP_SERVICE_ID;
    const publicKey=process.env.REACT_APP_PUBLIC_KEY;
    const templateId=process.env.REACT_APP_TEMPLATE_ID;
    updateLoad(true)
    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then(response=>{
      
      updateLoad(false)
      
    })
    .then(resp=>{
      updateSuccess(true)
      setFormData({name:"",email:"",cmp:"",message:""})
    })
    .catch(error=>{
      console.log("error")
      updateErrorBox(true)
    })

  
  }
  return (
    <section className={theme === "dark" ? "contact contact-dark" : "contact contact-light"}>
      <div className='form-box'>
        <div className={theme==="dark"?"object object-dark":"object object-light"}>
          <Canvas  camera={{zoom:0.72,fov:40,  near:100 ,position: [2, 1, 15]}}>
            <Suspense fallback={null}>
              <directionalLight intensity={1}/>
              <Stage>
                <Scene/>
              </Stage>
              <ambientLight intensity={2.5}/>
              
            </Suspense>
          </Canvas>
        </div>
        <div className={theme==="dark"?"form form-dark":"form"}>
          <h3 className="form-h3">Write here</h3>
          <form onSubmit={(e)=>submitForm(e)}>
            <label>Name </label>
            <input type="text" id="name" name='name' value={formData.name} onChange={(e)=>handleChange(e)} required/>
            <label>E mail</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={(e)=>handleChange(e)} required/>
            <label>company/Organization</label>
            <input type="text" id="cmp" name="cmp" required value={formData.cmp} onChange={(e)=>handleChange(e)}/>
            <label>message</label>
            <textarea id="message" maxLength={200} name="message" required value={formData.message} onChange={e=>handleChange(e)} placeholder="max 250 characters"></textarea>
            <button className="submit" >submit</button>
          </form>
          
        </div>
      </div>
      <div className={theme==="dark"?"poc poc-dark":"poc poc-light"}>
        <div className={theme==="dark"?"poc-box poc-box-dark":"poc-box poc-box-light"} >
          <div className='poc-icon'><IoLogoWhatsapp id="whats"/> whatsapp</div>
          <div className='poc-detail'>+91 1211 1999 24</div>
        </div>
        <div className={theme==="dark"?"poc-box poc-box-dark":"poc-box poc-box-light"} >
        <div className='poc-icon'><CgMail id="mail"/> E-mail</div>
          <div className='poc-detail' id="e-mail">khusbhu4datascience@gmail.com</div>
        </div>
        <div className={theme==="dark"?"poc-box poc-box-dark":"poc-box poc-box-light"} >
        <div className='poc-icon'><FaLocationDot id="location"/> location</div>
        <div className='poc-detail'>New Delhi, India</div>
        </div>
      </div>
      {seeLoad?<Wait/>:""}
      {seeSuccess?<Success changeSuccessVisibilty={updateSuccess}/>:""}
      {errorBox?<MailError closeError={updateErrorBox}/>:""}
    </section>
  )
}

export default Contact;

function Wait(){
  return(
    <div className='wait'>
      <div className='wait-box'>
        <SiReact className="react-logo"/>
        <h1 id="wait-h1">please wait. . .</h1>
      </div>
    </div>
  )
}

function Success({changeSuccessVisibilty}){
  return(
    <div className='success'>
      <div className='success-box'>
      <IoIosHeart className="heart-logo"/>
      <h1 id="success-h1">got your message</h1>
      <p id="touch">i will get back to you soon</p>
      <button onClick={()=>changeSuccessVisibilty(false)} id="success-ok-btn">OK</button>
      <IoIosCloseCircleOutline onClick={()=>changeSuccessVisibilty(false)} id="success-pop-close"/>
      </div>
      
    </div>
  )
  
}

function MailError({closeError}){
  return(
    <div className="mail-error">
      <div className='mail-error-box'>
        <h1>Something </h1>
        <h1>went</h1>
        <h1>wrong</h1>
        <IoIosCloseCircleOutline onClick={()=>closeError(false)} id="error-close-btn"/>
      </div>
    </div>
  )
}