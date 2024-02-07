function fetchData() {
    const url = 'https://localhost:7055/api/Offer/offers';
    
    fetch(url, {
        method: 'GET',
        headers: {
        'Accept': '*/*'
        }
    })
    .then(response => {
        if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Response:', data);
        data.forEach(element =>createCard(element));
        
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function createCard(data) {
    // <div class="card" style="width:18rem;">
    const card = document.createElement('div');
    card.className = 'card';
    card.style.width = '18rem';
  
    // <img src="" class="card-img-top" alt="..." height="200px">
    const img = document.createElement('img');
    img.className = 'card-img-top';
    img.src = "car.jpg";
    img.alt = '...';
    img.height = '200px';
  
    //  <div class="card-body">
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';
  
    // <h5 class="card-title"></h5>
    // <h6 class="card-subtitle mb-2 text-muted "></h6>
    // <p class="card-text"></p>
    // <a class="btn btn-primary btn-sm " href="#" role="button"></a>
    const title = document.createElement('h5');
    title.className = 'card-title';
    title.textContent = data.brand + data.model ;
  
    const subtitle = document.createElement('h6');
    subtitle.className = 'card-subtitle mb-2 text-muted';
    subtitle.textContent = data.priceInEur + "$";
  
    const text = document.createElement('p');
    text.className = 'card-text';
    text.textContent = data.description;
  
    const button = document.createElement('a');
    button.className = 'btn btn-primary btn-sm';
    button.href = "";
    button.role = 'button';
    button.textContent = "Zobacz";

    card.appendChild(img);
    card.appendChild(cardBody);
    cardBody.appendChild(title);
    cardBody.appendChild(subtitle);
    cardBody.appendChild(text);
    cardBody.appendChild(button);

    document.getElementById('cardSpace').appendChild(card);
  }

fetchData();