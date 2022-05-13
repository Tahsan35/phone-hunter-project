    
    const searchPhone = () => {
            const searchField = document.getElementById('search-field');
            const searchText = searchField.value;

            searchField.value = '';

            const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
            fetch (url)
            .then(res => res.json())
            .then(info => displaySearchResult(info.data));
    } 
// <------displayPhone---->
    const displaySearchResult = (data) => {
        const searchResult = document.getElementById('search-result');
            data.forEach(product => {
                const div = document.createElement('div')
                div.classList.add('col');
                div.innerHTML =
                `<div class="card">
                <img src="${product.image}" class="card-img-top" alt="..." />
                <div class="card-body">
                <h5 class="card-title">${product.phone_name}</h5>
                <p class="card-text">Brand name : ${product.brand}
                </p>
                <button onclick="loadProductDetails( ${product.slug})">details</button>
                </div>
                </div>`
                searchResult.appendChild(div);
                // console.log(product);
            })
        
    }
    // <---display phone details --->
    const loadProductDetails = phoneId => {
        const url = (`https://openapi.programming-hero.com/api/phone/${phoneId}`)
        fetch(url)
        .then(res => res.json())
        .then(data =>console.log(data))
    }

