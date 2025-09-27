import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-2xl p-10 max-w-lg text-center animate-fadeIn">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          We’re setting up this page to connect with you better.<br />
          <span className="font-semibold">Stay tuned</span> — it will be available soon.
        </p>
        <p className="text-gray-600">
          In the meantime, please visit our{' '}
          <Link
            href="/"
            className="text-blue-600 font-semibold hover:underline"
          >
            Home page
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
