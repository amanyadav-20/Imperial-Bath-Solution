import axios from "axios";

const api = axios.create({
  // Vite Proxy use karne ke liye baseURL ko sirf "/api" rakhein.
  // Agar env file se aa raha hai toh pehle wo check hoga.
  baseURL: import.meta.env.VITE_API_URL || "/api",
  headers: {
    "Content-Type": "application/json"
  }
});

export const productApi = {
  getProducts: (params = {}) => api.get("/products", { params }),
  // Dono functions ka naam alag kar diya taaki conflict na ho
  getProductBySlug: (slug) => api.get(`/products/slug/${slug}`), 
  getProductById: (id) => api.get(`/products/${id}`)
};

export const leadApi = {
  // Ab ye sahi se /api/leads par POST request bhejega
  createLead: (payload) => api.post("/leads", payload)
};

export const contactApi = {
  createContact: (payload) => api.post("/contact", payload)
};

export const authApi = {
  login: (payload) => api.post("/auth/login", payload),
  signup: (payload) => api.post("/auth/signup", payload)
};  

export const testimonialApi = {
  getTestimonials: () => api.get("/testimonials")
};

export default api;