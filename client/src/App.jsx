import { useEffect } from "react";

const App = () => {
  const env = import.meta.env.DEV;
  const baseUrl = import.meta.env.VITE_SERVER_BASE_URL;

  const url = env ? "/api/users" : `${baseUrl}/api/users`;
  console.log(url);
  useEffect(() => {
    const getUsers = async () => {
      const res = await fetch(url);
      const data = await res.json();
      if (!res.ok) {
        console.log("error fetching data", data);
      }

      console.log(data);
    };
    getUsers();
  }, []);
  return (
    <div id="app">
      <div className="container">
        <h1 className="heading center">Hello World</h1>
        <p className="text center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          eligendi repudiandae perspiciatis eveniet velit reprehenderit iure eum
          ullam, voluptate dolorem!
        </p>
      </div>
    </div>
  );
};

export default App;
