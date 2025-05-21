import "server-only";
import { SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { RoleAgent } from "@/lib/generated/prisma";

const secretKey = process.env.ADMIN_SESSION_SECRET;
const encodedKey = new TextEncoder().encode(secretKey);

export async function createSession(userId: string, Role: RoleAgent) {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const session = await encrypt({ userId, expiresAt, Role });
    const Cookies = await cookies();

    Cookies.set("session", session, {
        // httpOnly: true,
        // secure: true,
        expires: expiresAt,
    });
}

type SessionPayload = {
    userId: string;
    expiresAt: Date;
    Role: RoleAgent;
};

export async function encrypt(payload: SessionPayload) {
    return new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256" })
        .setIssuedAt()
        .setExpirationTime("2h")
        .sign(encodedKey);
}

export async function decrypt(session: string | undefined = "") {
    try {
        const { payload } = await jwtVerify(session, encodedKey, {
            algorithms: ["HS256"],
        });
        return payload;
    } catch (error) {
        console.log("Failed to verify session");
    }
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
