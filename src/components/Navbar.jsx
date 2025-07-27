import { NavLink } from "react-router-dom";
import { useUserContext } from "../utils/useUserContext.js";

const Navbar = () => {
  // console.log(useContext(UserContext));
  // console.log(useUserContext());
  const { user, setUser } = useUserContext();
  return (
    <nav>
      <NavLink to="/">Home</NavLink> |
      {
        // si el usuario existe yo voy a devolver el Dashboard,
        // el estado del usuario se actualiza en el UserContext
        // useState(false) o useState(true)
        user && (
          <>
            <NavLink to="/dashboard">Dashboard</NavLink>
            <button onClick={() => setUser(false)}>Logout</button>
          </>
        )
      }
    </nav>
  );
};

export default Navbar;
