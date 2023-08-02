import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getApiConfiguration } from "./store/homeSlice";
import { fetchDataFromApi } from "./utils/api";

function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = async () => {
    try {
      const res = await fetchDataFromApi("/movie/popular");
      console.log(res);
      dispatch(getApiConfiguration(res));
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };

  return (
    <div className="App">
      App
      {url?.total_pages}
    </div>
  );
}

export default App;
