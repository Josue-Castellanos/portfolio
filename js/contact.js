/* EMAIL JS */
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    emailjs.sendForm('service_0ahrgcr','template_ntcbmyb','#contact-form','M4_QIm01CH4DcTDMs')
        .then(() => {
            // Show sent message
            contactMessage.textContent = 'Message sent successfully'

            // Remove message after 5 seconds
            setTimeout(() => {
                contactMessage.textContent = ''

            }, 5000)

            // clear input fields
            contactForm.reset()

        }, () => {
            // Show error message
            contactMessage.textContent = 'Message not sent, service error'
        })
}

contactForm.addEventListener('submit', sendEmail)