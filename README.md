# eShop - MERN stack Ecommerce Website

    eShop is the act of selling & purchasing goods or services via the internet(online shopping

## MERN stack

    Incorporates 4 open-source technologies that gives an end-end frameworks

- Mongo DB: stores data(json format). It sends & retrieve data in database

  - mongoose: connects backend to the database

- ExpressJS: it create apps & api. It has a built-in Router . it offers tools which
  makes writing node app more fun & easier

- ReactJS: JavaScript library to create functional component & build user interface(UI)

- NodeJS: JS compiler, allowing code run outside the browser. It enables continuous data
  flow. to create scalable & quick backend RESTful APIs

### Development flow/processes

- The users send their request & react.js processes those requests along with the parses

- The node.js parses would be requesting it at the server-end.

- The request enters express.js that makes diff DB requests & return several responses.

- MongoDB: mongo DB retrieves the data & return it to any express.js.

## eShop

### Sample

- Users in database: Admin and Customer

- Products in mongo DB: Shirts & pants (4 products in data.js file)

### e-commerce website basic features

- Authentication - JSON Web Tokens (JWT).
  (use local storage to store the JWT so that we only allow logged-in users to buy the items). JWT & express middleware: handle authentication(to make payment for orders)

- Options to add, edit, view, and delete items in the store.

- Options to add or remove items from the cart.

- Options to pay and checkout thus create order & emptying the cart.

- Display total bill of the cart & update it when users update the cart

- React hooks: to handle form inputs & backend fetch api

- useReducer: to handle shopping cart

- useState, useEffect, useReducer: to manage state in cmp level

- useContext: manage state (via data flow across cmp tree w/o passing props down
  manually)

- Admin Dashboard: to show sales chart, manage products, & handle orders

### Order, payment, shipping

- Order: Customers chose product(s) & place order

- Payment: pay orders using PayPal or Cards

- Shipping: choose shipping address on google map

## Learn More

### Analyzing the Bundle Size

### Making a Progressive Web App

### Advanced Configuration

### Deployment

- Deployment: deploy my site on cloud services & connected to payment
