// scripts here
const get_btn = document.getElementsByClassName("AB")
Array.from(get_btn).forEach(btn =>
    btn.addEventListener("click", function () {
        alert("This is not the alert you are looking for")
    }
));