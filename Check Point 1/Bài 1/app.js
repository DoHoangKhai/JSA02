

window.addEventListener('load', function(){
    let n = prompt('Enter a integer Number')
    let result = 1

    for (let i = 0; i < n; i++) {
        result = result * (i + 1)
        console.log(result)
    }

    document.getElementById('out').innerHTML = result
    document.getElementById('num').innerHTML = n 
})
