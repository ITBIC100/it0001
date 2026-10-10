/* =========================================================
   MASTER UOM (SATUAN) PER PT
   ---------------------------------------------------------
   Kode UoM diambil dari bagian ke-4 QR,
   contoh 2A01/1/N/16/... -> kode 16.
   PT ditentukan dari digit pertama batch.

   Cara update:
   - Ubah nama satuan : ganti teks di dalam tanda kutip.
   - Tambah satuan    : tambah baris  kode: "Nama",
   - Tambah PT baru   : salin blok "2": { ... } lalu ganti
                        kuncinya, misal "3": { ... }
   ========================================================= */

window.DATA_UOM = {

    /* ---------- PT 1 (BAI) ---------- */
    "1": {
        1: "Batang",   2: "Botol",    3: "Box",      4: "Buah",     5: "Bungkus",
        6: "Can",      7: "Drum",     8: "Dus",      9: "Ember",    10: "Fet",
        11: "Galon",   12: "Gram",    13: "Gross",   14: "Jerigen", 15: "Kaleng",
        16: "Kg",      17: "Lbs",     18: "Lembar",  19: "Liter",   20: "Lusin",
        21: "M3",      22: "Meter",   23: "Pack",    24: "Pail",    25: "Pasang",
        26: "Pieces",  27: "Rim",     28: "Rit",     29: "Roll",    30: "Sachet",
        31: "Set",     32: "Tabung",  33: "Ton",     34: "Tube",    35: "Unit",
        36: "Vel",     37: "Yard",    38: "Zak",     39: "Cc",      40: "M2"
    },

    /* ---------- PT 2 (IMI) ---------- */
    "2": {
        1: "Batang",   2: "Liter",    3: "Lusin",    4: "Meter",    5: "Pack",
        6: "Pail",     7: "Pieces",   8: "Rim",      9: "Roll",     10: "Set",
        11: "Ton",     12: "Botol",   13: "Unit",    14: "Vel",     15: "Zak",
        16: "Box",     17: "Dus",     18: "Ember",   19: "Galon",   20: "Kaleng",
        21: "Kg",      22: "Lembar",  23: "Buah",    24: "Bungkus", 25: "Pasang"
    }

};
