import { Button } from "@/components/ui/button";
import { Play, Heart } from "lucide-react";
import Link from "next/link";

export function HomeSection() {
    return (
        // The main section now handles the background image directly.
        // It's also a flex container to center the content vertically and horizontally.
        <section
            className="relative flex items-center justify-center min-h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/IMG_8264.jpg')", backgroundPosition: "50% 30%" }}
        >
            {/* This single div creates the blurred overlay effect. */}
            <div className="absolute inset-0 bg-background/90 backdrop-blur-sm" />
            {/* The content container is positioned relatively to sit on top of the overlay. */}
            <div className="relative container px-4 text-center space-y-8">
                <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
                    Our purpose is to glorify God as we proclaim Jesus Christ as Lord and prepare His people to worship Him forever.
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                    We believe in the power of community, worship, and service. Join us on a
                    journey of faith to experience God&apos;s love and grow in your relationship with Him.
                </p>

                {/* The button layout and animations remain the same to keep it "reactive". */}
                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
                    <Button asChild size="lg" className="group transition-all duration-300 hover:scale-[1.02]">
                        <Link href="/src/components/pages/sermons">
                            <Play className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                            Watch Livestream
                        </Link>
                    </Button>

                    <Button asChild size="lg" variant="outline" className="group transition-all duration-300 hover:scale-[1.02] border-primary/20 hover:border-primary/30">
                        <Link href="/donate">
                            <Heart className="mr-2 h-4 w-4 transition-transform group-hover:scale-110 group-hover:text-primary" />
                            Donate
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}