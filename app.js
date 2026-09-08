const personas = [
  {
    id: "antiphisher", number: "01", icon: "◉", accessory: "🎙",
    persona: "Антифишер", tagline: "Ссылка начинает нервничать, когда ты рядом.",
    superpower: "Замечаешь поддельные домены, тревожные письма и подозрительные вложения.",
    kryptonite: "Дипфейк руководителя",
    scenario: "Тебе звонит руководитель по видео и просит срочно отправить закрытый документ: «Я на встрече, потом всё объясню». Голос, лицо и манера общения выглядят настоящими.",
    signals: ["необычная просьба", "срочность и секретность", "обход обычного процесса"],
    rule: "Голос и лицо больше не подтверждают личность. Необычную просьбу проверяй через другой канал.",
    tips: ["Заверши звонок и свяжись по известному контакту.", "Не обходи процесс согласования даже по просьбе руководителя.", "Задай вопрос, ответ на который знает реальный собеседник."],
  },
  {
    id: "pause", number: "02", icon: "☎", accessory: "🎧",
    persona: "Повелитель паузы", tagline: "Срочность подождёт. Проверка — нет.",
    superpower: "Не даёшь срочности принимать решения за тебя.",
    kryptonite: "OAuth-ловушка",
    scenario: "Сервис предлагает быстрый вход рабочим аккаунтом и просит читать почту, файлы и контакты. Пароль он не крадёт — права выдаёшь ты сам.",
    signals: ["слишком много прав", "неизвестное приложение", "обещание быстрого доступа"],
    rule: "Кнопка «Войти через…» может отдать больше данных, чем кажется. Проверяй каждое разрешение.",
    tips: ["Не подключай рабочий аккаунт к неизвестным сервисам.", "Выдавай только необходимые права.", "Удаляй ненужные интеграции в настройках безопасности."],
  },
  {
    id: "qr", number: "03", icon: "▦", accessory: "▦",
    persona: "QR-инспектор", tagline: "Видишь адрес целиком, а не красивый квадрат.",
    superpower: "Проверяешь, куда ведёт ссылка, прежде чем сделать шаг.",
    kryptonite: "MFA-бомбардировка",
    scenario: "На телефон подряд приходят запросы входа. Затем звонит «поддержка» и просит подтвердить один из них, чтобы остановить атаку.",
    signals: ["серия уведомлений", "ты не входишь", "звонок с инструкцией"],
    rule: "Неожиданный запрос MFA означает не «подтверди», а «кто-то уже знает пароль».",
    tips: ["Отклоняй неизвестный запрос.", "Сразу смени пароль.", "Сообщи ИБ о серии уведомлений."],
  },
  {
    id: "oauth", number: "04", icon: "∞", accessory: "🔑",
    persona: "OAuth-страж", tagline: "Не раздаёшь права просто за красивую кнопку.",
    superpower: "Читаешь разрешения приложения до подтверждения.",
    kryptonite: "Лже-техподдержка",
    scenario: "«Специалист» сообщает о вирусе или срочном обновлении и просит установить программу удалённого доступа. Номер заявки он называет неуверенно.",
    signals: ["контакт без заявки", "установка программы", "удалённое управление"],
    rule: "Поддержка начинается с подтверждённой заявки, а не с внезапного доступа к экрану.",
    tips: ["Проверь заявку в корпоративном портале.", "Используй только известный канал поддержки.", "Не передавай управление незнакомому человеку."],
  },
  {
    id: "mfa", number: "05", icon: "⚿", accessory: "🔔",
    persona: "MFA-часовой", tagline: "Каждое «Разрешить» должно заслужить доверие.",
    superpower: "Сверяешь запрос входа с действием, которое совершаешь прямо сейчас.",
    kryptonite: "Промпт-инъекция",
    scenario: "В документе спрятана инструкция для ИИ: игнорировать правила, раскрыть данные или выполнить чужую команду. Для человека файл выглядит обычным.",
    signals: ["внешний документ", "неожиданный результат", "запрос лишних прав"],
    rule: "Контент для ИИ может одновременно быть инструкцией для атаки. Проверяй результат перед действием.",
    tips: ["Не загружай секреты в неразрешённые сервисы.", "Не давай ИИ лишние инструменты и права.", "Проверяй источник и итог вручную."],
  },
  {
    id: "support", number: "06", icon: "⚒", accessory: "🛠",
    persona: "Инспектор техподдержки", tagline: "Проверяешь заявку, прежде чем чинить проблему.",
    superpower: "Отличаешь помощь от попытки получить управление устройством.",
    kryptonite: "Точечный фишинг",
    scenario: "Приходит письмо от знакомого коллеги: он ссылается на реальный проект и присылает «обновлённый документ». Адрес отличается одной буквой.",
    signals: ["похожий домен", "ожидаемый контекст", "вложение или вход"],
    rule: "Чем точнее письмо знает контекст, тем внимательнее проверяй отправителя и адрес.",
    tips: ["Открой сервис вручную вместо ссылки.", "Проверь адрес отправителя целиком.", "Уточни просьбу у коллеги в другом канале."],
  },
  {
    id: "ai", number: "07", icon: "⌘", accessory: "✦",
    persona: "ИИ-аудитор", tagline: "Не веришь ответу только потому, что он уверенный.",
    superpower: "Проверяешь источники и ограничиваешь доступ ИИ к данным.",
    kryptonite: "Вишинг",
    scenario: "«Служба безопасности» звонит из-за подозрительной операции. Собеседник знает твоё имя и просит назвать код или включить демонстрацию экрана.",
    signals: ["давление временем", "запрос кода", "страх потерять деньги"],
    rule: "Сотрудники банка и компании не просят коды подтверждения и удалённый доступ к устройству.",
    tips: ["Заверши разговор.", "Перезвони по номеру из официального источника.", "Никому не показывай экран с кодами и уведомлениями."],
  },
  {
    id: "spearphishing", number: "08", icon: "✉", accessory: "📨",
    persona: "Спирфишинг-детектив", tagline: "Красивой истории недостаточно — тебе нужны факты.",
    superpower: "Задаёшь уточняющий вопрос, когда сообщение слишком хорошо складывается.",
    kryptonite: "QR-скам",
    scenario: "QR-код на плакате предлагает оплатить парковку или получить подарок. Наклейка выглядит официально, но ведёт на форму входа с похожим адресом.",
    signals: ["адрес скрыт", "неожиданная оплата", "форма просит рабочий вход"],
    rule: "QR-код — это обычная ссылка в маске. Всегда смотри адрес до перехода.",
    tips: ["Прочитай адрес в предпросмотре камеры.", "Открой официальный сервис вручную.", "Не вводи рабочие данные на странице из случайного QR."],
  },
];

const experience = document.querySelector("#experience");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let selected = null;
let busy = false;
let scrollAnimationFrame = null;

function scrollPageToTop(duration = 650) {
  if (scrollAnimationFrame) window.cancelAnimationFrame(scrollAnimationFrame);
  const startY = window.scrollY;
  if (reducedMotion || startY < 2) {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    return;
  }

  const startedAt = window.performance.now();
  const animate = (now) => {
    const progress = Math.min((now - startedAt) / duration, 1);
    const eased = progress < 0.5
      ? 4 * progress * progress * progress
      : 1 - Math.pow(-2 * progress + 2, 3) / 2;
    window.scrollTo(0, Math.round(startY * (1 - eased)));
    if (progress < 1) scrollAnimationFrame = window.requestAnimationFrame(animate);
    else scrollAnimationFrame = null;
  };
  scrollAnimationFrame = window.requestAnimationFrame(animate);
}

function randomIndex(except) {
  let next = Math.floor(Math.random() * personas.length);
  while (next === except) next = Math.floor(Math.random() * personas.length);
  return next;
}

function introMarkup() {
  return `<section class="intro" aria-labelledby="main-title">
    <p class="eyebrow">случайный профиль защиты</p>
    <h1 id="main-title"><span>Кибер-</span>стая</h1>
    <p class="lede">Узнай, кто ты в Киберстае: получи суперсилу, встреться с криптонитом и забери правило защиты.</p>
    <button class="grave-stage" data-action="reveal" aria-label="Получить случайного ИБ-персонажа">
      <span class="orbit-dot dot-a"></span><span class="orbit-dot dot-b"></span>
      <span class="confetti confetti-a">✦</span><span class="confetti confetti-b">●</span><span class="confetti confetti-c">+</span>
      <span class="tombstone"><span class="shield-check">?</span><span class="tomb-rip">ТВОЙ ПРОФИЛЬ</span><span class="tomb-copy">суперсила<br>и криптонит</span><span class="tomb-year">ИБ · 2026</span></span>
      <span class="scan-platform"><i></i><i></i><i></i></span><span class="tap-hint">запустить сканер <b>↗</b></span>
    </button>
    <p class="microcopy">Выпадает случайно</p>
  </section>`;
}

function firstRevealMarkup(card) {
  return `<section class="first-reveal variant-${card.id}" aria-live="assertive">
    <p class="reveal-system">ПРОФИЛЬ НАЙДЕН</p>
    <p class="reveal-word">ЭТО ТЫ</p>
    <div class="reveal-character" role="img" aria-label="Робот-доберман — ${card.persona}"></div>
    <div class="reveal-name"><span>ТВОЙ ИБ-ПЕРСОНАЖ</span><strong>${card.persona}</strong></div>
  </section>`;
}

function cardMarkup(card) {
  const signals = card.signals.map((item) => `<span>${item}</span>`).join("");
  const tips = card.tips.map((tip, index) => `<li><span>${index + 1}</span><p>${tip}</p></li>`).join("");
  return `<section class="result-wrap" aria-live="polite">
    <div class="result-heading"><p class="eyebrow">твой ИБ-персонаж</p><p class="card-count">${card.number} / 08</p></div>
    <article class="scam-card variant-${card.id}" id="result" tabindex="-1">
      <div class="shuffle-curtain"><span>ИЩЕМ НОВОГО ГЕРОЯ</span></div>
      <div class="character-stage">
        <span class="character-number">№ ${card.number}</span>
        <div class="character-image" role="img" aria-label="Робот-доберман — ${card.persona}"></div>
      </div>
      <div class="persona-copy"><span class="danger-tag">выпало тебе</span><h1>Ты —<br>${card.persona}</h1>${card.tagline ? `<p class="epitaph">«${card.tagline}»</p>` : ""}</div>
      <div class="traits">
        <div class="trait power"><span class="trait-label">Твоя суперсила</span><p><strong>${card.superpower}</strong></p></div>
        <div class="trait weakness"><span class="trait-label">Твой криптонит</span><p><strong>${card.kryptonite}</strong></p></div>
      </div>
      <div class="encounter"><p class="section-kicker">Криптонит в деле</p><p class="scenario">${card.scenario}</p><div class="signal-list">${signals}</div></div>
      <blockquote class="golden-rule"><span>Запомни одно</span><p>${card.rule}</p></blockquote>
      <div class="survival"><p class="survival-title"><span>✦</span> Как пережить встречу</p><ol>${tips}</ol></div>
    </article>
    <button class="secondary-button" data-action="reroll"><span class="reroll-icon">↻</span><span class="action-copy">Получить другого персонажа</span></button>
    <p class="report-note">Заметил подозрительное? Не гадай — сообщи команде ИБ.</p>
  </section>`;
}

function bindActions() {
  experience.querySelectorAll('[data-action="reveal"]').forEach((button) => button.addEventListener("click", reveal));
  experience.querySelector('[data-action="reroll"]')?.addEventListener("click", reroll);
}

function reveal() {
  if (busy) return;
  busy = true;
  experience.querySelector(".grave-stage")?.classList.add("is-revealing");
  experience.querySelectorAll("button").forEach((button) => { button.disabled = true; });
  selected = randomIndex(selected);
  window.setTimeout(() => {
    experience.innerHTML = firstRevealMarkup(personas[selected]);
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    window.setTimeout(() => showCard(true), reducedMotion ? 0 : 3200);
  }, reducedMotion ? 0 : 650);
}

function reroll() {
  if (busy) return;
  busy = true;
  experience.querySelector(".result-wrap")?.classList.add("is-shuffling");
  const button = experience.querySelector('[data-action="reroll"]');
  if (button) button.disabled = true;
  selected = randomIndex(selected);
  window.setTimeout(() => showCard(false, true), reducedMotion ? 0 : 720);
}

function showCard(firstArrival = false, smoothReturn = false) {
  experience.innerHTML = cardMarkup(personas[selected]);
  if (smoothReturn) scrollPageToTop();
  else window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  if (firstArrival) experience.querySelector(".result-wrap")?.classList.add("first-arrival");
  bindActions();
  busy = false;
  window.setTimeout(() => {
    document.querySelector("#result")?.focus({ preventScroll: true });
  }, 40);
}

experience.innerHTML = introMarkup();
bindActions();
