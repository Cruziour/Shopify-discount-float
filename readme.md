# 🚀 Shopify Announcement Sync Application (MERN Stack)

This repository contains the full-stack solution for the **Shopify App Developer Task** at FutureBlink. The application architecture includes a React-based Admin Dashboard for content management, a Node/Express backend for secure auditing, and a Shopify Metafield integration that renders a live floating banner on the storefront.

---

## 🔗 Project Deliverables

*   **Live Deployed Application:** [Render Deployment Link](https://shopify-discount-kn2v.onrender.com/)
*   **GitHub Repository:** [Cruziour/Shopify-discount-float](https://github.com/Cruziour/Shopify-discount-float)
*   **Video Demo Link:** (https://youtu.be/RQeN0nXsifw)
*   **Development Store URL:** (https://somany-35d1bnw6.myshopify.com)
*   **Storefront Password:** `stoweu` *(Required to bypass Shopify development store protection)*

---

## 🛠 Tech Stack

*   **Frontend:** React.js
*   **Backend:** Node.js, Express.js
*   **Database:** MongoDB Atlas
*   **Shopify Integration:** Shopify Admin REST API & Liquid Template Engine (`shop.metafields.my_app.announcement.value`)

---

## 💻 Local Setup Guide

Follow these steps to run the project locally on your machine.

### 1. Clone the Repository

```bash
git clone https://github.com/Cruziour/Shopify-discount-float.git
cd Shopify-discount-float
```

### 2. Backend Configuration

1. Navigate to the backend directory and install dependencies:
   ```bash
   cd backend
   npm install
   ```

2. Create a `.env` file in the `backend` folder and add the following keys:
   ```env
   PORT=5000
   MONGODB_URI=your-mongodb-atlas-uri
   DB_NAME=Announcement
   CLIENT_URL=http://localhost:3000
   SHOPIFY_ACCESS_TOKEN=your-shopify-access-token
   SHOPIFY_STORE_DOMAIN=your-store-domain.myshopify.com
   ```

3. Start the backend development server:
   ```bash
   npm start
   ```

### 3. Frontend Configuration

1. Open a new terminal window, navigate to the frontend directory, and install dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

2. Create a `.env` file in the `frontend` folder and add your backend URL:
   ```env
   REACT_APP_BACKEND_URL=http://localhost:5000
   ```

3. Start the frontend application:
   ```bash
   npm start
   ```

---

## 🌟 Key Features

*   **Admin Dashboard:** Full CRUD operations to manage announcement text, background color, and text color.
*   **Real-time Sync:** Instant updates to Shopify storefront metafields upon saving changes.
*   **Audit Logging:** Backend logging to track all configuration changes securely.
