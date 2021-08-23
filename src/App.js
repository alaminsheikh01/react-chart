import React from "react";
import ApexCharts from "./ApexChart";
import { auth, provider } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user, loading, error] = useAuthState(auth());
  console.log(user);

  const signIn = () => {
    auth()
      .signInWithPopup(provider)
      .catch((error) => alert(error.message));
  };

  return (
    <div className="App">
      <h2>Hello world</h2>

      {loading ? (
        <h2>Loading...</h2>
      ) : user ? (
        <ApexCharts />
      ) : (
        <button onClick={signIn}>Sign in with google</button>
      )}
    </div>
  );
}

export default App;
