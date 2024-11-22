# Sample React App with Okta Authentication

## Description

This is a sample React application demonstrating authentication using Okta. The project is based on a starter template from Auth0 but is adapted to work with Okta as the identity provider.

---

## Prerequisites

Before running the app, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (comes with Node.js)

---

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:

   ```bash
   npm install
   npm install @auth0/auth0-react
   ```

3. Configure Okta:

   - Go to your [Okta Developer Console](https://developer.okta.com/).
   - Create a new application for a **Single Page App (SPA)**.
   - Copy your `Client ID`, `Issuer URL`, and other configuration details.
   - Update the application's `.env` file or configuration settings with your Okta details:
     ```
     REACT_APP_OKTA_CLIENT_ID=<your-client-id>
     REACT_APP_OKTA_ISSUER=<your-issuer-url>
     REACT_APP_OKTA_REDIRECT_URI=http://localhost:3000/callback
     ```

---

## Running the App

To start the development server:

```bash
npm run start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

---

## Features

- User authentication and secure routing using Okta.
- Example of integrating Okta into a React application.
- Easily customizable for your own use case.

---

## Dependencies

This project uses the following libraries and frameworks:

- [React](https://reactjs.org/)
- [Auth0 React SDK](https://github.com/auth0/auth0-react) (used as a base template)
- [Okta React SDK](https://github.com/okta/okta-react) (adaptation for Okta authentication)

---

## Contributing

Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.

---

## License

This project is provided as-is under the [MIT License](LICENSE).