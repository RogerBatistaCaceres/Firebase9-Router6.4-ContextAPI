import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const LayoutPrivate = () => {
  const { user } = useUserContext();

  return (
    <>
      {
        // Si el usuario existe muestra el contenido, de lo contrario
        // ve a la página de inicio.
        user ? <Outlet /> : <Navigate to="/" />
      }
    </>
  );
};
export default LayoutPrivate;
