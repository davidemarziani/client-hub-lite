import Link from "next/link";
import ClientsTable from "../../components/ClientsTable";

const clients = [
    {
        id: 1,
        name: "Mario Rossi",
        email: "mario@example.com",
        company: "Rossi Srl",
        status: "Active",
    },
    {
        id: 2,
        name: "Laura Bianchi",
        email: "laura@example.com",
        company: "Bianchi Studio",
        status: "Prospect",
    },
    {
        id: 3,
        name: "Giovanni Verdi",
        email: "giovanni@example.com",
        company: "Verdi Consulting",
        status: "Inactive",
    },
];

export default function ClientsPage() {
    return (
        <main className="min-h-screen bg-slate-100 p-10">
            <section className="mx-auto max-w-5xl rounded-2xl bg-white p-8 shadow">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold text-slate-900">
                            Clients
                        </h1>

                        <p className="mt-2 text-slate-600">
                            Here we will manage the client list.
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