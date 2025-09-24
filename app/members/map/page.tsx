'use client';

import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import PageHeader from '@/components/PageHeader';
import MemberNavigation from '@/components/MemberNavigation';

const MapPage = () => {

  // Use next/dynamic to load the map component only on the client side
  const MemberMap = useMemo(() => dynamic(() => import('@/components/MemberMap'), { 
    ssr: false,
    loading: () => <div className="flex items-center justify-center h-full"><p>Loading map...</p></div>
  }), []);

  return (
    <>
      <main>
        <PageHeader title="Church Location">
            <MemberNavigation />
        </PageHeader>
        <div className="container mx-auto py-12 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="mb-4">
                    <h2 className="text-2xl font-bold font-heading text-navy">Covenant Community Church</h2>
                    <p className="text-muted-foreground">5104 E Stevenson Ave, Chillicothe, IL 61523</p>
                </div>
                <div className="rounded-lg border border-warm overflow-hidden" style={{ height: '65vh' }}>
                    <MemberMap />
                </div>
            </div>
        </div>
      </main>
    </>
  );
};

export default MapPage;