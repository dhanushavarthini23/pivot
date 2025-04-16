# 📊 Pivot Table Generator (React)

This is a web-based Pivot Table Generator built with **React** and **Tailwind CSS**, allowing users to upload CSV files and dynamically generate pivot tables with custom aggregation functions.

## 🚀 Features

- 📁 Drag-and-drop CSV Upload
- 📋 Display of the Original Data Table
- 🧮 Generate Pivot Tables with customizable aggregation:
  - `SUM`
  - `COUNT`
  - `AVERAGE`
  - `MIN`
  - `MAX`
  - *(More coming soon like `MEDIAN`)
- 🔄 Customizable Rows, Columns, and Values
- 🎨 Responsive Design with Tailwind CSS
- ⬇️ Exportable Download Button
- ♻️ Easy Reset/Clear Functionality
- 🌙 (Optional)Dark Mode Toggle(currently commented out)

## 🧱 Components

- `App.jsx` – Core logic & state management
- `CSVUploader.jsx` – Handles drag-and-drop & parsing of CSVs
- `OriginalTable.jsx` – Displays the raw uploaded data
- `PivotControls.jsx` – Dropdowns to choose pivot parameters
- `PivotTable.jsx` – Renders the final pivot result
- `DownloadButton.jsx` – Allows downloading the pivot as a CSV
- `ClearButton.jsx` – Resets all selections and data
- `DarkModeToggle.jsx` – (Optional) for theme switching
## 📦 Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/pivot-table-generator.git
cd pivot-table-generator

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
