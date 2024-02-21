import './ButtonStyle.css'
import { useState, useEffect } from 'react';

interface buttonProps{
    text:string;
    color: number;
    url:string;
    formData: Object;
}

function Button({text, color, url, formData}: buttonProps){

    const buttonClass = color == 0? 'button': 'altButton';
    const handleSubmit = async () =>{
        try{
            const response = await fetch(url,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })
            if(!response.ok){
                throw new Error("Erro ao enviar dados")
            }
            const data = await response.json();
            console.log("dados enviados com sucesso: ", data)     
        }catch(err){
            console.log("Erro: ", err)
        }
    }
    return(
            <button className= {buttonClass} onClick={handleSubmit}>
                {text}
            </button>
        )
}

export default Button