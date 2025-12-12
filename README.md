# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## Features

- **Hotel Listings**: View all hotels with details including name, location, ratings, rooms, and pricing
- **Search & Filter**: Search hotels by name/location, filter by status (Active/Inactive) and city
- **Bulk Actions**: Select multiple hotels with checkboxes for bulk operations
- **CRUD Operations**: View, Edit, and Delete actions for each hotel
- **Responsive Design**: Clean, modern UI with professional styling

## Tech Stack

- **React.js** (Functional Components)
- **Hooks**: useState, useEffect
- **Lucide React** (Icons)
- **Custom CSS** (No external UI library)
- **Vite** (Build tool)

## Project Structure


goodweeks-admin/
├── src/
│   ├── components/
│   │   ├── Sidebar/
│   │   │   ├── Sidebar.jsx
│   │   │   └── Sidebar.css
│   │   ├── Header/
│   │   │   ├── Header.jsx
│   │   │   └── Header.css
│   │   └── HotelManagement/
│   │       ├── HotelManagement.jsx
│   │       └── HotelManagement.css
│   ├── data/
│   │   └── hotels.json
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md


### Installation
1. **Clone the repository
cd goodweeks-admin-dashbaord

2. **Install dependencies**
npm install

3. **Start the development server**
npm run dev

4. **Open in browser**
Navigate to `http://localhost:5173` in your browser
