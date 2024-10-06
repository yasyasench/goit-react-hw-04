import axios from "axios";

export const fetchImages = async () => {
    const {data} = await axios.get(
          "https://api.unsplash.com/search/photos",
          {
            params: { query: "office" },
            headers: {
              Authorization: `Client-ID FEWGqNTCAxDs98Vlyi2KHLELNqgCy06xALHFQEBFWA4`, // Replace with your Unsplash Access Key
            },
          }
    );
    return data;
}