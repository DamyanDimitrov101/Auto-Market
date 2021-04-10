const notificationReducer = (state, action) => {
    switch (action.type) {
      case 'SUCCESS':
        
        console.log(action.payload);
        return {state: 'opened', type: 'success' , message: action.payload} ;     
    
      case 'ERROR':
        return {state: 'opened', type: 'error' , message: action.payload} ;               
  
      case 'RESET':
        return {state: 'closed', type: '' , message: ''} ;               
  
      default:
        return state;
    }
};


export default notificationReducer;