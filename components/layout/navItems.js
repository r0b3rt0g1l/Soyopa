import { municipalConfig } from "@/lib/municipalConfig";

export const navItems = [
  { label: "Inicio", href: "/" },
  {
    label: "Gobierno",
    children: [
      { label: "Directorio", href: "/gobierno/directorio" },
      { label: "Estructura Orgánica", href: "/gobierno/estructura-organica" },
      { label: "Plan Municipal", href: "/gobierno/plan-municipal" },
    ],
  },
  {
    label: "Transparencia",
    externalHref: municipalConfig.enlacesExternos.transparenciaSonora,
    externalAriaLabel:
      "Portal de Transparencia del Estado de Sonora — Municipio de Soyopa (abre en nueva pestaña)",
  },
  { label: "Galería", href: "/galeria" },
  { label: "Turismo", href: "/turismo" },
  { label: "Contacto", href: "/contacto" },
];
