    // get input from searchField
    const searchPhone = () => {
            const searchField = document.getElementById('search-field');
            const searchText = searchField.value;
            // clear data 
            searchField.value = '';
            if (searchField =='') {
                const para = document.createElement("p");
                para.innerText = "Please write something to display";
            } else {
                // load data
            const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
            fetch(url)
            .then(res => res.json())
            .then(info => displaySearchResult(info.data));
            }  
        };

// <------displayPhone---->
    const displaySearchResult = (data) => {
        const searchResult = document.getElementById('search-result');
        // clean the old data
        //searchResult.innerHTML = '';
        searchResult.textContent = '';
        if (data.length == 0) {
            searchResult.innerHTML = `<p class="text text-center">no result found</p>`;
        }
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
                <button onclick="loadProductDetail('${product.slug}')">details</button>
                </div>
                </div>`
                searchResult.appendChild(div);
                // console.log(product);
            })
        
    };
    // <---display phone details --->
    const loadProductDetail = productId => {
        const url = (`https://openapi.programming-hero.com/api/phone/${productId}`)
        fetch(url)
        .then(res => res.json())
        .then(info =>displayProductDetail(info.data))
    };
    const displayProductDetail = product => {
        const productDetail = document.getElementById('meal-details');
        productDetail.textContent = '';
        const div = document.createElement('div');
        // div.classList.add('card');
        div.innerHTML = `
        <div class="card text-center w-50 mx-auto mb-4">
            <img src="${product.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${product.name}</h5>
            <p class="card-text">Brand name : ${product.brand} </p>
            <p class="card-text">Realised : ${product.releaseDate ? product.releaseDate : 'No Realise date found'} </p>
            <span>display size :${product.mainFeatures.displaySize},</span>
            <span> ${product.mainFeatures.chipSet},</span>
            <span> ${product.mainFeatures.storage},</span>
            <span> ${product.mainFeatures.sensors[0]},</span>
            <span> ${product.mainFeatures.sensors[1]},</span>
            <span> ${product.mainFeatures.sensors[2]},</span>
            <span>bluetooth :${product.others?.Bluetooth ? product.others.Bluetooth : "no Bluetooth "},</span>
            <span>GPS :${product.others.GPS ? product.others.GPS : "no GPS "},</span>
            <span>Radio :${product.others.Radio ? product.others.Radio : "no Radio "},</span>
            </div>
        </div>
        `
        productDetail.appendChild(div);
        console.log(product);
    };
