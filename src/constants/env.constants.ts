export const ENV = {
  apiHost: process.env["NEXT_PUBLIC_API_HOST"] || "127.0.0.1",
  apiPort: Number(process.env["NEXT_PUBLIC_API_PORT"]) || 8000,
};
