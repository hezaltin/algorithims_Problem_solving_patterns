// Power
//===========
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

export function power(bs, pwr){
    let result = 0;
    function callPower(base, powerIterate){
        //base condition
            if(powerIterate === 0){
                return 1
            }
        // Given different input set
        return base * callPower(base, powerIterate - 1);
        
    }
    result = callPower(bs, pwr);
    return result
}

console.log(power(2,4))
//Recurssion Steps
// Traverse then join
// 2*(2,4) = 16
    // 2* (2,3) = 8
        //2*(2,2) = 4
            //2*(2,1) = 2
                //2*(2,0) = 1

// FActoraial
//===============
//Algorithm Steps
//==============
    //Will undergo all the levels or traverse once reach the base case; it will collect the result or return value from bottom to top
    //eg) 4! => return 4*(3) = [24] => 3*(2) = [6] => 2*(1) = [2] => 1*(0) = [1]

function factorial(num){
   if(num<=0){
       return 1;
   }
   return num * factorial(num-1);
}

console.log('factorial==>', factorial(1))

// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

//Algorithm Steps
//==================
    // helper method recursion
    //result = 0; base condition num<=0 arry.length return 1; // different inputs => return  item * (arraylength-1)

function productOfArray(iArr) {
    let result = 0;
    function helperMethod(array){
        if(array.length===0){
            return 1;
        } 
        return array[0] * helperMethod(array.slice(1));
    }
    result = helperMethod(iArr);
    return result;
}

console.log('productArray==>', productOfArray([1,2,3,10]))

// Recursive range
// recursiveRange(6) // 21
// recursiveRange(10) // 55

//Algorithm Steps
//==================
// base condition 0 => return 0; different input nums+(base-1);

function recursiveRange(num){
    let result = 0;
    function helper(nums){
        if(nums === 0){
            return result;
        }
        return nums + helper(nums-1);
    }
    result = helper(num);
    return result;
}

console.log('recursiveRange===>',recursiveRange(10));

// Fibonachi series using recursion using memosiation
// fib(4) // 3
// fib(10) // 55
// fib(28) // 317811
// fib(35) // 9227465

//Algorithm Steps
//==================
// base condition  => given num; different input (base-1)+ (base-2);
// * create an empty object
    // inside the recursion check if the object holds the value if yes return else go down
function fib(iVal){
    let fibObject = {}; // memoziation
    let fibValue = 0;
    function helper(val){
        if(val in fibObject) return fibObject[val];
        // base condition 
        if(val>iVal){
            return fibValue;
        }
        if(val<=2){
            fibValue = 1;
        }
        else {
            // given different input ==> usefull for the memosiation compute large numbers
            fibValue =  helper(val-1) + helper(val-2);
        }
        fibObject[val] = fibValue;
        // given different input
        return helper(val+1); // this one is for looping
    }

    helper(1);
    return fibValue;
}

console.log('fibMemoziation', fib(100))

//Fibonachi series - normal
function fibn(n){
    if (n <= 2) return 1;
    return fibn(n-1) + fibn(n-2);
}

console.log(' fibonachiNormal',  fibn(8))
