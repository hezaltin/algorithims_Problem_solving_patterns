//Write a function called sameFrequency. 
//Given two positive integers, find out if the two numbers have the same frequency of digits.
// Take away = convert number to string; and the object;

export function sameFrequency(input1,input2){
    let arg1 = {};
    let arg2 = {};
    let inp1 = input1.toString();
    let inp2 = input2.toString();
    if(inp1.length !== inp2.length){
        return false;
    }
    for(const key of inp1){
       arg1[key] =  ++arg1[key] || 1;
    }
    for(const key1 of inp2){
        arg2[key1] =  ++arg2[key1] || 1;
    }

    for(const key2 of inp1){
        if(!(key2 in arg2)){
            return false
        }
        if(arg2[key2]!==arg1[key2]){
            return false;
        }
    }
    return true

}

//sameFrequency(3589578,5879385);