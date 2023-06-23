const redis = require('redis');

// Create the Redis client instance
const client = redis.createClient();



// Handle errors
client.on('error', (error) => {
  console.error('Redis connection error:', error);
});




// Export the Redis client instance
module.exports = client;
