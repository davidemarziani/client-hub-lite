export default function ClientStatusBadge({ status }) {
  let badgeClasses = "bg-slate-100 text-slate-700";

  if (status === "Active") {
    badgeClasses = "bg-green-100 text-green-700";
  }

  if (status === "Prospect") {
    badgeClasses = "bg-blue-100 text-blue-700";
  }

  if (status === "Inactive") {
    badgeClasses = "bg-slate-100 text-slate-500";
  }

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${badgeClasses}`}>
      {status}
    </span>
  );
}