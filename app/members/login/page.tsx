"use client";

import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

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

const Login = () => {
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
  }, [router, searchParams]);

  return (
    <>
      <Header />
      <main>
        <PageHeader title="Member Login" />
        <div className="container mx-auto flex items-center justify-center py-12 px-4">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <CardTitle>Sign In</CardTitle>
              <CardDescription>
                Please sign in with your Planning Center account to access the
                member area.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {searchParams.has("error") && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Login Failed</AlertTitle>
                  <AlertDescription>
                    There was a problem logging you in. Please try again.
                  </AlertDescription>
                </Alert>
              )}
              <Button onClick={handleLogin} className="w-full">
                Sign In with Planning Center
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
};

const LoginPage = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Login />
        </Suspense>
    )
}

export default LoginPage;