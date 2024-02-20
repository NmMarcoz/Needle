import './MainPageStyles.css'

function MainPage(){
    return(
        <div className='mainContainer'>
             
            <div className= "leftContainer">
                <div className='inputLeft'>
                    <a className='title'> Create Costumer.</a>
                    <div className='clientInput'> 
                        <a className='inputText'> name</a>
                        <input className='inputBox'/>
                        <a className='inputText'> email</a>
                        <input className='inputBox'/>
                        <a className='inputText'> phone number</a>
                        <input className='inputBox'/>
                    </div>
                </div>
            </div>
            <div className='rightContainer'>
                <div className='inputRight'>
                    <a className='altTitle'> Send a Request.</a>
                    <div className='clientInput'> 
                        <a className='altInputText'> request name</a>
                        <input className='altInputBox'/>
                        <a className='altInputText'> request description</a>
                        <input className='altInputBox'/>
                        <a className='altInputText'> request deadline</a>
                        <input className='altInputBox'/>
                        <a className='altInputText'> client Id</a>
                        <input className='altInputBox'/>
                    </div>
                </div>
            </div>
        </div>

        )
}

export default MainPage;