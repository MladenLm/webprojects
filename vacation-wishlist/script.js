(function(){
    'use strict';

    let detailsForm = document.querySelector('#destination_details_form');

    detailsForm.addEventListener('submit', handleFormSubmit);

    function handleFormSubmit(event){
        event.preventDefault();

        let destName = event.target.elements["name"].value;
        let destLocation = event.target.elements["location"].value;
        let destPhoto = event.target.elements["photo"].value;
        let destDesc = event.target.elements["description"].value;

        for (let index = 0; index < detailsForm.length; index++) {
            detailsForm.elements[index].value = "";
        }

        let destinationCard = createDestinationCard(destName, destLocation, destPhoto, destDesc);

        let wishListContainer = document.getElementById('destinations_container');
        
        if (wishListContainer.children.length === 0) {
            document.getElementById('title').innerHTML = "My wish list";
        }

        document.querySelector('#destinations_container').appendChild(destinationCard);
    }

    function createDestinationCard(name, location, photo, description) {

        let card = document.createElement('div');
        card.classname = "card"

        let img = document.createElement('img');
        img.setAttribute('alt', name);
        
        let constPhotoUrl = "images/signpost.jpg";

        if (photo.length === 0) {
            img.setAttribute('src', constPhotoUrl)
        } else {
            img.setAttribute('src', photo);
        }

        card.appendChild(img);

        let cardBody = document.createElement('div');
        cardBody.classname = "card-body";

        let cardTitle = document.createElement('h3');
        cardTitle.innerHTML = name;
        card.appendChild(cardTitle);

        let cardLocation = document.createElement('h4');
        cardLocation.innerHTML = location;
        card.appendChild(cardLocation);

        if (description.length !== 0) {
            let cardDescription = document.createElement('p');
            cardDescription.className = "card-text";
            cardDescription.innerHTML = description;
            card.appendChild(cardDescription);
        }
        
        let cardDelete = document.createElement("button");
        cardDelete.innerHTML = 'Remove';

        cardDelete.addEventListener('click', removeDestination);
        card.appendChild(cardDelete);

        return card;
    }

    function removeDestination(event) {
        var card = event.target.parentElement.parentElement;
        card.remove();
    }
    })()

