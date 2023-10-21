/* Esto sirve para ver los tipos de respuesta que hay,
se pueden utilizar para diferentes casos, recuerda que en el 
caso "await" es esperar a que termine un proceso, y en el modo
"promesa" va salir antes la consola y despues saldria el nombre,
se hizo a proposito una simulación donde la respuesta tardaria 
2 seg, esto con el fin de ver el comportamiento de await y promesa*/

const app = document.getElementById("app")
const normal = document.getElementById("normal")
const promesa = document.getElementById("promesa")
const asyncawait = document.getElementById("asyncawait")

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
    console.log("Termina el proceso")
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
