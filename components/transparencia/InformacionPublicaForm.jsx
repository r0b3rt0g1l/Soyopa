'use client';

import { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  ShieldCheck,
} from 'lucide-react';

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

const MODALIDADES = [
  { value: 'electronica', label: 'Entrega electrónica' },
  { value: 'presencial', label: 'Consulta presencial' },
  { value: 'copia-simple', label: 'Copia simple' },
  { value: 'copia-certificada', label: 'Copia certificada' },
];

export function InformacionPublicaForm({ accessKey }) {
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const formData = new FormData(e.currentTarget);
    formData.append('access_key', accessKey);
    formData.append('subject', 'Solicitud de Información Pública - Soyopa');
    formData.append('from_name', 'Portal Soyopa · Información Pública');

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
        throw new Error(json.message || 'No se pudo enviar la solicitud.');
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
          Tu solicitud fue enviada exitosamente
        </h3>
        <p className="max-w-md text-sm text-emerald-800/85">
          La Unidad de Transparencia Municipal recibió tu solicitud y dará
          seguimiento dentro de los plazos establecidos por la Ley General de
          Transparencia.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-2 rounded-full border border-emerald-300 bg-white px-5 py-2 text-sm font-semibold text-emerald-800 hover:border-emerald-500"
        >
          Hacer otra solicitud
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-card)] md:p-8">
      <header className="mb-6 flex gap-3 rounded-xl border border-[#2C5F7F]/20 bg-[#2C5F7F]/5 px-4 py-3 text-sm text-[var(--color-text-secondary)]">
        <ShieldCheck
          className="mt-0.5 h-5 w-5 shrink-0 text-[#2C5F7F]"
          aria-hidden="true"
        />
        <p>
          Tus datos personales se tratan conforme al{' '}
          <strong className="text-[var(--color-text)]">
            Aviso de Privacidad del Municipio de Soyopa
          </strong>
          . La Unidad de Transparencia es responsable de su protección y
          únicamente serán usados para dar respuesta a tu solicitud.
        </p>
      </header>

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
              Modalidad de entrega *
            </span>
            <select
              name="modalidad"
              required
              defaultValue=""
              className={inputClasses}
            >
              <option value="" disabled>
                Selecciona una opción
              </option>
              {MODALIDADES.map((m) => (
                <option key={m.value} value={m.value}>
                  {m.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <label className="flex flex-col gap-2">
          <span className="text-sm font-semibold text-[var(--color-text)]">
            Descripción de la información solicitada *
          </span>
          <textarea
            name="descripcion"
            rows={5}
            required
            placeholder="Describe con la mayor claridad posible la información que requieres."
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
            Al enviar tu solicitud aceptas el aviso de privacidad del portal
            institucional.
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
                Enviar solicitud
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

export default InformacionPublicaForm;
