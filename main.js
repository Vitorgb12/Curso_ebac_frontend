const form = document.getElementById('form-numeros');

let formvalid = false;

function numbervalid(primeiro, segundo) {
    return segundo > primeiro;
}
form.addEventListener('submit', function(e) {
    e.preventDefault();
    let primeiro = parseFloat(document.getElementById('primeiro').value);
    let segundo = parseFloat(document.getElementById('segundo').value);

    if (numbervalid(primeiro, segundo)){
        document.querySelector('.error-message').style.display = 'none';
        document.querySelector('.success-message').style.display = 'block';
        primeiro.value = '';
        segundo.value = '';
    } 
    else {
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';
        
    }
});