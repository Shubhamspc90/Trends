let card = document.querySelector(".trend");
let card2 = document.getElementById("trendSec");
let about = document.querySelector(".about");
let contact = document.querySelector(".contact");
let cart = []; // Array to store cart items
let numberOfItems = 0; // Variable to store the number of items

console.log(card);
let blog = document.querySelector(".trends");
let mainPage = document.querySelector(".main");

function homes() {
    mainPage.style.display = "flex";
    card.style.display = "block";
    card2.style.display = "block";
    blog.style.display = "block";
    about.style.display = "none";
    contact.style.display = "none";
    document.querySelector(".cart").style.display = "none";

    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "rgb(2, 173, 173)";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "black";
}

function shops() {
    mainPage.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    contact.style.display = "none";
    document.querySelector(".cart").style.display = "none";
    card.style.display = "block";
    card2.style.display = "block";

    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "rgb(2, 173, 173)";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "black";
}

function blogs() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "block";
    about.style.display = "none";
    contact.style.display = "none";
    document.querySelector(".cart").style.display = "none";

    document.getElementById("blog").style.color = "rgb(2, 173, 173)";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "black";
}

function abouts() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    about.style.display = "block";
    contact.style.display = "none";
    document.querySelector(".cart").style.display = "none";

    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "rgb(2, 173, 173)";
}

function contacts() {
    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    contact.style.display = "block";
    document.querySelector(".cart").style.display = "none";

    document.getElementById("blog").style.color = "black";
    document.getElementById("home").style.color = "black";
    document.getElementById("shop").style.color = "black";
    document.getElementById("contact").style.color = "black";
    document.getElementById("about").style.color = "black";
    document.getElementById("contact").style.color = "rgb(2, 173, 173)";
}

// cart
function show(img) {
    let newImg = document.getElementById("newImg");
    console.log(img);
    newImg.src = img.src;

    mainPage.style.display = "none";
    card.style.display = "none";
    card2.style.display = "none";
    blog.style.display = "none";
    about.style.display = "none";
    contact.style.display = "none";
    document.querySelector(".cart").style.display = "flex";
}

function addCart() {
    numberOfItems++;
    alert(`Item added to cart! Your cart now has ${numberOfItems} items.`);
}

// Buy Now button  method 1
// document.getElementById("buyNow").addEventListener("click", function () {
//     alert("Redirecting to payment gateway...");

//     window.location.href = "https://www.paypal.com/";
   
// });

// method 2
document.getElementById("buyNow").addEventListener("click", function () {
    // Replace 'path/to/your/image.jpg' with the actual path to your image
    window.open("./img/gpay.jpg", "_blank");
});


// Back button
document.getElementById("backBtn").addEventListener("click", function () {
    document.querySelector(".cart").style.display = "none";
    mainPage.style.display = "flex";
    card.style.display = "block";
    card2.style.display = "block";
});

// Function to handle the cart icon click
function goToCart() {
    if (numberOfItems > 0) {
        alert(`You have ${numberOfItems} items in your cart.`);
    } else {
        alert("Your cart is empty.");
    }
}

// Function for Sign Up button
function signUp() {
    const emailInput = document.querySelector(".inp input");
    const email = emailInput.value;

    if (email) {
        alert(`Thank you for signing up with ${email}!`);
        emailInput.value = "";
    } else {
        alert("Please enter a valid email address.");
    }
}

// Function for Submit button
function submitForm() {
    const name = document.querySelector(".form input:nth-of-type(1)").value;
    const age = document.querySelector(".form input:nth-of-type(2)").value;
    const contact = document.querySelector(".form input:nth-of-type(3)").value;
    const gender = document.querySelector(".form input:nth-of-type(4)").value;
    const address = document.querySelector(".form input:nth-of-type(5)").value;

    if (name && age && contact && gender && address) {
        alert("Form submitted successfully!");
        document.querySelector(".form input:nth-of-type(1)").value = "";
        document.querySelector(".form input:nth-of-type(2)").value = "";
        document.querySelector(".form input:nth-of-type(3)").value = "";
        document.querySelector(".form input:nth-of-type(4)").value = "";
        document.querySelector(".form input:nth-of-type(5)").value = "";
    } else {
        alert("Please fill out all the fields.");
    }
}