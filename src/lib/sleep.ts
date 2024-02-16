export default async function sleep() {
    await (async function () {
        const sleep = (ms: number) =>
            new Promise((resolve) => setTimeout(resolve, ms));
        console.log(1);
        await sleep(10000);
        console.log(2);
    })();
}
