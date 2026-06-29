import Link from "next/link";
import ClientsTable from "../../components/ClientsTable";
import { prisma } from "../../lib/prisma";

export default async function ClientsPage() {
  const clients = await prisma.client.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen bg-slate-100 p-10">
      <section className="mx-auto max-w-5xl rounded-2xl bg-white p-8 shadow">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Clients
            </h1>

            <p className="mt-2 text-slate-600">
              Here we manage the client list.
            </p>
          </div>

          <Link
            href="/clients/new"
            className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white"
          >
            New client
          </Link>
        </div>

        <ClientsTable clients={clients} />
      </section>
    </main>
  );
}