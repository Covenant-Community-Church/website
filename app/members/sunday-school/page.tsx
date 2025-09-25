'use client';

import MemberNavigation from '@/components/MemberNavigation';
import PageHeader from '@/components/PageHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const SundaySchoolPage = () => {
  return (
    <>
      <main>
        <PageHeader title="Sunday School">
          <MemberNavigation />
        </PageHeader>
        <div className="container mx-auto py-12 px-4">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle>Coming Soon</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Details and resources for the members&apos; Sunday School class will be available here soon.</p>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
};

export default SundaySchoolPage;
