//get the input via dom api

document.getElementById("signIn").onclick = function(){

    var userEmail = document.getElementById("inputEmail").value;
    var userPassword = document.getElementById("inputPassword").value;

    console.log();
};




// class for user input

class userInput {
    constructor(email_address, password){
        this._email_address = email_address;
        this._password = password;
    }

    get email_address(){
        return this._email_address;
    }
    get password(){
        return this._password;
    }
}



// form event listener




// verify user input and save it 