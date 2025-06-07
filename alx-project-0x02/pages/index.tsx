import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} min-h-screen flex items-center justify-center p-8`}
    >
      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Next.js App</h1>
        <p className="text-lg text-gray-600 mb-8">
          This is a simple welcome page built with Next.js and Tailwind CSS.
        </p>
        <div className="space-y-4">
          <p className="text-sm">Get started by exploring the features below:</p>
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors">
              Get Started
            </button>
            <button className="border border-gray-300 hover:border-gray-400 px-6 py-2 rounded-lg transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
