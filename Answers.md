# ANSWERS

## 1. How to run

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Requirements:

* Node.js
* npm

Open the localhost URL shown in terminal after running the command.

---

## 2. Stack choice

I chose React because this project requires dynamic UI updates based on asynchronous API responses. React’s component-based structure and state management made it easier to organize the application and manage conditional rendering.

Axios was chosen because it simplifies HTTP requests and provides cleaner error handling than native fetch.

Vite was used because it provides fast development startup and simpler configuration.

A worse choice would have been plain vanilla JavaScript because manual DOM updates and state management would make the code harder to maintain and scale.

---

## 3. One real edge case

The project correctly handles empty username input before making an API request.

File:
`src/App.jsx`

Code:

```js
if (username.trim() === "") {
  toast.error("Please Enter a Github Username");
  return;
}
```

Without this handling, invalid API requests would still be made, leading to unnecessary loading states and poor user experience.

Another handled edge case is GitHub API rate limiting using HTTP status code 403.

---

## 4. AI usage

I used ChatGPT for:

* Debugging JSX rendering issues
* Reviewing React component structure
* README formatting suggestions
* Improving error handling logic
* Improving UI wording

One example:

ChatGPT suggested improvements for the repository card rendering section after a JSX syntax issue occurred. I modified the generated code by restructuring indentation and simplifying JSX formatting for better readability and maintainability.

All API integration logic and testing were manually verified by me.

---

## 5. Honest gap

The weakest part of the submission is the lack of automated testing.

With another day, I would:

* Add unit tests using Vitest or Jest
* Add loading skeleton components
* Improve accessibility
* Add repository sorting and filtering
* Improve responsive design for smaller screens
* Refactor the application into smaller reusable components
