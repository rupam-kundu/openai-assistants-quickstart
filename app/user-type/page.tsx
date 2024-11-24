"use client";

import { useRouter } from 'next/navigation';
import { BriefcaseIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';
import Logout from '../logout';

export default function UserTypePage() {
    const router = useRouter();

    const handleSelection = (role) => {
        // Handle the role selection logic here
        // You might want to save this to the user's profile or proceed to a specific onboarding flow
        console.log(`Selected role: ${role}`);
        // Example: Redirect based on role
        // router.push(`/${role}-onboarding`);
    };

    return (
        <>
            <div className="flex items-center justify-between mt-6 p-4">
                <h1 className="flex-1 text-3xl font-['Kinto Sans'] font-bold text-blue-900 text-center">
                    BioInvestAI
                </h1>
                <div className="">
                    <Logout />
                </div>
            </div>
            <div className="min-h-screen flex items-center justify-center px-4">
                <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                        Welcome to BioInvestAI!
                    </h2>
                    <p className="text-gray-600 mb-6 text-center">
                        To personalize your experience, please select your role:
                    </p>
                    <div className="space-y-4">
                        <button
                            onClick={() => handleSelection('founder')}
                            className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none"
                        >
                            <BriefcaseIcon className="h-5 w-5 mr-2" />
                            I am a Biopharma Startup Founder/Co-Founder
                        </button>
                        <button
                            onClick={() => handleSelection('investor')}
                            className="w-full flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none"
                        >
                            <CurrencyDollarIcon className="h-5 w-5 mr-2" />
                            I am an Angel Investor
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}
