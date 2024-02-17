'use server';

import { revalidatePath } from 'next/cache';
import { cookies } from 'next/headers';

export async function LogOutAction() {
    const cookieStore = cookies();
    cookieStore.delete('token');
    revalidatePath('/');
}
