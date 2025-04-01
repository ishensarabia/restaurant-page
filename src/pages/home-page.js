// import the image
import homeImage from '../assets/images/Home.jpeg'; // Path to your image
import iconImage from '../assets/images/Icon.png'; // Path to your icon image

function createHomePage() {
    // Create a div element
    const homeDiv = document.createElement('div');
    homeDiv.id = 'home-page';

    // Add styles to the div
    homeDiv.style.position = 'relative';
    homeDiv.style.display = 'flex';
    homeDiv.style.flexDirection = 'column';
    homeDiv.style.alignItems = 'center';
    homeDiv.style.justifyContent = 'center';
    homeDiv.style.height = '100vh';
    homeDiv.style.backgroundImage = `url(${homeImage})`;
    homeDiv.style.backgroundSize = 'cover';
    homeDiv.style.backgroundPosition = 'center';
    homeDiv.style.backgroundRepeat = 'no-repeat';
    homeDiv.style.color = '#fff';
    homeDiv.style.fontFamily = 'Arial, sans-serif';

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
    contentContainer.style.display = 'flex';
    contentContainer.style.flexDirection = 'column';
    contentContainer.style.alignItems = 'center';

    // Add content to the content container

    const icon = document.createElement('img');
    icon.src = iconImage; // Set the source to the imported image
    icon.alt = 'Restaurant Icon';
    icon.style.width = '150px'; // Adjust the size as needed
    icon.style.height = '150px'; // Adjust the size as needed
    icon.style.marginBottom = '20px';
    icon.style.borderRadius = '25%'; // Make it circular
    icon.style.transition = 'transform 0.3s';
    contentContainer.appendChild(icon);

    const heading = document.createElement('h1');
    heading.textContent = 'Welcome to Our Restaurant!';
    heading.style.fontSize = '5em';
    heading.style.textAlign = 'center';
    heading.style.marginBottom = '20px';
    heading.style.textShadow = '2px 2px 4px rgba(0, 0, 0, 0.5)';
    heading.style.color = '#fff';
    heading.style.fontFamily = 'Arial, sans-serif';
    heading.style.fontWeight = 'bold';
    heading.style.textTransform = 'uppercase';
    heading.style.letterSpacing = '2px';
    contentContainer.appendChild(heading);

    const description = document.createElement('p');
    description.textContent = 'Enjoy the finest dining experience with us.';
    description.style.fontSize = '1.5em';
    description.style.textAlign = 'center';
    description.style.marginTop = '10px';
    description.style.textShadow = '1px 1px 3px rgba(0, 0, 0, 0.5)';
    description.style.color = '#fff';
    contentContainer.appendChild(description);

    // Append the overlay and content container to the homeDiv
    homeDiv.appendChild(overlay);
    homeDiv.appendChild(contentContainer);

    // Append the div to the content div inside of the body
    const contentDiv = document.getElementById('content');
    if (contentDiv) {
        contentDiv.appendChild(homeDiv);
    } else {
        console.error('Content div not found');
    }
}

export default createHomePage;