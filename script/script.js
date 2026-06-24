'use strict';

/* =========================================================
   DATA — 26 Menu Items (fixed calories & prices per spec)
   ========================================================= */
const menuData = [
  // Makanan Pokok
  { id:  1, name: 'Nasi Putih',            category: 'Makanan Pokok', calories: 180, price:  5000, img: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=200&q=80' },
  { id:  2, name: 'Nasi Goreng Spesial',   category: 'Makanan Pokok', calories: 450, price: 18000, img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=200&q=80' },
  { id:  3, name: 'Mie Goreng Jawa',       category: 'Makanan Pokok', calories: 380, price: 16000, img: 'https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=200&q=80' },
  { id:  4, name: 'Spaghetti Aglio Olio',  category: 'Makanan Pokok', calories: 420, price: 28000, img: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=200&q=80' },
  { id:  5, name: 'Kentang Panggang',       category: 'Makanan Pokok', calories: 220, price: 15000, img: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=200&q=80' },
  { id:  6, name: 'Roti Gandum (2 lembar)', category: 'Makanan Pokok', calories: 160, price:  8000, img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=200&q=80' },
  // Lauk-Pauk
  { id:  7, name: 'Ayam Goreng Tepung',    category: 'Lauk-Pauk', calories: 300, price: 17000, img: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=200&q=80' },
  { id:  8, name: 'Ayam Bakar Madu',       category: 'Lauk-Pauk', calories: 280, price: 20000, img: 'https://images.unsplash.com/photo-1598514983318-2f64f8f4796c?w=200&q=80' },
  { id:  9, name: 'Rendang Daging Sapi',   category: 'Lauk-Pauk', calories: 380, price: 32000, img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=200&q=80' },
  { id: 10, name: 'Tempe Orek',            category: 'Lauk-Pauk', calories: 150, price:  8000, img: 'https://images.unsplash.com/photo-1546069901-d5bfd2cbfb1f?w=200&q=80' },
  { id: 11, name: 'Tahu Goreng',           category: 'Lauk-Pauk', calories: 120, price:  6000, img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=200&q=80' },
  { id: 12, name: 'Ikan Nila Bakar',       category: 'Lauk-Pauk', calories: 250, price: 22000, img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=200&q=80' },
  { id: 13, name: 'Telur Dadar',           category: 'Lauk-Pauk', calories: 190, price:  7000, img: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=200&q=80' },
  { id: 14, name: 'Beef Steak Sirloin',    category: 'Lauk-Pauk', calories: 420, price: 45000, img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=200&q=80' },
  // Sayur
  { id: 15, name: 'Tumis Kangkung',        category: 'Sayur', calories:  90, price:  9000, img: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=200&q=80' },
  { id: 16, name: 'Sayur Asem',            category: 'Sayur', calories:  70, price:  8000, img: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=200&q=80' },
  { id: 17, name: 'Capcay Kuah',           category: 'Sayur', calories: 110, price: 13000, img: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=200&q=80' },
  { id: 18, name: 'Salad Sayur Segar',     category: 'Sayur', calories:  80, price: 14000, img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&q=80' },
  { id: 19, name: 'Gado-Gado',             category: 'Sayur', calories: 280, price: 16000, img: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=200&q=80' },
  // Buah
  { id: 20, name: 'Pisang (1 buah)',       category: 'Buah', calories: 105, price:  5000, img: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=200&q=80' },
  { id: 21, name: 'Apel Fuji (1 buah)',    category: 'Buah', calories:  95, price:  7000, img: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=200&q=80' },
  { id: 22, name: 'Semangka (1 potong)',   category: 'Buah', calories:  60, price:  6000, img: 'https://images.unsplash.com/photo-1563114773-84221bd62daa?w=200&q=80' },
  { id: 23, name: 'Fruit Salad Cup',       category: 'Buah', calories: 140, price: 17000, img: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=200&q=80' },
  // Minuman
  { id: 24, name: 'Es Teh Manis',          category: 'Minuman', calories:  90, price:  5000, img: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=200&q=80' },
  { id: 25, name: 'Air Mineral 600ml',     category: 'Minuman', calories:   0, price:  4000, img: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=200&q=80' },
  { id: 26, name: 'Jus Alpukat',           category: 'Minuman', calories: 230, price: 18000, img: 'https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=200&q=80' },
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
  const emptyState   = document.getElementById('empty-state');
  const realtimeData = document.querySelector('.planner-realtime-data');
  const badge        = document.getElementById('balanced-menu-badge');

  const selected = menuData.filter(m => selectedIds.has(m.id));

  /* Empty state toggle */
  if (selected.length === 0) {
    emptyState.style.display    = 'flex';
    realtimeData.style.display  = 'none';
    badge.style.display         = 'none';
    return;
  }

  emptyState.style.display   = 'none';
  realtimeData.style.display = 'block';

  /* Totals */
  const totalCalories = selected.reduce((s, m) => s + m.calories, 0);
  const totalPrice    = selected.reduce((s, m) => s + m.price,    0);

  document.getElementById('total-calories').textContent = `${totalCalories} kkal`;
  document.getElementById('total-price').textContent    = `Rp ${formatRupiah(totalPrice)}`;

  /* Image stack */
  const imageStack = document.getElementById('image-stack-container');
  imageStack.innerHTML = '';
  selected.forEach(menu => {
    const img = document.createElement('img');
    img.src   = menu.img;
    img.alt   = menu.name;
    img.title = menu.name;
    imageStack.appendChild(img);
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
    if (Object.prototype.hasOwnProperty.call(fulfilled, m.category)) {
      fulfilled[m.category] = true;
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
