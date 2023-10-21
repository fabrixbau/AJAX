/* Esto sirve para ver los tipos de respuesta que hay dentro 
de la consola, se pueden utilizar para diferentes casos,
recuerda que en el caso "await" es esperar a que termine un 
proceso, y en el modo "promesa" va salir antes la consola
("ctrl" + "shift" + "i") y despues saldria el nombre, se hizo
a proposito una simulación donde la respuesta tardaria 2 seg, 
esto con el fin de ver el comportamiento de await y promesa*/

const app = document.getElementById("app")
const normal = document.getElementById("normal")
const promesa = document.getElementById("promesa")
const asyncawait = document.getElementById("asyncawait")
const btnFetch = document.getElementById("fetch")

const myForm=document.getElementById("myForm")
const title=document.getElementById("title")
const author=document.getElementById("author")
const btnCreate=document.getElementById("btnCreate")

const saludar = (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (name === "") {
                reject("El nombre no puede estar vacío")
            } else {
                resolve(`Hola ${name}`)
            }
        }, 2000);
    });
}

const write = (data) => {
    app.innerText = data
}

normal.addEventListener ("click", () => {
    console.log("Empieza el proceso")
    const resp = saludar ("FabrixBau")
    write (resp)
    console.log("Termina el proceso");
})

promesa.addEventListener("click", () => {
    console.log("Empieza el proceso");
    saludar("Fabrixbau")
        .then(response => {
            write(response);
            console.log("Termina el proceso");
        })
        .catch(error => console.log(error));
});

asyncawait.addEventListener("click", async() => {
    console.log("Empieza el proceso");
    try {
        const resp = await saludar("FabrixBau");
        write(resp);
        console.log("Termina el proceso");
    } catch (error) {
        console.log(error);
    }
});

btnFetch.addEventListener("click", async() => {
    /* Método fetch
    
    fetch("http://localhost:3000/posts")
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.log(err))
 */

        // Método await

        /* Algo interesante de fetch es que podemos controlar los errores 404
        y esto se hace dentro del "try" y ahí mismo puedo indicarle al cliente
        lo que yo desee| */

    try{
        const response = await fetch("http://localhost:3000/posts")
        if(response.status !== 200) {
            const message = await response.json()
            console.log("Oops, parece ser que algo salio mal :(", message)
            return
        }

        const data = await response.json
        console.log(data)
    } catch (err){
        console.log(err)
    }
});

/* El siguiente bloque de código es para hacer "post" lo primero es quitar el formato que 
ya tiene de base el "submit" */

myForm.addEventListener("submit", (e) => {
    e.preventDefault()
})

btnCreate.addEventListener("click", async () => {
    const post = {
        title: title.value,
        author: author.value
    }

    const myHeaders = new Headers() //los headers son para poder crear la peticion post
    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append("Authorization", "el-token-super-seguro"); //Aquí iría el token en caso de ocuparlo

    const myInit ={
        metho: "POST",
        body: JSON.stringify(post),
        headers: myHeaders
    }

    try{
        const response = await fetch("http://localhost:3000/posts", myInit)
        if(response.status !== 201){
            console.log("Oops, no pudimos crear el recurso")
            return
        }

        const data = response.json()
        console.log("Recurso creado correctamente!", data)
    }catch(err){
        console.log("Ooops, hubo un error", err)
    }
})
