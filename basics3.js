function add(a,b)
{
    return a+b;
}

let sum = add(2,3)
console.log(sum)

// do not have a name=>anonymous function--Funtion expressions

let sumOfInt = function(c,d)
{
    return c+d;
}

console.log(sumOfInt(5,6))

let sumOfNUM = (e,f) => e+f //anonymous function reduced more to the basoc logic with only parameters defined
console.log(sumOfNUM(3,4))