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
          <span>WhatsApp</span>
          <input name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" placeholder="(00) 00000-0000" minLength={10} maxLength={30} required />
        </label>
        <label>
          <span>Serviço de interesse</span>
          <select name="service" defaultValue="" required>
            <option value="" disabled>Selecione uma opção</option>
            <option value="Sistema sob medida">Sistema sob medida</option>
            <option value="Aplicativo">Aplicativo</option>
            <option value="Integração entre sistemas">Integração entre sistemas</option>
            <option value="Automação de processos">Automação de processos</option>
            <option value="Ainda não sei">Ainda não sei — quero conversar</option>
            <option value="Outro">Outro</option>
          </select>
        </label>
      </div>
      <label className="contact-form__message">
        <span>Conte mais detalhes</span>
        <textarea name="message" placeholder="Explique o que você precisa, como funciona hoje e o que gostaria de melhorar." minLength={20} maxLength={3000} required />
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
