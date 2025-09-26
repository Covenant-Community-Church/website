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
        <div className="container-max py-12">
          <Card>
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
