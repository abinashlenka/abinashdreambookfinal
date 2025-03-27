import axios from "axios";

const API_BASE_URL = "https://dream-book-backend-main.vercel.app/api";

export const getAllOrders = async ({ bookId }) => {
    try {
      const res = await axios.get(`https://dream-book-backend-main.vercel.app/api/orders?bookId=${bookId}`);
      return { status: true, data: res.data.results || [] }; // <-- ensure it's an array
    } catch (error) {
      console.error("❌ Error fetching orders:", error);
      return { status: false, error };
    }
  };