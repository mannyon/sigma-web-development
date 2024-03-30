console.log("Code is running");

let a = 6;
let b = 6;

console.log(a);
console.log(b);

{
    let a = 66;
    console.log(a);
}

if (a == b) {
    console.log(a+b);
}
else {
    console.log(a-b);
}

let x = "Manish";
let y = 22;
let z = 3.22;
let m = true;
let k = undefined;
let j = null;

console.log(x, y, z, m, k, j);
console.log(typeof x, typeof y, typeof z, typeof m, typeof k, typeof j);

let o = {
    name : "Manish",
    "Job Code" : 5600,
    is_handsome : true
}

console.log(o);
o.salary = "100 crores";
console.log(o);
o.salary = "500 crores";
console.log(o);