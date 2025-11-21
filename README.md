# Infinite Scroll - Unsplash API Project

![GitHub repo size](https://img.shields.io/github/repo-size/gatchez/infinite-scroll)  
![License](https://img.shields.io/badge/license-MIT-green)  
![GitHub last commit](https://img.shields.io/github/last-commit/gatchez/infinite-scroll)  
![Issues](https://img.shields.io/github/issues/gatchez/infinite-scroll)  
![Contributors](https://img.shields.io/github/contributors/gatchez/infinite-scroll)  

---

## 🚀 Live Demo
Check out the live demo here: [Live Demo](https://your-host.com/infinite-scroll)

---

## 📖 Description
A simple **Infinite Scroll** project that fetches random images from the **Unsplash API** and displays them as the user scrolls down.  
Includes a **backend placeholder (`api.php`)** for storing your API key securely, so it is never exposed in the frontend.

---

## 🗂 Project Structure
```
infinite-scroll/
│
├─ index.html       
├─ style.css        
├─ script.js        
├─ loader.svg       
├─ api.php          # Backend placeholder for Unsplash API key
├─ .gitignore       
└─ README.md        
```

---

## ✅ Features
- Infinite scroll for fetching new images
- Fully responsive layout
- Smooth loader animation
- API key is safely hidden using backend environment variables
- Simple setup for localhost or production

---

## 🖼 Screenshots / Demo
**Desktop view:**  
![Desktop Screenshot](/mnt/data/A_README.md_file_for_a_project_titled_"Infinite_Sc.png)

**Mobile view:**  
![Mobile Screenshot](https://your-host.com/infinite-scroll/screenshot-mobile.png)

**Demo GIF:**  
![Demo GIF](https://your-host.com/infinite-scroll/demo.gif)

> *Replace the above URLs with your real screenshots or GIF.*

---

## 🛠 Requirements
- **PHP 7.x** or higher
- **Unsplash API key** (stored as an environment variable)
- Any modern browser

---

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/infinite-scroll.git
cd infinite-scroll
```

### 2. Backend Setup
Upload **api.php** to a PHP-enabled server, then set your Unsplash key:

```bash
export UNSPLASH_API_KEY="YOUR_REAL_UNSPLASH_KEY"
```

### 3. Frontend Setup
Update your API endpoint in **script.js**:

```js
const apiUrl = 'https://your-host.com/infinite-scroll/api.php';
```

---

## 🎨 Usage
- Open **index.html**
- Scroll down to automatically load more images
- Enjoy the seamless infinite scrolling experience

---

## 🤝 Contributing
1. Fork the project  
2. Create a feature branch:
```bash
git checkout -b feature/MyFeature
```
3. Commit your changes:
```bash
git commit -m "Add new feature"
```
4. Push the branch:
```bash
git push origin feature/MyFeature
```
5. Open a Pull Request

---

## 📝 License
This project is licensed under the **MIT License**.

---
