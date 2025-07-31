import { Button } from "@mui/material";
import { logout } from "../config/firebase";
import { useUserContext } from "../context/UserContext";

const Dashboard = () => {
  const { user } = useUserContext();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Dashboard (ruta protegida)</h1>
      <h2>Bienvenido: {user.name}</h2>
      <Button variant="contained" onClick={handleLogout}>
        Logout
      </Button>
    </>
  );
};

export default Dashboard;
