function beautifulDays(i, j, k) {
    let result = 0; 
    for ( let x = i; x <= j; x++) {
        if ( (x - x.toString().split('').reverse().join(''))%k === 0 ){
            result++
        }
    }
    return result
    
    }

    console.log (beautifulDays(20,23,6))