import "./contact.css"
import Typography from '@mui/material/Typography';
import emailjs from '@emailjs/browser';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Image from "next/image"
import React, { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [formSuccess, setFormSuccess] = useState(false)
  const [formSuccessMessage, setFormSuccessMessage] = useState("")

  const handleInput = (e:any) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue
    }));
  }

  const submitForm = (e:any) => {
    // We don't want the page to refresh
    console.log(e.target.name);
    console.log(e.target.email);
    console.log(e.target.message);
    e.preventDefault();
    const serviceId:string= process.env.REACT_APP_SERVICE_ID!;
    const templateId:string=process.env.REACT_APP_TEMPLATE_ID!;
    const publicKey:string=process.env.REACT_APP_PUBLIC_KEY!;
    // emailjs.sendForm('service_nmw8i6s','template_f5lgqx5',e.target,'PzFIFuHM9Om215jxv')

    emailjs.sendForm(serviceId, templateId,e.target,publicKey);

    //const formURL = e.target.action
    const data = new FormData()


  }

  return (
    <div>

      <Typography align="center" variant="h5">联系我们 | Contact</Typography>
      <Typography align="center">Get in touch with us</Typography>
      {formSuccess ?
        <div>{formSuccessMessage}</div>
        :
        <form  onSubmit={submitForm}>
          <div>
            <label>姓名</label>
            <label>电子邮件</label>
             <br/>
            <input type="text" name="name" onChange={handleInput} value={formData.name} />
            <input type="text" name="email" onChange={handleInput} value={formData.email} />
          </div>

          {/* <div>
            <label>电子邮件</label>
            <input type="text" name="email" onChange={handleInput} value={formData.email} />
          </div> */}

          <div>
            <label>消息</label> <br/>
            <textarea name="message" onChange={handleInput} value={formData.message}></textarea>
          </div>

          <button type="submit">发送</button>
          <button type="submit" >重置</button>
        </form>
      }
    </div>
  )
}