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

function outputFLowerPetals(n){
    let centerX = 100
    let centerY = 60
    if(n<50){
   let flowerCenter = document.getElementById('flower-center')
   for(let i =0; i<n; i++){
        let petal = document.createElement('img')
        petal.src = ('/Users/seantarzy/Development/Messing/fibonacci/purple-petal.png')
        petal.id = `petal ${i}`
        petal.className = 'petal'
        let petalDiv = document.createElement('div')
        petalDiv.appendChild(petal)
        flowerCenter.appendChild(petalDiv)
        var angle = Math.random() * Math.PI * 2;
        x = centerX + Math.cos(angle) * 140;
        y = centerY + Math.sin(angle) * 140;
       petalDiv.style.position = "absolute";
        petalDiv.style.left = x + 'px'
        petalDiv.style.top = y + 'px'
        console.log(x, y)
        console.log(petalDiv.left, "petal position")
}}
else{
    return "that's too much, man!"
}

}

window.addEventListener('DOMContentLoaded', (event) => {
    drawCircle()
    let centerImage = document.getElementById('flower-center')
    console.log('DOM fully loaded and parsed');
    let centerPosition = centerImage.getBoundingClientRect();
    let x = centerPosition.left;
    let y = centerPosition.top;
});


document.getElementById('fib-num-input').addEventListener('keypress', function (e) {
    let listBox = document.getElementById('list-box')
    listBox.innerText = "Fibonacci Sequence:"
    if (e.key === 'Enter') {
        e.preventDefault()
        let fibArray = fib(e.target.value)
        let fibUltimate = fibArray[fibArray.length - 1]
        outputFLowerPetals(fibUltimate)
        let fibList = document.createElement('li')
        fibList.append(fibArray)
        listBox.append(fibList)
    }
    console.log(document.getElementById('flower-center-canvas').getContext('2d'), "circle stuff")
});

function drawCircle() {
    console.log('no context')
    var canvas = document.getElementById('flower-center-canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        var X = canvas.width / 2;
        var Y = canvas.height / 2;
        var R = 55;
        ctx.beginPath();
        ctx.arc(X, Y, R, 0, 2 * Math.PI, false);
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#FF0000';
        ctx.stroke();
    }


}

