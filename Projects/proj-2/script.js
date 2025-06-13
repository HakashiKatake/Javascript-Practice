const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)){
       
        results.innerHTML = "Please give a valid height"
    } else if (weight === '' || weight < 0 || isNaN(weight)){
       
        results.innerHTML = "Please give a valid weight"
    } else {
        const bmi = (weight/ ((height*height)/1000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`
        const span = document.createElement('span')
        console.log(span);
        if (bmi <= 18.6) {
            span.innerHTML = "You are under weight";
            
        } else if (bmi === 18.6 && bmi === 4.9) {
            span.innerHTML = "You are normal weight";

        } else {
            span.innerHTML = "You are over weight";
        }
            
        


        results.appendChild(span)
}

        

      


        
    

    


    


})
