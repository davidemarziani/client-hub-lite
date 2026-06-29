"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const initialFormData = {
  name: "",
  email: "",
  company: "",
  status: "Prospect",
  notes: "",
};

export default function ClientForm() {
  const router = useRouter();

  const [formData, setFormData] = useState(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/clients", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        alert(result.message || "Error while creating client");
        return;
      }

      setFormData(initialFormData);

      router.push("/clients");
      router.refresh();
    } catch (error) {
      console.error("Request error:", error);
      alert("Network or server error while creating client.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Name
        </label>
        <input
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Mario Rossi"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-black outline-none focus:border-slate-900"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Email
        </label>
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="mario@example.com"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-black outline-none focus:border-slate-900"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Company
        </label>
        <input
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          placeholder="Rossi Srl"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-black outline-none focus:border-slate-900"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Status
        </label>
        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-black outline-none focus:border-slate-900"
        >
          <option value="Active">Active</option>
          <option value="Prospect">Prospect</option>
          <option value="Inactive">Inactive</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">
          Notes
        </label>
        <textarea
          name="notes"
          rows="5"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Internal notes..."
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm text-black outline-none focus:border-slate-900"
        />
      </div>

      <div className="flex items-center justify-end gap-4">
        <Link
          href="/clients"
          className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Cancel
        </Link>

        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Saving..." : "Save client"}
        </button>
      </div>
    </form>
  );
}