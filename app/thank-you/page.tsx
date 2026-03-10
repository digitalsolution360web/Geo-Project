"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";

export default function ThankYouPage() {
  return (
    <>
   
  
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 text-center">
        {/* Success Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>

        {/* Thank You Message */}
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Thank You!
        </h1>
        <p className="text-gray-600 mb-6">
          The GeoDecision Analytics team will review your message and respond as soon as possible.
        </p>

        {/* Back to Home Button */}
        <Link 
          href="/"
          className="inline-block w-full bg-green-600 text-white font-medium py-3 px-4 rounded-xl hover:bg-green-700 transition"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
    </>
  );
}