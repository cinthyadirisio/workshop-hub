import { createAction } from "@reduxjs/toolkit";

const userActions = {
    login: createAction('login', (data) => {
        return {
            payload: {
                user: data
            }
        }
    }
    ),
    logout : createAction('logout', ()=>{

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