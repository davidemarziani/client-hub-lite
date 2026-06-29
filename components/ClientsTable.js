import ClientStatusBadge from "./ClientStatusBadge";

export default function ClientsTable({ clients }) {
  return (
    <div className="mt-8 rounded-xl border border-slate-200">
      <div className="grid grid-cols-4 border-b border-slate-200 bg-slate-50 p-4 text-sm font-semibold text-slate-700">
        <div>Name</div>
        <div>Email</div>
        <div>Company</div>
        <div>Status</div>
      </div>

      {clients.map((client) => (
        <div
          key={client.id}
          className="grid grid-cols-4 border-t border-slate-200 p-4 text-sm text-slate-700 first:border-t-0"
        >
          <div>{client.name}</div>
          <div>{client.email}</div>
          <div>{client.company}</div>
          <div>
            <ClientStatusBadge status={client.status} />
          </div>
        </div>
      ))}
    </div>
  );
}