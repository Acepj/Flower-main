# 🌸 Flowers

A simple animated flower webpage created using **HTML, CSS, and JavaScript**. The project displays multiple animated flowers, growing grass and leaves, a night-themed background, and an embedded video.

## 📌 About the Project

The **Flowers** project is a visual webpage designed around an animated flower garden.

The HTML creates the different flower, leaf, grass, and growing elements using multiple `<div>` elements. The page also includes a video that automatically plays and loops.

## ✨ Features

* 🌸 Animated flowers
* 🌿 Growing grass and leaves
* 🌙 Night-themed background
* ✨ Decorative flower lights
* 🌱 Animated plant elements
* 🎥 Embedded MP4 video
* 🔄 Automatic video playback
* 📱 Mobile-friendly viewport configuration
* 🎨 Custom CSS styling
* ⚙️ JavaScript support

## 🛠️ Technologies Used

* **HTML5** – Creates the structure of the webpage
* **CSS3** – Handles the flower design, animations, colors, and layout
* **JavaScript** – Provides additional webpage functionality
* **MP4 Video** – Used as an embedded visual element

## 📂 Project Structure

```text
Flowers/
│
├── index.html
├── main.css
├── main.js
├── flowers.png
│
└── SnapTik_App_7529196732853308680.mp4
```

## 📄 Main Components

### 🌙 Night Background

The page includes a `.night` element that can be styled through CSS to create the nighttime environment.

```html
<div class="night"></div>
```

### 🌸 Flowers

The page contains three main flower elements:

```text
flower--1
flower--2
flower--3
```

Each flower contains:

* Flower leaves
* White center
* Decorative lights
* Stem
* Additional leaves

The flower structure is created using nested HTML elements.

### 🌿 Grass and Leaves

The webpage also includes growing grass and different leaf groups to create a garden-like environment.

Several elements use the `grow-ans` class together with custom animation-delay values such as:

```html
style="--d:1.2s"
```

This allows different plant elements to appear or grow at different times.

### 🎥 Video

The project includes an MP4 video using the HTML5 `<video>` element.

```html
<video 
    id="tiktokVid"
    width="350"
    height="600"
    autoplay
    playsinline
    loop
    preload="auto">
    
    <source 
        src="SnapTik_App_7529196732853308680.mp4" 
        type="video/mp4">
</video>
```

The video is configured to:

* Autoplay
* Loop continuously
* Play inline
* Preload automatically

## 🎨 CSS

The project uses:

```html
<link rel="stylesheet" href="main.css">
```

The `main.css` file is responsible for the visual appearance and animation of the flowers, plants, background, and other elements.

## ⚙️ JavaScript

The project loads:

```html
<script src="main.js"></script>
```

This allows JavaScript functionality to be added to the webpage.

## 🚀 How to Run

1. Download or clone the project.
2. Open the project folder in Visual Studio Code.
3. Make sure these files are present:

   * `index.html`
   * `main.css`
   * `main.js`
   * `flowers.png`
   * `SnapTik_App_7529196732853308680.mp4`
4. Keep the video file in the same location expected by the `<source>` path.
5. Open `index.html` in a browser.

You can also use the **Live Server** extension in Visual Studio Code.

## ⚠️ Notes

* The video file must be available for the embedded video to play.
* The `main.css` file is required for the flower animations and visual design.
* The `main.js` file is loaded at the bottom of the HTML document.
* The favicon uses `flowers.png`.
* The video uses `autoplay`, `playsinline`, and `loop`.

## 🔮 Possible Improvements

* Add a message or greeting to the page.
* Add background music with user controls.
* Add more flower varieties.
* Add interactive effects when clicking the flowers.
* Add a play/pause button for the video.
* Improve accessibility with additional labels.
* Add responsive sizing for the video and flower animations.
* Add a button to restart the flower animation.

## 👤 Project Purpose

This project is a creative front-end webpage demonstrating how **HTML elements, CSS animations, JavaScript, and video** can be combined to create an interactive visual experience.

## 📜 License

This project is intended for educational, personal, and creative purposes.
