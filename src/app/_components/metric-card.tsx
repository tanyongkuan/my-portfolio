'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

interface MetricCardProps {
  title: string;
  value: number | string;
  icon: JSX.Element;
  url?: string;
}

export default function MetricCard({
  title,
  value,
  icon: Icon,
  url
}: MetricCardProps) {
  const [count, setCount] = useState(0);

  const isNumber = typeof value === 'number';

  useEffect(() => {
    if (isNumber) {
      const duration = 1000; // 1 second
      const steps = 20;
      const stepTime = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        setCount(Math.min(Math.ceil((value * currentStep) / steps), value));

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepTime);
    }
  }, [value, isNumber]);

  const CardContents = (
    <>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {Icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{isNumber ? count : value}</div>
      </CardContent>
    </>
  );

  return (
    <Card
      className={`col-span-4 w-full md:col-span-2 lg:col-span-1 ${url ? 'transition-transform duration-200 hover:scale-105' : ''}`}
    >
      {url ? (
        <Link href={url} className="block">
          {CardContents}
        </Link>
      ) : (
        CardContents
      )}
    </Card>
  );
}
