// Step-1: Submit btn
document.getElementById('btn-submit').addEventListener('click', function(){
    // Step-2: Email
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // step-3: password
    const passwordFiel = document.getElementById('user-password');
    const password = passwordFiel.value;
    // step-4: verify
    if(email === 'kalyan@gmail.com' && password === '1234'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Ivalid User');
    }
    
})



