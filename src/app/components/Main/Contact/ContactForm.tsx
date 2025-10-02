"use client";

import { useState } from "react";

function ContactForm() {
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSending(true);

    const form = e.currentTarget;
    const data = new FormData(form);
    const entries = Array.from(data.entries()).map(([key, value]) => [
      key,
      typeof value === "string" ? value : "",
    ]);
    const encodedData = new URLSearchParams(entries).toString();

    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodedData,
      });
      if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
      }

      alert("¡Enviado!");
      form.reset();
    } catch (error) {
      alert(error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      className="flex flex-col gap-8 w-full max-w-3xl"
      onSubmit={handleSubmit}
    >
      <div className="md:flex-row flex flex-col gap-8 w-full">
        <input type="hidden" name="form-name" value="contact" />
        <input
          type="text"
          name="full-name"
          autoComplete="off"
          placeholder="Nombre y Apellido"
          required
          className="flex-1 font-medium pb-4 border-b border-b-[#8f8f8f]  outline-none placeholder:text-[#8f8f8f] focus:border-b-[#b0f45a]"
        />
        <input
          type="email"
          name="email"
          autoComplete="off"
          placeholder="Email"
          required
          className="flex-1 font-medium pb-4 border-b border-b-[#8f8f8f] outline-none placeholder:text-[#8f8f8f] focus:border-b-[#b0f45a]"
        />
      </div>
      <textarea
        name="message"
        placeholder="Mensaje"
        required
        className="resize-none flex-1 min-h-40 pb-4 font-medium border-b border-b-[#8f8f8f] outline-none placeholder:text-[#8f8f8f] focus:border-b-[#b0f45a]"
      />
      <button
        disabled={isSending}
        className="p-4 font-medium text-[#323232] bg-[#b0f45a] rounded not-disabled:transition not-disabled:cursor-pointer not-disabled:hover:brightness-90 disabled:brightness-75"
      >
        {isSending ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
}

export default ContactForm;
