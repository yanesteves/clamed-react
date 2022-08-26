## Exercício - Integração com Github


Exemplo de chamada de API. O termo entra o nome do usuário pesquisado:


```
fetch(`https://api.github.com/search/users?q=${termo}`)
        .then(response => response.json())
        .then(users => {
          console.log('- recebeu a resposta -')
          console.log(users)
        })
```