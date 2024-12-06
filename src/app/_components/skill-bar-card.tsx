'use client';

import { Progress } from '@/components/ui/progress';
import { useEffect, useState } from 'react';

interface SkillBarCardProps {
  name: string;
  value: number;
}

export default function SkillBarCard({ name, value }: SkillBarCardProps) {
  const [animatedValue, setAnimatedValue] = useState(0);

  const isNumber = typeof value === 'number';

  useEffect(() => {
    if (isNumber) {
      const duration = 1000; // 1 second
      const steps = 20;
      const stepTime = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        setAnimatedValue(
          Math.min(Math.ceil((value * currentStep) / steps), value)
        );

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepTime);
    }
  }, [value, isNumber]);

  return (
    <div className="space-y-2">
      <div className="flex justify-between">
        <span className="text-sm font-medium">{name}</span>
        <span className="text-sm text-muted-foreground">
          {Math.min(animatedValue || 0, value)}%
        </span>
      </div>
      <Progress
        value={Math.min(animatedValue || 0, value)}
        className="transition-all duration-300"
      />
    </div>
  );
}
