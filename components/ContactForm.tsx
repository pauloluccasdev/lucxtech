"use client";

import { useState, type FormEvent } from "react";

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setState("sending");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) throw new Error(result.message || "Não foi possível enviar sua mensagem.");

      form.reset();
      setState("success");
      setFeedback("Mensagem enviada. Obrigado — entraremos em contato em breve.");
    } catch (error) {
      setState("error");
      setFeedback(error instanceof Error ? error.message : "Não foi possível enviar sua mensagem.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-form__grid">
        <label>
          <span>Nome completo</span>
          <input name="name" type="text" autoComplete="name" placeholder="Como podemos chamar você?" minLength={2} maxLength={100} required />
        </label>
        <label>
          <span>E-mail</span>
          <input name="email" type="email" autoComplete="email" placeholder="voce@empresa.com" maxLength={160} required />
        </label>
        <label>
          <span>Telefone <small>(opcional)</small></span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="(00) 00000-0000" maxLength={30} />
        </label>
        <label>
          <span>Empresa <small>(opcional)</small></span>
          <input name="company" type="text" autoComplete="organization" placeholder="Nome da empresa" maxLength={120} />
        </label>
      </div>
      <label className="contact-form__message">
        <span>Conte um pouco sobre o que precisa funcionar melhor</span>
        <textarea name="message" placeholder="Pode explicar o cenário atual, o problema e o que você espera simplificar." minLength={20} maxLength={3000} required />
      </label>
      <label className="contact-form__trap" aria-hidden="true">
        Não preencha este campo
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>
      <div className="contact-form__footer">
        <button type="submit" disabled={state === "sending"}>
          <span>{state === "sending" ? "Enviando…" : "Enviar mensagem"}</span>
          <i aria-hidden="true">↗</i>
        </button>
        <p className={`contact-form__feedback ${state === "error" ? "is-error" : ""}`} role="status" aria-live="polite">
          {feedback}
        </p>
      </div>
    </form>
  );
}
