import {
  Timeline,
  TimelineDescription,
  TimelineIcon,
  TimelineItem,
  TimelineTime,
  TimelineTitle
} from '@/components/ui/timeline';
import { Badge } from '@/components/ui/badge';

type Experience = {
  date: string;
  title: string;
  description: JSX.Element;
  skills: Array<string>;
};

export default function Experiences() {
  const experiences: Array<Experience> = [
    {
      date: 'October 2023 to Current',
      title: 'Senior Frontend Engineer at SecureAge',
      description: (
        <p>
          Build and maintain enterprise-grade zero-trust network projects while
          leading in-house and outsourced development teams. Work closely with
          UX to transition component library from Quasar to a custom Tailwind
          CSS solution.
        </p>
      ),
      skills: ['Next.js', 'React', 'Typescript', 'GraphQL', 'TailwindCSS']
    },
    {
      date: 'December 2020 to October 2023',
      title: 'Frontend Engineer at SecureAge',
      description: (
        <p>
          Build and maintain dashboard management portal and component library
          with over 50 reusable components. Work closely with cross-functional
          teams to implement TypeScript and Zod for enhanced code reliability.
        </p>
      ),
      skills: [
        'Quasar',
        'Vue',
        'RESTful APIs',
        'SCSS',
        'Storybook',
        'Component Library'
      ]
    },
    {
      date: 'January 2020 to December 2020',
      title: 'Engineer at DSTA',
      description: (
        <p>
          Maintain vendor relationships while applying design-thinking
          principles to address operational needs and optimize workflow
          processes.
        </p>
      ),
      skills: ['Project Management', 'Vendor Management']
    }
  ];

  return (
    <div className="w-fit p-4">
      <Timeline>
        {experiences.map((experience, index) => (
          <TimelineItem key={index}>
            <TimelineIcon />
            <TimelineTime>{experience.date}</TimelineTime>
            <TimelineTitle>{experience.title}</TimelineTitle>
            <TimelineDescription>
              <div className="flex flex-col gap-2">
                {experience.description}
                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>
              </div>
            </TimelineDescription>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
