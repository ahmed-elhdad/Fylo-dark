let btn = document.getElementById("btn-sub");
const inputArea = document.querySelector(".input");
btn.onclick = () => {
    const input = document.querySelector('.get-input .input input');
    let emailRe = /\w+\n*@\w+.\w+/;
    if (input.value !== "") {
        if (input.value.match(emailRe)) {
            if (inputArea.lastChild.className === 'valid') {
                inputArea.lastChild.remove();
            }else{
                return;
            }
        } else{
            if (inputArea.lastChild.className === 'valid'){
                return;
            }else if (inputArea.lastChild.textContent === 'the input feild is empty') {
                inputArea.lastChild.textContent = "enter valid email address";
            }
            else if (inputArea.lastChild.className !== 'valid'){
                let span = document.createElement('span');
                span.textContent= "enter valid email address";
                span.classList.add('valid');
                inputArea.appendChild(span);
            }
        }
    }else{
        if (inputArea.lastChild.className === 'valid'){
            return;
        }else if (inputArea.lastChild.textContent === "enter valid email address") {
            inputArea.lastChild.textContent === "the input feild is empty";
        }
        else if (inputArea.lastChild.className !== 'valid') {
            let span = document.createElement('span');
            span.textContent= "the input feild is empty";
            span.classList.add('valid');
            inputArea.appendChild(span);
        }
    }
}