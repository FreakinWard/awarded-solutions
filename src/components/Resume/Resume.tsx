import { Timeline } from '@mui/lab';

import Job from './components/Job';

const jobs = [
  {
    companyName: 'Frontier',
    role: 'Team Lead Engineer',
    location: 'Denver, CO',
    startedOn: '2023-04-01',
    endedOn: null,
    achievements: [
      'Coached engineers on professionalism, and technical practices including ReactJS, TDD, BDD, and DevOps.',
      'Coached & implemented broader program agile practices.',
      'Led technical and architectural documentation standards.',
      'Mediated inter-team communication promoting collaboration.',
      'Consulted & implemented scalable architecture for application, Azure Cloud, and DevOps.',
      'Architected scalable microsite to support parallel development.',
      'Guided product implementation strategy using lean methodologies.',
      'Managed tech debt and application maintainability, increasing team productivity.',
      'Implemented automated unit and E2E test coverage.',
    ],
  },
  {
    companyName: 'CarMax Solutions',
    location: 'Richmond, VA',
    startedOn: '2021-04-01',
    endedOn: '2023-04-01',
    achievements: [
      'Introduced enterprise DevOps practices, automated teams SDLC',
      'Consulted on microservice architecture using .net core WEB API',
      'Establish dashboards monitoring metrics for build, quality, and application telemetry.',
      'Built app templating enabling teams to provision new web apps quickly using nextJs',
      'Supported technical best practices including, clean code, architecture and SOLID principles',
      'Implemented CI/CD pipelines using Azure Devops.',
      'Integrated multiple OIDC authentication providers for use with web apps.',
    ],
  },
  {
    companyName: 'ComCept Solutions',
    location: 'Clearwater, FL',
    startedOn: '2019-09-01',
    endedOn: '2021-04-01',
    achievements: [
      'Lead development team through agile-transformation.',
      'Introduced technical best practices including, clean code & architecture.',
      'Introduced DevOps best practices to deliver consistent quality.',
      'Implemented CI/CD pipelines using Azure Devops.',
      'ReactJs Web components with .NET core WebAPI microservices.',
      'Supported technical best practices including, clean code, architecture and SOLID principles.',
      'Implemented CI/CD pipelines using Azure Devops.',
    ],
  },
  {
    companyName: 'MBA Consultants',
    location: 'St. Petersburg, FL',
    startedOn: '2017-10-01',
    endedOn: '2019-09-01',
    achievements: [
      'Rewrite legacy applications, adapting modern technology and processes.',
      'Designed using Test Driven Development - TDD.',
      'ReactJs Web component coupled with .NET core WebAPI.',
      'Document and prepare SDLC.',
      'Implement CI/CD pipelines for test automation and deployments.',
      'Setup and configured code repositories and change controls using Azure DevOps',
    ],
  },
  {
    companyName: 'Agile Thought',
    location: 'Tampa, FL',
    startedOn: '2016-07-01',
    endedOn: '2017-10-01',
    achievements: [
      'Worked with multiple, large scaled-agile teams.',
      'Greenfield development utilizing react, redux and C# Web API.',
      'Automated backend and frontend application configurations for developers.',
      'Design and build reusable components using react & redux.',
      'Integrate API from internal and external teams.',
      'Separated presentation views from logical components.',
    ],
  },
  {
    companyName: 'Kobie Marketing',
    location: 'St. Petersburg, FL',
    startedOn: '2014-10-01',
    endedOn: '2016-07-01',
    achievements: [
      'Develop and maintain customer-facing e-commerce web applications.',
      'Lead and guided development team along continuous improvements of processes',
      'Lead design on scalable UI component reuse using CMS',
      'Work with team to adopt agile methodologies',
      'Assisted with redesign of software delivery focusing on continuous integration, unit testing, and automated deployments.',
      'Continuously bridging the communication gap between development and IT Operations.',
    ],
  },
  {
    companyName: 'Integrity One, Inc',
    location: 'Sarasota, FL',
    startedOn: '2014-04-01',
    endedOn: '2014-09-01',
    achievements: [
      'Worked closely with SVP of Products providing feedback on software direction.',
      'Implemented change control process, SDLC',
      'Provided scalable solutions for future software development',
      'Restructured code repository; moving from SVN to TFS.',
      'Lead architect and developer for internal web and console applications supporting a team of 7 developers.',
    ],
  },
  {
    companyName: 'Talbots',
    location: 'Tampa, FL',
    startedOn: '2013-04-01',
    endedOn: '2014-04-01',
    achievements: [
      'Mentor and lead Lead development team, focusing on maintenance.',
      'Developed coding standards and documentation.',
      'Upgraded applications, refactoring with a focus on better maintenance.',
      'Designed and implemented a factory-style framework.',
      'Organize and properly reference company-wide applications for proper compilation.',
      'Implement and configure Microsoft Team Foundation Server for development lifecycle.',
      'Migrate code repositories from SVN to TFS.',
      'Converted VB6 and VB.NET code to C#.',
      'Implemented and optimized stored procedures using SQL Server 2008 R2.',
      'Worked with SSIS packages for ad-hoc data integrations',
      'Restructured data integrations processes to provide faster, more reliable import and exports.',
    ],
  },
  {
    companyName: 'Cyprexx Services',
    location: 'Brandon, FL',
    startedOn: '2011-10-01',
    endedOn: '2013-01-01',
    achievements: [
      'Managed internal Winforms application and e-commerce client web portal',
      'Identified and solved efficiency issues with reading data.',
      'Managed data connectivity via web-services.',
      'Automated data connectivity utilizing windows services.',
      'Design and build ad-hoc SSRS reports.',
      'Developed in agile development cycles.',
    ],
  },
  {
    companyName: 'GSP Marketing Technologies',
    location: 'Clearwater, FL',
    startedOn: '2011-05-01',
    endedOn: '2013-10-01',
    achievements: [
      'Lead developer on internal workflow systems.',
      'Managed development team with day to day activities.',
      'Managed company wide workflow automation application in large-scale printing production.',
      'Developed company-wide news article publishing.',
      'Reduce repetitive code-instances increasing manageability.',
      'Implement n-tier shared libraries',
      'Managed data flow between Postgres and MSSQL database storage.',
    ],
  },
];

export default function Resume() {
  return (
    <>
      <Timeline>
        {jobs.map(job => (
          <Job key={`${job.companyName}-${job.startedOn}`} job={job} />
        ))}
      </Timeline>
    </>
  );
}
