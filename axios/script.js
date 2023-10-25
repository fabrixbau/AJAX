const myForm = document.getElementById("myForm")
const title = document.getElementById("title")
const author = document.getElementById("author")
const btnSave = document.getElementById("btnSave")


myForm.addEventListener("submit", e => {
    e.preventDefault()
})

const makePost = () =>{
    return {
        title: title.value, 
        author:  author.value
    }
}

// *** Esta es la mejor forma de hacer las consultas 

btnSave.addEventListener("click", async () => {
    const data = makePost()
    try{
        const response = await axios ({
            method: "post",
            url: "http://localhost:3000/posts",
            data: data
        })
        console.log(response)
        }catch (error){
            console.log(error)
        }
})




/* 

*** Este es el método por default ***


axios.get("http://localhost:3000")
.then(response => console.log(response))
.catch(error => console.log(error))

*/


/* 

*** Esta es la forma en le que se pueden hacer 
configuraciones dentro de la petición ***

axios({
    url: "/posts",
    baseURL: "http://localhost:3000",
    method: "get"
})
.then(response => console.log(response))
.catch(error => console.log(error)) */



/*  

   *** PARA MANEJAR ERRORES ES EL SIGUIENTE MÉTODO *** 

btnSave.addEventListener("click", async () => {
    const data = makePost()
    try{
        const response = await axios ({
            method: "post",
            url: "http://localhost:3000/posts/eror",
            data: data,
            validateStatus: function (status) {
                return status >= 200 && status < 500
            },
        })
        if (response.status === 400) {
            console.log("Pagina no encontrada", response)
            return
        }
        console.log(response)
        }catch (error){
            console.log(error)
        }
}) 

*/
    
