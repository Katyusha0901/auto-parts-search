# Auto Parts Search

A web application for searching auto parts by part number, selecting a manufacturer, and viewing available offers and compatible alternatives.

## Tech Stack

**Frontend**

- React
- JavaScript
- Redux Toolkit
- React Redux
- Bootstrap
- Vite

**Backend**

- Node.js
- Express

## Features

- Search for auto parts by part number
- Display available manufacturers
- Select a manufacturer to view matching offers
- Display alternative parts (analogues)
- View prices and stock availability
- Handle loading, error, and empty states
- Responsive offers table
- State management with Redux Toolkit

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Katyusha0901/auto-parts-search.git
   ```

2. Navigate to the project directory:

   ```bash
   cd auto-parts-search
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   npm start
   ```

The command starts both the React development server and the Express backend.

**Application URLs:**

- Frontend: http://localhost:5173
- Backend: http://localhost:3001

## Demo Part Numbers

The following part numbers can be used to test the application:

| Part Number | Available Manufacturers |
| ----------- | ----------------------- |
| ABC123      | Bosch, Valeo, MANN      |
| XYZ789      | Toyota, Denso           |
| TEST456     | NGK, Bosch              |

## API Endpoints

The React frontend communicates with the Express backend using HTTP requests.

### GET /api/brands

Returns available manufacturers for a given part number.

Example:

```http
GET /api/brands?article=ABC123
```

### GET /api/offers

Returns matching offers and alternative parts for the selected manufacturer.

Example:

```http
GET /api/offers?article=ABC123&brand=Bosch
```

## Architecture

The application follows a client-server architecture:

- **React** handles the user interface.
- **Redux Toolkit** manages application state, including search results, selected manufacturer, loading states, and errors.
- **Express** provides REST API endpoints for retrieving manufacturers and offers.
- **Data transformation functions** normalize API responses for display in the UI.

## Favorit Parts API

The application was developed with reference to the Favorit Parts API documentation.

Since an API key was not provided, the Express backend currently serves mock data structured around the relevant API fields.

HTTP requests between the frontend and backend are fully implemented and functional.

Integration with the external Favorit Parts API has not been tested.

API documentation:
https://lk.favorit-parts.ru/static/wsprice.pdf

## Production Build

To generate a production build of the frontend, run:

```bash
npm run build
```

The generated files will be available in the `dist` directory.

## Project Structure

```text
auto-parts-search/
├── server/
│   ├── index.js
│   └── mockData.js
├── src/
│   ├── app/
│   │   └── store.js
│   ├── features/
│   │   └── parts/
│   │       ├── components/
│   │       │   ├── PartSearch.jsx
│   │       │   ├── BrandList.jsx
│   │       │   └── OffersList.jsx
│   │       ├── partsApi.js
│   │       └── partsSlice.js
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── vite.config.js
└── README.md
```
