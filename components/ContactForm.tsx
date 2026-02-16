"use client";

export default function ContactForm() {
  return (
    <form
      className="space-y-6"
      onSubmit={async (e) => {
        e.preventDefault();

        const form = e.currentTarget; // <-- salva referência

        const formData = new FormData(form);

        const data = {
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        };

        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          alert("Mensagem enviada com sucesso!");
          form.reset(); // <-- usa a variável salva
        } else {
          alert("Erro ao enviar mensagem.");
        }
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
        placeholder="Descreva seu projeto ou dúvida..."
        required
        className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-zinc-200 focus:outline-none focus:border-white transition resize-none"
      />

      <button
        type="submit"
        className="w-full bg-white text-black font-medium py-4 rounded-lg hover:opacity-90 transition"
      >
        Enviar mensagem
      </button>
    </form>
  );
}
