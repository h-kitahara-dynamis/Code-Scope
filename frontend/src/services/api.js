const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

export class ApiService {
  static async fetchWithConfig(endpoint, options = {}) {
    const defaultOptions = {
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const config = {
      ...defaultOptions,
      ...options,
      headers: {
        ...defaultOptions.headers,
        ...options.headers,
      },
    };

    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
      
      if (!response.ok) {
        const error = await response.json().catch(() => ({}));
        throw new Error(error.message || 'APIリクエストに失敗しました');
      }

      return await response.json();
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }

  static async getQuiz() {
    return ApiService.fetchWithConfig('/api/quiz');
  }



  static async getHistory() {
    return ApiService.fetchWithConfig('/api/history');
  }
}
