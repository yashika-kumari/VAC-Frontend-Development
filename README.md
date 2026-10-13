<h1 align="center">🌐 VAC Frontend Development</h1>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3"/>
  <img src="https://img.shields.io/badge/Status-Learning%20in%20Progress-brightgreen?style=for-the-badge" alt="Status"/>
</p>

<p align="center">
  A curated collection of hands-on projects and exercises built during the <strong>VAC (Value Added Course) Frontend Development</strong> program at <em>Poornima College of Engineering</em>.
  <br/>
  Each file represents a milestone in learning modern web development — from raw HTML tables to fully styled UI clones and interactive game boards.
</p>

---


## 🚀 Projects

### 1. 🗂️ HTML Tables — `tables.html`

> **Concepts:** HTML tables, `rowspan`, `colspan`, links, images

The first steps into HTML — building structured data tables from scratch.

- Simple student data table with **Name, Age, College** columns
- A complex **Seminar Schedule** table demonstrating `rowspan` and `colspan`
- Practising basic HTML tags: `<a>`, `<img>`, `<table>`, `<tr>`, `<th>`, `<td>`

**Skills practised:** Semantic HTML structure · Table layout · Cell merging

---

### 2. 📋 Student Registration Form — `studentRegistationForm.html`

> **Concepts:** HTML Forms, input types, CSS layout, Flexbox

A complete student registration form with a variety of input types.

| Field | Input Type |
|-------|-----------|
| Roll No. / Name / Father's Name | `text` |
| Date of Birth | Multi-part `text` (DD-MM-YYYY) |
| Mobile No. | `text` with `+91` prefix |
| Email | `email` |
| Password | `password` |
| Gender | `radio` buttons |
| Department | `checkbox` (CSE, IT, ECE, Civil, Mech) |
| Course | `<select>` dropdown (B.Tech, BCA, MCA, MBA…) |
| Photo | `file` upload |
| Address | `<textarea>` |

**Skills practised:** HTML forms · Input types · CSS Flexbox · Form layout · Label-input association

---

### 3. 🔵 Facebook Login Clone — `Facebook.html` + `styles.css`

> **Concepts:** CSS Flexbox, external stylesheets, UI cloning

A pixel-faithful recreation of the **Facebook login page**, built without any JavaScript or UI framework.

**Features:**
- `facebook` wordmark styled with CSS (no image used)
- Left panel with tagline *"Explore the things you love."*
- Vertical divider between panels
- Right panel with:
  - Email / mobile input field
  - Password input field
  - **Log in** button
  - *Forgotten password?* link
  - **Create new account** button
  - Meta branding footer

**Skills practised:** Multi-column Flexbox layout · External CSS · UI replication · Typography

---

### 4. 📸 Instagram Login Clone — `Instagram.html` + `style.css`

> **Concepts:** CSS Flexbox, form styling, UI cloning

A clean recreation of the **Instagram login page** with attention to branding details.

**Features:**
- Cursive *Instagram* wordmark via CSS font styling
- Phone / email / username input
- Password field with a **show/hide eye icon** (`◉`)
- **Log In** button
- *Forgot password?* recovery link
- **— OR —** styled divider
- **Log in with Facebook** option
- Sign-up prompt footer
- Language selector at the top

**Skills practised:** Flexbox centering · Styled form controls · OR-divider pattern · UI cloning

---

### 5. ♟️ Chess Board — `chess.html`

> **Concepts:** CSS Grid, Unicode chess pieces, internal CSS

A fully rendered **8 × 8 Chess Board** with all pieces in starting positions — built entirely with HTML and internal CSS.

**Highlights:**
- `8 × 8` CSS Grid layout (`repeat(8, 1fr)`)
- Classic tan/brown square alternation (`#f0d9b5` and `#b58863`)
- All chess pieces rendered via **Unicode characters** (♜♞♝♛♚♙♖♘♗♕♔)
- Black pieces on rows 1–2, white pieces on rows 7–8
- Empty middle rows ready for gameplay

```
♜ ♞ ♝ ♛ ♚ ♝ ♞ ♜   ← Row 1 (Black)
♟ ♟ ♟ ♟ ♟ ♟ ♟ ♟   ← Row 2 (Black pawns)
· · · · · · · ·   ← Rows 3–6 (Empty)
♙ ♙ ♙ ♙ ♙ ♙ ♙ ♙   ← Row 7 (White pawns)
♖ ♘ ♗ ♕ ♔ ♗ ♘ ♖   ← Row 8 (White)
```

**Skills practised:** CSS Grid · Unicode visual elements · Internal CSS · Color theming

---

### 6. 🎲 Ludo Board — `ludo.html` + `ludo.css`

> **Concepts:** CSS Grid, Flexbox, `clip-path`, responsive design

The most complex project — a **full visual Ludo board** recreated entirely with HTML and CSS. No images, no JavaScript.

**Board layout:**

```
        🟢 GREEN
           ▲
    ┌──────┼──────┐
🔴  │      │      │  🟡
RED ◄──────┼──────► YELLOW
    │      │      │
    └──────┼──────┘
           ▼
        🔵 BLUE
```

**Features:**
- **15 × 15 CSS Grid** for the board layout
- Four colour-coded **home areas** (Red, Green, Blue, Yellow)
- **4 circular tokens** per player using `border-radius: 50%`
- Coloured **player path** cells
- Center divided into **4 CSS triangles** using `clip-path: polygon(...)`
- **Responsive sizing** with `min(95vw, 600px)` and `aspect-ratio: 1 / 1`

**Skills practised:** CSS Grid · Flexbox · `clip-path` · Responsive design · CSS shapes · Color theming

---

## 🛠️ Technologies Used

| Technology | Role |
|------------|------|
| **HTML5** | Page structure, semantic elements, forms, tables |
| **CSS3** | Layouts (Grid & Flexbox), colors, shapes, responsive design |
| **Unicode** | Chess & Ludo visual elements (no external images) |

> ⚡ No JavaScript · No npm · No frameworks — pure HTML & CSS throughout.

---

## 🎓 Learning Journey

This repository traces a clear progression from basic HTML concepts to complex CSS layouts:

```
📌 Stage 1 → HTML Basics        tables.html
📌 Stage 2 → HTML Forms         studentRegistationForm.html
📌 Stage 3 → CSS Layouts        Facebook.html · Instagram.html
📌 Stage 4 → Advanced CSS Grid  chess.html · ludo.html
```

---

## ▶️ How to Run

No installation or build step required.

1. **Clone or download** this repository.
2. Open any `.html` file directly in your browser.
3. *(Optional)* Use **VS Code + Live Server** for hot-reload during editing.

---

## 📌 Course Info

| Detail | Info |
|--------|------|
| **Course** | VAC — Frontend Development |
| **Institute** | Poornima College of Engineering |
| **Student** | Yashika Kumari |
| **Tech Stack** | HTML5 · CSS3 |

---

<p align="center">
  Made with ❤️ during the <strong>VAC Frontend Development Course</strong>
  <br/>
  <em>Every great developer was once a beginner.</em>
</p>
