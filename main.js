/* // document.getElementById('inputValue').value
const searchPhone = (searchText) => {
    const searchField = document.getElementById('Search-field');
    const searchText = searchField.value;

    searchField.value = "";
    console.log(searchText)
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    fetch(url)
    .then(res => res.json())
    .then(data =>displayData(data));
};
const displayData = (data) => {
    console.log(data.data.brand);
    // div = document.getElementById('inputValue').value;

    // for (const phone of data) {
    //     console.log(phone);
    // }
} */

const searchPhone = () => {
    const searchField = document.getElementById('Search-field');
    const searchText = searchField.value;

    searchField.value="";
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(info => displayPhoneSearch(info.data));
    // .data.data
};
const displayPhoneSearch = (phones) => {
    const cartContainer = document.getElementById('cart-container');
    phones.forEach(phone => {
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML= ` <div class="card h-100">
                <img src="..." class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
       </div>`
       cartContainer.appendChild(div);
        console.log(phone); 
    });

}