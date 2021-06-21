function validate() {
    document.querySelector("#submit").type = "button";
    document.querySelector("#company").addEventListener("change", (e) => {
        console.log(e.target);
        if (document.querySelector("#company").checked) {
            document.querySelector("#companyInfo").style.display = "block";
        } else {
            document.querySelector("#companyInfo").style.display = "none";
        }
    });

    document.querySelector("#submit").addEventListener("click", (e) => {
        let validOut = [];
        let userName = document.querySelector("#username");
        let email = document.querySelector("#email");
        let passWord = document.querySelector("#password");
        let confirmPass = document.querySelector("#confirm-password");
        let checkBox = document.querySelector("#company");
        let userTest = /^[A-Za-z0-9]{3,20}$/;
        let emailTest = /^[^@.]+@[^@]*\.[^@]*$/;
        let passTest = /^[\w]{5,15}$/;

        //console.log(checkBox.checked);

        if (userTest.exec(userName.value) === null) {
            userName.style.borderColor = "red";
            validOut.push(false);
        } else {
            userName.style.borderColor = "";
            validOut.push(true);
        }

        if (emailTest.exec(email.value) === null) {
            email.style.borderColor = "red";
            validOut.push(false);
        } else {
            email.style.borderColor = "";
            validOut.push(true);
        }

        if (
            passWord.value === confirmPass.value &&
            passTest.exec(confirmPass.value) != null &&
            passTest.exec(passWord.value) != null
        ) {
            confirmPass.style.borderColor = "";
            passWord.style.borderColor = "";
            validOut.push(true);
        } else {
            confirmPass.style.borderColor = "red";
            passWord.style.borderColor = "red";
            validOut.push(false);
        }

        if (checkBox.checked) {
            let company = document.querySelector("#companyNumber");
            if (company.value < 1000 || company.value > 9999) {
                company.style.borderColor = "red";
                validOut.push(false);
            } else {
                company.style.borderColor = "";
                validOut.push(true);
            }
        }

        if (!validOut.includes(false)) {
            document.querySelector("#valid").style.display = "block";
        } else {
            document.querySelector("#valid").style.display = "none";
        }
    });
}



// function validate() {
//     let submitButton = document.getElementById('submit');
//     submitButton.addEventListener('click', validateFormHandler);
//     let isCompanyCheckbox = document.getElementById('company');
//     isCompanyCheckbox.addEventListener('click', onIsCompanyHandler);

//     function validateFormHandler(e) {
//         e.preventDefault();
//         let usernameInput = document.getElementById('username');
//         let usernameRegex = /^[a-zA-Z0-9]{3,20}&/;
//         let usernameIsValid = usernameRegex.test(usernameInput.value);
//         setBorder(usernameInput, usernameIsValid);

//         let emailInput = document.getElementById('email');
//         let emailRegex = /^.*@*\..*&/;
//         let emailIsValid = emailRegex.test(emailInput.value);
//         setBorder(emailInput, emailIsValid);

//         let passwordRegex = /^\w{5,15}&/;
//         let passwordInput = document.getElementById('password');
//         let confirmPasswordInput = document.getElementById('confirm-password');
//         let passwordIsValid = passwordRegex.test(passwordInput.value);
//         let confirmpasswordIsvalid = passwordRegex.test(confirmPasswordInput.value);
//         let passwordsMatch = passwordIsValid && confirmpasswordIsvalid 
//         && passwordInput.value === confirmPasswordInput.value;
//         setBorder(passwordInput, passwordsMatch);
//         setBorder(confirmPasswordInput, passwordsMatch); 

//         let companyNumberIsValid = false;
//         let isCompanyCheckbox = document.getElementById('company');
//         if(isCompanyCheckbox.checked) {
//             let companyNumberInput = document.getElementById('companyNumber');
//             if(companyNumberInput.value.trim() !== '' && !isNaN(Number(companyNumberInput.value))) {
//                 let companyNumber = Number(companyNumberInput.value);
//                 if(companyNumber >= 1000 && companyNumber <= 9999) {
//                     companyNumberIsValid = true;
//                 }
//             }

//             setBorder(companyNumberInput, companyNumberIsValid);
//         }

//         let validDiv = document.getElementById('valid');
//         let mainInputsAreValid = usernameIsValid && emailIsValid  && passwordsMatch;
//         let companyInfoIsValid = !isCompanyCheckbox.checked || (isCompanyCheckbox.checked && companyNumberIsValid)
//         let shouldShowValidDiv = mainInputsAreValid && companyInfoIsValid;
//         validDiv.style.display = shouldShowValidDiv ? 'block' : 'none';
//     }

//     function onIsCompanyHandler(e) {
//         let companyInfoFieldset = document.getElementById('companyInfo');
//         companyInfoFieldset.style.display = e.target.checked ? 'black' : 'none';
//     }

//     function setBorder(element, isValid) {
//         if(isValid) {
//             element.style.setProperty('border', 'none');
//         } else {
//             element.style.setProperty('border', '2px solid red');
//         }
//     }
// }