import { Box, Typography, Button } from "@mui/material";

const Confirm = () => {
  return (
    <Box
      sx={{
        minHeight: "40vh",
        py: 8,
        px: 2,
        backgroundColor: "#e0f7fa", // celeste pastel claro
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      {/* Título principal cursiva */}
      <Typography
        variant="h4"
        sx={{
          fontFamily: "'Great Vibes', cursive",
          fontWeight: "bold",
          fontSize: { xs: "2rem", md: "2.5rem" },
          mb: 2,
          color: "#006064", // azul oscuro para contraste
        }}
      >
        Confirmación de asistencia
      </Typography>

      {/* Subtítulo más pequeño */}
      <Typography
        variant="body1"
        sx={{
          fontSize: { xs: "1rem", md: "1.1rem" },
          maxWidth: 500,
          mb: 4,
          color: "#00796b", // verde azulado suave
        }}
      >
        Esperamos que seas parte de esta gran celebración. ¡Confirmanos tu asistencia!
      </Typography>

      {/* Botón */}
      <Button
        component="a"
        href="https://docs.google.com/forms/d/e/1FAIpQLSelY0QMb2Pdi7bOb19tFv-Q42qepyMiIHq9qaPUBfGh_Qr8Lw/viewform?fbzx=4030668355714172330"
        target="_blank"
        rel="noopener noreferrer"
        variant="contained"
        sx={{
          borderRadius: 999,
          px: 4,
          backgroundColor: "#b2ebf2", // celeste pastel suave
          color: "#004d40",
          boxShadow: "none",
          "&:hover": {
            backgroundColor: "#fff",
            border: "2px solid #b2ebf2",
            color: "#004d40",
          },
        }}
      >
        Confirmar asistencia
      </Button>
    </Box>
  );
};

export default Confirm;
