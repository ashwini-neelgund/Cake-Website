function cakeConsultation() {

    var regName = /^[a-zA-Z][a-zA-Z0-9]* [a-zA-Z0-9]+$/;
    var name = document.getElementById('name').value;
    if(!regName.test(name)){
        alert('Please enter valid full name(first & last name).');
        document.getElementById('name').focus();
        return false;
    }

    var regEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)+$/;
    var email = document.getElementById('email').value;
    if(!regEmail.test(email)){
        alert('Please enter valid email address.');
        document.getElementById('email').focus();
        return false;
    }

    var regNum = /^\d{10}$/;
    var contactNum = document.getElementById('contactNum').value;
    if(!regNum.test(contactNum)){
        alert('Please enter valid mobile number.');
        document.getElementById('contactNum').focus();
        return false;
    }

    var regDate = /^((0?[1-9]|1[012])[/](0?[1-9]|[12][0-9]|3[01])[/](19|20)?[0-9]{2})*$/;
    var dateRequired = document.getElementById('dateRequired').value;
    if(!regDate.test(dateRequired)){
        alert('Please enter valid date in format mm/dd/yyyy.');
        document.getElementById('dateRequired').focus();
        return false;
    }else{
        return true;
    }

  }