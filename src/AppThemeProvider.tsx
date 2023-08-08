import { ThemeProvider, createTheme } from "@mui/material";
import { useMemo } from "react";
import { useDarkMode } from "usehooks-ts";
export default function AppThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isDarkMode } = useDarkMode();
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
