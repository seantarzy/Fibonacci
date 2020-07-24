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

return fibArray[n]

}