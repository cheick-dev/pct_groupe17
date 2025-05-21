"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { LogOut, LoaderCircle } from "lucide-react";
import { logout } from "@/server/auth/citoyen";

function LogOutButton() {
    const [loading, setLoading] = useState(false);
    const handleLogout = async () => {
        setLoading(true);
        await logout();
        setLoading(false);
    }

    return (
        <Button
            variant="secondary"
            onClick={handleLogout}
            className="w-full"
        >
            {loading ? (
                <LoaderCircle className="h-5 w-5 animate-spin" />
            ) : (
                <LogOut className="h-5 w-5" />
            )}
        </Button>
    );
}

export default LogOutButton;
