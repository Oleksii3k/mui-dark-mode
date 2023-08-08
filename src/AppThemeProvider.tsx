import { ThemeProvider, createTheme } from "@mui/material";
import { useEffect, useMemo } from "react";
import { useDarkMode } from "usehooks-ts";
export default function AppThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isDarkMode } = useDarkMode();
  useEffect(() => console.log("isDarkMode", isDarkMode), [isDarkMode]);
  const theme = useMemo(() => {
    console.log("createTheme()");

    const theme = createTheme({
      palette: {
        mode: isDarkMode ? "dark" : "light",
      },
    });
    return theme;
  }, [isDarkMode]);
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
