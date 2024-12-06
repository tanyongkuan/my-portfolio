import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Building2, Code2, Medal } from 'lucide-react';
import MetricCard from './_components/metric-card';
import { GitHub } from '@/components/svg';
import SkillBarCard from './_components/skill-bar-card';

export default function Home() {
  const calculateYearsOfExperience = () => {
    const startYear = 2020;
    const currentYear = new Date().getFullYear();
    return currentYear - startYear;
  };

  const primarySkills = [
    { name: 'React', proficiency: 90 },
    { name: 'NextJS', proficiency: 85 },
    { name: 'Vue', proficiency: 85 },
    { name: 'Quasar', proficiency: 80 },
    { name: 'TailwindCSS', proficiency: 90 },
    { name: 'TypeScript', proficiency: 85 }
  ];

  const secondarySkills = [
    { name: 'Prisma', proficiency: 70 },
    { name: 'Drizzle', proficiency: 65 },
    { name: 'GraphQL', proficiency: 70 },
    { name: 'NodeJS', proficiency: 65 },
    { name: 'Java', proficiency: 60 }
  ];

  const metrics = [
    {
      title: 'Years of Experience',
      value: calculateYearsOfExperience(),
      icon: <Medal className="h-4 w-4 text-muted-foreground" />,
      url: '/experience'
    },
    {
      title: 'Companies',
      value: 2,
      icon: <Building2 className="h-4 w-4 text-muted-foreground" />
    },
    {
      title: 'Tech Mastered',
      value: primarySkills.length,
      icon: <Code2 className="h-4 w-4 text-muted-foreground" />
    },
    {
      title: 'GitHub Activity',
      value: 'Active',
      icon: <GitHub className="h-4 w-4 text-muted-foreground" />
    }
  ];

  return (
    <div className="w-full space-y-4">
      <div className="grid grid-cols-4 gap-2">
        <Card className="col-span-4">
          <CardHeader>
            <div className="flex items-center gap-6">
              <Avatar className="h-20 w-20">
                <AvatarImage src="yongkuan.jpg" alt="yongkuan_photo" />
                <AvatarFallback>YK</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>Tan Yong Kuan</CardTitle>
                <CardDescription>
                  Senior Frontend Software Engineer
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
              Crafting seamless experiences, solving challenges, one line of
              code at a time.
            </p>
          </CardContent>
        </Card>

        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}

        {/* Skills Section */}
        <Card className="col-span-4 lg:col-span-2">
          <CardHeader>
            <CardTitle>Primary Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {primarySkills.map((skill) => (
              <SkillBarCard
                key={skill.name}
                name={skill.name}
                value={skill.proficiency}
              />
            ))}
          </CardContent>
        </Card>

        <Card className="col-span-4 lg:col-span-2">
          <CardHeader>
            <CardTitle>Secondary Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {secondarySkills.map((skill) => (
              <SkillBarCard
                key={skill.name}
                name={skill.name}
                value={skill.proficiency}
              />
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
