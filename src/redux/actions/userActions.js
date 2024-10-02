import { createAction } from "@reduxjs/toolkit";

const userActions = {
    login: createAction('login', (data) => {
        console.log(data)
        return {
            payload: {
                user: data.data,
                token: data.token
            }
        }
    }
    ),
    logout : createAction('logout', ()=>{
        return {
            payload : {}
        }
    }),
    register : createAction('register', (data)=>{
        return {
            payload: {
                user: data
            }
        }
    })
}

export default userActions