import { Typography } from '@mui/material';

export default function Company({ name }) {
  return (
    <Typography variant="h6" component="span" sx={{ fontWeight: 800 }}>
      {name}
    </Typography>
  );
}
