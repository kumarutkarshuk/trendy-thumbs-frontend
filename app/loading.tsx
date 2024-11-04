import React from 'react';
import { ThumbsUp } from 'lucide-react';

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative w-24 h-24">
        <ThumbsUp className="w-full h-full text-white animate-pulse" />
      </div>
    </div>
  );
}