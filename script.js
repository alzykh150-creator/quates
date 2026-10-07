const quotes = [
    {
        text: "Jangan takut berjalan pelan, takutlah jika kamu berhenti.",
        author: "Unknown"
    },
    {
        text: "Kesuksesan dimulai dari keberanian untuk mencoba.",
        author: "Unknown"
    },
    {
        text: "Tidak ada kata terlambat untuk menjadi lebih baik.",
        author: "Unknown"
    },
    {
        text: "Percaya pada dirimu sendiri dan teruslah melangkah.",
        author: "Unknown"
    },
    {
        text: "Kegagalan bukan akhir, tetapi bagian dari proses belajar.",
        author: "Unknown"
    },
    {
        text: "Masa depan bergantung pada apa yang kamu lakukan hari ini.",
        author: "Mahatma Gandhi"
    },
    {
        text: "Tetaplah berusaha meskipun hasilnya belum terlihat.",
        author: "Unknown"
    },
    {
        text: "Jadikan setiap hari kesempatan untuk menjadi lebih baik.",
        author: "Unknown"
    }
];

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").textContent =
        `"${quotes[randomIndex].text}"`;

    document.getElementById("author").textContent =
        `— ${quotes[randomIndex].author}`;
}