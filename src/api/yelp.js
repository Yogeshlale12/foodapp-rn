import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 8aql8RnGLWPNZSByeHC6D_bhSB8AciVm51IjVSaoTuAlaPGcIE748QSI29hOCnpMc7IMjBr7OB77ihk9mrSNPSs3ttqCRN5FPvGWo2mKoUz8GQ3ejgiVoX4ajRmoY3Yx",
  },
});
