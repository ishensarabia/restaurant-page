import backgroundImage from '../assets/images/Home.jpeg'; // Path to your background image
import iconImage from '../assets/images/Icon.png'; // Path to your icon image

function createContactPage() {
    const contactPage = document.createElement('div');
    contactPage.classList.add('contact-page');

    // Add styles for the background image and overlay
    contactPage.style.position = 'relative';
    contactPage.style.backgroundImage = `url(${backgroundImage})`;
    contactPage.style.backgroundSize = 'cover';
    contactPage.style.backgroundPosition = 'center';
    contactPage.style.backgroundRepeat = 'no-repeat';
    contactPage.style.height = '100vh';
    contactPage.style.color = '#fff';
    contactPage.style.fontFamily = 'Arial, sans-serif';
    contactPage.style.textAlign = 'center';
    contactPage.style.padding = '20px';

    // Create an overlay div
    const overlay = document.createElement('div');
    overlay.style.position = 'absolute';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Adjust the opacity for darkness
    overlay.style.zIndex = '1';

    // Create a content container to sit above the overlay
    const contentContainer = document.createElement('div');
    contentContainer.style.position = 'relative';
    contentContainer.style.zIndex = '2';

    const icon = document.createElement('img');
    icon.src = iconImage; // Set the source to the imported image
    icon.alt = 'Restaurant Icon';
    icon.style.width = '150px'; 
    icon.style.height = '150px'; 
    
    contentContainer.appendChild(icon);

    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';
    contentContainer.appendChild(heading);

    const phone = document.createElement('p');
    phone.textContent = 'Phone: (123) 456-7890';
    contentContainer.appendChild(phone);

    const email = document.createElement('p');
    email.textContent = 'Email: contact@restaurant.com';
    contentContainer.appendChild(email);

    const address = document.createElement('p');
    address.textContent = 'Address: 123 Food Street, Flavor Town, USA';
    contentContainer.appendChild(address);

    const form = document.createElement('form');
    form.classList.add('contact-form');

    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Your Name';
    nameInput.required = true;
    form.appendChild(nameInput);

    const emailInput = document.createElement('input');
    emailInput.type = 'email';
    emailInput.placeholder = 'Your Email';
    emailInput.required = true;
    form.appendChild(emailInput);

    const messageInput = document.createElement('textarea');
    messageInput.placeholder = 'Your Message';
    messageInput.required = true;
    form.appendChild(messageInput);

    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.textContent = 'Send Message';
    form.appendChild(submitButton);

    // Append the form to the content container
    contentContainer.appendChild(form);

    // Append the overlay and content container to the contact page
    contactPage.appendChild(overlay);
    contactPage.appendChild(contentContainer);

    // Append the div to the content div inside of the body
    const contentDiv = document.getElementById('content');
    if (contentDiv) {
        contentDiv.appendChild(contactPage);
    } else {
        console.error('Content div not found');
    }
}

export default createContactPage;