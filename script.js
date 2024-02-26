const worker = new Worker('worker.js')
const sum=document.querySelector('#sumButton')
const bg=document.querySelector('#bgButton')

sum.addEventListener("click",(event)=>{
    worker.postMessage('hello')
    console.log("worker",worker)
})

worker.onmessage= function(message){
    alert(`sum is ${message.data}`)
}

bg.addEventListener("click",(event)=>{
    if(document.body.style.background!=='blue'){
        document.body.style.background='blue'
    }else{
        document.body.style.background='green'
    }
})