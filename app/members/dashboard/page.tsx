'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import PageHeader from '@/components/PageHeader';
import MemberNavigation from '@/components/MemberNavigation';
import { Map, BookOpenCheck, ChevronRight } from 'lucide-react';

// Define a type for the user data for better type safety
interface UserData {
  id: string;
  name: string;
  avatar: string;
  email?: string;
}

const DashboardPage = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('/api/user');
        if (res.status === 401) {
          router.push('/members/login');
          return;
        }
        if (!res.ok) {
          throw new Error('Failed to fetch user data');
        }
        const userData = await res.json();
        setUser(userData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An unknown error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [router]);

  if (loading) {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-navy"></div>
        </div>
    );
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen">Error: {error}</div>;
  }

  return (
    <>
      <main>
        <PageHeader title={`Welcome, ${user?.name}!`}>
            <MemberNavigation />
        </PageHeader>
        <div className="container-max py-12">
          <div>

            {/* Quick Links Section */}
            <section>
              <h2 className="text-xl font-semibold font-heading text-navy mb-4">Quick Links</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/members/map" className="block group card section-accent p-6 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Map className="h-6 w-6 mr-4 text-navy" />
                      <span className="text-lg font-bold font-heading text-navy">Church Map</span>
                    </div>
                    <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-navy transition-colors" />
                  </div>
                </Link>
                <Link href="/members/sunday-school" className="block group card section-accent p-6 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <BookOpenCheck className="h-6 w-6 mr-4 text-navy" />
                      <span className="text-lg font-bold font-heading text-navy">Sunday School</span>
                    </div>
                    <ChevronRight className="h-6 w-6 text-gray-400 group-hover:text-navy transition-colors" />
                  </div>
                </Link>
              </div>
            </section>

            {/* Profile Information Section */}
            <section className="mt-12">
              <h2 className="text-xl font-semibold font-heading text-navy mb-4">Your Profile</h2>
              <div className="card p-6">
                <div className="flex items-center space-x-6">
                    <div className="relative w-20 h-20 flex-shrink-0">
                        <Image 
                            src={user?.avatar || ''} 
                            alt={user?.name || ''} 
                            fill
                            className="rounded-full object-cover"
                        />
                    </div>
                    <div className="flex-grow">
                      <dl className="divide-y divide-gray-200">
                          <div className="py-3 grid grid-cols-3 gap-4">
                              <dt className="font-medium text-brown">Full Name</dt>
                              <dd className="text-brown col-span-2">{user?.name}</dd>
                          </div>
                          <div className="py-3 grid grid-cols-3 gap-4">
                              <dt className="font-medium text-brown">Email</dt>
                              <dd className="text-brown col-span-2">{user?.email}</dd>
                          </div>
                      </dl>
                    </div>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardPage;