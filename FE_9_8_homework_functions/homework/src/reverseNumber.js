

function reverseNumber(n) {
    if (n < 0){
        return -reverseNumber(-n);
    }
    let num = n.toString().split('').reverse().join('');
        return Number(num);
} 