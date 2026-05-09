# Personal Portfolio Website

A personal portfolio and about page for Samet Akan, a computer engineering student.

## 📋 Features

- **About Me**: Personal information, hobbies and activities
- **Resume (CV)**: Education information and skills
- **My City**: Information about Gümüşhane and Kelkit Hürriyetspor
- **Our Heritage**: Cultural heritage information
- **My Interests**: Film information with IMDb API
- **Contact Form**: Vanilla JS and Vue.js validation
- **Login System**: Basic login page

## 🛠️ Technologies

- HTML5
- CSS3
- JavaScript (Vanilla JS + Vue.js 3)
- Bootstrap 5
- localStorage API

## 📁 Project Structure

```
web-project/
├── index.html              # Home page (redirect)
├── hakkimda.html          # About me page
├── cv.html                # Resume
├── sehrim.html            # City information
├── mirasimiz.html         # Cultural heritage
├── ilgi_alanlarim.html    # My interests (Film API)
├── iletisim.html          # Contact form
├── login.html             # Login page
├── login.php              # Login processing
├── sonuc.html             # Form results
├── form_sonuc.html        # Alternative results page
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   ├── validation.js      # Login form JS
│   ├── contact.js         # Contact form JS
│   └── result.js          # Results page JS
└── img/                   # Images
```

## 🚀 Running the Project

### Option 1: Python Server (Easy)

```bash
cd c:\Users\Samet\web-project
python -m http.server 8000
```

Open in browser: `http://localhost:8000`

### Option 2: VS Code Live Server

1. Install the "Live Server" extension
2. Right-click on `index.html`
3. Select "Open with Live Server"

### Option 3: Node.js Live Server

```bash
npm install -g live-server
cd c:\Users\Samet\web-project
live-server
```

## ⚠️ Notes

- **login.php** requires a PHP server to work
- Form data is stored in `localStorage`
- Contact form includes both Vanilla JS and Vue.js validation

## 📝 License

Personal project - Samet Akan
