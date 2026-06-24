'use strict';

/* =========================================================
   DATA — 26 Menu Items (fixed calories & prices per spec)
   ========================================================= */
const menuData = [
  // Makanan Pokok
  { id:  1, name: 'Nasi Putih',            category: 'Makanan Pokok', calories: 180, price:  5000, img: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=200&q=80' },
  { id:  2, name: 'Nasi Goreng Spesial',   category: 'Makanan Pokok', calories: 450, price: 18000, img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=200&q=80' },
  { id:  3, name: 'Mie Goreng Jawa',       category: 'Makanan Pokok', calories: 380, price: 16000, img: 'https://cnc-magazine.oramiland.com/parenting/original_images/Mie_Goreng_Jawa_Pedas.jpg' },
  { id:  4, name: 'Spaghetti Aglio Olio',  category: 'Makanan Pokok', calories: 420, price: 28000, img: 'https://awsimages.detik.net.id/community/media/visual/2021/03/19/spaghetti-aglio-olio_43.jpeg?w=600&q=90' },
  { id:  5, name: 'Kentang Panggang',       category: 'Makanan Pokok', calories: 220, price: 15000, img: 'https://cdn.loveandlemons.com/wp-content/uploads/2024/11/twice-baked-potatoes-recipe.jpg' },
  { id:  6, name: 'Roti Gandum (2 lembar)', category: 'Makanan Pokok', calories: 160, price:  8000, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7K-DAXaze0zYzJqNXdUZMjs3PGlsksVsDR-fhzzqjhA&s=10' },
  // Lauk-Pauk
  { id:  7, name: 'Ayam Goreng Tepung',    category: 'Lauk-Pauk', calories: 300, price: 17000, img: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=200&q=80' },
  { id:  8, name: 'Ayam Bakar Madu',       category: 'Lauk-Pauk', calories: 280, price: 20000, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNdAjBeTycETsU3Dh4Tayt7PQ4PruDzbPChaxxWb6zOA&s=10' },
  { id:  9, name: 'Rendang Daging Sapi',   category: 'Lauk-Pauk', calories: 380, price: 32000, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYV1JdnGQv4ntEZ0SFs0_c0MFOw-lOVJ_sLkSzg1d8zuBarw-xZr4gfIPl_ojVCyaFH9K8GUa3O1tKwWJjUwJv1pwfC87OZWQVICZJI4DO_w&s=10' },
  { id: 10, name: 'Tempe Orek',            category: 'Lauk-Pauk', calories: 150, price:  8000, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt2WTDe1DaTeFBXHS9MN_AXeLhcsttL1-bTfxnWbjf2TBEbbfL8t1PXgW46NFHxdAKH_YlupJpnykYZ9pFvoirYuxXFkwshp9M1UHxIy0B&s=10' },
  { id: 11, name: 'Tahu Goreng',           category: 'Lauk-Pauk', calories: 120, price:  6000, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEBwVEDaJHytq2jK00-gKFMTgWWIQ9OOaMj6aVAEI8NQ&s=10' },
  { id: 12, name: 'Ikan Nila Bakar',       category: 'Lauk-Pauk', calories: 250, price: 22000, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSglppaBYwyMAQh87rcwaxrFKHlWvYCidwDtvofyMQTZQ&s=10' },
  { id: 13, name: 'Telur Dadar',           category: 'Lauk-Pauk', calories: 190, price:  7000, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToQD0LKjH8uw4-eS40UOtmwJto7MuVFFQjU6iaxCWOGA&s=10' },
  { id: 14, name: 'Beef Steak Sirloin',    category: 'Lauk-Pauk', calories: 420, price: 45000, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUL3zUJNx8uGHf-xy9Fv17EWOZnWegruKBNByUjNCCyQ&s=10' },
  // Sayur
  { id: 15, name: 'Tumis Kangkung',        category: 'Sayur', calories:  90, price:  9000, img: 'https://assets.unileversolutions.com/recipes-v2/230520.jpg' },
  { id: 16, name: 'Sayur Asem',            category: 'Sayur', calories:  70, price:  8000, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-APLPfZK0wGi9a4WZe3RnrU8vLLCqklcxjrxgD46qRJ4At2-xco6HsRokKghhK9q_inWJzw1TO8m70u6xb7K5-PramDdql4mTdZoCvBMbg&s=10' },
  { id: 17, name: 'Capcay Kuah',           category: 'Sayur', calories: 110, price: 13000, img: 'https://awsimages.detik.net.id/community/media/visual/2025/07/19/capcay-kuah-1752890189762_169.jpeg?w=1200' },
  { id: 18, name: 'Salad Sayur Segar',     category: 'Sayur', calories:  80, price: 14000, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEjOmKYGGGF_eiBOnvyw8UUm9IAyOnYPCpFQ&s' },
  { id: 19, name: 'Gado-Gado',             category: 'Sayur', calories: 280, price: 16000, img: 'https://i0.wp.com/resepkoki.id/wp-content/uploads/2017/02/Resep-Gado-Gado.jpg?fit=1920%2C1840&ssl=1' },
  // Buah
  { id: 20, name: 'Pisang (1 buah)',       category: 'Buah', calories: 105, price:  5000, img: 'https://cdn.antaranews.com/cache/1200x800/2016/11/20161129banana-1504956_640.png' },
  { id: 21, name: 'Apel Fuji (1 buah)',    category: 'Buah', calories:  95, price:  7000, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2Bj1zzUc0zjcBkI2jX71rHvusKdbtYGv7rQ&s' },
  { id: 22, name: 'Semangka (1 potong)',   category: 'Buah', calories:  60, price:  6000, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReZJ32uT2luNMlcZy998guNnrSx7WXlp6EH9fE6dKiZw&s=10' },
  { id: 23, name: 'Fruit Salad Cup',       category: 'Buah', calories: 140, price: 17000, img: 'https://www.meatloafandmelodrama.com/wp-content/uploads/2023/04/tropical-fruit-salad-square-500x500.jpeg' },
  // Minuman
  { id: 24, name: 'Es Teh Manis',          category: 'Minuman', calories:  90, price:  5000, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpHdENjqrcCzs324w60jXA2Efe1HDRMJzsGlzvbZlHWg&s=10' },
  { id: 25, name: 'Air Mineral 600ml',     category: 'Minuman', calories:   0, price:  4000, img: 'https://images.alodokter.com/dk0z4ums3/image/upload/v1770794737/attached_image/air-mineral-yang-baik-untuk-kesehatan.jpg' },
  { id: 26, name: 'Jus Alpukat',           category: 'Minuman', calories: 230, price: 18000, img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOgrhFUF9UrUuXkiUCDFKFZQ5izx8AvrTcs1nXj726CQ&s=10' },
];

/* =========================================================
   STATE
   ========================================================= */
let selectedIds = new Set();
let activeFilter = 'all';

/* =========================================================
   HELPERS
   ========================================================= */
function getCategoryClass(category) {
  const map = {
    'Makanan Pokok': 'pokok',
    'Lauk-Pauk':     'lauk',
    'Sayur':         'sayur',
    'Buah':          'buah',
    'Minuman':       'minuman',
  };
  return map[category] ?? 'pokok';
}

function formatRupiah(number) {
  return new Intl.NumberFormat('id-ID').format(number);
}

/* =========================================================
   RENDER TABLE
   ========================================================= */
function renderTable() {
  const tbody = document.getElementById('menu-table-body');
  tbody.innerHTML = '';

  const visible = activeFilter === 'all'
    ? menuData
    : menuData.filter(m => m.category === activeFilter);

  visible.forEach(menu => {
    const tr = document.createElement('tr');
    if (selectedIds.has(menu.id)) tr.classList.add('row-selected');

    tr.innerHTML = `
      <td class="col-img">
        <img src="${menu.img}" alt="${menu.name}" loading="lazy">
      </td>
      <td class="col-name">${menu.name}</td>
      <td class="col-category">
        <span class="badge badge-${getCategoryClass(menu.category)}">${menu.category}</span>
      </td>
      <td class="col-calories">${menu.calories} kkal</td>
      <td class="col-price">Rp ${formatRupiah(menu.price)}</td>
      <td class="col-select">
        <input
          type="checkbox"
          class="menu-checkbox"
          data-id="${menu.id}"
          ${selectedIds.has(menu.id) ? 'checked' : ''}
          aria-label="Pilih ${menu.name}"
        >
      </td>
    `;

    tbody.appendChild(tr);
  });

  /* Attach listeners to freshly rendered checkboxes */
  tbody.querySelectorAll('.menu-checkbox').forEach(cb => {
    cb.addEventListener('change', handleCheckbox);
  });
}

/* =========================================================
   CHECKBOX HANDLER
   ========================================================= */
function handleCheckbox(e) {
  const id = Number(e.target.dataset.id);
  const row = e.target.closest('tr');

  if (e.target.checked) {
    selectedIds.add(id);
    row.classList.add('row-selected');
  } else {
    selectedIds.delete(id);
    row.classList.remove('row-selected');
  }

  updateSummary();
}

/* =========================================================
   UPDATE SIDEBAR SUMMARY
   ========================================================= */
function updateSummary() {
  const emptyState   = document.getElementById('plate-empty-state');
  const summaryCard  = document.getElementById('planner-summary');
  const badge        = document.getElementById('balanced-menu-badge');
  const foodContainer = document.getElementById('plate-food-container');

  const selected = menuData.filter(m => selectedIds.has(m.id));

  /* Empty state toggle */
  if (selected.length === 0) {
    emptyState.style.display    = 'flex';
    summaryCard.style.display   = 'none';
    badge.style.display         = 'none';
    foodContainer.innerHTML     = '';
    return;
  }

  emptyState.style.display   = 'none';
  summaryCard.style.display  = 'block';

  /* Totals */
  const totalCalories = selected.reduce((s, m) => s + m.calories, 0);
  const totalPrice    = selected.reduce((s, m) => s + m.price,    0);

  document.getElementById('total-calories').textContent = `${totalCalories} kkal`;
  document.getElementById('total-price').textContent    = `Rp ${formatRupiah(totalPrice)}`;

  /* Food Plate Illustration (max 3) */
  foodContainer.innerHTML = '';
  const maxIllustrations = 3;
  const plateItems = selected.slice(0, maxIllustrations);
  const totalSelectedCount = selected.length;

  plateItems.forEach((menu, index) => {
    const wrapper = document.createElement('div');
    wrapper.className = `plate-food-item count-${plateItems.length}`;
    wrapper.setAttribute('data-index', index);

    const img = document.createElement('img');
    img.src = menu.img;
    img.alt = menu.name;
    img.title = `${menu.name} (${menu.category})`;

    // Soft tooltip label inside the plate food item
    const tooltip = document.createElement('span');
    tooltip.className = 'food-tooltip';
    tooltip.textContent = menu.name;

    wrapper.appendChild(img);
    wrapper.appendChild(tooltip);
    foodContainer.appendChild(wrapper);
  });

  /* Extra badge if selected count > maxIllustrations */
  if (totalSelectedCount > maxIllustrations) {
    const extraCount = totalSelectedCount - maxIllustrations;
    const extraBadge = document.createElement('div');
    extraBadge.className = 'plate-extra-badge';
    extraBadge.textContent = `+${extraCount} lainnya`;
    extraBadge.title = `Ada ${extraCount} menu terpilih lainnya yang tidak ditampilkan di piring.`;
    foodContainer.appendChild(extraBadge);
  }

  /* Update Selected Menu List */
  const menuListContainer = document.getElementById('selected-menu-list');
  menuListContainer.innerHTML = '';
  selected.forEach(menu => {
    const li = document.createElement('li');
    li.className = 'selected-menu-item';
    li.innerHTML = `
      <span class="selected-menu-item-name" title="${menu.name}">${menu.name}</span>
      <span class="selected-menu-item-meta">${menu.calories} kkal | Rp ${formatRupiah(menu.price)}</span>
    `;
    menuListContainer.appendChild(li);
  });

  /* Category checklist */
  const fulfilled = {
    'Makanan Pokok': false,
    'Lauk-Pauk':     false,
    'Sayur':         false,
    'Buah':          false,
    'Minuman':       false,
  };

  selected.forEach(m => {
    // Sayur category in menuData might be named 'Sayur' or 'Sayuran'.
    // Let's handle both dynamically by normalizing or matching.
    const key = m.category === 'Sayuran' ? 'Sayur' : m.category;
    if (Object.prototype.hasOwnProperty.call(fulfilled, key)) {
      fulfilled[key] = true;
    }
  });

  const chkMap = {
    'Makanan Pokok': 'chk-pokok',
    'Lauk-Pauk':     'chk-lauk',
    'Sayur':         'chk-sayur',
    'Buah':          'chk-buah',
    'Minuman':       'chk-minuman',
  };

  Object.entries(chkMap).forEach(([cat, elemId]) => {
    document.getElementById(elemId).classList.toggle('fulfilled', fulfilled[cat]);
  });

  /* "Menu Seimbang!" badge — only show if ALL 5 categories fulfilled */
  const allFulfilled = Object.values(fulfilled).every(Boolean);
  badge.style.display = allFulfilled ? 'flex' : 'none';
}

/* =========================================================
   FILTER BAR
   ========================================================= */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilter = btn.dataset.filter;
    renderTable();
  });
});

/* =========================================================
   SCROLL REVEAL (IntersectionObserver)
   ========================================================= */
function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.concept-card, .favorite-card, .section-header'
  );
  targets.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  targets.forEach(el => observer.observe(el));
}

/* =========================================================
   SMOOTH ACTIVE NAV LINK (highlight on scroll)
   ========================================================= */
function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle(
            'active',
            link.getAttribute('href') === `#${entry.target.id}`
          );
        });
      }
    });
  }, { rootMargin: '-50% 0px -50% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* =========================================================
   INIT
   ========================================================= */
document.addEventListener('DOMContentLoaded', () => {
  renderTable();
  updateSummary();
  initScrollReveal();
  initNavHighlight();
});
