import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-10 py-4">
        <Link href="/" className="text-lg font-bold text-black">
          Client Hub Lite
        </Link>

        <div className="flex items-center gap-6 text-sm font-medium">
          <Link href="/" className="text-slate-600 hover:text-slate-900">
            Home
          </Link>

          <Link href="/clients" className="text-slate-600 hover:text-slate-900">
            Clients
          </Link>
        </div>
      </nav>
    </header>
  );
}