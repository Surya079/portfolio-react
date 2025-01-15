/* eslint-disable no-unused-vars */
import { Box, Grid2 as Grid, Skeleton, Stack } from "@mui/material";

const SkeletonLoader = ({ variant, height }) => {
  const variants = {
    header: (
      <Box
        sx={{
          p: 1,
          bgcolor: "#475569",
        }}>
        <Skeleton
          variant="rectangular"
          height={60}
          sx={{ bgcolor:"#94A3B8"}}
        />
      </Box>
    ),
    footer: (
      <Box sx={{ p: 2, bgcolor: "#475569" }}>
        <Stack spacing={2}>
          <Skeleton variant="rectangular" height={40} />
          <Skeleton variant="rectangular" height={120} />
        </Stack>
      </Box>
    ),
    content: (
      <Box sx={{ p: 3, bgcolor: "#475569" }}>
        <Stack spacing={4} >
          {/* Page Title */}
          <Skeleton
            variant="text"
            width="50%"
            height={40}
            sx={{ mx: "auto", bgcolor:"#94A3B8" }}
           
          />

          {/* Hero Section */}
          <Skeleton
            variant="rectangular"
            width="100%"
            height={300}
            sx={{ borderRadius: 2, bgcolor:"#94A3B8" }}
          />

          {/* Content Blocks */}
          <Grid container spacing={3}>
            {/* Content Block 1 */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Skeleton
                variant="rectangular"
                width="100%"
                height={200}
                sx={{ borderRadius: 2, bgcolor:"#94A3B8" }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={2}>
                <Skeleton variant="text" width="90%"  sx={{ bgcolor:"#94A3B8"}}/>
                <Skeleton variant="text" width="80%"  sx={{ bgcolor:"#94A3B8"}}/>
                <Skeleton variant="text" width="85%" sx={{ bgcolor:"#94A3B8"}} />
              </Stack>
            </Grid>

            {/* Content Block 2 */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Skeleton
                variant="rectangular"
                width="100%"
                height={150}
                sx={{ borderRadius: 2 , bgcolor:"#94A3B8"}}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Skeleton
                variant="rectangular"
                width="100%"
                height={150}
                sx={{ borderRadius: 2, bgcolor:"#94A3B8" }}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Skeleton
                variant="rectangular"
                width="100%"
                height={150}
                sx={{ borderRadius: 2, bgcolor:"#94A3B8" }}
              />
            </Grid>
          </Grid>
        </Stack>
      </Box>
    ),
    blogs: (
      <Box sx={{ p: 3, bgcolor: "#475569" }}>
        <Stack spacing={4}>
          {/* Blog Title */}
          <Skeleton
            variant="text"
            width="80%"
            height={40}
            sx={{ mx: "auto", bgcolor:"#94A3B8" }}
          />

          {/* Main Content Section */}
          <Grid container spacing={3} alignItems="center">
            {/* Picture or Video */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Skeleton
                variant="rectangular"
                width="100%"
                height={200}
                sx={{ borderRadius: 2, bgcolor:"#94A3B8" }}
              />
            </Grid>

            {/* Text Content */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={2}>
                <Skeleton variant="text" width="90%" height={30}  sx={{ bgcolor:"#94A3B8"}}/>
                <Skeleton variant="text" width="85%" sx={{ bgcolor:"#94A3B8"}} />
                <Skeleton variant="text" width="80%"  sx={{ bgcolor:"#94A3B8"}}/>
                <Skeleton variant="text" width="75%"  sx={{ bgcolor:"#94A3B8"}}/>
              </Stack>
            </Grid>
          </Grid>

          {/* Additional Content Section */}
          <Grid container spacing={3}>
            {/* Additional Text */}
            <Grid size={{ xs: 12, md: 4 }}>
              <Skeleton
                variant="rectangular"
                width="100%"
                height={150}
                sx={{ borderRadius: 2 , bgcolor:"#94A3B8"}}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Skeleton
                variant="rectangular"
                width="100%"
                height={150}
                sx={{ borderRadius: 2 , bgcolor:"#94A3B8"}}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <Skeleton
                variant="rectangular"
                width="100%"
                height={150}
                sx={{ borderRadius: 2, bgcolor:"#94A3B8" }}
              />
            </Grid>
          </Grid>
        </Stack>
      </Box>
    ),
    form: (
      <Box
        sx={{
          p: 3,
          bgcolor: "#475569",
          borderRadius: 2,
          boxShadow: 3,
          maxWidth: 500,
          mx: "auto",
        }}>
        <Stack spacing={3}>
          {/* Form Title */}
          <Skeleton
            variant="text"
            width="40%"
            height={30}
            sx={{ mx: "auto", bgcolor:"#94A3B8" }}
          />

          {/* Input Fields */}
          {[...Array(4)].map((_, index) => (
            <Box key={index}>
              <Skeleton variant="text" width="30%" sx={{ mb: 1 , bgcolor:"#94A3B8"}} />
              {/* Label */}
              <Skeleton
                variant="rectangular"
                height={45}
                sx={{ borderRadius: 1, bgcolor:"#94A3B8" }}
              />
            </Box>
          ))}

          {/* Submit Button */}
          <Skeleton
            variant="rectangular"
            height={50}
            width="50%"
            sx={{ mx: "auto", borderRadius: 2, bgcolor:"#94A3B8" }}
          />
        </Stack>
      </Box>
    ),
    error: (
      <Box sx={{ p: 2, textAlign: "center", bgcolor: "#475569" }}>
        <Stack spacing={2} alignItems="center">
          <Skeleton variant="circular" width={86} height={86}  sx={{ bgcolor:"#94A3B8"}}/>
          <Skeleton variant="rectangular" width="60%" height={32} sx={{ bgcolor:"#94A3B8"}} />
          <Skeleton variant="text" width="40%" sx={{ bgcolor:"#94A3B8"}} />
        </Stack>
      </Box>
    ),
  };

  return variants[variant];
};

export default SkeletonLoader;
