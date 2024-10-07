import axios from "axios";

export const fetchImages = async (query, page = 1) => {
    const {data} = await axios.get(
          "https://api.unsplash.com/search/photos",
          {
            params: {
              query,
              page,
              orientation: "landscape",
            },
            headers: {
              Authorization: `Client-ID FEWGqNTCAxDs98Vlyi2KHLELNqgCy06xALHFQEBFWA4`, 
            },
          }
    );
    return data;
}