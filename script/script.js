var menuData = [
  {
    id: 1,
    name: "Nasi Putih",
    category: "Makanan Pokok",
    calories: 180,
    price: 5000,
    img: "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=200&q=80",
  },
  {
    id: 2,
    name: "Nasi Goreng Spesial",
    category: "Makanan Pokok",
    calories: 450,
    price: 18000,
    img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=200&q=80",
  },
  {
    id: 3,
    name: "Mie Goreng Jawa",
    category: "Makanan Pokok",
    calories: 380,
    price: 16000,
    img: "https://cnc-magazine.oramiland.com/parenting/original_images/Mie_Goreng_Jawa_Pedas.jpg",
  },
  {
    id: 4,
    name: "Spaghetti Aglio Olio",
    category: "Makanan Pokok",
    calories: 420,
    price: 28000,
    img: "https://awsimages.detik.net.id/community/media/visual/2021/03/19/spaghetti-aglio-olio_43.jpeg?w=600&q=90",
  },
  {
    id: 5,
    name: "Kentang Panggang",
    category: "Makanan Pokok",
    calories: 220,
    price: 15000,
    img: "https://cdn.loveandlemons.com/wp-content/uploads/2024/11/twice-baked-potatoes-recipe.jpg",
  },
  {
    id: 6,
    name: "Roti Gandum (2 lembar)",
    category: "Makanan Pokok",
    calories: 160,
    price: 8000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7K-DAXaze0zYzJqNXdUZMjs3PGlsksVsDR-fhzzqjhA&s=10",
  },
  {
    id: 7,
    name: "Ayam Goreng Tepung",
    category: "Lauk-Pauk",
    calories: 300,
    price: 17000,
    img: "https://images.unsplash.com/photo-1562967914-608f82629710?w=200&q=80",
  },
  {
    id: 8,
    name: "Ayam Bakar Madu",
    category: "Lauk-Pauk",
    calories: 280,
    price: 20000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNdAjBeTycETsU3Dh4Tayt7PQ4PruDzbPChaxxWb6zOA&s=10",
  },
  {
    id: 9,
    name: "Rendang Daging Sapi",
    category: "Lauk-Pauk",
    calories: 380,
    price: 32000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYV1JdnGQv4ntEZ0SFs0_c0MFOw-lOVJ_sLkSzg1d8zuBarw-xZr4gfIPl_ojVCyaFH9K8GUa3O1tKwWJjUwJv1pwfC87OZWQVICZJI4DO_w&s=10",
  },
  {
    id: 10,
    name: "Tempe Orek",
    category: "Lauk-Pauk",
    calories: 150,
    price: 8000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt2WTDe1DaTeFBXHS9MN_AXeLhcsttL1-bTfxnWbjf2TBEbbfL8t1PXgW46NFHxdAKH_YlupJpnykYZ9pFvoirYuxXFkwshp9M1UHxIy0B&s=10",
  },
  {
    id: 11,
    name: "Tahu Goreng",
    category: "Lauk-Pauk",
    calories: 120,
    price: 6000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEBwVEDaJHytq2jK00-gKFMTgWWIQ9OOaMj6aVAEI8NQ&s=10",
  },
  {
    id: 12,
    name: "Ikan Nila Bakar",
    category: "Lauk-Pauk",
    calories: 250,
    price: 22000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSglppaBYwyMAQh87rcwaxrFKHlWvYCidwDtvofyMQTZQ&s=10",
  },
  {
    id: 13,
    name: "Telur Dadar",
    category: "Lauk-Pauk",
    calories: 190,
    price: 7000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQD0LKjH8uw4-eS40UOtmwJto7MuVFFQjU6iaxCWOGA&s=10",
  },
  {
    id: 14,
    name: "Beef Steak Sirloin",
    category: "Lauk-Pauk",
    calories: 420,
    price: 45000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUL3zUJNx8uGHf-xy9Fv17EWOZnWegruKBNByUjNCCyQ&s=10",
  },
  {
    id: 15,
    name: "Tumis Kangkung",
    category: "Sayur",
    calories: 90,
    price: 9000,
    img: "https://assets.unileversolutions.com/recipes-v2/230520.jpg",
  },
  {
    id: 16,
    name: "Sayur Asem",
    category: "Sayur",
    calories: 70,
    price: 8000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-APLPfZK0wGi9a4WZe3RnrU8vLLCqklcxjrxgD46qRJ4At2-xco6HsRokKghhK9q_inWJzw1TO8m70u6xb7K5-PramDdql4mTdZoCvBMbg&s=10",
  },
  {
    id: 17,
    name: "Capcay Kuah",
    category: "Sayur",
    calories: 110,
    price: 13000,
    img: "https://awsimages.detik.net.id/community/media/visual/2025/07/19/capcay-kuah-1752890189762_169.jpeg?w=1200",
  },
  {
    id: 18,
    name: "Salad Sayur Segar",
    category: "Sayur",
    calories: 80,
    price: 14000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEjOmKYGGGF_eiBOnvyw8UUm9IAyOnYPCpFQ&s",
  },
  {
    id: 19,
    name: "Gado-Gado",
    category: "Sayur",
    calories: 280,
    price: 16000,
    img: "https://i0.wp.com/resepkoki.id/wp-content/uploads/2017/02/Resep-Gado-Gado.jpg?fit=1920%2C1840&ssl=1",
  },
  {
    id: 20,
    name: "Pisang (1 buah)",
    category: "Buah",
    calories: 105,
    price: 5000,
    img: "https://cdn.antaranews.com/cache/1200x800/2016/11/20161129banana-1504956_640.png",
  },
  {
    id: 21,
    name: "Apel Fuji (1 buah)",
    category: "Buah",
    calories: 95,
    price: 7000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Bj1zzUc0zjcBkI2jX71rHvusKdbtYGv7rQ&s",
  },
  {
    id: 22,
    name: "Semangka (1 potong)",
    category: "Buah",
    calories: 60,
    price: 6000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReZJ32uT2luNMlcZy998guNnrSx7WXlp6EH9fE6dKiZw&s=10",
  },
  {
    id: 23,
    name: "Fruit Salad Cup",
    category: "Buah",
    calories: 140,
    price: 17000,
    img: "https://www.meatloafandmelodrama.com/wp-content/uploads/2023/04/tropical-fruit-salad-square-500x500.jpeg",
  },
  {
    id: 24,
    name: "Es Teh Manis",
    category: "Minuman",
    calories: 90,
    price: 5000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpHdENjqrcCzs324w60jXA2Efe1HDRMJzsGlzvbZlHWg&s=10",
  },
  {
    id: 25,
    name: "Air Mineral 600ml",
    category: "Minuman",
    calories: 0,
    price: 4000,
    img: "https://images.alodokter.com/dk0z4ums3/image/upload/v1770794737/attached_image/air-mineral-yang-baik-untuk-kesehatan.jpg",
  },
  {
    id: 26,
    name: "Jus Alpukat",
    category: "Minuman",
    calories: 230,
    price: 18000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOgrhFUF9UrUuXkiUCDFKFZQ5izx8AvrTcs1nXj726CQ&s=10",
  },
];

// Menyimpan ID menu yang sedang dipilih
var selectedIds = [];

// Menyimpan filter kategori yang aktif
var activeFilter = "all";

// Mengubah nama kategori menjadi nama kelas CSS
function getCategoryClass(category) {
  if (category === "Makanan Pokok") return "pokok";
  if (category === "Lauk-Pauk") return "lauk";
  if (category === "Sayur") return "sayur";
  if (category === "Buah") return "buah";
  if (category === "Minuman") return "minuman";
  return "pokok";
}

// Format angka menjadi format Rupiah (contoh: 18000 → "18.000")
function formatRupiah(angka) {
  return new Intl.NumberFormat("id-ID").format(angka);
}

// Menampilkan semua baris tabel menu
function renderTable() {
  var tbody = document.getElementById("menu-table-body");
  tbody.innerHTML = "";

  for (var i = 0; i < menuData.length; i++) {
    var menu = menuData[i];

    // Lewati menu yang tidak sesuai filter
    if (activeFilter !== "all" && menu.category !== activeFilter) {
      continue;
    }

    var sudahDipilih = selectedIds.indexOf(menu.id) !== -1;

    var tr = document.createElement("tr");
    if (sudahDipilih) {
      tr.className = "row-selected";
    }

    tr.innerHTML =
      '<td class="col-img"><img src="' + menu.img + '" alt="' + menu.name + '" loading="lazy"></td>' +
      '<td class="col-name">' + menu.name + "</td>" +
      '<td class="col-category"><span class="badge badge-' + getCategoryClass(menu.category) + '">' + menu.category + "</span></td>" +
      '<td class="col-calories">' + menu.calories + " kkal</td>" +
      '<td class="col-price">Rp ' + formatRupiah(menu.price) + "</td>" +
      '<td class="col-select"><input type="checkbox" class="menu-checkbox" data-id="' + menu.id + '" ' + (sudahDipilih ? "checked" : "") + ' aria-label="Pilih ' + menu.name + '"></td>';

    tbody.appendChild(tr);
  }

  // Pasang event listener pada setiap checkbox
  var checkboxes = tbody.querySelectorAll(".menu-checkbox");
  for (var i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener("change", handleCheckbox);
  }
}

// Dipanggil saat pengguna mencentang atau melepas checkbox
function handleCheckbox(e) {
  var id = Number(e.target.dataset.id);
  var row = e.target.closest("tr");

  if (e.target.checked) {
    selectedIds.push(id);
    row.classList.add("row-selected");
  } else {
    var index = selectedIds.indexOf(id);
    selectedIds.splice(index, 1);
    row.classList.remove("row-selected");
  }

  updateSummary();
}

// Update tampilan piring, daftar nama, dan ringkasan kalori/harga
function updateSummary() {
  var plateFoods = document.getElementById("plate-foods");
  var plateEmpty = document.getElementById("plate-empty");
  var selectedNamesSection = document.getElementById("selected-names-section");
  var selectedNameList = document.getElementById("selected-name-list");
  var emptyMsg = document.getElementById("empty-message");
  var summaryCard = document.getElementById("summary-card");
  var badge = document.getElementById("balanced-menu-badge");

  // Kumpulkan menu yang dipilih ke array baru
  var selected = [];
  for (var i = 0; i < menuData.length; i++) {
    if (selectedIds.indexOf(menuData[i].id) !== -1) {
      selected.push(menuData[i]);
    }
  }

  // Jika tidak ada yang dipilih, tampilkan kondisi kosong
  if (selected.length === 0) {
    plateFoods.innerHTML = "";
    plateEmpty.style.display = "flex";
    selectedNamesSection.style.display = "none";
    emptyMsg.style.display = "block";
    summaryCard.style.display = "none";
    badge.style.display = "none";
    return;
  }

  // Sembunyikan pesan kosong, tampilkan konten
  plateEmpty.style.display = "none";
  emptyMsg.style.display = "none";
  summaryCard.style.display = "block";
  selectedNamesSection.style.display = "block";

  // Isi gambar di piring (maksimal 6 gambar)
  plateFoods.innerHTML = "";
  var maxGambar = selected.length;
  if (maxGambar > 6) {
    maxGambar = 6;
  }
  for (var i = 0; i < maxGambar; i++) {
    var img = document.createElement("img");
    img.src = selected[i].img;
    img.alt = selected[i].name;
    img.title = selected[i].name;
    img.className = "plate-food-img";
    plateFoods.appendChild(img);
  }

  // Isi daftar nama menu yang dipilih
  selectedNameList.innerHTML = "";
  for (var i = 0; i < selected.length; i++) {
    var li = document.createElement("li");
    li.textContent = selected[i].name;
    selectedNameList.appendChild(li);
  }

  // Hitung total kalori dan harga
  var totalKalori = 0;
  var totalHarga = 0;
  for (var i = 0; i < selected.length; i++) {
    totalKalori = totalKalori + selected[i].calories;
    totalHarga = totalHarga + selected[i].price;
  }

  document.getElementById("total-calories").textContent = totalKalori + " kkal";
  document.getElementById("total-price").textContent = "Rp " + formatRupiah(totalHarga);

  // Cek apakah setiap kategori gizi sudah terpenuhi
  var adaPokok = false;
  var adaLauk = false;
  var adaSayur = false;
  var adaBuah = false;
  var adaMinuman = false;

  for (var i = 0; i < selected.length; i++) {
    if (selected[i].category === "Makanan Pokok") adaPokok = true;
    if (selected[i].category === "Lauk-Pauk") adaLauk = true;
    if (selected[i].category === "Sayur") adaSayur = true;
    if (selected[i].category === "Buah") adaBuah = true;
    if (selected[i].category === "Minuman") adaMinuman = true;
  }

  // Update tampilan checklist per kategori
  updateChecklist("chk-pokok", adaPokok);
  updateChecklist("chk-lauk", adaLauk);
  updateChecklist("chk-sayur", adaSayur);
  updateChecklist("chk-buah", adaBuah);
  updateChecklist("chk-minuman", adaMinuman);

  // Tampilkan badge jika semua 5 kategori terpenuhi
  if (adaPokok && adaLauk && adaSayur && adaBuah && adaMinuman) {
    badge.style.display = "flex";
  } else {
    badge.style.display = "none";
  }
}

// Tambah atau hapus class "fulfilled" pada item checklist
function updateChecklist(id, terpenuhi) {
  var el = document.getElementById(id);
  if (terpenuhi) {
    el.classList.add("fulfilled");
  } else {
    el.classList.remove("fulfilled");
  }
}

// Event listener untuk tombol filter kategori
var filterButtons = document.querySelectorAll(".filter-btn");
for (var i = 0; i < filterButtons.length; i++) {
  filterButtons[i].addEventListener("click", function () {
    // Hapus class active dari semua tombol
    for (var j = 0; j < filterButtons.length; j++) {
      filterButtons[j].classList.remove("active");
    }
    // Aktifkan tombol yang diklik
    this.classList.add("active");
    activeFilter = this.dataset.filter;
    renderTable();
  });
}

// Jalankan saat halaman pertama kali selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
  renderTable();
  updateSummary();
});
