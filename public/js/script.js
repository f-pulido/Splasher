document.getElementById("signUpSubmit").addEventListener("click", displayPopUpMessage);


function displayPopUpMessage() {
    var x = document.getElementById("popUpMessage");

    setTimeout(function(){x.style.display = "none";}, 3000)
}