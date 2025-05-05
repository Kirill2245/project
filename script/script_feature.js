const emailForm = document.getElementById('emailForm');
const input_email = document.getElementById('input_email');
const errorMessage = document.getElementById('massageBox');
const error_logo = document.getElementById('error_logo');
const massage = document.getElementById('errorMessage');

function scrolInteractive(){
    document.addEventListener('scroll', function() {
        const elements = document.querySelectorAll('.img_log_update');
        const form = document.querySelectorAll('.emailForm');
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top < windowHeight && rect.bottom > 0) {
                element.classList.add('visible');
            }
            else{
                element.classList.remove('visible');
            }
        });
        form.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            if (rect.top < windowHeight && rect.bottom > 0) {
                element.classList.add('visible');
            }
            else{
                element.classList.remove('visible');
            }
        });
    });


}

function try_email_input(){
    input_email.addEventListener('input', function() {

        if (input_email.checkValidity()) {
            input_email.style.borderColor = "rgb(101, 252, 101)"; 
            errorMessage.style.display = 'flex'; 
            error_logo.src = "img/successfully_logo1.png";
            massage.innerText = "Success message";
            massage.style.color = "rgb(101, 252, 101)"
        } else {
            input_email.style.borderColor = "#f15c5a"; 
            errorMessage.style.display = 'flex';
            massage.innerText = "Error Massage";
            error_logo.src = "img/error_logo.png";
            massage.style.color = "#f15c5a"
        }
    });
    emailForm.addEventListener('submit', function(event) {
        if (!input_email.checkValidity()) {
            event.preventDefault(); 
        }
    });
}

try_email_input()
scrolInteractive()