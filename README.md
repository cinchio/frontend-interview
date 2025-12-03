# React Interview Project

This project is a simple React application that demonstrates frontend skills using [React](https://react.dev/), [Material UI](https://mui.com/), using the [REST Countries API](https://restcountries.com/).

## Features

- Home page with basic navigation
- Countries page that fetches and displays country data from the REST Countries API
- Material UI components for modern styling

### Prerequisites

- Node.js (v16 or higher recommended)
- npm (comes with Node.js)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/cinchio/react-interview.git
   cd react-interview
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

### Running the App

Start the development server:

```sh
npm start
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### Project Structure

```
src/
  ├── App.js
  ├── index.js
  ├── home.js
  ├── country_api/
  │     └── Countries.js
  └── ...
```

### Usage

- **Home Page:** Click the "Go to Countries" button to view country information.
- **Countries Page:** Displays details about countries matching the query (e.g., "Canada") using Material UI cards.

### Technologies Used

- [React](https://react.dev/)
- [Material UI](https://mui.com/)
- [REST Countries API](https://restcountries.com/)

### License

This project is provided as-is for interview purposes.

---
