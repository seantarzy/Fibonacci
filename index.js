function fib(n){

    let j = n -1

let fibArray = [0,1]
if(j<1){
    return "enter a valid fibonacci length"
}
if(j==0){
    return 0
}

if(j==1){
    return 1
}

for(let i = 1; i < j; i++){

let newFibNum = fibArray[i] + fibArray[i-1]

fibArray.push(newFibNum)

}

return fibArray

}

function outputFLowers(n){
   let flowerContainer = document.getElementById('flower-container')
    for(let i =0; i<n; i++){
   let petal = document.createElement('img')
        petal.src = ('/Users/seantarzy/Development/Messing/fibonacci/purple-petal.png')
   flowerContainer.appendChild(petal)
}
}

window.addEventListener('DOMContentLoaded', (event) => {
    let centerImage = document.getElementById('flower-center')
    console.log('DOM fully loaded and parsed');
    console.log(centerImage)

});


document.getElementById('fib-num-input').addEventListener('keypress', function (e) {
    let listBox = document.getElementById('list-box')
    listBox.innerText = "Fibonacci Sequence:"
    if (e.key === 'Enter') {
        e.preventDefault()
        let fibArray = fib(e.target.value)
        let fibUltimate = fibArray[fibArray.length - 1]
        outputFLowers(fibUltimate)
        let fibList = document.createElement('li')
        fibList.append(fibArray)
        listBox.append(fibList)
    }
});



