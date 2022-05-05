function solve(numN){

    let OddNumsCounter = 0;
    let sumOddNumbers = 0;
    for(let i = 1;i < 100;i++){
        if(i % 2 !== 0){
            OddNumsCounter++
            sumOddNumbers += i;
            if(OddNumsCounter <= numN){
                console.log(i);
                
            }
        }
        if(OddNumsCounter === numN){
            break;
        }

    }
        console.log(`Sum: ${sumOddNumbers}`);
}
solve(3)