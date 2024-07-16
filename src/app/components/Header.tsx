import { getSignInUrl, getUser, signOut } from "@workos-inc/authkit-nextjs";
import Link from "next/link";
import { use } from 'react';

async function getData() {
  try {
    const [{ user }, signInUrl] = await Promise.all([
      getUser(),
      getSignInUrl()
    ]);
    return { user, signInUrl };
  } catch (error) {
    console.error("Error fetching auth data:", error);
    return { user: null, signInUrl: '#' };
  }
}

export default function Header() {
  const { user, signInUrl } = use(getData());

  return (
    <header className="bg-white shadow-md">
      <div className="container flex items-center justify-between mx-auto py-4 px-6">
        <Link href={"/"} className="font-bold text-2xl text-indigo-600 hover:text-indigo-700 transition duration-300">
          DevQuest <span className="text-lg font-normal">| Find Your Next Opportunity</span>
        </Link>
        <nav className="flex gap-4 items-center">
          {!user && (
            <Link
              className="rounded-md bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 transition duration-300 shadow-sm"
              href={signInUrl}
            >
              Login
            </Link>
          )}
          {user && (
            <form
              action={async () => {
                'use server';
                try {
                  await signOut();
                } catch (error) {
                  console.error("Error signing out:", error);
                }
              }}
            >
              <button
                type="submit"
                className="rounded-md bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-4 transition duration-300 shadow-sm"
              >
                Logout
              </button>
            </form>
          )}
          <Link
            className="rounded-md py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition duration-300 shadow-sm"
            href={'/new-listing'}
          >
            Post a job
          </Link>
        </nav>
      </div>
    </header>
  );
}