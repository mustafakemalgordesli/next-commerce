import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { SignJWT } from 'jose';
import { getJwtSecretKey } from '@/lib/auth';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export async function createJwtToken(payload: { id: Number; email: string }) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('30d')
        .sign(getJwtSecretKey());
}
