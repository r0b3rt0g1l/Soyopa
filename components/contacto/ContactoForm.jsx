'use client';

import { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export function ContactoForm({ accessKey }) {
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', accessKey);
    formData.append('subject', 'Nuevo contacto desde Portal Soyopa');
    formData.append('from_name', 'Portal Soyopa · Contacto');

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: formData,
      });
      const json = await res.json();
      if (json.success) {
        setStatus('success');
        e.currentTarget.reset();
      } else {
        throw new Error(json.message || 'No se pudo enviar el mensaje.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Ocurrió un error inesperado.');
    }
  };

  const inputClasses =
    'w-full rounded-lg border border-[var(--color-border)] bg-white px-4 py-3 text-sm text-[var(--color-text)] outline-none transition placeholder:text-[var(--color-text-muted)] focus:border-[#2C5F7F] focus:ring-2 focus:ring-[#2C5F7F]/20';

  if (status === 'success') {
    return (
      <div
        role="status"
        className="flex flex-col items-center gap-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-12 text-center text-emerald-800 shadow-[var(--shadow-card)]"
      >
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
        </span>
        <h3 className="font-display text-2xl font-bold text-emerald-900">
          Tu mensaje fue enviado exitosamente
        </h3>
        <p className="max-w-md text-sm text-emerald-800/85">
          Gracias por escribirnos. Recibimos tu mensaje y te responderemos a la
          brevedad posible.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-2 rounded-full border border-emerald-300 bg-white px-5 py-2 text-sm font-semibold text-emerald-800 hover:border-emerald-500"
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-card)] md:p-8">
      <form onSubmit={onSubmit} className="flex flex-col gap-5" noValidate>
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div className="grid gap-5 md:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-[var(--color-text)]">
              Nombre completo *
            </span>
            <input
              type="text"
              name="nombre"
              required
              placeholder="Tu nombre"
              className={inputClasses}
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-[var(--color-text)]">
              Correo electrónico *
            </span>
            <input
              type="email"
              name="correo"
              required
              placeholder="tu@correo.com"
              className={inputClasses}
            />
          </label>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-[var(--color-text)]">
              Teléfono
            </span>
            <input
              type="tel"
              name="telefono"
              inputMode="tel"
              placeholder="(opcional)"
              className={inputClasses}
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-[var(--color-text)]">
              Asunto *
            </span>
            <input
              type="text"
              name="asunto"
              required
              placeholder="¿Sobre qué quieres escribirnos?"
              className={inputClasses}
            />
          </label>
        </div>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-[var(--color-text)]">
            Mensaje *
          </span>
          <textarea
            name="mensaje"
            rows={6}
            required
            placeholder="Escribe aquí tu mensaje..."
            className={`${inputClasses} resize-y`}
          />
        </label>

        {status === 'error' && (
          <div
            role="alert"
            className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
          >
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            <span>
              Hubo un problema. Intenta de nuevo o contacta directamente al
              municipio.
              {errorMsg ? (
                <span className="mt-1 block text-xs text-red-600/80">
                  Detalle técnico: {errorMsg}
                </span>
              ) : null}
            </span>
          </div>
        )}

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[var(--color-text-muted)]">
            Al enviar tu mensaje aceptas el aviso de privacidad del portal.
          </p>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2C5F7F] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#1A3A4F] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="h-4 w-4" aria-hidden="true" />
                Enviar mensaje
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactoForm;
