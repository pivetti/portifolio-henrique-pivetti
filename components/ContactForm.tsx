"use client";

import { useState } from "react";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  return (
    <form
      className="space-y-6"
      onSubmit={async (e) => {
        e.preventDefault();

        if (loading) return;

        setLoading(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        const data = {
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        };

        try {
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          if (response.ok) {
            alert("Mensagem enviada com sucesso!");
            form.reset();
          } else {
            alert("Erro ao enviar mensagem.");
          }
        } catch {
          alert("Erro ao enviar mensagem.");
        }

        setLoading(false);
      }}
    >
      <div className="grid md:grid-cols-2 gap-6">
        <input
          name="name"
          type="text"
          placeholder="Nome"
          required
          className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-200 focus:outline-none focus:border-white transition"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-200 focus:outline-none focus:border-white transition"
        />
      </div>

      <input
        name="subject"
        type="text"
        placeholder="Assunto"
        required
        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-200 focus:outline-none focus:border-white transition"
      />

      <textarea
        name="message"
        rows={6}
        placeholder="Digite sua mensagem..."
        required
        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-200 focus:outline-none focus:border-white transition resize-none"
      />

      <button
        type="submit"
        disabled={loading}
        className={`
          w-full bg-white text-black font-medium py-4 rounded-lg
          transition-all duration-200 ease-out
          ${loading ? "opacity-70 cursor-not-allowed" : `
            hover:bg-zinc-200
            hover:-translate-y-1
            hover:shadow-lg hover:shadow-white/20
            active:scale-95 active:translate-y-0.5
          `}
        `}
      >
        {loading ? "Enviando..." : "Enviar mensagem"}
      </button>
    </form>
  );
}
