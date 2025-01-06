'use client';

import * as React from 'react';
import {
  Code,
  GalleryVerticalEnd,
  House,
  Heart,
  Shirt,
  FileDigit,
  Bitcoin
} from 'lucide-react';

import { NavMain } from '@/components/nav-main';
import { NavProjects } from '@/components/nav-projects';
import { NavUser } from '@/components/nav-user';
import { NavSocials } from './nav-socials';
import { TeamSwitcher } from '@/components/team-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail
} from '@/components/ui/sidebar';

import { GitHub, LinkedIn } from './svg';
import { NavLink } from '@/types';
import { useEffect, useState } from 'react';

const user = {
  name: 'Yong Kuan',
  email: 'yongkuan94@gmail.com',
  avatar: '/yongkuan.jpg'
};

const teams = [{ name: 'Yong Kuan', logo: GalleryVerticalEnd, plan: 'Free' }];

const navMain = [
  {
    title: 'Overview',
    url: '/',
    icon: House
  },
  {
    title: 'Experience',
    url: '/experience',
    icon: Code
  }
];

const data = {
  projects: [
    {
      name: 'Crypto Price',
      url: 'https://crypto-price-dashboard-kappa.vercel.app/',
      icon: Bitcoin
    },
    {
      name: 'Power of Numbers',
      url: 'https://power-of-numbers.vercel.app/',
      icon: FileDigit
    },
    {
      name: 'Styleverse',
      url: 'https://styleverse-delta.vercel.app/',
      icon: Shirt
    },
    {
      name: 'Pokemon Tinder',
      url: 'https://pokemon-tinder-alpha.vercel.app/',
      icon: Heart
    }
  ]
};

const socials: Array<NavLink> = [
  {
    name: 'Linkedin',
    icon: <LinkedIn />,
    url: 'https://www.linkedin.com/in/tanyongkuan/'
  },
  {
    name: 'Github',
    icon: <GitHub />,
    url: 'https://github.com/tanyongkuan'
  }
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} activeUrl={currentPath} />
        <NavProjects projects={data.projects} />
        <NavSocials socials={socials} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
