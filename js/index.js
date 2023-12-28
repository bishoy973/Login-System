
var personName = document.getElementById('SignUpName');
var personEmail = document.getElementById('signUpEmail');
var personPassword = document.getElementById('signUpPassword');
var personArray = [];

var signinEmail = document.querySelector('#signinEmail')
var signinPassword = document.querySelector('#signinPassword')

var getData = JSON.parse(localStorage.getItem('personsingUp'))
var inputList = Array.from(document.getElementsByClassName('userSignUp'))
var getSignInName = JSON.parse( localStorage.getItem('loginUserName'));

if(getData === null){
    personArray = []
}else{
    personArray = getData
}

function createPersonsignUp(){
 var pesonObject = {
    name: personName.value,
    email: personEmail.value,
    password : personPassword.value
 }
 personArray.push(pesonObject)
 localStorage.setItem('personsingUp',JSON.stringify(personArray))

}

for (let i = 0; i < personArray.length; i++) {
    localStorage.setItem( 'userName', personArray[i].name)
       
   }
   var userNameSaved = localStorage.getItem('userName')

   console.log(typeof(userNameSaved));

function isEmailExist(){
    for (let i = 0; i < personArray.length; i++) {
        if(personArray[i].email.includes(personEmail.value)){
          return true
        } 
        
    }
}
function isSignInEmailExist(){
    for (let i = 0; i < personArray.length; i++) {
        if(personArray[i].email === signinEmail.value){
          return true
        } 
        
    }
}
function isPassExist(){
    for (let i = 0; i < personArray.length; i++) {
        if(personArray[i].password === signinPassword.value){
          return true
        } 
        
    }
}

function isInputEmpty(){
    for (let i = 0; i < inputList.length; i++) {
        if(inputList[i].value === '' ){
            document.getElementById('emptyData').classList.remove('d-none')
            return true

        } 
        
    }
}

var regexName = /^[A-Z][a-z]{4,10}$/;
var regexEmail = /^[a-zA-Z0-9_]{3,10}\@[a-zA-Z0-9]{3,5}(\.net)|(\.com)$/;
var regexPW = /^[A-Z][0-9a-z]{8,20}$/;


function TestNameRegex(){

    if(regexName.test(personName.value) == true){
     personName.classList.add('is-valid')
     personName.classList.remove('is-invalid')
     document.getElementById('errorName').classList.add('d-none')

      return true
    } else if(regexName.test(personName.value) == false){
        personName.classList.remove('is-valid')
        personName.classList.add('is-invalid')
        document.getElementById('errorName').classList.remove('d-none')
        return false
    }
}
// personName.addEventListener('input',TestNameRegex())

function testEmailRegex(){
    if(regexEmail.test(personEmail.value) == true){
        personEmail.classList.add('is-valid')
        personEmail.classList.remove('is-invalid')
        document.getElementById('errorEmail').classList.add('d-none')
        return true
    }
    else if(regexEmail.test(personEmail.value) == false){
        personEmail.classList.remove('is-valid')
        personEmail.classList.add('is-invalid')        
        document.getElementById('errorEmail').classList.remove('d-none')
        return false
    }

}
function testPassRegex(){
    if(regexPW.test(personPassword.value) == true){
        personPassword.classList.add('is-valid')
        personPassword.classList.remove('is-invalid')
        
        document.getElementById('errorPass').classList.add('d-none')

        return true
    }
    else if(regexPW.test(personPassword.value) == false){
        personPassword.classList.remove('is-valid')
        personPassword.classList.add('is-invalid')
        document.getElementById('errorPass').classList.remove('d-none')

        return false
    }

}






function checkInputSignUp(){

    if(isEmailExist() != true && isInputEmpty() != true && TestNameRegex() == true ){
        createPersonsignUp()
        document.querySelector('#signUpbtnn').setAttribute('href',"/index.html")

        document.querySelector('#notExist').classList.add('d-none');
        document.querySelector('#exist').classList.remove('d-none')
    }
    else if(isEmailExist() == true){
        document.querySelector('#notExist').classList.remove('d-none');
        document.querySelector('#exist').classList.add('d-none')
    }
}
     

function checkInputSignIn(){
    for (let i = 0; i < personArray.length; i++) {
        if(personArray[i].email == signinEmail.value && personArray[i].password == signinPassword.value){
            document.querySelector('#loginAnchor').setAttribute('href',"/home.html")
            document.querySelector('#loginFailed').classList.add('d-none')
            document.querySelector('#loginSuccess').classList.remove('d-none')
            localStorage.setItem('loginUserName', JSON.stringify(personArray[i].name))
        } else{
            document.querySelector('#loginFailed').classList.remove('d-none')
            document.querySelector('#loginSuccess').classList.add('d-none')
        }
        
    }
} 

if(document.getElementById('homeTitle')){
    document.getElementById('homeTitle').innerHTML = `Hello ${getSignInName} in Home Page`
}


    
