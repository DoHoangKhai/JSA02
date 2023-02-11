
let n = prompt('Enter Triangle height (Integer whole number)');
let triangle = '';

for (let i = 1; i <= n; i++) {
	for(let j = 1; j <= n-i; j++){
		triangle += '&nbsp&nbsp';
	}
	for(let k = 0; k < 2*i-1; k++){

        if(i == 1 || i == n){
            triangle += '*'
        }
        else{
            if(k == 0 || k == 2*i-2){
                triangle += '*'
            }else{
                triangle += '&nbsp&nbsp';
            }
        }
    }

    triangle += '<br>'
}

document.getElementById('out').innerHTML = triangle
console.log(triangle)
