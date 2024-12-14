const fs = require('fs');

// Читаем данные из файла
const data = fs.readFileSync('source.txt', 'utf-8');


// Преобразуем данные в массив чисел
const sequence = data.split(/\s+/).map(Number);


//const sequence = [608017, 248460, 962282, 994725, 177092];



function findLongestChain(sequence){
    
    let longestChain = "";
    
    for(let i = 0; i<sequence.length; i++){
        let currentChain = String(sequence[i]) //608017
        let usedIndexes = [i]; //0
        let added = true;

        while(added){

            added = false;
            for (let i = 0; i < sequence.length; i++){

                if (usedIndexes.includes(i)) continue;

                let currentNum = String(sequence[i]);  // 608017
                let lastPair = currentChain.slice(-2);  //17
            
                if(lastPair === currentNum.slice(0,2)){
                    currentChain+= currentNum.slice(2);
                    usedIndexes.push(i);
                    added = true;
                    break;
                }

            }
        
            if (currentChain.length > longestChain.length){
            longestChain = currentChain;
            }

        }
    }
    return longestChain;
}


const longestChain = findLongestChain(sequence);
console.log("Найдовший ланцюжок:", longestChain);
console.log("Довжина: ", longestChain.length);






















