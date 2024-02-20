import './ButtonStyle.css'

interface buttonProps{
    text:string;
    color: number;
}

function Button({text, color}: buttonProps){
    const buttonClass = color == 0? 'button': 'altButton';
    return(
            <button className= {buttonClass}>
                {text}
            </button>
        )
}

export default Button