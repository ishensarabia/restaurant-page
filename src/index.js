// Import styles
import './styles.css';
// Import page modules
import createHomePage from './pages/home-page.js';
import createMenuPage from './pages/menu-page.js';
import createContactPage from './pages/contact-page.js';

// Get the page buttons
const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const contactButton = document.getElementById('contact');

const clearContent = () => {
    const content = document.getElementById('content');
    if (content) {
        content.innerHTML = '';
        console.log('Content cleared:', content.innerHTML); // Debugging line
    } else {
        console.error("Element with id 'content' not found in the DOM.");
    }
};


// Add event listeners to buttons
homeButton.addEventListener('click', () => {
    clearContent();
    createHomePage();
});

menuButton.addEventListener('click', () => {
    clearContent();
    createMenuPage();
}
);
contactButton.addEventListener('click', () => {
    clearContent();
    createContactPage();
}
);


createHomePage(); // Load the home page by default

