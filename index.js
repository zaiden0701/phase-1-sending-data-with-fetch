function submitData(name,email){
    const configureObject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            'name': name,
            'email': email,
        })
    }
    return fetch('http://localhost:3000/users', configureObject)
        .then(resp => resp.json())
        .then(newUser => document.body.innerHTML = newUser['id'])
        .catch(error => document.body.innerHTML = error.message)
}

// submitData()

// function addUser(newUser){
//     const p = document.createElement('p')
//     p.innerHTML = newUser.id
//     document.queryselector('body').append('p')
// }

// function submitData(name,email){
//     return fetch('http://localhost:3000/users'),{
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//         },
//         body: JSON.stringify({
//           name,
//           email,
//         })
//     }
//         .then(resp => resp.JSON())
//         .then(object => document.body.innerHTML = object['id'])
//         .catch(error => document.body.innerHTML = error.message)
// }
// submitData()