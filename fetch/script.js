// para trabajar con FETCH (FRAMEWORK)
 
/*Esta libreria es una alternativa de XMLHTTPREQUEST, y el código
para sustituir la funcion que tengo arriba con XMLHTTPREQUEST, sería
el siguiente.*/

btn.addEventListener("click", evt => {
    fetch("http://localhost:8080/tabla.html")
    .then(response => response.text())
    .then(response => {
        dataConteiner.innerHTML = response
    })
    .catch(err => console.logt(err))})
