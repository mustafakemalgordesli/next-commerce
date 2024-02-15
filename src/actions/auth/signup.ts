'use server';

// import { revalidatePath } from 'next/cache';

export async function SignUpAction(prevState: any, formData: FormData) {
    await (async function () {
        const sleep = (ms: number) =>
            new Promise((resolve) => setTimeout(resolve, ms));
        console.log(1);
        await sleep(10000);
        console.log(2);
    })();
    console.log(prevState);
    console.log(formData);

    // revalidatePath('/dashboard/blog/create');

    return {
        email: '',
        password: '',
    };
}
