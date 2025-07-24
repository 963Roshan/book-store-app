# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# 📚 ReactJS Full Stack Interactive Bookstore Application

## 📖 Description

A full-stack React application that allows users to browse, search, and purchase books. Users can view book details, manage their cart, and complete a checkout process. This project demonstrates interactive UI, routing, state management, and API integration using a clean architecture.

---

> 
## 🌐 Live Previews

| Platform | Link |
|----------|------|
| 🔵 Vercel | [Visit Site](https://sr-book-store-app.vercel.app/) |
| 🟢 Netlify | [Visit Site](https://sr-bookstore-app.netlify.app/) |

----------------------------------------------------
- ## 📸 Screenshot

### Home Page
![Home Page](https://res.cloudinary.com/deense0dl/image/upload/v1753337127/Screenshot_2025-07-24_110223_hmtsnw.png)

### BookList Page
![BookList Page](https://res.cloudinary.com/deense0dl/image/upload/v1753337143/Screenshot_2025-07-24_110317_wnt5j7.png)

### Cart Page
![Cart Page](https://res.cloudinary.com/deense0dl/image/upload/v1753337398/Screenshot_2025-07-24_113937_bphjrz.png)
---

## 🛠 Installation

```bash
# Clone the repository
git clone https://github.com/your-username/bookstore-app.git

# Navigate into the directory
cd bookstore-app

# Install dependencies
npm install

# Start the development server
npm start
```

---

## 💡 Usage

- Browse the home page and explore the latest books
- Search for books by title or author
- Filter books by price range
- View detailed information about a book
- Add/remove books from the shopping cart
- Proceed to checkout and place an order

---

## ✨ Features

- 🔍 Book search and filtering
- 🛒 Add to cart & remove from cart
- 📘 Book details view
- 📦 Checkout and order confirmation
- 🔁 Route-based navigation using React Router
- 💾 Persistent cart state using Context API
- ✅ Form validation for user details

---

## 🧰 Technologies Used

- ⚛️ **ReactJS**
- 🧭 **React Router DOM**
- 📦 **React Context API**
- 💅 **CSS3**
- 🧪 **react-loader-spinner**
- 🎚 **rc-slider**
- 🧩 **react-icons**
- 🔗 **IT Bookstore API**: [https://api.itbook.store](https://api.itbook.store)

---

## 📁 Pages & Routes

| Page               | Route           |
|--------------------|-----------------|
| Home               | `/`             |
| Book List          | `/books`        |
| Book Details       | `/books/:isbn13`|
| Cart               | `/cart`         |
| Checkout           | `/checkout`     |
| Order Confirmation | `/order-success`|
| Not Found          | `/not-found`    |

---

## 🧱 Component Overview

### 🔹 Home
- Header with navigation links
- Banner and CTA to explore books

### 🔹 Book Listing
- Book list view
- Search bar
- Price filter
- Book item cards

### 🔹 Book Details
- Book cover, description, and pricing
- “Add to Cart” and “Buy Now” buttons

### 🔹 Cart
- List of added books
- Remove item functionality
- Total summary & Checkout button

### 🔹 Checkout
- User form (First Name, Last Name, Email, Mobile)
- Order summary
- Submit order button

### 🔹 Order Confirmation
- Success message with ordered books

---

## 🔗 Resources

- 📚 IT Bookstore API: https://api.itbook.store
- 🎨 UI Inspiration: https://www.crossword.in

---

