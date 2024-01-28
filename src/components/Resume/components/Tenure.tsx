import { Typography } from '@mui/material';
import { format, parseISO } from 'date-fns';

const formatDate = isoDate => {
  if (!isoDate) return 'current';

  return format(parseISO(isoDate), 'MMM yyyy');
};

export default function Tenure({ from, to }) {
  const startedOn = formatDate(from);
  const endedOn = formatDate(to);

  return (
    <>
      <br />
      <Typography variant="overline">{`${startedOn} - ${endedOn ?? 'current'}`}</Typography>
    </>
  );
}
