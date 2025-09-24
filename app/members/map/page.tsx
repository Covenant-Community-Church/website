'use client';

import { useRouter } from 'next/navigation';

const MapPage = () => {
  const router = useRouter();

  const handleSignOut = async () => {
    await fetch('/api/auth/signout');
    router.push('/members/login');
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Church Location
          </h1>
          <button
            onClick={handleSignOut}
            className="px-4 py-2 font-semibold text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Sign Out
          </button>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="bg-white shadow overflow-hidden sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Covenant Community Church
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  5104 E Stevenson Ave, Chillicothe, IL 61523
                </p>
              </div>
              <div className="border-t border-gray-200" style={{ height: '600px' }}>
                <iframe
                  src="https://www.google.com/maps/embed/v1/place?q=5104%20E%20Stevenson%20Ave%2C%20Chillicothe%2C%20IL&key="
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MapPage;
