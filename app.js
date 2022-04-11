var submitBtn = document.getElementById('submit_button');
var allRadio = document.querySelectorAll('input[type="radio"]')
var ratingBlock = document.querySelector('.rating-state');
var thankyouBlock = document.querySelector('.thank-you-state');

submitBtn.addEventListener("click", function (event) {
    for (var i = 0; i < allRadio.length; i++) {
        if (allRadio[i].checked === true) {
            var idVal = allRadio[i].getAttribute('id');
            ratingBlock.style.display = 'none';
            thankyouBlock.style.display = 'flex';
            thankyouBlock.style.transition = 'all 0.5s ease-in-out';
            var ratingSelected = document.querySelector("label[for='" + idVal + "']").innerText;
            document.querySelector('#user-rating-selected').innerText = ratingSelected;
        }
    }
});