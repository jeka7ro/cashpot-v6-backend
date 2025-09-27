// Frontend connection config for GitHub Pages
const API_BASE_URL = 'https://cashpot-v6-backend-production.up.railway.app/api';

// Example usage in frontend:
const testConnection = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    const data = await response.json();
    console.log('Backend connected:', data);
  } catch (error) {
    console.error('Backend connection failed:', error);
  }
};

// Export for use in frontend
window.CASHPOT_API = API_BASE_URL;
