# Personal Portfolio Website — Assignment

A personal portfolio and about page built as a first web project, featuring multiple pages for biography, resume, city information, cultural heritage, film interests, and contact.

- **Course:** Spring 2024

## Contents

```
web-project/
├── index.html              # Home page (redirect)
├── hakkimda.html           # About me page
├── cv.html                 # Resume
├── sehrim.html             # City information
├── mirasimiz.html          # Cultural heritage
├── ilgi_alanlarim.html     # My interests (Film API)
├── iletisim.html           # Contact form
├── login.html              # Login page
├── login.php               # Login processing
├── sonuc.html              # Form results
├── form_sonuc.html         # Alternative results page
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   ├── validation.js       # Login form JS
│   ├── contact.js          # Contact form JS
│   └── result.js           # Results page JS
└── img/                    # Images
```

## Requirements

- A modern web browser
- A local server for PHP login functionality (e.g. XAMPP, WAMP)

## Build & Run

**Option 1: Python (simplest)**
```bash
python -m http.server 8000
```
Then open `http://localhost:8000` in your browser.

**Option 2: VS Code Live Server**
1. Install the "Live Server" extension.
2. Right-click `index.html` and select "Open with Live Server".

**Option 3: Node.js live-server**
```bash
npm install -g live-server
live-server
```

## Usage

Navigate between pages using the site menu. Each page is standalone HTML. The contact form supports both Vanilla JS and Vue.js 3 validation. The film interests page fetches data from the IMDb API.

## Notes

- This is an educational example and kept intentionally simple.
- `login.php` requires a PHP-capable server to function.
- Form data is stored in `localStorage`.

## Author

Abdülsamet Akan

## License

[MIT](https://opensource.org/licenses/MIT)
