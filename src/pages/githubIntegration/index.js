import { useEffect, useState } from "react";
import CardGithub from "../../components/GithubComponents/cardGithub";

export default function GithubIntegration() {
    const [termo, setTermo] = useState('')
    const [users, setUsers] = useState([])

    useEffect(() => {
        if (termo !== '')
        fetch(`https://api.github.com/search/users?q=${termo}`)
        .then(response => response.json())
        .then(users => {
          console.log('- recebeu a resposta -')
          console.log(users)
          if (users?.items) {
            setUsers(users.items)        
          }          
        })
    }, [termo])
    return (
        <div style={{'margin': '20px'}}>
            <input value={termo} onChange={(e) => setTermo(e.target.value)} placeholder='Digite o nome do personagem a ser buscado...'></input>
            <h2>Usuários Github</h2>
            {users?.map(user => {
                return <CardGithub value={user} />
            })}
            
        </div>
    );
}