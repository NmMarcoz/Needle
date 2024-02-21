import './MainPageStyles.css'
import Button from './Button';
import {useState}from 'react';

interface FormData{
    name: string;
    email: string;
    phoneNumber: string;
}

function MainPage(){
    const BASE_URL = "http://localhost:3001/costumer";

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email:'',
        phoneNumber: ''
    });
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }


    return(
        <div className='mainContainer'>
            <div className= "leftContainer">
                <div className='inputLeft'>
                    <a className='title'> Create Costumer.</a>
                    <div className='clientInput'> 
                        <a className='inputText'> name</a>
                        <input className='inputBox'   name="name"  type='text' placeholder='type a name' value = {formData.name} onChange ={handleChange} required = {true}/>
                        <a className='inputText'> email</a>
                        <input className='inputBox'   name="email"  placeholder = 'type an email'type='email' value = {formData.email} onChange ={handleChange}required = {true}/>
                        <a className='inputText'> phone number</a>
                        <input className='inputBox' name="phoneNumber" placeholder = 'type a number'type='tel' value = {formData.phoneNumber} onChange ={handleChange} required = {true}/>
                    </div>
                    <Button url = {BASE_URL} text = "create" color = {0} formData={formData}/>
                </div>
            </div>
            <div className='rightContainer'>
                <div className='inputRight'>
                    <a className='altTitle'> Send a Request.</a>
                    <div className='clientInput'> 
                        <a className='altInputText' > request name</a>
                        <input className='altInputBox' placeholder='ex: cute dress' required = {true}/>
                        <a className='altInputText'> request description</a>
                        <input className='altInputBox' placeholder='ex: a cute dress with detailed yellow things'/>
                        <a className='altInputText' > request deadline</a>
                        <input className='altInputBox' placeholder = 'ex: 22/09/2026'type='date'/>
                        <a className='altInputText' > client Id</a>
                        <input className='altInputBox' placeholder='grab the Id of the client that you want to link' required = {true}/>
                    </div>
                    <Button url = {BASE_URL}text = "send" color = {1} formData={formData}/>
                </div>
            </div>
        </div>

        )
}

export default MainPage;