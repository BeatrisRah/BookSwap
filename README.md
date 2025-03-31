# BookSwap - Online Book Exchange App

BookSwap is a platform where users can trade, sell, or donate books with others in their community. It allows users to list books, browse available books, interact with other users, and arrange book exchanges or purchases. **This app was created as a SoftUni project in course ReactJS-feb.**


## Local Installation

**1. Clone the repository:**

-> Create a new folder
-> Open Terminal and type:
```bash
  git clone https://github.com/BeatrisRah/BookSwap.git .
```


**2. Install dependencies:**


```bash
  npm i
```


**3. Run the development server:**


```bash
  npm run dev
```

The app will run on http://localhost:5173 (or another port if configured).<br>

#### Or simply open this [link](https://bookswap-f06b7.web.app/)!

### 🔒 Example user: <br>
Email: alex@email.com <br>
Pass: softuni123


## 🚀 Features

- 👨🏻‍💻 User Authentication – Sign up, log in, and log out securely with Firebase Authentication.

- 📖 Book Listings – Users can add, edit, and delete their own books.

- 🔄 Trade System – Users can offer trades by selecting a book from their listings.

- 📲 Real-Time Chat – Built-in messaging system for trade negotiations.

- 📅 Admin Events – Only admins can create/edit events, while all users can view them.

## 📌 Usage Guide

📝 Adding a Book
1. Go to the "Add Book" page.

2. Fill in the book details.

3. Upload a cover image.

4. Click Create – your book is now listed!

🔄 Trading a Book
1. Click on a book you want to trade for.

2. Select one of your listed books as a trade offer.

3. A chat will automatically open with the owner.


🙌 Happy reading, trading, and sharing!
## 🖥️ Tech Stack


**Frontend:** React, React Router, Context API

**Backend:** Firebase Firestore (NoSQL Database)

**Authentication:** Firebase Auth

**Image Uploads:** Cloudinary

**Real-Time Features:** Firestore Listeners for live chat

