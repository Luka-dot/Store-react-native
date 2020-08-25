export const SIGNUP = 'SIGNUP';

export const signup = (email, password) => {
    return async dispatch => {
        fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDkm1Y5fG-StGlT2sIotG6bPRsKXW1l1wE',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                
            })
        }
        );

        dispatch({ type: SIGNUP })
    };
};