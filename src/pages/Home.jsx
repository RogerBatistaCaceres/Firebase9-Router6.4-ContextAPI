import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Home = () => {
  const { user, setUser } = useUserContext();
  // este hug le permite hacer el redireccionamiento dentro de un componente
  //
  const navigate = useNavigate();
  const handleLogin = () => {
    setUser({
      name: "Polo",
      email: "polo@test.com",
    });
    // Le dice ahora te vas a ir a la página dashboard
    navigate("/dashboard");
  };
  return (
    <>
      <h1>Home</h1>
      <button onClick={handleLogin}>Login</button>
    </>
  );
};

export default Home;
