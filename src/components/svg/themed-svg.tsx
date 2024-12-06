'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

type ThemedSVGProps = React.SVGProps<SVGSVGElement> & {
  lightColor?: string;
  darkColor?: string;
};

const ThemedSVG = ({
  lightColor = '#000', // Default light mode color
  darkColor = '#fff', // Default dark mode color
  ...props
}: ThemedSVGProps) => {
  const { theme, resolvedTheme } = useTheme();
  const [fillColor, setFillColor] = useState(lightColor);

  useEffect(() => {
    const currentTheme = resolvedTheme || theme;
    setFillColor(currentTheme === 'dark' ? darkColor : lightColor);
  }, [theme, resolvedTheme, lightColor, darkColor]);

  return <svg {...props} style={{ fill: fillColor, ...props.style }} />;
};

export default ThemedSVG;
