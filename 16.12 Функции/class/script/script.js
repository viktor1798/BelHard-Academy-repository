// объект мат вычислений Math
 
// let x = 5;
// let n = 3;

// let y = (2*Math.exp(x))+1;


// console.log(Math.ceil(y));


// let z = Math.log(x)/x;

// console.log(z);

// let w ;

// if (x < Math.pow(z,2)){
//     console.log(w =x*y);
// }else if(x >= Math.pow(z,2)){
//     console.log( w = n*x +2);
// }


let w,m,n,k,a,b;

m = Math.sin(5);
n = Math.exp(m);
k = m+n;
a = Math.pow(Math.log(n),2)+m;
b = Math.acos(k)/a;

if(a < Math.pow(b,3) ){
    w = Math.sqrt(a+1);
}else w = Math.sqrt(a+2);

console.log(w);