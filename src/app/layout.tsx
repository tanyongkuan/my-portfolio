import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AppSidebar } from '@/components/app-sidebar';
import { Separator } from '@/components/ui/separator';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger
} from '@/components/ui/sidebar';
import { ThemeProvider } from '@/components/theme-provider';
import { type ReactNode } from 'react';
import DynamicBreadcrumb from './_components/breadcrumb_header';

export const metadata: Metadata = {
  title: 'Yong Kuan | Frontend Software Engineer',
  description:
    'Experienced Frontend Software Engineer specializing in building dynamic web applications, creating scalable component libraries, and leading cross-functional teams. Passionate about delivering intuitive user experiences using modern web technologies like React, Vue, and Tailwind CSS.'
};

const inter = Inter({
  subsets: ['latin']
});

export default async function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                <div className="flex items-center gap-2 px-4">
                  <SidebarTrigger className="-ml-1" />
                  <Separator orientation="vertical" className="mr-2 h-4" />
                  <DynamicBreadcrumb />
                </div>
              </header>
              <div className="m-auto p-4 pt-0 md:max-w-xl lg:max-w-4xl">
                {children}
              </div>
            </SidebarInset>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
