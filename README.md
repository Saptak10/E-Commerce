# 🛒 EBuy World

### LIVE APP - https://saptak-ebuy-world.netlify.app/
---

## 📄 Project Overview
EBuy World is a feature-rich shopping application that allows users to explore and purchase various products. The application is developed with a modern tech stack to ensure a seamless user experience and robust performance.

---

## 🚀 Features

- **User Authentication:** Secure login and signup functionality for users.
- **Admin Control:** Admin panel to manage products, orders, and user activities.
- **Order History:** Track previous orders with detailed information.
- **Payment Integration:** Secure and efficient payment processing using Stripe API.
- **Cart Management:** Add, remove, and manage items in the shopping cart.
- **Wishlist Functionality:** Save favorite items for future purchase.
- **Email/SMS Notifications:** Automated notifications for order updates and promotions.

---

## 🛠️ Tech Stack

### Frontend
- **ReactJS**
- **Redux**
- **Material-UI**

### Backend
- **NodeJS**
- **ExpressJS**
- **GraphQL**

### Database
- **MongoDB**

### Other Tools and Libraries
- **Axios**
- **JWT for Authentication**
- **Bcrypt for Password Encryption**
- **Stripe API for Payments**

---

## 📂 Project Structure

- **Frontend:** Contains all the React components, Redux store, and Material-UI designs.
- **Backend:** API endpoints developed with ExpressJS, GraphQL, and MongoDB for data storage.
- **Database:** MongoDB collections for users, products, orders, and cart data.

---

## 🔧 Setup Instructions

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/username/ebuy-world.git
   cd ebuy-world
   ```

2. **Install Dependencies:**
   ```bash
   # Install frontend dependencies
   cd frontend
   npm install

   # Install backend dependencies
   cd ../backend
   npm install
   ```

3. **Configure Environment Variables:**
   - Create a `.env` file in the backend folder.
   - Add the following details:
     ```env
     PORT=5000
     MONGO_URI=<Your MongoDB URI>
     JWT_SECRET=<Your JWT Secret>
     STRIPE_SECRET_KEY=<Your Stripe Secret Key>
     ```

4. **Run the Application:**
   ```bash
   # Start backend server
   cd backend
   npm start

   # Start frontend server
   cd ../frontend
   npm start
   ```

5. **Access the Application:**
   - Frontend: `http://localhost:3000`
   - Backend: `http://localhost:5000`

---

## 🌐 Live Demo

- **CI/CD Deployment:** [EBuy World](https://saptak-ebuy-world.netlify.app/)

---

## 📊 Database Schema

### Users Collection
```json
{
  "name": "String",
  "email": "String",
  "password": "String (Encrypted)",
  "isAdmin": "Boolean"
}
```

### Products Collection
```json
{
  "name": "String",
  "description": "String",
  "price": "Number",
  "image": "String",
  "stock": "Number"
}
```

### Orders Collection
```json
{
  "user": "User ID",
  "orderItems": [
    {
      "product": "Product ID",
      "quantity": "Number"
    }
  ],
  "paymentMethod": "String",
  "isPaid": "Boolean",
  "paidAt": "Date",
  "isDelivered": "Boolean",
  "deliveredAt": "Date"
}
```

---

## 📧 Contact
For queries or support, please contact:
- **Developer:** Saptak Chakraborty
- **Email:** saptak.chakraborty@example.com
- **LinkedIn:** [Your LinkedIn Profile](#)
