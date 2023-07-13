function checkForm() {
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let passwordConfirm = document.querySelector("#password-confirm").value;

    if (document.querySelector("#first-name").value === "" || document.querySelector("#last-name").value === "") {
        return alert("Name required");
    } else if (email.value === "") {
        return alert("Email address required");
    } else if (!email.validity.valid) {
        return alert("Enter valid email address");
    } else if (password.length < 8) {
        document.querySelector("#password").value = "";
        document.querySelector("#password-confirm").value = "";
        return alert("Password must have 8 - 30 characters!");
    } else if (!password.validity.valid) {
        document.querySelector("#password").value = "";
        document.querySelector("#password-confirm").value = "";
        return alert("Password requires at least 1 upper case letter, 1 lower case letter, a symbol, and a number.")
    } else if (passwordConfirm !== password.value) {
        document.querySelector("#password-confirm").value = "";
        return alert("Password doesn't match");
    } 
    return alert("Account created successfully!");
}

let submitButton = document.querySelector(".submit-button");
submitButton.addEventListener("click", checkForm);

