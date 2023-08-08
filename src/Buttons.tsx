import { Button, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useDarkMode } from "usehooks-ts";
import Grid from "@mui/material/Unstable_Grid2";
export default function Buttons() {
  const { isDarkMode, toggle } = useDarkMode(undefined);
  useEffect(() => console.log("isDarkMode", isDarkMode), [isDarkMode]);
  return (
    <Stack spacing={3}>
      <Typography variant="h5">Button</Typography>
      <Grid container columns={8} spacing={3}>
        <Grid xs={1}>
          <Typography>Text</Typography>
        </Grid>
        <Grid xs={1}>
          <Button variant="text" color="primary" onClick={toggle}>
            Primary
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button variant="text" color="secondary" onClick={toggle}>
            secondary
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button variant="text" color="inherit" onClick={toggle}>
            inherit
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button variant="text" color="success" onClick={toggle}>
            success
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button variant="text" color="warning" onClick={toggle}>
            warning
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button variant="text" color="info" onClick={toggle}>
            info
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button variant="text" color="error" onClick={toggle}>
            error
          </Button>
        </Grid>
        <Grid xs={1}>
          <Typography>Contained</Typography>
        </Grid>
        <Grid xs={1}>
          <Button variant="contained" color="primary" onClick={toggle}>
            Primary
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button variant="contained" color="secondary" onClick={toggle}>
            secondary
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button variant="contained" color="inherit" onClick={toggle}>
            inherit
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button variant="contained" color="success" onClick={toggle}>
            success
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button variant="contained" color="warning" onClick={toggle}>
            warning
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button variant="contained" color="info" onClick={toggle}>
            info
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button variant="contained" color="error" onClick={toggle}>
            error
          </Button>
        </Grid>
        <Grid xs={1}>
          <Typography>Outlined</Typography>
        </Grid>
        <Grid xs={1}>
          <Button variant="outlined" color="primary" onClick={toggle}>
            Primary
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button variant="outlined" color="secondary" onClick={toggle}>
            secondary
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button variant="outlined" color="inherit" onClick={toggle}>
            inherit
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button variant="outlined" color="success" onClick={toggle}>
            success
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button variant="outlined" color="warning" onClick={toggle}>
            warning
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button variant="outlined" color="info" onClick={toggle}>
            info
          </Button>
        </Grid>
        <Grid xs={1}>
          <Button variant="outlined" color="error" onClick={toggle}>
            error
          </Button>
        </Grid>
      </Grid>
    </Stack>
  );
}
