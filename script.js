// Каталог сформирован на основе таблицы «Ароматы.xlsx»
const catalog = {
  "Мужские": [
    {"brand": "Giorgio Armani", "name": "Acqua di Giò", "notes": "Верхние: лимон, бергамот, нероли, мандарин. Средние: жасмин, розмарин, фиалка, кедр. Базовые: пачули, мускус, амбра, дубовый мох."},
    {"brand": "Azzaro", "name": "Pour Homme", "notes": "Верхние: лаванда, ананас, бергамот, лимон. Средние: жасмин, гвоздика, сандал, кедр. Базовые: кожа, мускус, бобы тонка, амбра."},
    {"brand": "BVLGARI", "name": "Aqva Pour Homme", "notes": "Верхние: мандарин, петитгрейн, апельсин. Средние: водные ноты, лаванда, бальзам. Базовые: мускус, пачули, древесные ноты."},
    {"brand": "BVLGARI", "name": "Aqva Pour Homme Marine", "notes": "Верхние: грейпфрут, бергамот, нероли. Средние: морской бриз, розмарин, жасмин. Базовые: кедр, мускус, амбра."},
    {"brand": "BVLGARI", "name": "Tygar", "notes": "Верхние: грейпфрут, кедр. Средние: пачули, амбра. Базовые: мускус, древесные ноты."},
    {"brand": "BVLGARI", "name": "For Men", "notes": "Верхние: бергамот, лаванда. Средние: жасмин, кедр. Базовые: мускус, амбра."},
    {"brand": "Chanel", "name": "Allure Homme Sport", "notes": "Верхние: апельсин, морской бриз, перец. Средние: нероли, кедр, жасмин. Базовые: мускус, ветивер, бобы тонка."},
    {"brand": "Chanel", "name": "Bleu de Chanel", "notes": "Верхние: грейпфрут, лимон, мята, розовый перец. Средние: имбирь, мускатный орех, жасмин. Базовые: кедр, сандал, ладан, амбра."},
    {"brand": "Chanel", "name": "Égoïste", "notes": "Верхние: мандарин, кориандр. Средние: роза, жасмин, дамасская роза. Базовые: сандал, амбра, ваниль, кедр."},
    {"brand": "Hugo Boss", "name": "Bottled Intense", "notes": "Верхние: яблоко, кориандр, бергамот. Средние: корица, кашемировое дерево. Базовые: ваниль, бобы тонка, олибанум."},
    {"brand": "Hugo Boss", "name": "The Scent Intense", "notes": "Верхние: маракуйя, бергамот. Средние: кожа, имбирь. Базовые: мускус, бобы тонка."},
    {"brand": "Hugo Boss", "name": "For Men", "notes": "Верхние: яблоко, бергамот, мята. Средние: гвоздика, лаванда, корица. Базовые: сандал, оливковое дерево, мускус."},
    {"brand": "Hermès", "name": "Terre d'Hermès", "notes": "Верхние: апельсин, грейпфрут. Средние: перец, флёрдоранж. Базовые: ветивер, кедр, пачули, бензоин."},
    {"brand": "Lacoste", "name": "Blanc (White)", "notes": "Верхние: мандарин, кардамон, бергамот. Средние: жасмин, имбирь. Базовые: кедр, мускус, ваниль."},
    {"brand": "Paco Rabanne", "name": "1 Million", "notes": "Верхние: мандарин, грейпфрут, мята. Средние: корица, роза, специи. Базовые: кожа, пачули, амбра."},
    {"brand": "Paco Rabanne", "name": "Invictus", "notes": "Верхние: грейпфрут, морской бриз, мандарин. Средние: лавр, жасмин, амбра. Базовые: пачули, дубовый мох, гуаяк."},
    {"brand": "Paco Rabanne", "name": "Black XS", "notes": "Верхние: лимон, тамаринд. Средние: корица, пачули. Базовые: кедр, мускус, ваниль."},
    {"brand": "Shaikh", "name": "70", "notes": "Восторженный, амбровый, древесный. (Точный состав уточняется)"},
    {"brand": "Shaikh", "name": "77", "notes": "Пряный, кожаный, мускусный. (Точный состав уточняется)"},
    {"brand": "Trussardi", "name": "My Land", "notes": "Верхние: бергамот, лаванда. Средние: кедр, мускатный орех. Базовые: кожа, амбра, ветивер."},
    {"brand": "Trussardi", "name": "Uomo", "notes": "Верхние: лимон, бергамот, можжевельник. Средние: жасмин, кедр. Базовые: кожа, мускус, амбра."},
    {"brand": "Versace", "name": "Eros", "notes": "Верхние: мята, зелёное яблоко, лимон. Средние: бобы тонка, амброксан, жасмин. Базовые: ваниль, ветивер, кедр, мускус."},
    {"brand": "Versace", "name": "fresh", "notes": "Верхние: лимон, нероли. Средние: жасмин, лаванда. Базовые: мускус, кедр."},
    {"brand": "Dior", "name": "Homme Sport", "notes": "Верхние: апельсин, грейпфрут, перец. Средние: жасмин, имбирь. Базовые: кедр, мускус, амбра."},
    {"brand": "Dior", "name": "Sauvage", "notes": "Верхние: калабрийский бергамот, перец. Средние: лаванда, розовый перец, ветивер. Базовые: амброксан, кедр, лабданум."},
    {"brand": "Dior", "name": "Fahrenheit", "notes": "Верхние: мандарин, боярышник, фиалка. Средние: фиалковый лист, мускатный орех, кедр. Базовые: кожа, бензоин, мускус."},
    {"brand": "Carolina Herrera", "name": "212 VIP", "notes": "Верхние: грейпфрут, абсент, мята. Средние: мускатный орех, амбра, жасмин. Базовые: кедр, пачули, мускус."},
    {"brand": "Kenzo", "name": "For men", "notes": "Верхние: бергамот, лаванда, мята. Средние: жасмин, кедр, шалфей. Базовые: мускус, ветивер, амбра."},
    {"brand": "Creed", "name": "Creed Aventus", "notes": "Верхние: ананас, бергамот, чёрная смородина, яблоко. Средние: берёза, пачули, жасмин, роза. Базовые: мускус, дубовый мох, амбра, ваниль."},
    {"brand": "Antonio Banderas", "name": "Blue Seduction", "notes": "Верхние: грейпфрут, мята, лаванда. Средние: жасмин, мускатный орех, кедр. Базовые: амбра, мускус, дубовый мох."}
  ],
  "Женские": [
    {"brand": "Parade of Stars", "name": "1001 Nights Sharazad", "notes": "Восторженный, амбровый, пряный. (Точный состав уточняется)"},
    {"brand": "AI Rehab", "name": "AI Rehab Dalal", "notes": "Ваниль, карамель, сандал, амбра."},
    {"brand": "AI Rehab", "name": "AI Rehab Soft", "notes": "Мускус, пудровые ноты, ваниль."},
    {"brand": "AI Rehab", "name": "Choco Musk", "notes": "Шоколад, ваниль, мускус, специи."},
    {"brand": "Alexandre.J", "name": "Black Muscs", "notes": "Верхние: чёрный перец. Средние: ирис, мускус. Базовые: амбра, пачули, ваниль."},
    {"brand": "Attar Collection", "name": "Hayati", "notes": "Верхние: шафран, роза. Средние: уд, амбра. Базовые: мускус, сандал."},
    {"brand": "Burberry", "name": "Weekends", "notes": "Верхние: мандарин, апельсин. Средние: жасмин, роза. Базовые: мускус, сандал."},
    {"brand": "Britney Spears", "name": "Midnight Fantasy", "notes": "Верхние: вишня, слива. Средние: роза, фрезия. Базовые: мускус, ваниль, сандал."},
    {"brand": "Carolina Herrera", "name": "Good Girl", "notes": "Верхние: миндаль, кофе. Средние: жасмин, тубероза. Базовые: какао, бобы тонка, сандал."},
    {"brand": "Carolina Herrera", "name": "212 VIP Rose", "notes": "Верхние: шампанское, розовый перец. Средние: роза, пион. Базовые: мускус, ваниль, амбра."},
    {"brand": "Chanel", "name": "Chance Fresh", "notes": "Верхние: лимон, жасмин. Средние: ананас, розовый перец. Базовые: мускус, пачули, ветивер."},
    {"brand": "Chanel", "name": "Coco Mademoiselle", "notes": "Верхние: апельсин, бергамот. Средние: роза, жасмин. Базовые: пачули, ветивер, мускус."},
    {"brand": "Chanel", "name": "Tender", "notes": "Верхние: мандарин. Средние: роза, жасмин. Базовые: мускус, ирис, кедр."},
    {"brand": "Christian Richard", "name": "White Chocolate", "notes": "Верхние: кокос, ваниль. Средние: шоколад, пралине. Базовые: мускус, сандал."},
    {"brand": "Escada", "name": "Cherry", "notes": "Верхние: вишня, мандарин. Средние: жасмин, гардения. Базовые: ваниль, мускус."},
    {"brand": "Escada", "name": "Sexy Graffiti", "notes": "Верхние: малина, личи. Средние: роза, пион. Базовые: мускус, ваниль."},
    {"brand": "Escada", "name": "Moon Sparkle", "notes": "Верхние: мандарин, груша. Средние: жасмин, фрезия. Базовые: мускус, кедр."},
    {"brand": "Lanvin", "name": "Éclat d'Arpège", "notes": "Верхние: лимон, зелёный чай. Средние: пион, жасмин. Базовые: мускус, кедр."},
    {"brand": "D&G", "name": "L'Impératrice 3", "notes": "Верхние: арбуз, мандарин. Средние: жасмин, роза. Базовые: мускус, ваниль."},
    {"brand": "Givenchy", "name": "Ange ou Démon", "notes": "Верхние: мандарин, шафран. Средние: жасмин, лилия. Базовые: пачули, мускус, амбра."},
    {"brand": "Giorgio Armani", "name": "Si", "notes": "Верхние: чёрная смородина, гвоздика. Средние: роза, жасмин. Базовые: пачули, мускус, ваниль."},
    {"brand": "Giorgio Armani", "name": "my way", "notes": "Верхние: бергамот, апельсин. Средние: жасмин, тубероза. Базовые: мускус, кедр, ваниль."},
    {"brand": "Gucci", "name": "Flora", "notes": "Верхние: пион, мандарин. Средние: роза, османтус. Базовые: сандал, мускус."},
    {"brand": "Kenzo", "name": "Pour Femme", "notes": "Верхние: мандарин, лимон. Средние: жасмин, роза. Базовые: мускус, ваниль, кедр."},
    {"brand": "Paco Rabanne", "name": "Lady Million", "notes": "Верхние: малина, нероли. Средние: жасмин, гардения. Базовые: пачули, мускус, амбра."},
    {"brand": "Lacoste", "name": "Pour Femme", "notes": "Верхние: мандарин, грейпфрут. Средние: жасмин, роза. Базовые: мускус, кедр, амбра."},
    {"brand": "Miss Dior", "name": "Cherie Blooming", "notes": "Верхние: апельсин, мандарин. Средние: пион, жасмин. Базовые: мускус, пачули."},
    {"brand": "Miss Dior", "name": "Cherry", "notes": "Верхние: вишня, мандарин. Средние: роза, жасмин. Базовые: мускус, ваниль."},
    {"brand": "Miss Dior", "name": "J'adore", "notes": "Верхние: груша, дыня. Средние: жасмин, роза, иланг-иланг. Базовые: мускус, кедр, ваниль."},
    {"brand": "Montale", "name": "Chocolate", "notes": "Верхние: шоколад. Средние: ваниль, кофе. Базовые: мускус, сандал."},
    {"brand": "Montale", "name": "Mukhallat", "notes": "Верхние: роза, уд. Средние: специи, амбра. Базовые: мускус, сандал."},
    {"brand": "Montale", "name": "Roses Musk", "notes": "Верхние: роза. Средние: мускус. Базовые: сандал, амбра."},
    {"brand": "Montale", "name": "Vanilla Absolute", "notes": "Верхние: ваниль. Средние: бобы тонка. Базовые: мускус, сандал."},
    {"brand": "Nina Ricci", "name": "Nina Rose", "notes": "Верхние: роза, мандарин. Средние: пион, жасмин. Базовые: мускус, кедр."},
    {"brand": "Victoria's Secret", "name": "Bombshell", "notes": "Верхние: грейпфрут, мандарин. Средние: пион, жасмин. Базовые: мускус, ваниль."},
    {"brand": "Victoria's Secret", "name": "So Sexy", "notes": "Верхние: мандарин, нероли. Средние: жасмин, роза. Базовые: мускус, ваниль."},
    {"brand": "Versace", "name": "Eros Pour Femme", "notes": "Верхние: лимон, гранат. Средние: пион, жасмин. Базовые: мускус, сандал, амбра."},
    {"brand": "Versace", "name": "Bright Crystal", "notes": "Верхние: гранат, юзу. Средние: пион, магнолия. Базовые: мускус, амбра, кедр."},
    {"brand": "Yara (Lattafa)", "name": "Yara", "notes": "Верхние: апельсин, мандарин. Средние: жасмин, гардения. Базовые: ваниль, мускус, сандал."},
    {"brand": "YSL", "name": "Black Opium", "notes": "Верхние: кофе, груша. Средние: жасмин, корица. Базовые: ваниль, пачули, кедр."},
    {"brand": "Pheromone", "name": "Cleopatra", "notes": "Восторженный, цветочный. (Точный состав уточняется)"},
    {"brand": "Killian", "name": "Princess", "notes": "Верхние: зелёный чай. Средние: жасмин, имбирь. Базовые: ваниль, мускус."},
    {"brand": "Killian", "name": "Good Girl Gonna Be Bad", "notes": "Верхние: кофе, миндаль. Средние: жасмин, роза. Базовые: ваниль, бобы тонка."},
    {"brand": "Trussardi", "name": "Donna", "notes": "Верхние: мандарин, нероли. Средние: жасмин, роза. Базовые: мускус, кедр."},
    {"brand": "Initio", "name": "Narcotic Delight", "notes": "Верхние: шафран. Средние: роза, уд. Базовые: амбра, мускус."},
    {"brand": "Initio", "name": "Musk Therapy", "notes": "Мускус, сандал, ваниль."},
    {"brand": "Lancome", "name": "La vie est bella", "notes": "Верхние: чёрная смородина, груша. Средние: ирис, жасмин. Базовые: ваниль, пачули, пралине."}
  ],
  "Унисекс": [
    {"brand": "Ajmal", "name": "Amber Wood", "notes": "Верхние: шафран, роза. Средние: амбра, уд. Базовые: мускус, сандал."},
    {"brand": "Amouage", "name": "Interlude Man", "notes": "Верхние: ладан, перец. Средние: роза, амбра. Базовые: кожа, мускус, пачули."},
    {"brand": "Amouage", "name": "Library Collection", "notes": "Верхние: ладан. Средние: роза, амбра. Базовые: сандал, мускус."},
    {"brand": "Giorgio Armani", "name": "Because It's You", "notes": "Верхние: мандарин, жасмин. Средние: роза, мускус. Базовые: сандал, ваниль."},
    {"brand": "Giorgio Armani", "name": "Stronger with you", "notes": "Верхние: мандарин, розовый перец. Средние: шалфей, корица. Базовые: ваниль, амбра, кашемир."},
    {"brand": "Baccarat", "name": "Rouge 540", "notes": "Верхние: шафран, жасмин. Средние: амбра, кедр. Базовые: мускус, ваниль."},
    {"brand": "Byredo", "name": "Bal D'Afrique", "notes": "Верхние: бергамот, лимон. Средние: жасмин, фиалка. Базовые: мускус, ветивер."},
    {"brand": "Ex Nihilo Blue", "name": "Fleur Narcotique", "notes": "Верхние: личи, бергамот. Средние: жасмин, пион. Базовые: мускус, кедр."},
    {"brand": "Ex Nihilo Blue", "name": "Talisman", "notes": "Верхние: перец. Средние: роза, амбра. Базовые: мускус, сандал."},
    {"brand": "Kajal", "name": "Kajal Dahal", "notes": "Верхние: шафран, роза. Средние: уд, амбра. Базовые: мускус, сандал."},
    {"brand": "L.V.", "name": "Bois Imperial", "notes": "Верхние: кардамон. Средние: кедр, амбра. Базовые: мускус."},
    {"brand": "L.V.", "name": "l'immensité", "notes": "Верхние: грейпфрут, имбирь. Средние: кедр, амбра. Базовые: мускус."},
    {"brand": "L.V.", "name": "Nuit De Feu", "notes": "Верхние: ладан, перец. Средние: роза, амбра. Базовые: уд, кожа."},
    {"brand": "L.V.", "name": "Pacific chill", "notes": "Верхние: мандарин, мята. Средние: жасмин, кедр. Базовые: мускус."},
    {"brand": "L.V.", "name": "Symphony", "notes": "Верхние: грейпфрут, бергамот. Средние: жасмин, амбра. Базовые: мускус."},
    {"brand": "L.V.", "name": "Imagination", "notes": "Верхние: мандарин, имбирь. Средние: жасмин, амбра. Базовые: мускус."},
    {"brand": "Madawi", "name": "40 Years Gold Edition", "notes": "Восторженный, амбровый. (Точный состав уточняется)"},
    {"brand": "Mancera", "name": "Cedrat Boise", "notes": "Верхние: лимон, кедр. Средние: кожа, мускус. Базовые: сандал, амбра."},
    {"brand": "Mancera", "name": "Roses Vanille", "notes": "Верхние: роза. Средние: ваниль. Базовые: мускус, сандал."},
    {"brand": "Molecules", "name": "1", "notes": "ISO E Super. Древесный, мускусный."},
    {"brand": "Molecules", "name": "01 + Black Tea", "notes": "ISO E Super, чёрный чай."},
    {"brand": "Molecules", "name": "2", "notes": "Амброксан. Древесный, амбровый."},
    {"brand": "Molecules", "name": "9", "notes": "Амброксан, мускус."},
    {"brand": "Molecules", "name": "02 Black", "notes": "Амброксан, чёрный перец."},
    {"brand": "Roja Dove", "name": "Oligarch", "notes": "Верхние: шафран. Средние: роза, уд. Базовые: амбра, мускус."},
    {"brand": "Shaikh", "name": "AI Sheyukh", "notes": "Восторженный, амбровый. (Точный состав уточняется)"},
    {"brand": "Sospero", "name": "Erba Pura", "notes": "Верхние: цитрусы. Средние: фрукты. Базовые: мускус, амбра."},
    {"brand": "Sospero", "name": "Accento", "notes": "Верхние: цитрусы. Средние: цветы. Базовые: мускус, амбра."},
    {"brand": "Tilia Parfums", "name": "TILIA", "notes": "Восторженный, цветочный. (Точный состав уточняется)"},
    {"brand": "Tom Ford", "name": "Ambre Leather", "notes": "Верхние: кардамон. Средние: кожа, амбра. Базовые: сандал, мускус."},
    {"brand": "Tom Ford", "name": "Cherry Smoke", "notes": "Верхние: вишня, дым. Средние: уд, роза. Базовые: амбра, мускус."},
    {"brand": "Tom Ford", "name": "Electric Cherry", "notes": "Верхние: вишня, перец. Средние: роза, уд. Базовые: амбра, мускус."},
    {"brand": "Tom Ford", "name": "Lost Cherry", "notes": "Верхние: вишня, миндаль. Средние: роза, жасмин. Базовые: бобы тонка, сандал."},
    {"brand": "Tom Ford", "name": "Tobacco Vanille", "notes": "Верхние: табак, специи. Средние: ваниль, какао. Базовые: бобы тонка, сандал."},
    {"brand": "Tom Ford", "name": "Oud Wood", "notes": "Верхние: уд, кардамон. Средние: сандал, палисандр. Базовые: мускус, амбра."},
    {"brand": "Tiziana Terenzi", "name": "Gumin", "notes": "Верхние: цитрусы. Средние: цветы. Базовые: мускус, амбра."},
    {"brand": "Tiziana Terenzi", "name": "Kirke", "notes": "Верхние: цитрусы. Средние: цветы. Базовые: мускус, амбра."},
    {"brand": "Zielinski Black", "name": "Pepper Amber", "notes": "Верхние: перец. Средние: амбра. Базовые: мускус, сандал."},
    {"brand": "Zielinski Black", "name": "Vanilla", "notes": "Верхние: ваниль. Средние: бобы тонка. Базовые: мускус, сандал."},
    {"brand": "Cedre Atlas", "name": "Absolue", "notes": "Верхние: кедр. Средние: амбра. Базовые: мускус."},
    {"brand": "Attar Collection", "name": "Musk Kashimir", "notes": "Верхние: мускус. Средние: кашемировое дерево. Базовые: сандал, амбра."},
    {"brand": "Entrigue Parfums", "name": "Entrigue Devil's", "notes": "Восторженный, амбровый. (Точный состав уточняется)"},
    {"brand": "Chabrawichi", "name": "Nefertity", "notes": "Восторженный, цветочный. (Точный состав уточняется)"},
    {"brand": "Anna Sui", "name": "Lucky Wish / Soblazn", "notes": "Восторженный, цветочный. (Точный состав уточняется)"},
    {"brand": "Mesk", "name": "", "notes": "Восторженный, мускусный. (Точный состав уточняется)"},
    {"brand": "Quartana", "name": "ANDROMEDA", "notes": "Восторженный, цветочный. (Точный состав уточняется)"},
    {"brand": "Marc Antoine Barrois", "name": "Ganymede", "notes": "Верхние: цитрусы. Средние: цветы. Базовые: мускус, амбра."},
    {"brand": "Nasomatto", "name": "Black Afgano", "notes": "Верхние: уд, специи. Средние: кожа, смолы. Базовые: мускус, амбра."},
    {"brand": "Pheromone", "name": "Red sea", "notes": "Восторженный, амбровый. (Точный состав уточняется)"},
    {"brand": "Pheromone", "name": "Hormone", "notes": "Восторженный, мускусный. (Точный состав уточняется)"},
    {"brand": "ZAM ZAM", "name": "", "notes": "Восторженный, амбровый. (Точный состав уточняется)"},
    {"brand": "Franck Boclet", "name": "Cocaine", "notes": "Верхние: перец. Средние: роза, уд. Базовые: мускус, амбра."},
    {"brand": "GABA", "name": "Hormone", "notes": "Восторженный, мускусный. (Точный состав уточняется)"},
    {"brand": "Thomas Kosmala", "name": "No 4 Après l'Amour", "notes": "Верхние: цитрусы. Средние: цветы. Базовые: мускус, амбра."},
    {"brand": "Genyum", "name": "Painter", "notes": "Восторженный, амбровый. (Точный состав уточняется)"}
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
const originalParentOfBtn = expandWrapper ? expandWrapper.parentNode : null;

const toTop = document.getElementById("toTop");
const scrollIcon = document.getElementById("scrollIcon");

let activeGender = "Все";
let activeBrand = "Все";
let currentLimit = 12;
let isExpanded = false;

// ==========================================
// БЛОКИРОВКА СКРОЛЛА
// ==========================================
function lockScroll() {
  document.body.classList.add("no-scroll");
}

function unlockScroll() {
  document.body.classList.remove("no-scroll");
}

function updateBrandOptions() {
  if (!brandFilter) return;
  const currentSelected = activeBrand;
  const availableProducts = allProducts.filter(p => activeGender === "Все" || p.category === activeGender);
  const brands = [...new Set(availableProducts.map(p => p.brand))].sort((a, b) => a.localeCompare(b, 'ru'));
  
  const optionsList = brandFilter.querySelector(".custom-select-options");
  const label = brandFilter.querySelector(".custom-select-label");

  optionsList.innerHTML = '<li class="custom-select-option selected" data-value="Все">Все бренды</li>';
  brands.forEach(brand => {
    const li = document.createElement("li");
    li.className = "custom-select-option";
    li.setAttribute("data-value", brand);
    li.textContent = brand;
    optionsList.appendChild(li);
  });

  if (brands.includes(currentSelected)) {
    brandFilter.setAttribute("data-value", currentSelected);
    label.textContent = currentSelected;
    optionsList.querySelectorAll(".custom-select-option").forEach(o => {
      o.classList.toggle("selected", o.getAttribute("data-value") === currentSelected);
    });
  } else {
    activeBrand = "Все";
    brandFilter.setAttribute("data-value", "Все");
    label.textContent = "Все бренды";
    optionsList.querySelectorAll(".custom-select-option").forEach(o => {
      o.classList.toggle("selected", o.getAttribute("data-value") === "Все");
    });
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
    if(expandWrapper) {
      expandWrapper.style.display = "none";
      expandWrapper.classList.remove("is-sticky");
    }
    return;
  }

  const visibleProducts = isExpanded ? products : products.slice(0, currentLimit);

  grid.innerHTML = visibleProducts.map((item) => {
    const brand = item.brand || "Коллекция EGI.RAI";
    const categoryLabel = item.category.toUpperCase();
    const notes = item.notes || "Информация о нотах временно отсутствует.";

    return `<article class="product-card" data-brand="${escapeHtml(brand)}" data-name="${escapeHtml(item.name || "—")}">
      <div class="card-inner">
        
        <div class="card-front">
          <button class="btn-info" title="Узнать ноты">i</button>
          <div class="product-visual">
            <span class="product-category">${escapeHtml(categoryLabel)}</span>
            <div class="mini-perfume" aria-hidden="true">
              <div class="mini-cap"></div>
              <div class="mini-neck"></div>
              <div class="mini-body">
                <div class="mini-liquid"></div>
                <div class="mini-glass-back"></div>
                <div class="mini-label"><span>E</span><i>EGI.RAI</i></div>
                <div class="mini-glass-front"><div class="mini-shine"></div></div>
              </div>
            </div>
          </div>
          <div class="product-info">
            <div class="product-brand">${escapeHtml(brand)}</div>
            <div class="product-name">${escapeHtml(item.name)}</div>
            <div class="product-type">Масляный аромат</div>
          </div>
        </div>

        <div class="card-back">
          <h4>${escapeHtml(item.name)}</h4>
          <div class="card-notes">
            <p>${escapeHtml(notes)}</p>
          </div>
        </div>

      </div>
    </article>`;
  }).join("");

  if (expandWrapper && expandBtn) {
    if (products.length > currentLimit || isExpanded) {
      expandWrapper.style.display = "block";
      expandBtn.innerHTML = isExpanded ? "Свернуть каталог" : "Развернуть каталог";
      
      if (isExpanded) {
        if (document.body !== expandWrapper.parentNode) {
          document.body.appendChild(expandWrapper); 
        }
        expandWrapper.classList.add("is-sticky");
      } else {
        if (originalParentOfBtn && expandWrapper.parentNode !== originalParentOfBtn) {
          originalParentOfBtn.appendChild(expandWrapper); 
        }
        expandWrapper.classList.remove("is-sticky");
      }
    } else {
      expandWrapper.style.display = "none";
      if (originalParentOfBtn && expandWrapper.parentNode !== originalParentOfBtn) {
        originalParentOfBtn.appendChild(expandWrapper);
      }
      expandWrapper.classList.remove("is-sticky");
    }
  }
}

if (searchInput) {
  searchInput.addEventListener("input", () => { currentLimit = 12; renderProducts(); });
}
// --- КАСТОМНЫЕ СЕЛЕКТЫ ---
function setupCustomSelect(el, onChange) {
  if (!el) return;
  const trigger = el.querySelector(".custom-select-trigger");
  const label = el.querySelector(".custom-select-label");
  const options = el.querySelector(".custom-select-options");

  trigger.addEventListener("click", (e) => {
    e.stopPropagation();
    // Закрыть другие открытые селекты
    document.querySelectorAll(".custom-select.open").forEach(sel => {
      if (sel !== el) sel.classList.remove("open");
    });
    el.classList.toggle("open");
  });

  options.addEventListener("click", (e) => {
    const opt = e.target.closest(".custom-select-option");
    if (!opt) return;
    const value = opt.getAttribute("data-value");
    const text = opt.textContent;

    el.setAttribute("data-value", value);
    label.textContent = text;

    options.querySelectorAll(".custom-select-option").forEach(o => o.classList.remove("selected"));
    opt.classList.add("selected");

    el.classList.remove("open");
    onChange(value);
  });
}

document.addEventListener("click", () => {
  document.querySelectorAll(".custom-select.open").forEach(el => el.classList.remove("open"));
});

setupCustomSelect(genderFilter, (value) => {
  activeGender = value;
  currentLimit = 12;
  updateBrandOptions();
  renderProducts();
});

setupCustomSelect(brandFilter, (value) => {
  activeBrand = value;
  currentLimit = 12;
  renderProducts();
});



if (expandBtn) {
  expandBtn.addEventListener("click", () => { 
    isExpanded = !isExpanded; 
    renderProducts(); 
    
    if (!isExpanded) {
      if (expandWrapper) {
        expandWrapper.classList.remove("is-sticky");
        if (originalParentOfBtn && expandWrapper.parentNode !== originalParentOfBtn) {
          originalParentOfBtn.appendChild(expandWrapper);
        }
      }
      const catalogSection = document.getElementById("catalog");
      if (catalogSection) {
        catalogSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });
}

// --- МОДАЛЬНЫЕ ОКНА ---
const modal = document.getElementById("orderModal");
const closeModalBtn = document.getElementById("closeModal");
const modalProductName = document.getElementById("modalProductName");
const modalProductBrand = document.getElementById("modalProductBrand");
const modalVolume = document.getElementById("modalVolume");

// кастомный селект объёма в модалке (после объявления modalVolume)
setupCustomSelect(modalVolume, () => {
  // значение читается напрямую через data-value при добавлении в корзину
});

let currentProduct = { brand: "", name: "" };

if (grid) {
  grid.addEventListener("click", (e) => {
    const card = e.target.closest(".product-card");
    if (!card) return;

    if (e.target.closest(".btn-info")) {
      e.stopPropagation(); 
      card.classList.add("flipped");
      return;
    }

    if (card.classList.contains("flipped")) {
      card.classList.remove("flipped");
      return; 
    }

    currentProduct.brand = card.getAttribute("data-brand");
    currentProduct.name = card.getAttribute("data-name");
    
    modalProductName.textContent = currentProduct.name;
    modalProductBrand.textContent = currentProduct.brand;

    // сброс объёма на 5 мл
    if (modalVolume) {
      modalVolume.setAttribute("data-value", "5");
      const volLabel = modalVolume.querySelector(".custom-select-label");
      if (volLabel) volLabel.textContent = "5 мл — 500 ₽";
      modalVolume.querySelectorAll(".custom-select-option").forEach(o => {
        o.classList.toggle("selected", o.getAttribute("data-value") === "5");
      });
      modalVolume.classList.remove("open");
    }
    
    modal.classList.add("active");
    lockScroll();
  });
}

function closeModal() {
  modal.classList.remove("active");
  unlockScroll();
}
if (closeModalBtn) closeModalBtn.addEventListener("click", closeModal);
if (modal) {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
}

// ==========================================
// КОРЗИНА
// ==========================================

let cart = JSON.parse(localStorage.getItem("egi_cart")) || [];

const cartBtn = document.getElementById("cartBtn");
const cartModal = document.getElementById("cartModal");
const closeCartBtn = document.getElementById("closeCart");
const cartCount = document.getElementById("cartCount");
const cartItemsList = document.getElementById("cartItemsList");
const cartEmptyMsg = document.getElementById("cartEmptyMsg");
const cartFormWrapper = document.getElementById("cartFormWrapper");
const addToCartBtn = document.getElementById("addToCartBtn");
const submitCartOrderBtn = document.getElementById("submitCartOrder");
const cartContactInput = document.getElementById("cartContact");

if (cartContactInput) {
  function formatPhone(value) {
    let digits = value.replace(/\D/g, "");
    if (digits.startsWith("8")) digits = "7" + digits.slice(1);
    if (!digits.startsWith("7")) digits = "7" + digits;
    digits = digits.slice(0, 11);

    let result = "+7";
    if (digits.length > 1) result += " (" + digits.slice(1, 4);
    if (digits.length >= 5) result += ") " + digits.slice(4, 7);
    if (digits.length >= 8) result += "-" + digits.slice(7, 9);
    if (digits.length >= 10) result += "-" + digits.slice(9, 11);
    return result;
  }

  cartContactInput.addEventListener("focus", () => {
    if (!cartContactInput.value) cartContactInput.value = "+7 (";
  });
  cartContactInput.addEventListener("input", () => {
    cartContactInput.value = formatPhone(cartContactInput.value);
  });
  cartContactInput.addEventListener("blur", () => {
    if (cartContactInput.value === "+7 (" || cartContactInput.value === "+7") {
      cartContactInput.value = "";
    }
  });
}

function updateCartUI() {
  if (!cartCount) return;
  cartCount.textContent = cart.length;

  const cartTotal = document.getElementById("cartTotal");
  const cartTotalSum = document.getElementById("cartTotalSum");

  if (cart.length === 0) {
    cartEmptyMsg.style.display = "block";
    cartFormWrapper.style.display = "none";
    cartItemsList.innerHTML = "";
    if (cartTotal) cartTotal.style.display = "none";
    return;
  }

  cartEmptyMsg.style.display = "none";
  cartFormWrapper.style.display = "block";
  
  cartItemsList.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <div class="cart-item-info">
        <h5>${escapeHtml(item.name)}</h5>
        <span>${escapeHtml(item.brand)} | ${item.volume} мл — ${(parseInt(item.volume) * 100).toLocaleString("ru-RU")} ₽</span>
      </div>
      <button class="cart-item-remove" data-index="${index}" title="Удалить">✕</button>
    </div>
  `).join("");

  document.querySelectorAll(".cart-item-remove").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const idx = parseInt(e.target.getAttribute("data-index"));
      cart.splice(idx, 1);
      localStorage.setItem("egi_cart", JSON.stringify(cart));
      updateCartUI();
    });
  });

  const total = cart.reduce((sum, item) => sum + parseInt(item.volume) * 100, 0);
  if (cartTotal && cartTotalSum) {
    cartTotalSum.textContent = total.toLocaleString("ru-RU") + " ₽";
    cartTotal.style.display = "flex";
  }
}

function flyToCart(startRect) {
  const flyingEl = document.createElement("div");
  flyingEl.className = "flying-perfume";
  const cartRect = cartBtn.getBoundingClientRect();
  flyingEl.style.left = (startRect.left + startRect.width / 2 - 25) + "px";
  flyingEl.style.top = (startRect.top + startRect.height / 2 - 32) + "px";
  flyingEl.style.opacity = "1";
  document.body.appendChild(flyingEl);
  flyingEl.offsetWidth;

  flyingEl.style.left = (cartRect.left + cartRect.width / 2 - 25) + "px";
  flyingEl.style.top = (cartRect.top + cartRect.height / 2 - 32) + "px";
  flyingEl.style.transform = "scale(0.2) rotate(360deg)";
  flyingEl.style.opacity = "0";

  setTimeout(() => {
    if (flyingEl.parentNode) flyingEl.parentNode.removeChild(flyingEl);
    cartBtn.classList.add("bump");
    setTimeout(() => cartBtn.classList.remove("bump"), 400);
  }, 1000);
}

if (addToCartBtn) {
  addToCartBtn.addEventListener("click", () => {
    const vol = modalVolume.getAttribute("data-value") || "5";
    const cardEl = document.querySelector(`.product-card[data-name="${CSS.escape(currentProduct.name)}"]`);
    if (cardEl) {
      const rect = cardEl.getBoundingClientRect();
      flyToCart(rect);
    }

    cart.push({
      brand: currentProduct.brand,
      name: currentProduct.name,
      volume: vol
    });
    localStorage.setItem("egi_cart", JSON.stringify(cart));
    updateCartUI();
    closeModal();
  });
}

if (cartBtn) {
  cartBtn.addEventListener("click", (e) => {
    e.preventDefault();
    updateCartUI();
    cartModal.classList.add("active");
    lockScroll();
  });
}
if (closeCartBtn) {
  closeCartBtn.addEventListener("click", () => {
    cartModal.classList.remove("active");
    unlockScroll();
  });
}
if (cartModal) {
  cartModal.addEventListener("click", (e) => {
    if (e.target === cartModal) {
      cartModal.classList.remove("active");
      unlockScroll();
    }
  });
}

if (submitCartOrderBtn) {
  submitCartOrderBtn.addEventListener("click", () => {
    const name = document.getElementById("cartName").value.trim();
    const contact = document.getElementById("cartContact").value.trim();
    const comment = document.getElementById("cartComment").value.trim();

    if (name.length < 2) {
      alert("Пожалуйста, введите ваше имя.");
      return;
    }

    const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
    if (!phoneRegex.test(contact)) {
      alert("Пожалуйста, введите номер полностью: +7 (___) ___-__-__");
      return;
    }

    let itemsText = "";
    let totalPrice = 0;
    cart.forEach((item, i) => {
      const price = parseInt(item.volume) * 100;
      totalPrice += price;
      itemsText += `${i + 1}. ${item.brand} — ${item.name} (${item.volume} мл) — ${price.toLocaleString("ru-RU")} ₽\n`;
    });

    const originalText = submitCartOrderBtn.innerHTML;
    submitCartOrderBtn.innerHTML = "Отправка...";
    submitCartOrderBtn.disabled = true;

    const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrpqpaeq";

    const iframe = document.createElement('iframe');
    iframe.name = 'hidden_iframe_cart';
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    const form = document.createElement('form');
    form.action = FORMSPREE_ENDPOINT;
    form.method = 'POST';
    form.target = 'hidden_iframe_cart'; 

    const fields = {
      name: name,
      email: "linashebik230@gmail.com", 
      contact: contact,
      comment: comment,
      order_details: itemsText,
      total: `Итого: ${totalPrice.toLocaleString("ru-RU")} ₽`,
      _subject: `Новый заказ (Корзина): ${name} (${contact})`
    };

    for (const key in fields) {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = fields[key];
      form.appendChild(input);
    }

    document.body.appendChild(form);
    form.submit(); 

    setTimeout(() => {
      alert('Заказ из корзины отправлен! Мы скоро свяжемся с вами.');
      cart = [];
      localStorage.setItem("egi_cart", JSON.stringify(cart));
      updateCartUI();
      cartModal.classList.remove("active");
      unlockScroll();
      
      document.body.removeChild(form);
      document.body.removeChild(iframe);
      submitCartOrderBtn.innerHTML = originalText;
      submitCartOrderBtn.disabled = false;
    }, 1000);
  });
}

// --- Кнопка скролла Вверх / Вниз ---
if (toTop && scrollIcon) {
  const updateScrollButton = () => {
    const scrollY = window.scrollY;
    const scrollable = document.body.scrollHeight - window.innerHeight;
    const half = scrollable / 2;
    const isSecondHalf = scrollY > half;

    if (scrollY > 50) {
      toTop.classList.add("visible");
    } else {
      toTop.classList.remove("visible");
    }

    if (isSecondHalf) {
      scrollIcon.innerHTML = "&uarr;";
      toTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      scrollIcon.innerHTML = "&darr;";
      toTop.onclick = () => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  };
  window.addEventListener("scroll", updateScrollButton);
  window.addEventListener("resize", updateScrollButton);
  updateScrollButton();
}

// --- Меню ---
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => nav.classList.toggle("open"));
  document.querySelectorAll(".nav a").forEach(link =>
    link.addEventListener("click", () => nav.classList.remove("open"))
  );
}

// --- АНИМАЦИЯ ПОЯВЛЕНИЯ БЛОКА "О НАС" ---
const aboutSection = document.querySelector(".about.section");
if (aboutSection) {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target); 
      }
    });
  }, { threshold: 0.2 });
  observer.observe(aboutSection);
}

// --- ГЕНЕРАТОР ФОНОВЫХ ЗВЕЗД ---
function createStars() {
  let starsContainer = document.querySelector(".bg-stars");
  if (!starsContainer) {
    starsContainer = document.createElement("div");
    starsContainer.className = "bg-stars";
    document.body.prepend(starsContainer);
  }
  const starCount = 70;
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.classList.add("star");
    if (Math.random() > 0.7) star.classList.add("gold");
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.animationDuration = `${Math.random() * 3 + 2}s`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    starsContainer.appendChild(star);
  }
}

// --- ПЕРЕКЛЮЧАТЕЛЬ ТЕМЫ ---
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  const curtain = document.createElement("div");
  curtain.className = "theme-curtain";
  document.body.appendChild(curtain);

  let switching = false;
  themeToggle.addEventListener("click", () => {
    if (switching) return;
    switching = true;

    const goingLight = !document.documentElement.classList.contains("light-theme");

    // Сброс
    curtain.classList.remove("to-light", "to-dark", "start-bottom", "start-top", "curtain-dark");

    // Цвет фиксируем под целевую тему
    curtain.classList.toggle("curtain-dark", goingLight);

    // Стартовая позиция (без transition)
    curtain.classList.add(goingLight ? "start-bottom" : "start-top");

    // Форсируем reflow, чтобы стартовая позиция применилась
    void curtain.offsetWidth;

    // На следующем кадре убираем стартовый класс и включаем движение
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        curtain.classList.remove("start-bottom", "start-top");
        curtain.classList.add(goingLight ? "to-light" : "to-dark");
      });
    });

    // Смена темы в середине пути
    setTimeout(() => {
      document.documentElement.classList.toggle("light-theme", goingLight);
      localStorage.setItem("theme", goingLight ? "light" : "dark");
    }, 420);

    // Сброс после завершения
    setTimeout(() => {
      curtain.classList.remove("to-light", "to-dark", "curtain-dark");
      switching = false;
    }, 900);
  });
}

// ==========================================
// ПРОМО-АКЦИЯ 3+1
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const promoBanner = document.getElementById("promoBanner");
  if (promoBanner) {
    promoBanner.addEventListener("click", (e) => {
      e.stopPropagation();
      promoBanner.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (!promoBanner.contains(e.target)) {
        promoBanner.classList.remove("active");
      }
    });
  }
});

// Клик по большому флакону — дрожь
const heroBottle = document.querySelector(".hero .bottle");
if (heroBottle) {
  heroBottle.addEventListener("click", () => {
    heroBottle.classList.remove("shake");
    void heroBottle.offsetWidth;
    heroBottle.classList.add("shake");
    setTimeout(() => heroBottle.classList.remove("shake"), 500);
  });
}

// Запуск
createStars();
updateBrandOptions();
renderProducts();
updateCartUI();
