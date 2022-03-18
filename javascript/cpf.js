const input = document.querySelector('#cpf');

input.addEventListener('keypress', () => {
    let inputLenght = input.value.length;
    if(inputLength === 3 || inputLengtht === 7){
        input.value += ".";
    }else if (inputLength === 11){
        input.value += "-";
    }
    })