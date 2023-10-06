const axios = require("axios");
const _ = require("lodash");
require("dotenv").config();

API_URL="https://intent-kit-16.hasura.app/api/rest/blogs";

const blogSearchCache = _.memoize(
  async (query) => {
    const startTime = new Date(); // Record the start time
    try {
      // Fetch blog data from the third-party API
      const response = await axios.get(process.env.API_URL, {
        headers: {
          "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET,
        },
      });

      if (response.status !== 200) {
        throw new Error(
          `Failed to fetch data from the third-party API. Status: ${response.status}`
        );
      }

      const blogs = response.data?.blogs || [];

      let results;
      if (query) {
        query = query.toLowerCase();
        results = _.filter(blogs, (blog) =>
          _.includes(blog.title.toLowerCase(), query)
        );
      } else {
        results = [];
      }
      const searchResults = {
        lastCachedAt: startTime.toLocaleTimeString(), // Add last caching timestamp
        timeToServeRequest: new Date() - startTime, // Calculate time to serve the request
        SearchResults: results,
      };

      return searchResults;
    } catch (error) {
      throw error; // Rethrow the error to be handled later
    }
  },
  (query) => query
); // Cache results based on the query string

setInterval(() => {
  blogSearchCache.cache.clear();
}, 20000);

module.exports = blogSearchCache;
