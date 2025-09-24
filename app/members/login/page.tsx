"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";

// Function to generate a random string for the state parameter
const generateState = (length: number) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

const LoginPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleLogin = () => {
    const state = generateState(16);
    // Store the state in a temporary cookie
    Cookies.set("pco_oauth_state", state, { secure: true, sameSite: "lax" });

    const clientId = process.env.NEXT_PUBLIC_PCO_CLIENT_ID;
    const redirectUri = process.env.NEXT_PUBLIC_PCO_REDIRECT_URI;

    if (!clientId || !redirectUri) {
      console.error("Missing Planning Center environment variables.");
      // Handle this error more gracefully in a real app
      return;
    }

    const authUrl = `https://api.planningcenteronline.com/oauth/authorize?client_id=${clientId}&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&response_type=code&scope=people&state=${state}`;

    window.location.href = authUrl;
  };

  useEffect(() => {
    const code = searchParams.get("code");
    const state = searchParams.get("state");

    if (code && state) {
      const storedState = Cookies.get("pco_oauth_state");
      if (state === storedState) {
        // State matches, proceed with code exchange
        fetch("/api/auth/pco-callback", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ code }),
        })
          .then((res) => {
            if (res.ok) {
              Cookies.remove("pco_oauth_state"); // Clean up state cookie
              router.push("/members/dashboard");
            } else {
              // Handle error
              console.error("Failed to exchange code for token");
              router.push("/members/login?error=auth_failed");
            }
          })
          .catch((err) => {
            console.error("Error during fetch:", err);
            router.push("/members/login?error=fetch_failed");
          });
      } else {
        // State mismatch, potential CSRF attack
        console.error("State mismatch. CSRF attack suspected.");
        router.push("/members/login?error=state_mismatch");
      }
    }
  }, [searchParams, router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center text-gray-900">
          Member Login
        </h1>
        <p className="text-center text-gray-600">
          Please sign in with your Planning Center account.
        </p>
        <button
          onClick={handleLogin}
          className="w-full px-4 py-2 font-bold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Sign In with Planning Center
        </button>
        {searchParams.has("error") && (
          <p className="text-sm text-center text-red-600">
            Login failed. Please try again.
          </p>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
