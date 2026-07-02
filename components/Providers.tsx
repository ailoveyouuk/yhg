'use client';

import { ReactNode } from 'react';
import { ServiceBagProvider } from '@/contexts/ServiceBagContext';
import FloatingServiceButton from '@/components/FloatingServiceButton';
import ServiceRequestDrawer from '@/components/ServiceRequestDrawer';

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ServiceBagProvider>
      {children}
      <FloatingServiceButton />
      <ServiceRequestDrawer />
    </ServiceBagProvider>
  );
}
