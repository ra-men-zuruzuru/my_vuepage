
const API_BASE = "https://myvuepageexpress.vercel.app";

export async function createComment(comment: string) {
    const url = new URL("/api/comment", API_BASE).toString();
    
    const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ comment }),
    });

    if (!res.ok) {
        throw new Error(`createComment failed: ${res.status} ${await res.text()}`);
    }

    return res.json();
}