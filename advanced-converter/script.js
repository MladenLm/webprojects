(function(){
    'use strict'

    let convertType = 'miles';
    let heading = document.querySelector('h1');
    let intro = document.querySelector('p');
    let answer = document.getElementById('answer');
    let form = document.getElementById('convert');

    document.addEventListener('keydown', function(event){
        
        let key = event.code;

        if (key === 'KeyK')  {
            convertType = 'kilometers'
            heading.innerHTML = "Kilometers to Miles Converter";
            intro.innerHTML = "Type in a number of kilometers and click the button 'convert' to convert the distance to miles";
        } else if (key === 'KeyM') {
            convertType = 'miles'
            heading.innerHTML = "Miles to Kilometers Converter";
            intro.innerHTML = "Type in a number of miles and click the button 'convert' to convert the distance to kilometers";
        }
    });

    form.addEventListener('submit', function(event){
        
        event.preventDefault();

        let distance = parseFloat(document.getElementById('distance').value);

        if (convertType == 'miles' && distance) {
            let converted = (distance * 1.609344).toFixed(2);
            answer.innerHTML = `<h2>${distance} miles converts to ${converted} kilometers</h2>`;
        } else if (convertType == 'kilometers' && distance) {
            let converted = (distance * 0.621371192).toFixed(2);
            answer.innerHTML = `<h2>${distance} kilometers converts to ${converted} miles</h2>`;
        } else {
            answer.innerHTML = 'Please provide a number';
        }
    });
})();