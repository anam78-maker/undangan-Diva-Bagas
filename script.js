// Init Flipbook
const pageFlip = new St.PageFlip(document.getElementById("flipbook"), {
  width: 400,
  height: 600,
  size: "stretch",
  minWidth: 315,
  maxWidth: 1000,
  minHeight: 420,
  maxHeight: 1350,
  drawShadow: true,
  flippingTime: 1200,
  useMouseEvents: true,
  startPage: 0,
});

pageFlip.loadFromHTML(document.querySelectorAll(".page-flip .page"));

// RSVP
const form = document.getElementById("rsvpForm");
const daftarUcapan = document.getElementById("daftarUcapan");
let ucapanList = JSON.parse(localStorage.getItem("ucapanList")) || [];
renderUcapan();

form.addEventListener("submit", e => {
  e.preventDefault();
  const nama = document.getElementById("nama").value.trim();
  const kehadiran = document.getElementById("kehadiran").value;
  const ucapan = document.getElementById("ucapan").value.trim();
  if (!nama || !kehadiran || !ucapan) return;

  ucapanList.push({ nama, kehadiran, ucapan });
  localStorage.setItem("ucapanList", JSON.stringify(ucapanList));

  form.reset();
  renderUcapan();
});

function renderUcapan() {
  daftarUcapan.innerHTML = "";
  if (ucapanList.length === 0) {
    daftarUcapan.innerHTML = '<li>Belum ada ucapan.</li>';
    return;
  }
  ucapanList.forEach(item => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${item.nama}</strong> (${item.kehadiran})<br>${item.ucapan}`;
    daftarUcapan.appendChild(li);
  });
}
