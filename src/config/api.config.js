// API Configuration using environment variables
const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://dev.api.crowdcareaid.com',
  API_URL: import.meta.env.VITE_API_URL || 'https://dev.api.crowdcareaid.com/api',
  ENDPOINTS: {
    REGISTER: '/users/register',
    LOGIN: '/users/login',
    // Add other endpoints here as needed
  }
};

export default API_CONFIG;