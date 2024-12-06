import * as React from 'react';
import { cn } from '@/lib/utils';

const Timeline = React.forwardRef<
  HTMLOListElement,
  React.HTMLAttributes<HTMLOListElement>
>(({ className, ...props }, ref) => (
  <ol
    ref={ref}
    className={cn(
      'relative border-s border-gray-200 dark:border-gray-700',
      className
    )}
    {...props}
  />
));
Timeline.displayName = 'Timeline';

const TimelineItem = React.forwardRef<
  HTMLLIElement,
  React.LiHTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={cn('mb-10 ms-6', className)} {...props} />
));
TimelineItem.displayName = 'TimelineItem';

const TimelineIcon = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn(
      'absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary ring-8 ring-white dark:bg-primary dark:ring-black',
      className
    )}
    {...props}
  >
    <svg
      className="h-2.5 w-2.5 text-white dark:text-black"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
    </svg>
  </span>
  // <div
  //   ref={ref}
  //   className={cn(
  //     'absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700',
  //     className
  //   )}
  //   {...props}
  // />
));
TimelineIcon.displayName = 'TimelineIcon';

const TimelineTime = React.forwardRef<
  HTMLTimeElement,
  React.HTMLAttributes<HTMLTimeElement>
>(({ className, ...props }, ref) => (
  <time
    ref={ref}
    className={cn(
      'mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500',
      className
    )}
    {...props}
  />
));
TimelineTime.displayName = 'TimelineTime';

const TimelineTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-lg font-semibold text-gray-900 dark:text-white',
      className
    )}
    {...props}
  />
));
TimelineTitle.displayName = 'TimelineTitle';

const TimelineDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn(
      'mb-4 text-base font-normal text-gray-500 dark:text-gray-400',
      className
    )}
    {...props}
  />
));
TimelineDescription.displayName = 'TimelineDescription';

const TimelineConnector = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700',
      className
    )}
    {...props}
  />
));
TimelineConnector.displayName = 'TimelineConnector';

export {
  Timeline,
  TimelineItem,
  TimelineIcon,
  TimelineTime,
  TimelineTitle,
  TimelineDescription,
  TimelineConnector
};
