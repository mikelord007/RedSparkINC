export const verifyOtpEr = (data) => async (dispatch) => {
    if(data !== "Success")
    dispatch({type:'error',data:"Verified!"});
    else
    dispatch({type:'success',data:data})
}