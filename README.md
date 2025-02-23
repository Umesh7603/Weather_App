# Weather_App

A dynamic weather application built with **React.js** and **Vite**, using the **OpenWeatherMap API** to fetch real-time weather data.

## 🌟 Features

- 🌤 **Real-time Weather Data**: Get live weather updates for any city.
- 🏙 **Search by City**: Enter a city name to see its current weather.
- 🎨 **Dynamic Backgrounds**: Weather-specific background images.
- 🌡 **Temperature Details**: Displays temperature, humidity, and weather conditions.
- 💨 **Wind Speed Information**: See wind speed in real-time.
- 🎭 **User-Friendly UI**: Modern and responsive design.

## 🚀 Live Demo

[Click Here to View the Live App](https://Umesh7603.github.io/Weather_App)

## 🛠 Installation

Follow these steps to set up the project on your local machine:

### **1️⃣ Clone the Repository**

```sh
git clone https://github.com/Umesh7603/Weather_App.git
cd weather-app
```

### **2️⃣ Install Dependencies**

```sh
npm install
```

### **3️⃣ Start the Development Server**

```sh
npm run dev
```

The app will run on **http://localhost:5173/**

## 🔑 API Setup

This project uses **OpenWeatherMap API**. To configure:

1. Go to [OpenWeatherMap](https://openweathermap.org/api) and get an **API key**.
2. Create a **`.env` file** in the project root and add:
   ```sh
   VITE_WEATHER_API_KEY=your_api_key_here
   ```

## 📦 Build for Production

To create a production build:

```sh
npm run build
```

## 🚀 Deploy on GitHub Pages

1. Install GitHub Pages:
   ```sh
   npm install gh-pages --save-dev
   ```
2. Add to `package.json`:
   ```json
   "homepage": "https://Umesh7603.github.io/Weather_App",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Deploy:
   ```sh
   npm run deploy
   ```

## 📸 Screenshots

### 🌞 Light Theme (Sunny Weather)

![Sunny Weather](public/clear.jpg)

### ⛈ Dark Theme (Rainy Weather)

![Rainy Weather](public/rain.jpg)

## 📜 License

This project is **open-source** and available under the **MIT License**.

---

💻 **Developed by [Umesh]**
