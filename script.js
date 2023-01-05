

const form = document.getElementById('myForm');
const name = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');
const submitBtn = document.querySelector(".send-message");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Should not reload");
    validation();
});


const validation = () => {
    if(form.name.value == ""){
        alert("Please provide your name!!!");
        document.myForm.name.focus();
        return false
    }
    else if(form.phone.value == ""){
        alert("Please provide your phone!!");
        return false
    }else if(form.email.value == ""){
        alert("Provide the email");
        return false
    }else if(form.subject.value == ""){
        alert("Provide the subject");
        return false
    }else if(form.message.value == ""){
        alert("Provide the message");
    }else {
         alert("Message sent!!");
         return true
    }
}

// function Validation() {

//             if (document.myForm.email.value == "") {
//                 alert("Please provide your Email ");
//                 document.myForm.email.focus()


//                 return false

//             } else if (document.myForm.name.value == "") {
//                 alert("Please provide names.");
//                 document.myForm.name.focus();
//                 return false


//             }else if (document.myForm.subject.value == "") {
//                 alert("please provide your subject");
//                 document.myForm.subject.focus();
//                 return false

//             }else if (document.myForm.message.value == "") {
//                 alert("please provide your message to us");
//                 document.myForm.message.focus();
//                 return false
//             }else {
//                 alert("Thank you very much your message has been recieved!");
//                 return true
//             }

//         }
