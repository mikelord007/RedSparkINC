export const verifyOtpEr = (data) => async (dispatch) => {
    if(data !== "Success")
    dispatch({type:'error',data:data});
    else
    dispatch({type:'success',data:data})
}