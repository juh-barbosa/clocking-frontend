import { useState } from "react"
import http from "../../environments/environment"

export default function Current(props: any){
    const [body, setBody] = useState({});

    async function sendHours() {
        http.post(`marking/${props.user}`, body)
            .then((res) => {})
            .catch((error) => {})
    }

    return(
        <>
        </>
    )
}