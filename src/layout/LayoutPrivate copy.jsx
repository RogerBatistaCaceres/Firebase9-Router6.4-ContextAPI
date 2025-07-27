import { Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useEffect } from "react";

const LayoutPrivate = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  // este hook useEffect se ejecuta la primera vez que se ejecuta el
  // componente y cuando  se actualiza su valor y además puede estar
  // pendiente de algo, en este caso del user
  // cada vez que cambia el usuario entra a este hook
  useEffect(() => {
    // console.log(user);
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return (
    <>
      <Outlet />
    </>
  );
};
export default LayoutPrivate;
