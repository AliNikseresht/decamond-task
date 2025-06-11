import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <Link
        href="/auth"
        className="bg-indigo-600 hover:bg-indigo-800 duration-200 p-3 text-white rounded-xl"
      >
        Please click to register!
      </Link>
    </div>
  );
}
