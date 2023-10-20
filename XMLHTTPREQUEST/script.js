const btn = document.getElementById("btnLoad") 
const dataContainer = document.getElementById("dataContainer")

btn.addEventListener("click", evt => {
    const xhr = new XMLHttpRequest()
    xhr.open("GET", "http://localhost:8080/tabla.html", true)

    // Que debe de hacer??
    xhr.addEventListener("load", e => {
        dataContainer.innerHTML = e.target.responseText
    })

    // Ejecutamos la petición (ojo el orden es importante, primero defino que debe hacer luego la petición)

    xhr.send()
})