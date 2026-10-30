// Каталог сформирован на основе таблицы «Ароматы.xlsx».
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
    {"brand": "Kenzo", "name": "For men"}
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
    {"brand": "Lancome", "name": "La vie est bella"}
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
    {"brand": "—", "name": "Mesk"}
  ],
  "DELUX": [
    {"brand": "Quartana", "name": "ANDROMEDA"},
    {"brand": "Marc Antoine Barrois", "name": "Ganymede"},
    {"brand": "Molecules", "name": "Escentric 02"},
    {"brand": "Nasomatto", "name": "Black Afgano"},
    {"brand": "Creed", "name": "Creed Aventus"},
    {"brand": "Antonio Banderas", "name": "Blue Seduction"}
  ]
};

const basePrices = {"5 мл":450,"10 мл":750,"20 мл":1300,"30 мл":2300,"50 мл":4300,"70 мл":5750,"100 мл":7700};
const deluxePrices = {"5 мл":950,"10 мл":1400,"20 мл":2400,"30 мл":3400,"50 мл":5600,"70 мл":7500,"100 мл":9000};

let activeCategory = "Все";

// Все ароматы в единый список
const allProducts = Object.entries(catalog).flatMap(([category, items]) =>
  items.map(item => ({...item, category}))
);

const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, ch =>
    ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch])
  );
}

function renderProducts() {
  // Если каталога на странице нет — выходим без ошибки
  if (!grid || !searchInput || !resultCount || !emptyState) return;

  const query = searchInput.value.trim().toLowerCase();
  const products = allProducts.filter(item =>
    (activeCategory === "Все" || item.category === activeCategory) &&
    (`${item.brand} ${item.name} ${item.category}`).toLowerCase().includes(query)
  );

  resultCount.textContent = `${products.length} ${products.length === 1 ? "аромат" : "ароматов"}`;
  emptyState.hidden = products.length !== 0;

  grid.innerHTML = products.map((item) => {
    const isDeluxe = item.category === "DELUX";
    const price = isDeluxe ? deluxePrices["5 мл"] : basePrices["5 мл"];
    const brand = item.brand || "Коллекция EGI.RAI";
    const categoryLabel = item.category === "DELUX" ? "DELUX" : item.category.toUpperCase();
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
        <div class="product-type">${isDeluxe ? "Особая коллекция" : "Масляный аромат"}</div>
        <div class="product-bottom">
          <div class="from-price">от<b>${price.toLocaleString("ru-RU")} ₽</b></div>
          <a class="order-small" href="${link}" target="_blank" rel="noopener" aria-label="Заказать ${escapeHtml(item.name)}">↗</a>
        </div>
      </div>
    </article>`;
  }).join("");
}

// --- Обработчики (каждый с проверкой на null) ---
const filtersBox = document.getElementById("filters");
if (filtersBox) {
  filtersBox.addEventListener("click", event => {
    const button = event.target.closest("[data-category]");
    if (!button) return;
    activeCategory = button.dataset.category;
    document.querySelectorAll(".filter").forEach(el => el.classList.toggle("active", el === button));
    renderProducts();
  });
}

if (searchInput) {
  searchInput.addEventListener("input", renderProducts);
}

// Меню (гамбургер) — есть и на index, и на about
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
  document.querySelectorAll(".nav a").forEach(link =>
    link.addEventListener("click", () => nav.classList.remove("open"))
  );
}

// Кнопка «наверх» — только на index
const toTop = document.getElementById("toTop");
if (toTop) {
  window.addEventListener("scroll", () => toTop.classList.toggle("visible", window.scrollY > 500));
  toTop.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));
}

// Запуск
renderProducts();