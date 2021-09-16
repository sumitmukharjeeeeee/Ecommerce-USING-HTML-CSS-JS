// Navbar should be in all pages.So instead of copying the code in all
//html pages we can create it dynamically.

//Selecting Class of navbar First
const createNav = () => {
    let nav = document.querySelector('.navbar');


//Going into inner html

nav.innerHTML = `<div class="nav">
            <img src="./img/dark-logo.png" alt="" class="brand">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">Search</button>
                </div>
                <a href="#"><img src="./img/cart.png" alt=""></a>
                <a href="#"><img src="./img/user.png" alt=""></a>
            </div>
        </div>
        <ul class="link-container">
            <li class="link-item"><a href="" class="link">Home</a></li>
            <li class="link-item"><a href="" class="link">Women</a></li>
            <li class="link-item"><a href="" class="link">Men</a></li>
            <li class="link-item"><a href="" class="link">Kids</a></li>
            <li class="link-item"><a href="" class="link">Accessories</a></li>
        </ul>`;
}

createNav();