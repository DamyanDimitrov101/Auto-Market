import './confirmBox.css';


export const ConfirmBox = ({
    taskName,
    handleTask,
    setTask,
    task
}) => {


    return (
        <>
            <div className="container-ConfirmBox">
                <div className="confirmation-text">
                    Do you really want to {taskName} this task?
            </div>
                <div className="button-container-ConfirmBox">
                    <button
                        className="back-Btn"
                        onClick={() => handleConfirmationBox(null,task, setTask)}>
                        Cancel
                    </button>
                    <button
                        className={`confirmation-button ${taskName==='Edit'? 'edit-button' : 'delete-button'}`}
                        onClick={(e) => handleTask(e)}>
                        {taskName}
            </button>
                </div>
            </div>
            <div 
                className="confirm-bg"
                onClick={() => handleConfirmationBox(null,task, setTask)}> 
            </div>
        </>
    );
}

export const handleConfirmationBox = (e,task,setTask) => {
    if (e) {
        e.preventDefault();        
    }

    if (!task) {
      setTask(true);
    } else {
      setTask(false);
    }
}