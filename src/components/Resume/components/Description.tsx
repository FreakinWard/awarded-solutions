import { List, ListItem } from '@mui/material';

export default function Description({ achievements }) {
  return (
    <List sx={{ pb: 2 }}>
      {achievements.map((achievment, index) => (
        <ListItem key={index}>{achievment}</ListItem>
      ))}
    </List>
  );
}
