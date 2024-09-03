function calculate(a,b,calc){
    if(calc == 'add'){
        let result = a+b;
        return result;
    }else if(calc == 'subtract'){
        let result = a-b;
        return result;
    }else if(calc == 'multiply'){
        let result = a*b;
        return result;
    }else if(calc == 'divide'){
        let result = a/b;
        return result;
    }else{
        if(a || b == null || calc != 'add' || 'subtract' || 'multiply' || 'divide'){
            console.log('Input two valid numbers and a valid operation to perform');
        }
    }
}

var show = calculate(10,2,'add');
console.log(show)