import { Box, Button, CssBaseline, Typography } from "@mui/material";
import "./App.css";
import Buttons from "./Buttons";
import { useDarkMode } from "usehooks-ts";
import Texts from "./Texts";

function App() {
  const { isDarkMode, toggle } = useDarkMode();
  return (
    <Box sx={{ p: 5 }}>
      <CssBaseline />
      <Typography>Current mode: {isDarkMode ? "Dark" : "Light"}</Typography>
      <Button onClick={toggle}>Toggle</Button>
      <Texts />
      <Buttons />
    </Box>
  );
}

export default App;
