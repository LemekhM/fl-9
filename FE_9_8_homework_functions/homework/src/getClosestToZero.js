
function getClosestToZero(array) {
    let number = 0;
    let num = 0;
    for (let i = array.length - 1; i >= 0; i--) {
        if(Math.abs(number - array[i]) < Math.abs(number - array[num])){
            num = i;
        }
    }
    return array[num];
} 
