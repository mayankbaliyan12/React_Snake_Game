# 🚀 React Firebase Stripe App  

## 📖 Project Overview  
This is a **full-stack React application** that allows users to:  
✅ Sign up & log in using **Firebase Authentication**  
✅ View and manage **products stored in Firestore**  
✅ Make payments using **Stripe Checkout**---------Out of scope as of now 
✅ Store purchase details in **Firebase Firestore**  

---

## 🛠️ Technologies Used  
- **Frontend:** React (with Hooks)  
- **Backend:** Firebase (Authentication, Firestore, Cloud Functions)  
- **Payments:** Stripe Checkout (Test Mode)---------Out of scope as of now
- **State Management:** Context API / Redux (if applicable)  
- **Deployment:** Firebase Hosting & Firebase Cloud Functions  

---

## 📂 Project Structure  
```
react-firebase-stripe-app/
│── src/
│   ├── components/       # Reusable UI components
│   ├── services/         # Firebase & Stripe API integrations
│   ├── App.js            # Routes & Protected Routes
│   ├── index.js          # Entry Point
│── functions/            # Firebase Cloud Functions for payments
│── public/               # Static assets
│── .env                  # Environment variables (ignored in Git)
│── firebase.json         # Firebase project configuration
│── package.json          # Dependencies & scripts
│── README.md             # Project documentation
```

---

## 🚀 Getting Started  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/mayankbaliyan12/Sr_React_Dev_Mayank_Baliyan.git
cd react-firebase-stripe-app
```

### **2️⃣ Install Dependencies**  
```sh
npm install
```

### **3️⃣ Firebase Setup**  
- Create a **Firebase Project** at [Firebase Console](https://console.firebase.google.com/)  
- Enable **Authentication (Email/Password)**  
- Create a **Firestore Database** (in test mode for development)  
- Enable **Cloud Functions**  
- Go to **Project Settings → General → SDK Config**, and copy the Firebase config  

#### **Set Up `.env` File**  
Create a `.env` file in the root directory and add:  
```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

### **4️⃣ Stripe Setup**  
- Create a **Stripe account** at [Stripe Dashboard](https://dashboard.stripe.com/)  
- Get your **test API keys** from **Developers → API Keys**  
- Copy **Publishable Key** into `.env` as `VITE_STRIPE_PUBLIC_KEY`  
- Add **Secret Key** in Firebase functions (next step)  

---

## ⚡ Firebase Cloud Functions Setup  

### **1️⃣ Initialize Firebase Functions**  
```sh
firebase init functions
```
- Select **JavaScript**  
- Select **ESLint** for best practices  
- Install dependencies  
```sh
cd functions
npm install
```

### **2️⃣ Add Stripe Secret Key to Firebase**  
```sh
firebase functions:config:set stripe.secret_key="your_stripe_secret_key"
```

### **3️⃣ Deploy Functions**  
```sh
firebase deploy --only functions
```

---

## 🏗️ Running the Application  

### **Start Development Server**  
```sh
npm run dev
```
Visit **http://localhost:5173** to see the app in action 🚀  

---

## 📡 Deployment  

### **1️⃣ Build the App**  
```sh
npm run build
```

### **2️⃣ Deploy to Firebase**  
```sh
firebase deploy
```

---

## 📌 Features Implemented  

### 🔐 **User Authentication**  
- Register & log in with **Firebase Authentication (Email/Password)**  
- Logout functionality  
- Protected routes for authenticated users  

### 🛒 **Firestore Database**  
- Add & store products in **Firebase Firestore**  
- Fetch and display products dynamically  
- Store order details after payment  

---

## 🛠️ Possible Future Enhancements  
✅ Add **Google OAuth Sign-In**  
✅ Implement **subscriptions** with Stripe---------Out of scope as of now
✅ Improve **UI/UX with animations**  
✅ Add **product filtering & search**  

---

## 📬 Contact  
For any questions or improvements, feel free to reach out! 😊🚀  
