function validateForm(){

    
    var Fname = document.form.fname.value;
    var Lname = document.form.lname.value; 
    var Password = document.form.password.value; 
    var Securityquestion = document.form.securityQuestion.value;
    var letters = /^[A-Za-z]+$/; 

    
    //validation condition for firstName

    if(Fname.trim()=="" || !Fname.match(letters)){
        alert("First name must be filled and should contain letters only");
        return false;
    }

    //validation condition for lastName
    
    else if(Lname.trim()=="" || !Lname.match(letters)){
        alert("Last name must be filled out and must contain letters only");3
        return false;
    }

    //validation condition for password
    
    else if(Password.trim()=="" || Password.trim().length<8){
        alert("Password is either empty or less than 8 characters");
        return false;
    }
    
    // validation condition for securityQuestion
    
    else if(Securityquestion.trim()=="" || !Securityquestion.match(letters)){
        alert("It can't be empty and must contain letters only");
        return false;
    }

    // if every condition is satisfied then only return true
    
    else{
        
        return true;
    }

    
}