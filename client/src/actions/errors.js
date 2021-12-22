export const verifyOtpEr = (data) => async (dispatch) => {
    if(data !== "Success")
    dispatch({type:'error',data:"Verfied!"});
    else
    dispatch({type:'success',data:data})
}