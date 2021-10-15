const div1 = document.getElementById("first");
const div2 = document.getElementById("second");
const div3 = document.getElementById("third");

const img = document.getElementById("art");
const desc = document.getElementById('desc');
const price = document.getElementById('price');

const free = document.getElementById('free');
const express = document.getElementById('express');


const shippingField = document.getElementById('shipping');
const total = document.getElementById('total');



///Target select

function isContain(elem) {
    return elem.classList.contains('selectd');
}


//Update total

function updateTotal() {
    const shippingCharge = parseInt(shippingField.innerText);
    const productPrice = parseInt(price.innerText);

    const grandTotal = shippingCharge + productPrice;
    total.innerText = grandTotal;

}

free.addEventListener('click', function () {
    //focused call

    if (!isContain(free)) {
        free.classList.add('selected');
        express.classList.remove('selected');
    }

    shippingField.innerText = 5;
    updateTotal();
})

express.addEventListener('click', function () {

    if (!isContain(express)) {
        free.classList.remove('selected');
        express.classList.add('selected');
    }

    shippingField.innerText = 30;
    updateTotal();
})


div1.addEventListener("click", function () {
    img.src = "images/1.jpg";
    desc.innerText = 'First Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry';
    price.innerText = '650';


    updateTotal();
});

div2.addEventListener("click", function () {
    img.src = "images/2.jpg";
    desc.innerText = 'Second Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry';
    price.innerText = '550';

    updateTotal();
});

div3.addEventListener("click", function () {
    img.src = "images/3.jpg";
    desc.innerText = 'Third Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry';
    price.innerText = '450';


    updateTotal();
});