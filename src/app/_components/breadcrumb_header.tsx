'use client';

import { usePathname } from 'next/navigation';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb';
import { Fragment } from 'react';

export default function DynamicBreadcrumb() {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(Boolean); // Remove empty segments

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathSegments.map((path, index) => {
          const isLast = index === pathSegments.length - 1;
          return (
            <Fragment key={index}>
              {index > 0 && <BreadcrumbSeparator className="hidden md:block" />}
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="capitalize">{path}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink
                    href={`/${pathSegments.slice(0, index + 1).join('/')}`}
                    className="capitalize"
                  >
                    {path}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
