"use client"
import Input from '../../../components/input/Input'
import React, { useState } from 'react'
enum MODE {
    LOGIN = "LOGIN",
    REGISTER = "REGISTER",
    RESET_PASSWORD = "RESET_PASSWORD",
    EMAIL_VERIFICATION = "EMAIL_VERIFICATION"
}
function LoginPage() {

    const [mode, setMode] = useState(MODE.LOGIN)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailCode, setEmailCode] = useState("")
    const [IsLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [message, setMessage] = useState("")

    const formTitle = mode === MODE.LOGIN ? "Log in" : mode === MODE.REGISTER ? "Register" : mode === MODE.RESET_PASSWORD ? "Rest Your Password" : "Verify Yor email"
    const buttonTitle = mode === MODE.LOGIN ? "Login" : mode === MODE.REGISTER ? "Register" : mode === MODE.RESET_PASSWORD ? "Rest" : "Verify"
    return (
        <div className='h-[calc(100vh-80px)] px-4 md:px-8 lg:px-16 xl:32 2xl:px-32 flex items-center justify-center'>

            <form className='flex flex-col gap-5'>

                <h1 className='text-2xl font-semibold'>{formTitle}</h1>
                {mode === MODE.LOGIN ? (<div className=''>
                    <Input inputName='username' inputType={"text"} placeholder={"john"} label={"Username"} />

                </div>) : null}
                {mode !== MODE.EMAIL_VERIFICATION ? (<div className=''>
                    <Input inputName='email' inputType={"email"} placeholder={"john@gmail.com"} label={"Email"} />

                </div>) : <div>
                    <Input inputName='emailCode' inputType={"text"} placeholder={"code"} label={"Verification Code"} />
                </div>}
                {mode === MODE.LOGIN || mode === MODE.REGISTER ? (<div>
                    <Input inputName='password' inputType={"password"} placeholder={"Enter your Password"} label={"Password"} />
                </div>) : null}


                {mode === MODE.LOGIN && <div className='text-sm underline cursor-pointer' onClick={() => setMode(MODE.RESET_PASSWORD)}>Forgot Password?</div>}

                {<button className='bg-lama text-white p-3 rounded-md disabled:bg-pink-200 disabled:cursor-not-allowed' disabled={IsLoading}>{IsLoading ? "loading..." : buttonTitle}</button>}
                {error && <div className='text-red-600'>{error}</div>}
                {mode === MODE.LOGIN && (<div className='text-sm underline cursor-pointer' onClick={() => setMode(MODE.REGISTER)}>

                    {"Don't"}have an account?

                </div>)}

                {mode === MODE.REGISTER && (<div className='text-sm underline cursor-pointer' onClick={() => setMode(MODE.LOGIN)}>

                    Have an account?

                </div>)}
                {mode === MODE.RESET_PASSWORD && (<div className='text-sm underline cursor-pointer' onClick={() => setMode(MODE.LOGIN)}>

                    Go back to login

                </div>)}
                {message && <div className='text-green-600 text-sm'>{message}</div>}
            </form>



        </div>
    )
}

export default LoginPage