import { useState } from "react";
import person from "../../assets/img/conta.png";
import http from "../../environments/environment";

export default function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function validateUser(){
        await http.get(`/users/${username}/${password}`)
    }

    return(
        <section>
            <div>
                <div>
                    <img src={person} alt="icone" />
                </div>
                <div>
                    <button onClick={() => validateUser()}>ENTRAR</button>
                </div>
            </div>
        </section>
    )
}