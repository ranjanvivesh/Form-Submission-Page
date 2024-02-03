import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
import styles from './Button.module.css'



const Button = ({isOutline,icon,text,...rest}) => {
  return (
    <div>
        <button className={isOutline ? styles.outline_btn :   styles.primary_btn}> 
        {icon}
        {text}
        

        </button>
        
    </div>
  )
}

export default Button