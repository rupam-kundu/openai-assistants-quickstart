export default function Logout() {
    return <a
        href="/api/auth/logout"
        className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
        Logout
    </a>;
}
