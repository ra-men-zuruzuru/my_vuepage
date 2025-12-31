// //srcフォルダ内からserverフォルダのapiを叩く
// export async function jsonget() {
//   const res = await fetch('/api/jsonget', {
//     method: 'GET',
//     headers: { Accept: 'application/json' }, // 期待する返り値を伝える
//   });
//   if (!res.ok) throw new Error(`HTTP ${res.status}`);
//   return await res.json()
// }

// const API_BASE = "https://myvuepageexpress.vercel.app"

export async function jsonget() {
  const res = await fetch(`https://myvuepageexpress.vercel.app/api/jsonget`)
  return res.json()
}