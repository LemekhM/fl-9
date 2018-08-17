const maxAngle = 180;
const a=parseInt(prompt('Input a'));
if (isNaN(a)) {
	console.log('a is not a number');
}
const b=parseInt(prompt('Input b'));
if (isNaN(b)) {
	console.log('b is not a number');
}
const angle=parseInt(prompt('Input angle'));
if (isNaN(angle)) {
	console.log('b is not a number');
}
function round(number){
	return Math.round(number * 100) / 100;
}
if (a<0 || b<0 || angle<0 ) {
	console.log('Invalid data');
} else {
	const c=round(Math.sqrt(Math.pow(a,2)+Math.pow(b,2)-2*a*b*Math.cos(angle/maxAngle*Math.PI)));
	const s=round(1/2*a*b*Math.sin(angle/maxAngle*Math.PI));
	const p=round(a+b+c);
    console.log('\n','c length: '+c,'\n','Triangle square: '+s,'\n','Triangle perimeter: ',p);
}

