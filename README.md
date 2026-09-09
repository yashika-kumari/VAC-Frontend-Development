# 🎲 Ludo Board

A clean, responsive **Ludo board recreated entirely with HTML and internal CSS**.

This project focuses on building the visual structure of a traditional Ludo board from scratch, without using images, JavaScript, external CSS files, or UI frameworks.

---

## ✨ Preview

The board features:

- 🔴 Red home area
- 🟢 Green home area
- 🟡 Yellow home area
- 🔵 Blue home area
- 4 tokens for each player
- 15 × 15 style board layout
- Colored player paths
- Four-color center with correctly oriented triangles
- Responsive sizing for smaller screens
- Crisp borders and simple geometric styling

### Center layout

```text
                 🟢 GREEN
                     ▲
                     │
              ┌──────┼──────┐
              │      │      │
       🔴 RED ◄──────┼──────► YELLOW 🟡
              │      │      │
              └──────┼──────┘
                     │
                     ▼
                  🔵 BLUE
```

---

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **HTML5** | Structure of the Ludo board |
| **CSS3** | Layout, colors, borders, tokens and shapes |

No JavaScript or external libraries are required.

---

## 📁 Project Structure

```text
ludo-board/
│
├── index.html
└── README.md
```

The entire board is currently contained in `index.html`, including the CSS inside a `<style>` element.

---

## 🎨 Design

The board is constructed using CSS Grid and absolutely positioned sections.

### Board

The main board uses a **15 × 15 CSS Grid** to create the traditional Ludo proportions.

```css
grid-template-columns: repeat(15, 1fr);
grid-template-rows: repeat(15, 1fr);
```

### Player Areas

Each player has a 6 × 6 home area:

- Red: top-left
- Green: top-right
- Blue: bottom-left
- Yellow: bottom-right

Each home contains a white inner area with four circular tokens.

### Paths

The four paths are created using individual CSS grid cells:

- Green path → top
- Yellow path → right
- Blue path → bottom
- Red path → left

### Center

The center is made from four CSS triangles using `clip-path` rather than an image.

The orientation is:

```text
             GREEN
                ▲
                │
        RED ◄───┼───► YELLOW
                │
                ▼
               BLUE
```

---

## 🎯 Features

### Responsive Design

The board automatically scales according to the available screen size:

```css
width: min(95vw, 600px);
aspect-ratio: 1 / 1;
```

This allows the board to remain square while adapting to different screen sizes.

### Pure CSS Shapes

The player tokens are simple CSS circles:

```css
border-radius: 50%;
```

The center triangles are created using:

```css
clip-path: polygon(...);
```

This keeps the project lightweight and avoids unnecessary image assets.

### No Dependencies

There is no need to install:

- Node.js
- npm packages
- JavaScript libraries
- CSS frameworks
- Image assets

Just open the HTML file in a browser.

---

## 🚀 How to Run

### Option 1: Open Directly

1. Download or clone the repository.
2. Open `index.html`.
3. The Ludo board will appear in your browser.

### Option 2: Use VS Code

1. Open the project folder in VS Code.
2. Open `index.html`.
3. Use **Live Server** if installed.
4. Open the generated local URL in your browser.

### Option 3: Online HTML Editor

Copy the contents of `index.html` into an online HTML editor and run it.

No additional files are required.

---

## 🧩 Code Structure

The HTML is organized into four major sections:

```text
Ludo Board
│
├── Red Home
│   ├── White inner box
│   └── 4 red tokens
│
├── Green Home
│   ├── White inner box
│   └── 4 green tokens
│
├── Blue Home
│   ├── White inner box
│   └── 4 blue tokens
│
├── Yellow Home
│   ├── White inner box
│   └── 4 yellow tokens
│
├── Top Path
├── Bottom Path
├── Left Path
├── Right Path
│
└── Center
    ├── Red triangle
    ├── Green triangle
    ├── Yellow triangle
    └── Blue triangle
```

---

## 📚 Learning Objectives

This project demonstrates practical use of:

- HTML semantic structure
- CSS Grid
- CSS positioning
- CSS Flexbox
- Responsive design
- CSS borders
- CSS colors
- CSS `clip-path`
- CSS pseudo-classes
- Media queries
- Reusable CSS classes

It is a useful beginner project for understanding how complex layouts can be constructed from simple HTML elements and CSS rules.

---

## 🔮 Future Improvements

The current project is a **visual Ludo board**, but it can be extended into a fully playable game.

Possible additions include:

- 🎲 Dice rolling
- 🧑‍🤝‍🧑 2–4 player support
- 🟢 Token movement
- 🏁 Winning conditions
- 🔄 Turn management
- 🚫 Safe zones
- ⭐ Home-entry rules
- 💾 Game state management
- ✨ Token movement animations
- 🔊 Sound effects
- 📱 Improved mobile controls

JavaScript can be introduced later to turn the static board into an interactive game.

---

## 📌 Project Status

**Current status:** ✅ Static Ludo board completed

The current version focuses on accurately recreating the board layout and visual design using HTML and CSS.

---

## 🤝 Contributing

Contributions and improvements are welcome.

If you want to extend the project:

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Test the board on different screen sizes.
5. Submit a pull request.

---

## 📄 License

This project is intended for **educational and practice purposes**.

You are free to modify and extend the code for your own learning and projects.

---

<p align="center">
  Made with ❤️ using HTML & CSS
</p>
