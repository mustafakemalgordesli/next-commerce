'use server';

import { z } from 'zod';
import prisma from '@/lib/prisma';

const createSchema = z.object({
    email: z
        .string({ invalid_type_error: 'Email is required' })
        .email('This is not a valid email.'),
});

export async function ForgotPasswordAction(prevState: any, formData: FormData) {
    try {
        const isValidData = createSchema.parse({
            email: formData.get('email'),
        });

        const user = await prisma.user.findFirst({
            where: {
                email: isValidData.email,
            },
        });

        if (!user)
            return {
                email: 'User not found',
            };

        return {
            email: user.email,
        };
    } catch (err) {
        return {
            email: 'Email not valid',
        };
    }
}
