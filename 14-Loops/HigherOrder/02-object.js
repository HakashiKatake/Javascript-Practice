const myObject = {
    js: 'JavaScript',
    py: 'Python',
    rb: 'Ruby',
    java: 'Java',
}

for (const key in myObject) {
    console.log(key);
}


const programming = {
    js: 'JavaScript',
    py: 'Python',
    rb: 'Ruby',
    java: 'Java',
}

for (const key in programming) {
    console.log(`${key} : ${programming[key]}`);
}