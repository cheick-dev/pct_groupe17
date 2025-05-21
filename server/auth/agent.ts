"use server";

import { AgentRepository } from "./repositories/agentRepository";
import {
    createSession,
    deleteSession,
    getSession,
} from "../sessions/agent_session";
import { redirect } from "next/navigation";

import { loginSchema, registerSchema } from "@/validation/validation-agent";
import { hashPassword, verifyPassword } from "@/lib/hashPassword";
import { ResultData } from "@/types";
import { ErrorsMessage } from "@/enums/errors-message";

const agentRepo = new AgentRepository();

export async function login(formData: FormData): Promise<ResultData> {
    const result = loginSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
        return {
            error: ErrorsMessage.errors
        };
    }
    try {
        const isAgent = await getAgentByEmail(result.data.Email);
        if (!isAgent) {
            return {
                error: "Email ou Mot de passe incorrect",
            };
        }
        const isPasswordCorrect = await verifyPassword(
            result.data.Password,
            isAgent.Password
        );
        if (!isPasswordCorrect) {
            return {
                error: "Email ou Mot de passe incorrect",
            };
        }

        await createSession(isAgent.ID_Agent, isAgent.Role);
        return {
            success: true,
        };
    } catch (error) {
        return {
            error: ErrorsMessage.errors
        };
    }
}

export async function register(formData: FormData): Promise<ResultData> {
    const result = registerSchema.safeParse(Object.fromEntries(formData));

    if (!result.success) {
        return {
            error: ErrorsMessage.errors,
        };
    }
    try {
        const isAgent = await getAgentByEmail(result.data.Email);
        if (isAgent) {
            return {
                error: "Cet email est déjà utilisé"
            };
        }

        const hashedPassword = await hashPassword(result.data.Password);

        const newAgent = await agentRepo.create({
            data: {
                ...result.data,
                Password: hashedPassword,
            },
        });

        // await createSession(newAgent.ID_Agent, newAgent.Role);
        return {
            success: true,
        };
    } catch (e) {
        return {
            error: ErrorsMessage.errors
        };
    }
}

export const getAgentById = async (id: string, withPassword?: boolean) => {
    const user = await agentRepo.findById(id);
    if (withPassword) {
        return user;
    }
    const agent = {
        ...user,
        Password: null,
    };
    return agent;
};
const getAgentByEmail = async (email: string) => {
    return await agentRepo.findByEmail(email);
};

export async function logout() {
    await deleteSession();
    redirect("/login");
}

export async function getAgent() {
    const session = await getSession();
    if (!session) return null;
    return await getAgentById(session?.userId as string);
}

export async function getAllAgents() {
    const agents = await agentRepo.findAll();
    return agents;
}
