import "server-only";

import { cookies } from "next/headers";
import { decrypt, encrypt } from ".";

export async function createSession(userId: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  const session = await encrypt({ userId, expiresAt });
  const Cookies = await cookies();

  Cookies.set("session", session, {
    // httpOnly: process.env.NODE_ENV === "production",
    // secure: process.env.NODE_ENV === "production",
    expires: expiresAt,
  });
}

export async function getSession() {
  const Cookies = await cookies();
  const session = Cookies.get("session")?.value;
  if (!session) return null;
  return await decrypt(session);
}

export async function deleteSession() {
  const Cookies = await cookies();
  Cookies.delete("session");
}
