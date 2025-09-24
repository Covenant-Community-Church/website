'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LogOut, Map, ChevronDown, BookOpenCheck, LayoutDashboard } from 'lucide-react';

export default function MemberNavigation() {
  const router = useRouter();

  const handleSignOut = async () => {
    await fetch('/api/auth/signout');
    router.push('/members/login');
  };

  return (
    <div className="flex items-center space-x-2">
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">
                    Member Pages
                    <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>Navigate To</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link href="/members/dashboard">
                        <LayoutDashboard className="mr-2 h-4 w-4" />
                        <span>Dashboard</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/members/map">
                        <Map className="mr-2 h-4 w-4" />
                        <span>Map</span>
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                    <Link href="/members/sunday-school">
                        <BookOpenCheck className="mr-2 h-4 w-4" />
                        <span>Sunday School</span>
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        <Button variant="destructive" onClick={handleSignOut}>
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
        </Button>
    </div>
  );
}


