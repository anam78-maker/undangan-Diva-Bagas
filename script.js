// === Fitur RSVP & Ucapan ===
const form = document.getElementById('rsvpForm');
const daftarUcapan = document.getElementById('daftarUcapan');

// Muat data awal dari localStorage
let ucapanList = JSON.parse(localStorage.getItem('ucapanList')) || [];
renderUcapan();

// Event form submit
form.addEventListener('submit', e => {
  e.preventDefault();
  const nama = document.getElementById('nama').value.trim();
  const kehadiran = document.getElementById('kehadiran').value;
  const ucapan = document.getElementById('ucapan').value.trim();

  if (!nama || !kehadiran || !ucapan) return;

  // Simpan ke array dan localStorage
  ucapanList.push({ nama, kehadiran, ucapan });
  localStorage.setItem('ucapanList', JSON.stringify(ucapanList));

  // Reset form & render ulang
  form.reset();
  renderUcapan();
});

// Render daftar ucapan
function renderUcapan() {
  daftarUcapan.innerHTML = '';
  if (ucapanList.length === 0) {
    daftarUcapan.innerHTML = '<li class="text-center text-gray-400">Belum ada ucapan.</li>';
    return;
  }

   //Script Salin
<script>
function copyToClipboard(text) {
  navigator.clipboard.writeText(text);
  alert('Nomor telah disalin: ' + text);
}
  
  ucapanList.forEach(item => {
    const li = document.createElement('li');
    li.className = 'bg-black/30 p-4 rounded';
    li.innerHTML = `
      <p class="font-semibold text-yellow-200">${item.nama} <span class="text-sm text-gray-400">(${item.kehadiran})</span></p>
      <p class="mt-2">${item.ucapan}</p>
    `;
    daftarUcapan.appendChild(li);
  });
}
