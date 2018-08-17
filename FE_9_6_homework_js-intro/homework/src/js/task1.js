const a=prompt('Input amount of money',0);
const b=prompt('Input the discount %',0);
function round(number){
    return Math.round(number * 100) / 100;
}
if (a<0||b<0){
    console.log('invalid date')
} else {
const c=round(a*(b/100));
const d=round(a-c);
console.log('\n',
            'Price without discount: '+a,'\n',
            'Discount: '+b +'%', '\n',
            'Price with discount: '+d, '\n',
            'Saved: '+c);
}