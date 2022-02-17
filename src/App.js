import React, { useEffect } from "react";
import { dataProvider } from "./services";

function App() {
  useEffect(() => {
    const loadData = async () => {
      const data = await dataProvider.getHomeList();
      console.log(`data:${JSON.stringify(data)}`);
    };

    loadData();
  }, []);

  return <div>lul</div>;
}

export default App;
