//Slider Function making work

const productContainers = [...document.querySelectorAll('.product-container')]
const nextBtn = [...document.querySelectorAll('.nxt-btn')];
const prevBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, idx) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nextBtn[idx].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    prevBtn[idx].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})