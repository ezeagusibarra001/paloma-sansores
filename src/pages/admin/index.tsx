import { useApp } from "@/context/AppStore";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function Admin() {
    const { user } = useApp();
    const router = useRouter();
    useEffect(() => {
        if (!user) router.push("/login") 
        }, [user]);

    return <div>Admin</div>;
}
