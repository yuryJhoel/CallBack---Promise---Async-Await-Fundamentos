let promise1 = new Promise((resolve, reject)=>{
    resolve('PRIMERA PROMESA RESUELTA')
});
let promise2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('SEGUNDA PROMESA RESUELTA')
    },500)
});

let promise3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject('Error fatal en la tercera promesa')
    }, 1000)
});

let promise4 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('CUARTA PROMESA RESUELTA')
    }, 1500)
});

Promise.race([promise2,promise1,promise3,promise4])
    .then((values)=>{
        console.log('Los valores son ',values)
    })
    .catch((error)=>{
        console.log('Ocurrio un error', error)
    })