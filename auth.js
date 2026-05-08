 
function register() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user === "" || pass === ""){
        alert("Fill all fields");
        return;
    }

    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    alert("Account created!");
    window.location.href = "login.html";
}

 
function login() {
    let user = document.getElementById("loginUser").value;
    let pass = document.getElementById("loginPass").value;

    let storedUser = localStorage.getItem("username");
    let storedPass = localStorage.getItem("password");

    if(user === storedUser && pass === storedPass){
        localStorage.setItem("loggedIn", "true");
        window.location.href = "index.html";  
    } else {
        alert("Wrong username or password");
    }
}

 
function logout() {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
}

 
function checkLogin(){
    let isLogged = localStorage.getItem("loggedIn");
    if(!isLogged){
        window.location.href = "login.html";
    }
}

document.getElementById("paymentForm")
.addEventListener("submit", async function(e){

e.preventDefault();

const fullname = document.getElementById("fullname").value;
const phone = document.getElementById("phone").value;
const amount = document.getElementById("amount").value;
const payment = document.getElementById("payment").value;

const data = {
    fullname,
    phone,
    amount,
    payment
};

try{

// URL ya backend cyangwa Twilio Function
const response = await fetch("https://your-api-url.com/send-sms",{

    method:"POST",

    headers:{
        "Content-Type":"application/json"
    },

    body: JSON.stringify(data)

});

document.getElementById("msg").innerHTML =
"Payment Submitted Successfully!";

}catch(error){

document.getElementById("msg").innerHTML =
"Error Sending Payment";

}

});
