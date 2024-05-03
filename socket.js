import { io } from "socket.io-client";

export async function initSocket() {
    const options = {
        'force new connection': true,
        reconnectionAttempt: 'Infinity',
        timeout: 1000,
        transports: ['websocket'],
    };
    return io(import.meta.env.VITE_SOCKET_URL, options);
}