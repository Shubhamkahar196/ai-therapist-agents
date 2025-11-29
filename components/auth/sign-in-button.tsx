'use client'

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useSession } from "@/lib/contexts/session-context"

interface SignInButtonProps{
    className?: string
}

export function SignInButton({className}: SignInButtonProps) {
    const { isAuthenticated, logout, loading } = useSession();

    if (loading) {
        return <Button disabled className={className}>Loading...</Button>;
    }

    if (isAuthenticated) {
        return (
            <Button onClick={logout} className={className}>
                Sign Out
            </Button>
        );
    }

    return (
        <Button asChild className={className}>
            <Link href='/login'>Sign In</Link>
        </Button>
    );
}
