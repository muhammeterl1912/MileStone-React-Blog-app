import React from "react";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

function LoadingSkeleton() {
  const skeletons = [1, 2, 3, 4]; 

  return (
    <Grid container justifyContent="center" spacing={2}>
      {skeletons.map((_, index) => (
        <Grid item key={index}>
          <Box sx={{ width: 400,height:400, margin: 2 }}>
            <Skeleton variant="rectangular" width={345} height={194} />
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}

export default LoadingSkeleton;
