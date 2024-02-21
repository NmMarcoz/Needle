import './MainPageStyles.css'
import Button from './Button';

function MainPage(){
    return(
        <div className='mainContainer'>
             
            <div className= "leftContainer">
                <div className='inputLeft'>
                    <a className='title'> Create Costumer.</a>
                    <div className='clientInput'> 
                        <a className='inputText'> name</a>
                        <input className='inputBox' placeholder='type a name' required = {true}/>
                        <a className='inputText'> email</a>
                        <input className='inputBox' placeholder = 'type an email'type='email' required = {true}/>
                        <a className='inputText'> phone number</a>
                        <input className='inputBox' placeholder = 'type a number'type='tel' required = {true}/>
                    </div>
                    <Button text = "create" color = {0}/>
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
                    <Button text = "send" color = {1}/>
                </div>
            </div>
        </div>

        )
}

export default MainPage;