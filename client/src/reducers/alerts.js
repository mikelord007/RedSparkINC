export const alertsReducer = (state = {type:null, message:null},action) => {
    switch(action.type){
        case 'error':
            console.log(action.data)
            return {type:'error',message:action.data}
        case 'success':
            return {type:'success',message:action.data}
        default:
            return state;
    }

}