import React, { useState } from 'react'
import styles from './ContactForm.module.css'
import Button from './Buttons/Button'
import { MdOutlineMessage } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";



const ContactForm = () => {

  const [name,stateName] = useState('')
  const [email,stateEmail] = useState('')
  const [text,stateText] = useState('')
 const onSubmit = (event) => {

  

  event.preventDefault();

  stateName(event.target[0].value)
  stateEmail(event.target[1].value)
stateText(event.target[2].value)

    // alert('Name: ' + event.target[0].value + ', '  + 'E-mail: ' + event.target[1].value + ' ,' + 'Text: ' + event.target[2].value)
  }
  return (
    <section className={`${styles.container}`}>
        <div className={styles.contact_form}>
          <div className={styles.top_btn}>

            <Button
           text='VIA SUPPORT CHAT'
           icon = {<MdOutlineMessage fontSize={'24px'} />}
           />

           <Button
           text='VIA CALL'
           icon = {<IoCallOutline fontSize={'24px'}/>        }
           />
           </div>
           <div>
           <Button
           isOutline={true}
           text='VIA EMAIL FORM'
           icon = {<MdEmail  fontSize={'24px'}/>
          }
          ></Button>
           </div>
           <form onSubmit={onSubmit}>
            <div className={styles.form_control}>
            <label htmlFor='name'> Name</label>
            <input type='text' name='name' className='naam'></input>
            </div>
            <div className={styles.form_control}>
            <label htmlFor='email'> E-mail</label>
            <input type='text' name='e-mail'></input>
            </div>
            <div className={styles.form_control}>
            <label htmlFor='text'> Text</label>
            <textarea type='text' name='name' rows='8'></textarea>
            </div>
            <div style={{display:'flex', justifyContent:'end'}}>
            <Button 
            
           text='SUBMIT' />
           </div> 
           <div>
            Name: {name}
            E-mail: {email}
            Text: {text}
           </div>
           </form>
          </div>
        <div className={styles.contact_imange}>
          <img src='./public/Images/Service 24_7-pana 1.jpg' alt='contact'/>
        </div>
    </section>
  )
}

export default ContactForm