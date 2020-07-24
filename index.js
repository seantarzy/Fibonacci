function fib(n){


let fibArray = [0,1]

if(n==0){
    return 0
}

if(n==1){
    return 1
}

for(let i = 1; i < n; i++){

let newFibNum = fibArray[i] + fibArray[i-1]

fibArray.push(newFibNum)

}

return fibArray

}

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');


});


document.getElementById('fib-num-input').addEventListener('keypress', function (e) {
    let listBox = document.getElementById('list-box')
    listBox.innerText = "Fibonacci Sequence:"
    if (e.key === 'Enter') {
        e.preventDefault()
        let fibArray = fib(e.target.value)
        let fibList = document.createElement('li')
        console.log(fibArray, "entered")
        fibList.append(fibArray)
        listBox.append(fibList)
    }
});

