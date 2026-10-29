/* Data undangan (nama, tanggal, acara, rekening, galeri, cerita) — edit di file ini. */
/* ============ DATA — edit di sini ============ */
// Foto dummy pernikahan dari Unsplash (lisensi bebas pakai). Ganti dengan foto kostumer saat pesanan asli.
const U = (id, w, h) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=75&w=${w}&h=${h}`;
// Kosongkan ("" / []) bagian opsional bila tidak dipakai: live, giftAddress, gifts, story.
const C = {
  bride: {
    full: "Emily Rose Carter, S.Kom.", // nama + gelar
    nick: "Emily", // nama panggilan (tampil di cover)
    ig: "emily.carter", // tanpa @
    wa: "6281200001111", // format 62xxx
    father: "Robert Carter",
    mother: "Linda Carter",
    role: "Putri pertama", // Putri / Putri pertama / Putri kedua ...
    address: "Jl. Melati No. 12, Kel. Sukamaju, Kec. Cibeunying, Kota Bandung",
    photo: U("1565038930214-09566ed2149b", 600, 800),
  },
  groom: {
    full: "Daniel James Anderson, S.T.",
    nick: "Daniel",
    ig: "daniel.anderson_",
    wa: "6281200002222",
    father: "Thomas Anderson",
    mother: "Jennifer Anderson",
    role: "Putra kedua",
    address: "Jl. Kenanga No. 45, Kel. Sukasari, Kec. Sukasari, Kota Bandung",
    photo: U("1545396047-0fd21ce522ba", 600, 800),
  },
  date: "2027-01-16T08:00:00", // tanggal & jam mulai acara (Sabtu, 16 Januari 2027)
  // Identitas & teks undangan
  site: {
    title: "The Wedding of Emily & Daniel", // judul tab browser
    copyright: "Copyright © 2026 Aisyae Digital Invitation",
  },
  text: {
    greeting: "Assalamu'alaikum Wr. Wb.",
    intro:
      "Segala puji bagi Allah SWT yang telah menjadikan hamba-Nya hidup berpasang-pasangan. Dengan memohon ridho, rahmat, dan berkah-Nya, kami bermaksud mengundang Bapak/Ibu/Saudara/i dalam acara pernikahan kami.",
    quote:
      "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.",
    quoteSource: "AR-RUM AYAT : 21",
    closing:
      "Merupakan sebuah kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu. Terima kasih.",
  },
  // URL Web App Google Apps Script (berakhiran /exec) untuk RSVP & ucapan. Kosongkan = disimpan di browser saja (hanya untuk uji coba)
  rsvp: "",
  // foto latar tiap bagian
  bg: {
    cover: U("1519741497674-611481863552", 1200, 900),
    quote: U("1517456215183-9a2c3a748d0c", 1200, 900),
    foot: U("1502955422409-06e43fd3eff3", 1200, 900),
    date: U("1556302482-70b6e670e6b7", 1200, 900),
  },
  events: [
    {
      t: "Akad Nikah",
      time: "08.00 - 09.00 WIB",
      place: "Masjid Al-Ikhlas",
      addr: "Jl. Merdeka No. 8, Kel. Citarum, Kec. Bandung Wetan, Kota Bandung",
      map: "https://www.google.com/maps/search/?api=1&query=Masjid+Al-Ikhlas+Bandung",
    },
    {
      t: "Resepsi",
      time: "10.00 - 14.00 WIB",
      place: "Gedung Graha Bahagia",
      addr: "Jl. Asia Afrika No. 100, Kel. Braga, Kec. Sumur Bandung, Kota Bandung",
      map: "https://www.google.com/maps/search/?api=1&query=Gedung+Graha+Bahagia+Bandung",
    },
  ],
  live: "", // link live streaming (kosongkan jika tidak ada)
  music: "sound/Calum-Scott-You-Are-The-Reason-Official-Video.mp3", // lagu latar: taruh file mp3 di folder sound/
  // alamat pengiriman kado (kosongkan {} jika tidak dipakai)
  giftAddress: {
    name: "Emily Rose Carter",
    addr: "Jl. Melati No. 12, Kel. Sukamaju, Kec. Cibeunying, Kota Bandung 40121",
  },
  // rekening amplop digital (boleh lebih dari satu; kosongkan [] jika tidak dipakai)
  gifts: [
    { bank: "BCA", no: "8830451267", name: "Emily Rose Carter" },
    { bank: "BCA", no: "2714608593", name: "Daniel James Anderson" },
  ],
  // galeri: foto melebar (landscape) otomatis tampil selebar grid
  gallery: [
    U("1646325311277-0c35409fdd57", 1600, 900),
    U("1607357910286-1ff94ac13c24", 800, 1100),
    U("1596457221755-b96bc3a6df18", 800, 1100),
    U("1537633468298-d86f0c2d4173", 800, 1100),
    U("1695266392136-1805eef542ac", 800, 1100),
    U("1556499696-0ba753b9ad02", 800, 1100),
    U("1684244276932-6ae853774c4d", 800, 1100),
    U("1556302482-70b6e670e6b7", 1600, 900),
    U("1624067056935-593eb6595294", 800, 1100),
    U("1535185384036-28bbc8035f28", 800, 1100),
  ],
  // cerita (kosongkan [] jika tidak dipakai)
  story: [
    {
      d: "12 Maret 2023",
      t: "Awal Pertemuan",
      p: "Kami pertama kali bertemu di sebuah acara reuni kampus. Obrolan singkat yang tak disangka menjadi awal dari perjalanan panjang kami.",
      i: U("1545396047-0fd21ce522ba", 900, 675),
    },
    {
      d: "20 Agustus 2023",
      t: "Menjalin Hubungan",
      p: "Setelah beberapa bulan saling mengenal, kami memutuskan untuk melangkah lebih serius dan saling menjaga satu sama lain.",
      i: U("1556499696-0ba753b9ad02", 900, 675),
    },
    {
      d: "5 Juni 2026",
      t: "Lamaran",
      p: "Dengan restu kedua keluarga, Daniel melamar Emily dalam suasana hangat dan penuh doa. Hari itu menjadi janji awal kami.",
      i: U("1678188467191-f1a50f61f54e", 900, 675),
    },
    {
      d: "16 Januari 2027",
      t: "Menikah",
      p: "Kini kami siap menyempurnakan separuh agama dan memulai babak baru kehidupan bersama. Doakan kami ya.",
      i: U("1519741497674-611481863552", 900, 675),
    },
  ],
};
// Ukuran foto galeri (lebar, tinggi) — OPSIONAL. Kosong = ukuran dibaca otomatis saat foto dimuat.
const GD = {};
/* =============================================== */
