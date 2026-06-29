import Link from "next/link";
import ClientForm from "../../../components/ClientForm";

export default function NewClientPage() {
  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <section className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow">
        <div className="mb-8">
          <Link
            href="/clients"
            className="text-sm font-medium text-slate-500 hover:text-slate-900"
          >
            ← Back to clients
          </Link>

          <h1 className="mt-4 text-3xl font-bold text-slate-900">
            New client
          </h1>

          <p className="mt-2 text-slate-600">
            Add a new client to the management system.
          </p>
        </div>

        <ClientForm />
      </section>
    </main>
  );
}