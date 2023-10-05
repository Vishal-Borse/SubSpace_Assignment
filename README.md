Certainly! Here's a README file for the provided code:

---

# SubSpace Assignment - Express Server with Caching

This is an Express.js server application that serves as a RESTful API for fetching blog statistics and performing blog searches. It uses Lodash's `_.memoize` function for caching the results of these operations.

## Table of Contents

- [Getting Started](#getting-started)
- [Caching Mechanism](#caching-mechanism)
- [API Endpoints](#api-endpoints)
- [Error Handling](#error-handling)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

To get started with this application, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your environment variables, including `PORT` and `HASURA_ADMIN_SECRET`.

   ```
   PORT=3000
   HASURA_ADMIN_SECRET=your-secret-key
   ```

4. Start the Express server:

   ```bash
   npm start
   ```

## Caching Mechanism

This application uses Lodash's `_.memoize` function to cache the results of blog statistics and blog searches. The cache is cleared automatically every 20 seconds to ensure that the data remains up-to-date.

## API Endpoints

The server exposes the following API endpoints:

- `GET /api/blog-stats`: Retrieves blog statistics, including the total number of blogs, the title of the longest blog, the number of blogs with "privacy" in their title, and unique blog titles.

- `GET /api/blog-search`: Performs a blog search based on a query parameter. It returns a list of blog titles that match the query.

## Error Handling

The server handles various types of errors:

- HTTP response errors (e.g., 404, 401): Proper error responses are sent to the client with relevant error messages.

- Timeout errors: If a request times out, a 504 Gateway Timeout error is returned.

- Other types of errors: Internal server errors (500) are returned for other types of errors, and error messages are logged to the console.

## Usage

You can use this Express server to fetch blog statistics and perform blog searches by making HTTP GET requests to the specified API endpoints.

Example usage:

- Fetch blog statistics:

  ```http
  GET /api/blog-stats
  ```

- Perform a blog search:

  ```http
  GET /api/blog-search?query=privacy
  ```

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow the [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

---

Feel free to customize this README file further to include any additional information or instructions specific to your use case.
