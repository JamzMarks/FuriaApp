import { useState } from "react"

export default function FormLogin(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handlerLoginSubmit(){

    }
    return(
        <form onSubmit={handlerLoginSubmit}>
            <div >
            <h1>Login</h1>
            <input type="email" name="email" id="" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" name="password" id="" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)}/>      
        </div>
        </form>
    )
}