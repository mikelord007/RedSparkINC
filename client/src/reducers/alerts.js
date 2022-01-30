export const alertsReducer = (state = {type:"success", message:"",displayed:true},action) => {
    switch(action.type){
        case 'error':
            return {type:'error',message:action.data,displayed:false}
        case 'success':
            return {type:'success',message:action.data,displayed:false}
        case 'noAlert':
            return {...state,displayed:true}
        default:
            return state;
    }

}