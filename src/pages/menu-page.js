import backgroundImage from "../assets/images/Home.jpeg"; // Path to your image

function createMenuPage() {
  const menuPage = document.createElement("div");
  menuPage.classList.add("menu-page");

  // Add a dark overlay
  menuPage.style.position = "relative";
  menuPage.style.backgroundImage = `url(${backgroundImage})`;
  menuPage.style.backgroundSize = "cover";
  menuPage.style.backgroundPosition = "center";
  menuPage.style.backgroundRepeat = "no-repeat";
  menuPage.style.height = "100vh";
  menuPage.style.color = "#fff";
  menuPage.style.fontFamily = "Arial, sans-serif";
  menuPage.style.textAlign = "center";
  menuPage.style.padding = "20px";

  // Create an overlay div
  const overlay = document.createElement("div");
  overlay.style.position = "absolute";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // Adjust the opacity for darkness
  overlay.style.zIndex = "1";

  // Create a content container to sit above the overlay
  const contentContainer = document.createElement("div");
  contentContainer.style.position = "relative";
  contentContainer.style.zIndex = "2";

  const title = document.createElement("h1");
  title.textContent = "Our Menu";
  contentContainer.appendChild(title);

  const menuItems = [
    {
      name: "Margherita Pizza",
      description: "Classic pizza with tomato, mozzarella, and basil.",
      price: "$12",
    },
    {
      name: "Spaghetti Carbonara",
      description: "Pasta with pancetta, egg, and Parmesan.",
      price: "$15",
    },
    {
      name: "Caesar Salad",
      description: "Crisp romaine lettuce with Caesar dressing and croutons.",
      price: "$10",
    },
    {
      name: "Panna Cotta",
      description: "Creamy dessert topped with berry sauce.",
      price: "$6",
    },
    {
      name: "Risotto",
      description: "Creamy rice dish with mushrooms and Parmesan.",
      price: "$14",
    },
    {
      name: "Gelato",
      description: "Italian-style ice cream in various flavors.",
      price: "$5",
    },
  ];

  const menuList = document.createElement("ul");
  menuItems.forEach((item) => {
    const menuItem = document.createElement("li");
    menuItem.classList.add("menu-item");

    const itemName = document.createElement("h2");
    itemName.textContent = item.name;

    const itemDescription = document.createElement("p");
    itemDescription.textContent = item.description;

    const itemPrice = document.createElement("span");
    itemPrice.textContent = item.price;

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDescription);
    menuItem.appendChild(itemPrice);
    menuList.appendChild(menuItem);
  });

  contentContainer.appendChild(menuList);
  menuPage.appendChild(overlay); // Add the overlay to the menu page
  menuPage.appendChild(contentContainer); // Add the content container to the menu page

  // Append the div to the content div inside of the body
  const contentDiv = document.getElementById("content");
  if (contentDiv) {
    contentDiv.appendChild(menuPage);
  } else {
    console.error("Content div not found");
  }
}

export default createMenuPage;