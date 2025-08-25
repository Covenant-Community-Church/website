import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// Define shared types for consistency
export interface Video {
    id: {
        videoId: string;
    };
    snippet: {
        title:string;
        thumbnails?: {
            medium?: { url: string; };
            default?: { url: string; };
        };
    };
}

export interface Playlist {
    playlistTitle: string;
    videos: Video[];
}

// Creates a URL-friendly "slug" from a string
export const slugify = (text: string): string => {
    return text
        .toLowerCase()
        .replace(/\s+/g, '-')      // Replace spaces with -
        .replace(/[^\w-]+/g, '') // Remove all non-word chars
        .replace(/--+/g, '-');     // Replace multiple - with single -
};