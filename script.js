// Каталог (DELUX распределен по категориям)
const catalog = {
  "Мужские": [
    {"brand": "Giorgio Armani", "name": "Acqua di Giò"},
    {"brand": "Azzaro", "name": "Pour Homme"},
    {"brand": "BVLGARI", "name": "Aqva Pour Homme"},
    {"brand": "BVLGARI", "name": "Aqva Pour Homme Marine"},
    {"brand": "BVLGARI", "name": "Tygar"},
    {"brand": "BVLGARI", "name": "For Men"},
    {"brand": "Chanel", "name": "Allure Homme Sport"},
    {"brand": "Chanel", "name": "Bleu de Chanel"},
    {"brand": "Chanel", "name": "Égoïste"},
    {"brand": "Hugo Boss", "name": "Bottled Intense"},
    {"brand": "Hugo Boss", "name": "The Scent Intense"},
    {"brand": "Hugo Boss", "name": "For Men"},
    {"brand": "Hermès", "name": "Terre d'Hermès"},
    {"brand": "Lacoste", "name": "Blanc (White)"},
    {"brand": "Paco Rabanne", "name": "1 Million"},
    {"brand": "Paco Rabanne", "name": "Invictus"},
    {"brand": "Paco Rabanne", "name": "Black XS"},
    {"brand": "Shaikh", "name": "70"},
    {"brand": "Shaikh", "name": "77"},
    {"brand": "Trussardi", "name": "My Land"},
    {"brand": "Trussardi", "name": "Uomo"},
    {"brand": "Versace", "name": "Eros"},
    {"brand": "Versace", "name": "fresh"},
    {"brand": "Dior", "name": "Homme Sport"},
    {"brand": "Dior", "name": "Sauvage"},
    {"brand": "Dior", "name": "Fahrenheit"},
    {"brand": "Carolina Herrera", "name": "212 VIP"},
    {"brand": "Kenzo", "name": "For men"},
    // НОВОЕ (Мужские)
    {"brand": "Dior", "name": "Sauvage Elixir"},
    {"brand": "Chanel", "name": "Allure Homme Edition Blanche"},
    {"brand": "Tom Ford", "name": "Noir Extreme"},
    {"brand": "Jean Paul Gaultier", "name": "Le Male"},
    {"brand": "Azzaro", "name": "Chrome"},
    {"brand": "Gucci", "name": "Guilty Pour Homme"},
    // DELUX (распределено)
    {"brand": "Marc Antoine Barrois", "name": "Ganymede", "isDelux": true},
    {"brand": "Nasomatto", "name": "Black Afgano", "isDelux": true},
    {"brand": "Creed", "name": "Creed Aventus", "isDelux": true},
    {"brand": "Antonio Banderas", "name": "Blue Seduction", "isDelux": true}
  ],
  "Женские": [
    {"brand": "Parade of Stars", "name": "1001 Nights Sharazad"},
    {"brand": "AI Rehab", "name": "AI Rehab Dalal"},
    {"brand": "AI Rehab", "name": "AI Rehab Soft"},
    {"brand": "AI Rehab", "name": "Choco Musk"},
    {"brand": "Alexandre.J", "name": "Black Muscs"},
    {"brand": "Attar Collection", "name": "Hayati"},
    {"brand": "Burberry", "name": "Weekends"},
    {"brand": "Britney Spears", "name": "Midnight Fantasy"},
    {"brand": "Carolina Herrera", "name": "Good Girl"},
    {"brand": "Carolina Herrera", "name": "212 VIP Rose"},
    {"brand": "Chanel", "name": "Chance Fresh"},
    {"brand": "Chanel", "name": "Coco Mademoiselle"},
    {"brand": "Chanel", "name": "Tender"},
    {"brand": "Christian Richard", "name": "White Chocolate"},
    {"brand": "Escada", "name": "Cherry"},
    {"brand": "Escada", "name": "Sexy Graffiti"},
    {"brand": "Escada", "name": "Moon Sparkle"},
    {"brand": "Lanvin", "name": "Éclat d'Arpège"},
    {"brand": "D&G", "name": "L'Impératrice 3"},
    {"brand": "Givenchy", "name": "Ange ou Démon"},
    {"brand": "Giorgio Armani", "name": "Si"},
    {"brand": "Giorgio Armani", "name": "my way"},
    {"brand": "Gucci", "name": "Flora"},
    {"brand": "Kenzo", "name": "Pour Femme"},
    {"brand": "Paco Rabanne", "name": "Lady Million"},
    {"brand": "Lacoste", "name": "Pour Femme"},
    {"brand": "Miss Dior", "name": "Cherie Blooming"},
    {"brand": "Miss Dior", "name": "Cherry"},
    {"brand": "Miss Dior", "name": "J'adore"},
    {"brand": "Montale", "name": "Chocolate"},
    {"brand": "Montale", "name": "Mukhallat"},
    {"brand": "Montale", "name": "Roses Musk"},
    {"brand": "Montale", "name": "Vanilla Absolute"},
    {"brand": "Nina Ricci", "name": "Nina Rose"},
    {"brand": "Victoria's Secret", "name": "Bombshell"},
    {"brand": "Victoria's Secret", "name": "So Sexy"},
    {"brand": "Versace", "name": "Eros Pour Femme"},
    {"brand": "Versace", "name": "Bright Crystal"},
    {"brand": "Yara (Lattafa)", "name": "Yara"},
    {"brand": "YSL", "name": "Black Opium"},
    {"brand": "Pheromone", "name": "Pheromone"},
    {"brand": "Killian", "name": "Good Girl Gonna Be Bad"},
    {"brand": "Trussardi", "name": "Donna"},
    {"brand": "Initio", "name": "Narcotic Delight"},
    {"brand": "Lancome", "name": "La vie est bella"},
    // НОВОЕ (Женские)
    {"brand": "Gucci", "name": "Bloom"},
    {"brand": "Dior", "name": "Miss Dior Originale"},
    {"brand": "Chanel", "name": "Gabrielle"},
    {"brand": "Lancome", "name": "La Nuit Trésor"},
    {"brand": "YSL", "name": "Libre"},
    {"brand": "Mugler", "name": "Alien"},
    {"brand": "Paco Rabanne", "name": "Olympéa"},
    {"brand": "Narciso Rodriguez", "name": "For Her"}
  ],
  "Унисекс": [
    {"brand": "Ajmal", "name": "Amber Wood"},
    {"brand": "Amouage", "name": "Interlude Man"},
    {"brand": "Amouage", "name": "Library Collection"},
    {"brand": "Giorgio Armani", "name": "Because It's You"},
    {"brand": "Giorgio Armani", "name": "Stronger with you"},
    {"brand": "Baccarat", "name": "Rouge 540"},
    {"brand": "Byredo", "name": "Bal D'Afrique"},
    {"brand": "Ex Nihilo Blue", "name": "Fleur Narcotique"},
    {"brand": "Ex Nihilo Blue", "name": "Talisman"},
    {"brand": "Kajal", "name": "Kajal Dahal"},
    {"brand": "L.V.", "name": "Bois Imperial"},
    {"brand": "L.V.", "name": "l'immensité"},
    {"brand": "L.V.", "name": "Nuit De Feu"},
    {"brand": "L.V.", "name": "Pacific chill"},
    {"brand": "Madawi", "name": "40 Years Gold Edition"},
    {"brand": "Mancera", "name": "Cedrat Boise"},
    {"brand": "Mancera", "name": "Roses Vanille"},
    {"brand": "Molecules", "name": "1"},
    {"brand": "Molecules", "name": "01 + Black Tea"},
    {"brand": "Molecules", "name": "2"},
    {"brand": "Molecules", "name": "9"},
    {"brand": "Roja Dove", "name": "Oligarch"},
    {"brand": "Shaikh", "name": "AI Sheyukh"},
    {"brand": "Sospero", "name": "Erba Pura"},
    {"brand": "Tilia Parfums", "name": "TILIA"},
    {"brand": "Tom Ford", "name": "Ambre Leather"},
    {"brand": "Tom Ford", "name": "Cherry Smoke"},
    {"brand": "Tom Ford", "name": "Electric Cherry"},
    {"brand": "Tom Ford", "name": "Lost Cherry"},
    {"brand": "Tom Ford", "name": "Tobacco Vanille"},
    {"brand": "Tom Ford", "name": "Oud Wood"},
    {"brand": "Tiziana Terenzi", "name": "Gumin"},
    {"brand": "Tiziana Terenzi", "name": "Kirke"},
    {"brand": "Zielinski Black", "name": "Pepper Amber"},
    {"brand": "Cedre Atlas", "name": "Absolue"},
    {"brand": "Attar Collection", "name": "Musk Kashimir"},
    {"brand": "Entrigue Parfums", "name": "Entrigue Devil's"},
    {"brand": "Chabrawichi", "name": "Nefertity"},
    {"brand": "Anna Sui", "name": "Lucky Wish / Soblazn"},
    {"brand": "—", "name": "Mesk"},
    // НОВОЕ (Унисекс)
    {"brand": "Byredo", "name": "Gypsy Water"},
    {"brand": "Byredo", "name": "Mojave Ghost"},
    {"brand": "Le Labo", "name": "Santal 33"},
    {"brand": "Parfums de Marly", "name": "Layton"},
    {"brand": "Parfums de Marly", "name": "Delina"},
    {"brand": "Xerjoff", "name": "Naxos"},
    // DELUX (распределено)
    {"brand": "Quartana", "name": "ANDROMEDA", "isDelux": true},
    {"brand": "Molecules", "name": "Escentric 02", "isDelux": true}
  ]
};

// Все ароматы в единый список
const allProducts = Object.entries(catalog).flatMap(([category, items]) =>
  items.map(item => ({...item, category}))
);

// Элементы на странице
const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const genderFilter = document.getElementById("genderFilter");
const brandFilter = document.getElementById("brandFilter");
const expandWrapper = document.getElementById("expandWrapper");
const expandBtn = document.getElementById("expandBtn");

// Переменные для фильтрации
let activeGender = "Все";
let activeBrand = "Все";
let currentLimit = 12;
let isExpanded = false;

// Умное заполнение брендов (зависит от выбранного пола)
function updateBrandOptions() {
  if (!brandFilter) return;
  
  const currentSelected = activeBrand;
  const availableProducts = allProducts.filter(p => activeGender === "Все" || p.category === activeGender || (activeGender === "DELUX" && p.isDelux));
  
  // Если выбрана категория DELUX, собираем только те, у кого есть флаг isDelux
  let brands;
  if (activeGender === "DELUX") {
    brands = [...new Set(availableProducts.filter(p => p.isDelux).map(p => p.brand))].sort((a, b) => a.localeCompare(b, 'ru'));
  } else {
    brands = [...new Set(availableProducts.map(p => p.brand))].sort((a, b) => a.localeCompare(b, 'ru'));
  }
  
  brandFilter.innerHTML = '<option value="Все">Все бренды</option>';
  brands.forEach(brand => {
    const option = document.createElement("option");
    option.value = brand;
    option.textContent = brand;
    brandFilter.appendChild(option);
  });

  if (brands.includes(currentSelected)) {
    brandFilter.value = currentSelected;
  } else {
    activeBrand = "Все";
    brandFilter.value = "Все";
  }
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch =>
    ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch])
  );
}

function renderProducts() {
  if (!grid || !searchInput || !resultCount || !emptyState) return;

  const query = searchInput.value.trim().toLowerCase();
  
  // Фильтрация
  const products = allProducts.filter(item => {
    let matchGender = false;
    if (activeGender === "Все") matchGender = true;
    else if (activeGender === "DELUX") matchGender = item.isDelux === true;
    else matchGender = item.category === activeGender;

    const matchBrand = activeBrand === "Все" || item.brand === activeBrand;
    const matchQuery = (`${item.brand} ${item.name}`).toLowerCase().includes(query);
    
    return matchGender && matchBrand && matchQuery;
  });

  resultCount.textContent = `${products.length} ${products.length === 1 ? "аромат" : "ароматов"}`;
  
  emptyState.hidden = products.length !== 0;
  if (products.length === 0) {
    emptyState.innerHTML = "<strong>Таких духов нет</strong><br>Попробуйте изменить категорию или бренд.";
    grid.innerHTML = "";
    if(expandWrapper) expandWrapper.style.display = "none";
    return;
  }

  // Пагинация
  const visibleProducts = isExpanded ? products : products.slice(0, currentLimit);

  // Отрисовка
  grid.innerHTML = visibleProducts.map((item) => {
    const brand = item.brand || "Коллекция EGI.RAI";
    
    let categoryLabel = item.category.toUpperCase();
    if (item.isDelux) categoryLabel = "DELUX";
    
    const message = `Здравствуйте! Хочу заказать аромат: ${brand} — ${item.name} (${item.category}). Подскажите наличие и объёмы.`;
    const link = `https://t.me/Faputa_void?text=${encodeURIComponent(message)}`;

    return `<article class="product-card">
      <div class="product-visual">
        <span class="product-category">${escapeHtml(categoryLabel)}</span>
        <div class="mini-perfume" aria-hidden="true"></div>
      </div>
      <div class="product-info">
        <div class="product-brand">${escapeHtml(brand)}</div>
        <div class="product-name">${escapeHtml(item.name)}</div>
        <div class="product-type">${item.isDelux ? "Особая коллекция" : "Масляный аромат"}</div>
        <div class="product-bottom">
          <div class="from-price">1 мл <b>100 ₽</b></div>
          <a class="order-small" href="${link}" target="_blank" rel="noopener" aria-label="Заказать ${escapeHtml(item.name)}">↗</a>
        </div>
      </div>
    </article>`;
  }).join("");

  // Кнопка развернуть
  if (expandWrapper && expandBtn) {
    if (products.length > currentLimit) {
      expandWrapper.style.display = "block";
      expandBtn.textContent = isExpanded ? "Свернуть каталог ↑" : "Развернуть каталог ↓";
    } else {
      expandWrapper.style.display = "none";
    }
  }
}

// --- События ---
if (searchInput) {
  searchInput.addEventListener("input", () => {
    currentLimit = 12;
    renderProducts();
  });
}

if (genderFilter) {
  genderFilter.addEventListener("change", (e) => {
    activeGender = e.target.value;
    currentLimit = 12;
    updateBrandOptions();
    renderProducts();
  });
}

if (brandFilter) {
  brandFilter.addEventListener("change", (e) => {
    activeBrand = e.target.value;
    currentLimit = 12;
    renderProducts();
  });
}

if (expandBtn) {
  expandBtn.addEventListener("click", () => {
    isExpanded = !isExpanded;
    renderProducts();
  });
}

// Меню (гамбургер)
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
  document.querySelectorAll(".nav a").forEach(link =>
    link.addEventListener("click", () => nav.classList.remove("open"))
  );
}

// Кнопка «наверх»
const toTop = document.getElementById("toTop");
if (toTop) {
  window.addEventListener("scroll", () => toTop.classList.toggle("visible", window.scrollY > 500));
  toTop.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));
}

// Запуск
updateBrandOptions();
renderProducts();
