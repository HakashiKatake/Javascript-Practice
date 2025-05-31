// for 

for(let i = 0; i < 5; i++) {
    console.log(i);
}



for (let i = 1; i <= 10; i++) {
    console.log(`outer loop iteration: ${i}`);
    
    for (let j = 1; j <= 10; j++) {
        
        // console.log(`  inner loop iteration: ${j}`);
        console.log(i + "*" + j + '=' +i*j);
        
        
    }
    
}


let myArray = [1, 2, 3, 4, 5];

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log(`Element at index ${i}: ${element}`)
}



//  break and continue

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Breaking the loop at i = 5");
        break; // exits the loop when i is 5
    }
    console.log(`Current value of i: ${i}`);
}

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        console.log(`Skipping even number: ${i}`);
        continue; // skips the rest of the loop iteration for even numbers
    }
    console.log(`Current value of i: ${i}`);
}

