document.addEventListener('DOMContentLoaded', function () {
    var buttons = document.querySelectorAll('.btn'); // Select all elements with the 'btn' class

    buttons.forEach(function (button) {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior

            var targetId = button.getAttribute('href'); // Get the target section ID (e.g., #intro)
            var targetElement = document.querySelector(targetId); // Find the target section

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth', // Smooth scrolling effect
                });
            }
        });
    });
});