document.addEventListener("DOMContentLoaded", function() {
    console.log("Добро пожаловать на FunZic!");

    const form = document.getElementById("contact-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Спасибо за ваше сообщение, " + document.getElementById("name").value + "!");
    });
});