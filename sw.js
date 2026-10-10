/* =========================================================
   FILE: sw.js  (satu folder dengan index.html)
   ---------------------------------------------------------
   Menyimpan aplikasi di HP agar scan tetap jalan tanpa internet.
   - index.html, Item.js, Uom.js : ambil versi terbaru dari
     internet jika ada, jika putus pakai salinan tersimpan.
   - Library kamera & font       : pakai salinan tersimpan.
   Jika mengubah daftar file di bawah, naikkan nomor VERSI.
   ========================================================= */

const VERSI = "cek-qr-v3";

const FILE_APLIKASI = [
    "./",
    "./index.html",
    "./Item.js",
    "./Uom.js"
];

const FILE_LUAR = [
    "https://cdnjs.cloudflare.com/ajax/libs/html5-qrcode/2.3.8/html5-qrcode.min.js",
    "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=JetBrains+Mono:wght@500;700&display=swap"
];

/* ---------- Install: simpan semua file ---------- */
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(VERSI).then(cache =>
            Promise.allSettled(
                [...FILE_APLIKASI, ...FILE_LUAR].map(url =>
                    fetch(url, {cache: "reload"}).then(res => {
                        if (res.ok) return cache.put(url, res);
                    })
                )
            )
        ).then(() => self.skipWaiting())
    );
});

/* ---------- Activate: hapus cache versi lama ---------- */
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(keys.filter(k => k !== VERSI).map(k => caches.delete(k))))
            .then(() => self.clients.claim())
    );
});

/* ---------- Fetch ---------- */
self.addEventListener("fetch", event => {
    const req = event.request;
    if (req.method !== "GET") return;

    const url = new URL(req.url);

    // Cek koneksi dari halaman: selalu langsung ke internet
    if (url.searchParams.has("cek-koneksi")) return;

    const asal = url.origin === self.location.origin;

    if (asal) {
        event.respondWith(networkFirst(req));
    } else if (
        url.hostname === "cdnjs.cloudflare.com" ||
        url.hostname === "fonts.googleapis.com" ||
        url.hostname === "fonts.gstatic.com"
    ) {
        event.respondWith(cacheFirst(req));
    }
});

/* Internet dulu (maks 4 detik), jika gagal pakai salinan */
async function networkFirst(req) {
    const cache = await caches.open(VERSI);
    try {
        const res = await Promise.race([
            fetch(req),
            new Promise((_, tolak) => setTimeout(() => tolak(new Error("timeout")), 4000))
        ]);
        if (res && res.ok) cache.put(req, res.clone());
        return res;
    } catch (e) {
        const simpan = await cache.match(req, {ignoreSearch: true});
        if (simpan) return simpan;
        if (req.mode === "navigate") {
            return (await cache.match("./index.html")) || (await cache.match("./"));
        }
        return Response.error();
    }
}

/* Salinan dulu, jika belum ada ambil dari internet lalu simpan */
async function cacheFirst(req) {
    const cache = await caches.open(VERSI);
    const simpan = await cache.match(req);
    if (simpan) return simpan;
    try {
        const res = await fetch(req);
        if (res && (res.ok || res.type === "opaque")) cache.put(req, res.clone());
        return res;
    } catch (e) {
        return Response.error();
    }
}
