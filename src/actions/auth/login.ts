'use server';

import { z } from 'zod';
import prisma from '@/lib/prisma';
import bcrypt from 'bcrypt';
import { cookies } from 'next/headers';

const EXP_TIME = 30 * 60 * 60 * 1000;

const createSchema = z.object({
    password: z
        .string({ invalid_type_error: 'Passoword is required' })
        .min(6, { message: 'Passoword is required' }),
    email: z
        .string({ invalid_type_error: 'Email is required' })
        .email('This is not a valid email.'),
});

import { createJwtToken } from '@/lib/utils';
import { redirect } from 'next/navigation';

export async function LogInAction(prevState: any, formData: FormData) {
    try {
        const isValidData = createSchema.parse({
            email: formData.get('email'),
            password: formData.get('password'),
        });

        const user = await prisma.user.findFirst({
            where: {
                email: isValidData.email,
            },
        });

        if (!user)
            return {
                email: 'User not found',
                password: '',
            };

        const match = await bcrypt.compare(isValidData.password, user.password);

        if (!match) {
            return {
                email: '',
                password: 'Password is wrong',
            };
        }

        user.password = '';

        const token = await createJwtToken({ id: user.id, email: user.email });

        const cookieStore = cookies();

        cookieStore.set({
            name: 'token',
            value: token,
            httpOnly: true,
            path: '/',
            secure: process.env.NODE_ENV !== 'development',
            maxAge: EXP_TIME,
        });
    } catch (err) {
        return {
            email: '',
            password: '',
        };
    }

    redirect('/');
}
