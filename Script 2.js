function validate (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const msgBox = document.getElementById('message');
    let message = '';
    if(email === ''){
        message = 'Please enter an email.';
        msgBox.style.color = 'pink';
    } else if (pass === '') {
        message = 'Please enter a password.';
        msgBox.style.color = 'brown';
    } else if (age === '') {
        message = 'Please enter a age.';
        msgBox.style.color = 'orange';
    } else if  {
        message = 'Login successful';
        msgBox.style.color = 'blue';
    }
    msgBox.innerHTML = message;
}
document.getElementById("LoginForm").onsubmit = validate;
document.getElementById('email').oninput=()=> validate({preventDefault: () =>{}});
ocument.getElementById('password').oninput = () => validate({ preventDefault: () => { } })
ocument.getElementById('age').oninput = () => validate({ preventDefault: () => { } });