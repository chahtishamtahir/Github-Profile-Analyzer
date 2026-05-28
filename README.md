# GitHub Profile Analyzer

A React-based web application that analyzes GitHub profiles using the GitHub Public API.

## Features

* Search any GitHub user
* View profile information
* View followers, following, and public repositories
* Display top repositories
* Analyze most-used programming languages
* Handles invalid usernames
* Handles API rate limits and network errors
* Loading state while fetching data

---

## Tech Stack

* React
* Axios
* React Toastify
* GitHub REST API
* Vite

---

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Move into project folder:

```bash
cd github-profile-analyzer
```

Install dependencies:

```bash
npm install
```

---

## Run the Project

Start development server:

```bash
npm run dev
```

Open the localhost URL shown in terminal.

Example:

```txt
http://localhost:5173
```

---

## Build for Production

```bash
npm run build
```

---

## Error Handling

The project handles:

* Empty username input
* Invalid GitHub usernames
* GitHub API rate limits
* Network/API failures
* Loading states during slow API responses

---

## API Used

GitHub Public REST API:

```txt
https://api.github.com/users/:username
```

---

## Folder Structure

```txt
src/
 ├── components/
 │    └── Header.jsx
 │
 ├── App.jsx
 ├── App.css
 └── main.jsx
```
