import './inputError.css';


export const InputError = ({
    children
}) =>{

    if (!children) {
        return null;
    }

    return (
        <div className="inputError">
            <p className="inputError-text">
                {children}
            </p>
        </div>
    );
}


export const onInputBlur = (e,setErrorMessage,nameInput) =>{
    
    if (e.target.value.length<3) {
        if (nameInput==='Model' && e.target.value.length===2) {
            return setErrorMessage(error=> ({...error, [nameInput]: ''}));
        }
        setErrorMessage(error=> ({...error, [nameInput]: `${nameInput} too short!`}));
    }else{
        setErrorMessage(error=> ({...error, [nameInput]: ''}));
    } 
}