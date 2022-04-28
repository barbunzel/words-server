import { createServer } from "@marblejs/http";
import { listener } from './listeners/http.listener.mjs';

const server = createServer({
    port: 1337,
    hostname: '127.0.0.1',
    listener,
});

const main = async () => await (await server)();

main();
