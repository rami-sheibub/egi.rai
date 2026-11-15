// Каталог сформирован на основе таблицы «Ароматы.xlsx»
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
    {"brand": "Creed", "name": "Creed Aventus"},
    {"brand": "Antonio Banderas", "name": "Blue Seduction"}
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
    {"brand": "Pheromone", "name": "Cleopatra"},
    {"brand": "Killian", "name": "Princess"},
    {"brand": "Killian", "name": "Good Girl Gonna Be Bad"},
    {"brand": "Trussardi", "name": "Donna"},
    {"brand": "Initio", "name": "Narcotic Delight"},
    {"brand": "Initio", "name": "Musk Therapy"},
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
    {"brand": "L.V.", "name": "Symphony"},
    {"brand": "L.V.", "name": "Imagination"},
    {"brand": "Madawi", "name": "40 Years Gold Edition"},
    {"brand": "Mancera", "name": "Cedrat Boise"},
    {"brand": "Mancera", "name": "Roses Vanille"},
    {"brand": "Molecules", "name": "1"},
    {"brand": "Molecules", "name": "01 + Black Tea"},
    {"brand": "Molecules", "name": "2"},
    {"brand": "Molecules", "name": "9"},
    {"brand": "Molecules", "name": "02 Black"},
    {"brand": "Roja Dove", "name": "Oligarch"},
    {"brand": "Shaikh", "name": "AI Sheyukh"},
    {"brand": "Sospero", "name": "Erba Pura"},
    {"brand": "Sospero", "name": "Accento"},
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
    {"brand": "Zielinski Black", "name": "Vanilla"},
    {"brand": "Cedre Atlas", "name": "Absolue"},
    {"brand": "Attar Collection", "name": "Musk Kashimir"},
    {"brand": "Entrigue Parfums", "name": "Entrigue Devil's"},
    {"brand": "Chabrawichi", "name": "Nefertity"},
    {"brand": "Anna Sui", "name": "Lucky Wish / Soblazn"},
    {"brand": "Mesk", "name": ""},
    {"brand": "Quartana", "name": "ANDROMEDA"},
    {"brand": "Marc Antoine Barrois", "name": "Ganymede"},
    {"brand": "Nasomatto", "name": "Black Afgano"},
    {"brand": "Pheromone", "name": "Red sea"},
    {"brand": "Pheromone", "name": "Hormone"},
    {"brand": "ZAM ZAM", "name": ""},
    {"brand": "Franck Boclet", "name": "Cocaine"},
    {"brand": "GABA", "name": "Hormone"},
    {"brand": "Thomas Kosmala", "name": "No 4 Après l'Amour"},
    {"brand": "Genyum", "name": "Painter"}
  ]
};

const allProducts = Object.entries(catalog).flatMap(([category, items]) =>
  items.map(item => ({...item, category}))
);

const grid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const resultCount = document.getElementById("resultCount");
const emptyState = document.getElementById("emptyState");
const genderFilter = document.getElementById("genderFilter");
const brandFilter = document.getElementById("brandFilter");
const expandWrapper = document.getElementById("expandWrapper");
const expandBtn = document.getElementById("expandBtn");

// Кнопки скролла
const toTop = document.getElementById("toTop");
const toBottom = document.getElementById("toBottom");

let activeGender = "Все";
let activeBrand = "Все";
let currentLimit = 12;
let isExpanded = false;

function updateBrandOptions() {
  if (!brandFilter) return;
  const currentSelected = activeBrand;
  const availableProducts = allProducts.filter(p => activeGender === "Все" || p.category === activeGender);
  const brands = [...new Set(availableProducts.map(p => p.brand))].sort((a, b) => a.localeCompare(b, 'ru'));
  
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
  return String(value || "").replace(/[&<>"']/g, ch =>
    ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch])
  );
}

function renderProducts() {
  if (!grid || !searchInput || !resultCount || !emptyState) return;

  const query = searchInput.value.trim().toLowerCase();
  
  const products = allProducts.filter(item => {
    const matchGender = activeGender === "Все" || item.category === activeGender;
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

  const visibleProducts = isExpanded ? products : products.slice(0, currentLimit);

  // ВАЖНО: Здесь кнопка теперь имеет data-атрибуты для модального окна
  grid.innerHTML = visibleProducts.map((item) => {
    const brand = item.brand || "Коллекция EGI.RAI";
    const categoryLabel = item.category.toUpperCase();

    return `<article class="product-card">
      <div class="product-visual">
        <span class="product-category">${escapeHtml(categoryLabel)}</span>
        <div class="mini-perfume" aria-hidden="true"></div>
      </div>
      <div class="product-info">
        <div class="product-brand">${escapeHtml(brand)}</div>
        <div class="product-name">${escapeHtml(item.name)}</div>
        <div class="product-type">Масляный аромат</div>
        <div class="product-bottom">
          <div class="from-price">1 мл <b>100 ₽</b></div>
          <button class="order-small" data-brand="${escapeHtml(brand)}" data-name="${escapeHtml(item.name || "—")}" aria-label="Заказать ${escapeHtml(item.name)}">&rarr;</button>
        </div>
      </div>
    </article>`;
  }).join("");

  if (expandWrapper && expandBtn) {
    if (products.length > currentLimit) {
      expandWrapper.style.display = "block";
      expandBtn.innerHTML = isExpanded ? "Свернуть каталог &uarr;" : "Развернуть каталог &darr;";
    } else {
      expandWrapper.style.display = "none";
    }
  }
}

if (searchInput) {
  searchInput.addEventListener("input", () => { currentLimit = 12; renderProducts(); });
}
if (genderFilter) {
  genderFilter.addEventListener("change", (e) => {
    activeGender = e.target.value; currentLimit = 12; updateBrandOptions(); renderProducts();
  });
}
if (brandFilter) {
  brandFilter.addEventListener("change", (e) => {
    activeBrand = e.target.value; currentLimit = 12; renderProducts();
  });
}
if (expandBtn) {
  expandBtn.addEventListener("click", () => { isExpanded = !isExpanded; renderProducts(); });
}

// --- ЛОГИКА МОДАЛЬНОГО ОКНА ЗАКАЗА ---
const modal = document.getElementById("orderModal");
const closeModalBtn = document.getElementById("closeModal");
const submitOrderBtn = document.getElementById("submitOrder");
const modalProductName = document.getElementById("modalProductName");
const modalProductBrand = document.getElementById("modalProductBrand");
const modalVolume = document.getElementById("modalVolume");
const modalName = document.getElementById("modalName");
const modalContact = document.getElementById("modalContact");

let currentProduct = { brand: "", name: "" };

// Открытие по клику на карточку (делегирование событий)
if (grid) {
  grid.addEventListener("click", (e) => {
    const btn = e.target.closest(".order-small");
    if (!btn) return;
    
    currentProduct.brand = btn.getAttribute("data-brand");
    currentProduct.name = btn.getAttribute("data-name");
    
    modalProductName.textContent = currentProduct.name;
    modalProductBrand.textContent = currentProduct.brand;
    modalName.value = "";
    modalContact.value = "";
    modalVolume.value = "5";
    
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
}

function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "";
}
if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}

if (submitOrderBtn) {
  submitOrderBtn.addEventListener("click", async () => {
    const vol = modalVolume.value;
    const name = modalName.value.trim();
    const contact = modalContact.value.trim();
    const price = parseInt(vol) * 100;

    if (!name || !contact) {
      alert("Пожалуйста, заполните ваше имя и контакт для связи.");
      return;
    }

    // Меняем текст кнопки, чтобы показать загрузку
    const originalBtnText = submitOrderBtn.innerHTML;
    submitOrderBtn.innerHTML = "Отправка...";
    submitOrderBtn.disabled = true;

if (submitOrderBtn) {
  submitOrderBtn.addEventListener("click", async () => {
    const vol = modalVolume.value;
    const name = modalName.value.trim();
    const contact = modalContact.value.trim();
    const price = parseInt(vol) * 100;

    if (!name || !contact) {
      alert("Пожалуйста, заполните ваше имя и контакт для связи.");
      return;
    }

    const originalBtnText = submitOrderBtn.innerHTML;
    submitOrderBtn.innerHTML = "Отправка...";
    submitOrderBtn.disabled = true;

    // ВАШ ENDPOINT ИЗ FORMSPREE
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrpqaeq";

    // Formspree принимает плоский JSON (без обертки data)
    const orderData = {
      name: name,
      contact: contact,
      product: `${currentProduct.brand} — ${currentProduct.name}`,
      volume: vol + ' мл',
      price: price.toLocaleString("ru-RU") + ' ₽',
      _subject: "Новый заказ с сайта EGI.RAI" // Тема письма
    };

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(orderData)
      });

      if (response.ok) {
        alert('Заказ отправлен! Мы скоро свяжемся с вами.');
        closeModal();
      } else {
        alert('Ошибка отправки. Попробуйте позже.');
      }
    } catch (error) {
      console.error('Ошибка:', error);
      alert('Не удалось отправить заказ. Проверьте интернет-соединение.');
    } finally {
      submitOrderBtn.innerHTML = originalBtnText;
      submitOrderBtn.disabled = false;
    }
  });
}

// --- Кнопки скролла Вверх / Вниз ---
if (toTop) {
  toTop.addEventListener("click", () => window.scrollTo({top:0, behavior:"smooth"}));
}
if (toBottom) {
  toBottom.addEventListener("click", () => window.scrollTo({top: document.body.scrollHeight, behavior:"smooth"}));
}
window.addEventListener("scroll", () => {
  const show = window.scrollY > 400;
  if (toTop) toTop.classList.toggle("visible", show);
  if (toBottom) toBottom.classList.toggle("visible", !show); // Внизу кнопка "Вниз" скрывается
});

// --- Меню ---
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
  document.querySelectorAll(".nav a").forEach(link =>
    link.addEventListener("click", () => nav.classList.remove("open"))
  );
}

// Запуск
updateBrandOptions();
renderProducts();
