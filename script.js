(function(){
    'use strict'

    document.getElementById('convert').addEventListener('submit', function(event){

        event.preventDefault();
        let distance = parseFloat(document.getElementById('distance').value);
        let conversion = (distance * 1.609344).toFixed(2);
        let answer = document.getElementById('answer')

        if (distance === 0) {
            answer.innerHTML = `<h2>${distance} miles is ${conversion} in kilometers</h2>`; 
        } else if (distance) {
            answer.innerHTML = `<h2>${distance} miles is ${conversion} in kilometers</h2>`; 
        } else {
            answer.innerHTML = '<h2>Please provide a number</h2>';
        }
    });
})();