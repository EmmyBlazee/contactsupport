'use client';

import { ReactNode } from 'react';

interface CustomThemeProviderProps {
  children: ReactNode;
}

export default function CustomThemeProvider({ children }: CustomThemeProviderProps) {
  return (
    <div>
      {children}
    </div>
  );
}


