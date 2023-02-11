let triangle = ''

window.addEventListener('load', function(){
    let n = prompt('Enter Triangle height')

    for (i = 0; i < n; i++){
        triangle += '*';
    }

    document.getElementById('out') = triangle
})

