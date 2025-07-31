import { register } from "../config/firebase";
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser";
import { useUserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import * as Yup from "yup";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";

const Register = () => {
  const { user } = useUserContext();

  useRedirectActiveUser(user, "/dashboard");

  const onSubmit = async (
    { email, password },
    { setSubmitting, setErrors, resetForm }
  ) => {
    try {
      // await login({email: email, password:password})
      // pero como el nombre de la propiedad y el valor es el mismo
      // se puede omitir el nombre de la propiedad y se puede escribir de la
      // siguiente forma
      const credentialUser = await register({ email, password });
      console.log("user registered");
      console.log(credentialUser);
      resetForm();
    } catch (error) {
      console.log(error.code);
      console.log(error.message);
      if (error.code == "auth/email-already-in-use") {
        return setErrors({
          email: "El usuario ya está registrado",
        });
      }
    } finally {
      setSubmitting(false);
    }
  };
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Email no válido").required("Email requerido"),
    password: Yup.string()
      .trim()
      .min(6, "Mínimo 6 carácteres")
      .required("Contraseña requerida"),
  });
  return (
    <Box sx={{ mt: 8, maxWidth: "400px", mx: "auto", textAlign: "center" }}>
      <Avatar sx={{ mx: "auto", bgcolor: "#111" }}>
        <AddAPhotoIcon />
      </Avatar>

      <Typography variant="h5" component="h1">
        Register
      </Typography>

      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({
          handleSubmit,
          handleChange,
          values,
          isSubmitting,
          errors,
          touched,
          handleBlur,
        }) => (
          <Box onSubmit={handleSubmit} sx={{ mt: 1 }} component="form">
            <TextField
              type="text"
              placeholder="Ingrese email"
              value={values.email}
              onChange={handleChange}
              name="email"
              onBlur={handleBlur}
              id="email"
              label="Ingrese Email"
              fullWidth
              sx={{ mb: 3 }}
              error={errors.email && touched.email}
              helperText={errors.email && touched.email && errors.email}
            />
            <TextField
              type="password"
              placeholder="Ingrese contraseña"
              value={values.password}
              onChange={handleChange}
              name="password"
              onBlur={handleBlur}
              id="password"
              label="Ingrese contraseña"
              fullWidth
              sx={{ mb: 3 }}
              error={errors.password && touched.password}
              helperText={
                errors.password && touched.password && errors.password
              }
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              loading={isSubmitting}
              variant="contained"
              fullWidth
              sx={{ mb: 3 }}
            >
              Regístrate
            </Button>
            <Button fullWidth component={Link} to="/">
              ¿Ya tienes cuenta? Ingresa?
            </Button>
          </Box>
        )}
      </Formik>
    </Box>
  );
};

export default Register;
