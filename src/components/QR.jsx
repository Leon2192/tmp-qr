import { Box, Typography, Fade , Divider} from "@mui/material";
import { useInView } from "react-intersection-observer";

const Qr = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <Box
      ref={ref}
      sx={{
        minHeight: "30vh",
        py: 8,
        px: 2,
        backgroundColor: "#ffffff", // fondo blanco
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Fade in={inView} timeout={800}>
        <Box
          sx={{
            transform: inView ? "scale(1)" : "scale(0.95)",
            transition: "transform 0.6s ease-out",
          }}
        >
          {/* Imagen centrada */}
          <Box display="flex" justifyContent="center" mb={2}>
            <Box
              component="img"
              src="/images/qr.avif"
              alt="Código QR"
              sx={{
                width: 200,
                height: 200,
                objectFit: "contain",
              }}
            />
          </Box>

          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.8rem", md: "2.2rem" },
              mb: 1,
              color: "#757575", // gris medio
            }}
          >
            Escaneá este QR
          </Typography>

          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: "1rem", md: "1.7rem" },
              color: "#9e9e9e", // gris más claro
            }}
          >
            ¡Compartí las fotos del evento con los anfitriones!
          </Typography>
        </Box>
      </Fade>

       {/* Divider al final */}
       <Divider
        sx={{
          mt: 6,
          mx: "auto",
          width: "40px",
          borderBottomWidth: 2,
          borderColor: "#ccc",
        }}
      />
    </Box>
  );
};

export default Qr;
