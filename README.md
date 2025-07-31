# 💊Med-Finder

A vibrant and modern web application built with Angular to help users find the availability and pricing of medicines in pharmacies across various districts of Odisha. This project serves as a demonstration of front-end development skills, featuring a dynamic user interface and a responsive, component-based architecture.

---

## 🚀 Key Features

* **Medicine Search:** Search for medicines by name.
* **Location-Based Filtering:** A dropdown menu populated with numerous districts of Odisha to narrow down the search.
* **Real-time Style Results:** View search results instantly, showing pharmacy details, price in Rupees (₹), and a clear   "In Stock" or "Out of Stock" status.
* **Responsive Design:** The layout is functional and aesthetically pleasing on different screen sizes.

---

## 💻 Technology Stack

* **Framework:** [Angular](https://angular.io/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** CSS3 (featuring Flexbox, Grid, Custom Animations, and `backdrop-filter` for the glass effect)
* **Markup:** HTML5
* **Version Control:** Git & GitHub

---

## 🛠️ Setup and Installation

To get a local copy up and running, follow these simple steps.

### Prerequisites

* Node.js and npm: [https://nodejs.org/](https://nodejs.org/)
* Angular CLI: `npm install -g @angular/cli`

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/saji-15/Med-Finder.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd arogya-odisha-finder
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```
4.  **Run the development server:**
    ```sh
    ng serve --open
    ```
    The application will automatically open on `http://localhost:4200/`.

---

## 🧭 How to Use

The application has two main pages accessible from the navigation bar:

1.  **Medicine Finder:**
    * Enter the name of a medicine (e.g., "Paracetamol") in the search text box.
    * Select a district from the dropdown menu (e.g., "Brajrajnagar").
    * Click the "Search" button.
    * The results will appear below, showing which pharmacies in that district have the medicine.


## 🔮 Future Improvements

This is a demonstration project, but it could be expanded with features like:

* [ ] Integration with a real backend API and database for live inventory data.
* [ ] User authentication for saving favorite searches or pharmacies.
* [ ] An interactive map view to show pharmacy locations.
* [ ] Advanced filtering options (e.g., filter by price, 24/7 pharmacies).