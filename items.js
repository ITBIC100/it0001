/* =========================================================
   MASTER ITEM
   ---------------------------------------------------------
   Cara update:
   - Tambah item : salin satu baris { ... }, ubah isinya,
                   akhiri dengan koma.
   - Hapus item  : hapus baris item tersebut.
   - barcode     : kode bagian pertama QR (sebelum "/").
   - pt          : "1" = BAI, "2" = IMI, "3" = ST
                   (harus sama dengan digit pertama batch).
   - Satu barcode boleh dipakai di PT berbeda.
   ========================================================= */

window.DATA_ITEMS = [
    { barcode: "155-A01-0001", itemNo: "155-A01-0001", description: "SCK @ 25 KG",                  pt: "1" },
    { barcode: "155-A01-0001", itemNo: "155-A01-0001", description: "MSG LC @ 25 Kg",               pt: "2" },
    { barcode: "155-A01-0002", itemNo: "155-A01-0002", description: "SCK NF13 @ 25 KG",             pt: "1" },
    { barcode: "155-A01-0002", itemNo: "155-A01-0002", description: "MSG T @ 25 Kg",                pt: "2" },
    { barcode: "155-A01-0004", itemNo: "155-A01-0004", description: "SCK-GUMINDO @ 25 KG",          pt: "1" },
    { barcode: "155-A01-0004", itemNo: "155-A01-0004", description: "MSG LC MESH @ 25 Kg",          pt: "2" },

    { barcode: "1A01", itemNo: "155-C01-1001", description: "MC 10 BOX @ 19.44 KG",                 pt: "1" },
    { barcode: "1A02", itemNo: "155-C01-2001", description: "MC 25 BOX @ 20 KG",                    pt: "1" },
    { barcode: "1A03", itemNo: "155-C01-3001", description: "MC 35 BOX @ 17.5 KG",                  pt: "1" },
    { barcode: "1A04", itemNo: "155-C01-5001", description: "MC 50 BOX @ 18.8 KG",                  pt: "1" },
    { barcode: "1B02", itemNo: "155-C02-2002", description: "CC 50 BOX @ 20 KG",                    pt: "1" },
    { barcode: "1B03", itemNo: "155-C02-3001", description: "CC 30 BOX @ 18.6 KG",                  pt: "1" },
    { barcode: "1C01", itemNo: "155-C03-2001", description: "ES 25 BOX @ 20 KG",                    pt: "1" },
    { barcode: "1C02", itemNo: "155-C03-4001", description: "ES 40/HJ BOX @ 18 KG",                 pt: "1" },
    { barcode: "1D01", itemNo: "155-C04-0001", description: "MIKIZERO Box @ 0.9 KG",                pt: "1" },
    { barcode: "1D02", itemNo: "155-C04-0002", description: "MIKIZERO STEVIA Box @ 0.9 KG",         pt: "1" },

    { barcode: "2A01", itemNo: "155-B01-1001", description: "MM 100 Box @ 12 Kg",                   pt: "2" },
    { barcode: "2A02", itemNo: "155-B01-1002", description: "MM 100 T Box @ 12 Kg",                 pt: "2" },
    { barcode: "2A03", itemNo: "155-B01-1003", description: "MM 100 Box Mesh 80 @ 12 Kg",           pt: "2" },
    { barcode: "2A04", itemNo: "155-B01-2001", description: "MM 200 Box @ 12 Kg",                   pt: "2" },
    { barcode: "2A05", itemNo: "155-B01-2501", description: "MM 250 Box @ 12 Kg",                   pt: "2" },
    { barcode: "2A06", itemNo: "155-B01-2502", description: "MM 250 Box Mesh 80 @ 12 Kg",           pt: "2" },
    { barcode: "2A07", itemNo: "155-B01-4001", description: "MM 40 Box @ 12 Kg",                    pt: "2" },
    { barcode: "2A08", itemNo: "155-B01-5001", description: "MM 50 P Box @ 12 Kg",                  pt: "2" },
    { barcode: "2A09", itemNo: "155-B01-5002", description: "MM 50 T Box @ 12 Kg",                  pt: "2" },
    { barcode: "2A10", itemNo: "155-B01-5003", description: "MM 50 P Box Mesh 80 @ 12 Kg",          pt: "2" },
    { barcode: "2A11", itemNo: "155-B01-5004", description: "MM 500 T Box @ 12 Kg",                 pt: "2" },
    { barcode: "2B01", itemNo: "155-B02-1001", description: "MM R1000 Box @ 7.2 Kg",                pt: "2" },
    { barcode: "2B02", itemNo: "155-B02-5001", description: "MM R500 Box @ 7.68 Kg",                pt: "2" },
    { barcode: "2B04", itemNo: "155-B02-5003", description: "MM R5000 Box @ 8.8 Kg",                pt: "2" },
    { barcode: "2B05", itemNo: "155-B02-5004", description: "MM R5000 Box @ 7.2 Kg",                pt: "2" }
];
