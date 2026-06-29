import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <section className="mx-auto max-w-4xl rounded-2xl bg-white p-8 shadow">
        <h1 className="text-3xl font-bold text-slate-900">
          Client Hub Lite
        </h1>

        <p className="mt-4 text-slate-600">
          First Next.js web app: simple client management.
        </p>

        <div className="mt-8 rounded-xl border border-slate-200 p-6">
          <h2 className="text-xl font-semibold text-slate-900">
            Project status
          </h2>

          <p className="mt-2 text-slate-600">
            Homepage created correctly. Now we can navigate to the clients page.
          </p>

          <Link
            href="/clients"
            className="mt-6 inline-block rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
          >
            Go to clients
          </Link>
        </div>
      </section>
    </main>
  );
}