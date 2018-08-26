
function isPrime (n){
    const a =2;
    if (n < a){
    return false;
    }
    const b = Math.floor(Math.sqrt(n));
    for ( let i = 2; i <= b; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;

} 