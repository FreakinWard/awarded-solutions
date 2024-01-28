import { TimelineContent, TimelineItem, TimelineOppositeContent } from '@mui/lab';

import Company from './Company';
import Description from './Description';
import JobConnector from './JobConnector';
import Role from './Role';
import Tenure from './Tenure';

export default function Job({ job }) {
  return (
    <TimelineItem>
      <TimelineOppositeContent color="text.secondary">
        <Company name={job.companyName} />
        <Role role={job.role} />
        <Tenure from={job.startedOn} to={job.endedOn} />
      </TimelineOppositeContent>
      <JobConnector />
      <TimelineContent>
        <Description achievements={job.achievements} />
      </TimelineContent>
    </TimelineItem>
  );
}
