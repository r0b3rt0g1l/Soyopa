import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const runtime = "nodejs";
export const alt =
  "Gobierno Municipal de Soyopa, Sonora · Administración 2024-2027";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const escudoPath = join(process.cwd(), "public", "escudo-soyopa-hd.png");
  const escudoBuffer = await readFile(escudoPath);
  const escudoDataUrl = `data:image/png;base64,${escudoBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #2C5F7F 0%, #1A3A4F 100%)",
          color: "#F5EFE6",
          padding: "80px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 25% 30%, rgba(200,161,101,0.18) 0, transparent 55%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.08) 0, transparent 55%)",
            display: "flex",
          }}
        />

        <img
          src={escudoDataUrl}
          alt=""
          width={220}
          height={220}
          style={{
            objectFit: "contain",
            filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.35))",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "18px",
            marginTop: "40px",
          }}
        >
          <div
            style={{
              fontFamily: "Georgia, serif",
              fontSize: 56,
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: "#F5EFE6",
              textAlign: "center",
              lineHeight: 1.15,
              maxWidth: 1000,
              display: "flex",
            }}
          >
            Gobierno Municipal de Soyopa, Sonora
          </div>
          <div
            style={{
              fontFamily:
                "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
              fontSize: 24,
              fontWeight: 600,
              color: "#C8A165",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              display: "flex",
            }}
          >
            Administración 2024-2027
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 36,
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: 18,
            fontFamily:
              "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
            color: "rgba(245, 239, 230, 0.7)",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            display: "flex",
          }}
        >
          Tierra Caliente · Cuna del Río Yaqui
        </div>
      </div>
    ),
    { ...size },
  );
}
