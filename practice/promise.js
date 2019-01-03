let promesa = new Promise((resolve, reject)=>{
    console.time("El tiempo es: ")
    setTimeout(()=>{
        resolve("Hola soy el resolve")
    },4000);

    setTimeout(()=>{
        reject("Hola soy el reject")
    },1000)
    console.timeEnd("El tiempo es: ")
});
promesa
    .then((response)=>{
        console.log('Response: ', response)
    })
    .catch((error)=>{
        console.log('Error: ', error)
    })