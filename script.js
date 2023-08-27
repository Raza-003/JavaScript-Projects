let string = ""; // This variable is not necessary, so you can remove it
let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            document.getElementById('inputBox').value = string;
        }
        else if (e.target.innerHTML == "AC") {
            string = "";
            document.getElementById('inputBox').value = string;
        }
        else if (e.target.innerHTML == "Del") {
            string = string.substring(0, string.length - 1);
            document.getElementById('inputBox').value = string;
        }
        else {
            string = string + e.target.innerHTML;
            document.getElementById('inputBox').value = string;
            // document.getElementById('inputBox').value += e.target.innerHTML;
        }

    });
});
