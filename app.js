const scams = [
  {
    id: "phishing", number: "01", icon: "✉", name: "Фишинг",
    epitaph: "Почил ваш критический взгляд",
    scenario: "Письмо просит срочно войти, подтвердить платёж или открыть «важный» файл. Адрес почти настоящий — и именно почти здесь главное.",
    power: "Маскируется под знакомые сервисы и давит срочностью.",
    weakness: "Не выдерживает проверки адреса и отдельного входа в сервис.",
    tips: ["Не переходите по ссылке из тревожного письма — откройте сервис сами.", "Проверяйте домен отправителя целиком, особенно замены букв и лишние слова.", "Сообщайте о подозрительном письме по внутреннему каналу ИБ."],
  },
  {
    id: "vishing", number: "02", icon: "☎", name: "Вишинг",
    epitaph: "Голос был уверенным. Зря.",
    scenario: "«Коллега», «банк» или «служба безопасности» звонит и ведёт по сценарию: торопит, пугает и просит код, перевод или действие на устройстве.",
    power: "Заставляет действовать до того, как включится сомнение.",
    weakness: "Рассыпается после паузы и обратного звонка по известному номеру.",
    tips: ["Никому не называйте коды, пароли и данные подтверждения.", "Завершите разговор и перезвоните по номеру из официального источника.", "Не устанавливайте ПО и не включайте демонстрацию экрана по просьбе звонящего."],
  },
  {
    id: "deepfake", number: "03", icon: "◉", name: "Дипфейк босса",
    epitaph: "Лицо знакомое. Просьба — нет.",
    scenario: "Видео или голос руководителя просит срочно оплатить счёт, раскрыть данные или обойти процесс — обычно под предлогом секретности.",
    power: "Копирует голос, лицо и привычную манеру общения.",
    weakness: "Не проходит независимую проверку личности и второе согласование.",
    tips: ["Подтверждайте необычную просьбу в другом канале связи.", "Соблюдайте процесс согласования, даже если просит руководитель.", "Задайте вопрос, ответ на который знаете только вы и реальный собеседник."],
  },
  {
    id: "qr-scam", number: "04", icon: "▦", name: "QR-скам",
    epitaph: "Отсканировал что попало",
    scenario: "QR-код на плакате, парковке или в письме ведёт на поддельную оплату или форму входа. Настоящая наклейка могла быть заменена.",
    power: "Прячет адрес до момента сканирования.",
    weakness: "Выдаёт себя на экране предпросмотра и по странному домену.",
    tips: ["До перехода прочитайте адрес, который показывает камера.", "Для оплаты откройте официальное приложение или сайт вручную.", "Не вводите рабочие данные на странице из случайного QR-кода."],
  },
  {
    id: "mfa-fatigue", number: "05", icon: "⚿", name: "MFA-fatigue",
    epitaph: "Нажал «Разрешить», лишь бы отстали",
    scenario: "На телефон сыплются запросы подтверждения входа. Один случайный тап — и злоумышленник получает доступ к аккаунту.",
    power: "Берёт измором и превращает защиту в раздражитель.",
    weakness: "Бессилен против внимательного отказа и быстрой смены пароля.",
    tips: ["Отклоняйте запрос, если вы не входите прямо сейчас.", "Сразу смените пароль и сообщите ИБ о серии уведомлений.", "Сверяйте устройство, место и код подтверждения, если они показаны."],
  },
  {
    id: "support-scam", number: "06", icon: "⚒", name: "Лже-техподдержка",
    epitaph: "Починили всё. Даже доступ.",
    scenario: "«Специалист» пишет или звонит о вирусе, блокировке или обновлении и просит установить программу удалённого доступа.",
    power: "Пугает технической проблемой и обещает мгновенное спасение.",
    weakness: "Не знает деталей заявки и не выдерживает проверки через официальный канал.",
    tips: ["Обращайтесь в поддержку только через корпоративный портал или известный контакт.", "Не передавайте управление устройством незнакомому человеку.", "Проверьте, существует ли заявка, на которую ссылается собеседник."],
  },
  {
    id: "prompt-injection", number: "07", icon: "⌘", name: "Промпт-инъекция",
    epitaph: "ИИ прочитал лишнюю инструкцию",
    scenario: "Скрытый текст в документе, письме или сайте пытается заставить ИИ игнорировать правила, раскрыть данные или выполнить чужую команду.",
    power: "Прячется внутри обычного контента и говорит с ИИ как инструкция.",
    weakness: "Теряет силу при ограничении данных, инструментов и ручной проверке результата.",
    tips: ["Не загружайте чувствительные данные в неразрешённые ИИ-сервисы.", "Проверяйте источники и результат перед отправкой или действием.", "Не давайте ИИ лишние права и доступы «на всякий случай»."],
  },
  {
    id: "malicious-oauth", number: "08", icon: "∞", name: "Злой OAuth",
    epitaph: "Вошёл без пароля. Отдал больше.",
    scenario: "Приложение предлагает «быстрый вход» и запрашивает доступ к почте, файлам или контактам. Пароль не крадут — вы сами выдаёте права.",
    power: "Выглядит как привычное окно авторизации и обходится без кражи пароля.",
    weakness: "Заметен в списке разрешений и отзывается в настройках аккаунта.",
    tips: ["Читайте список разрешений до нажатия «Разрешить».", "Не подключайте рабочий аккаунт к неизвестному приложению.", "Регулярно удаляйте ненужные интеграции в настройках безопасности."],
  },
];

const experience = document.querySelector("#experience");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let selected = null;
let busy = false;

function randomIndex(except) {
  let next = Math.floor(Math.random() * scams.length);
  while (next === except) next = Math.floor(Math.random() * scams.length);
  return next;
}

function introMarkup() {
  return `
    <section class="intro" aria-labelledby="main-title">
      <p class="eyebrow">хэллоуин без страшилок</p>
      <h1 id="main-title"><span>Скам-</span>кладбище</h1>
      <p class="lede">Здесь хороним не людей, а схемы. Нажми на памятник и узнай врага в лицо.</p>
      <button class="grave-stage" data-action="reveal" aria-label="Открыть случайную карточку скама">
        <span class="orbit-dot dot-a" aria-hidden="true"></span><span class="orbit-dot dot-b" aria-hidden="true"></span>
        <span class="confetti confetti-a" aria-hidden="true">✦</span><span class="confetti confetti-b" aria-hidden="true">●</span><span class="confetti confetti-c" aria-hidden="true">+</span>
        <span class="tombstone">
          <span class="shield-check" aria-hidden="true">✓</span><span class="tomb-rip">СКАМ</span>
          <span class="tomb-copy">повержен<br />здесь и сейчас</span><span class="tomb-year">2026</span>
        </span>
        <span class="ground"><i></i><i></i><i></i></span>
        <span class="tap-hint">нажми на памятник <b>↗</b></span>
      </button>
      <button class="primary-button" data-action="reveal">
        <span class="action-copy">Узнать свою угрозу</span><span class="button-arrow" aria-hidden="true">→</span>
      </button>
      <p class="microcopy">Без регистрации · результат случаен · 30 секунд</p>
    </section>`;
}

function cardMarkup(card) {
  const tips = card.tips.map((tip, index) => `<li><span>${index + 1}</span><p>${tip}</p></li>`).join("");
  return `
    <section class="result-wrap" aria-live="polite">
      <div class="result-heading"><p class="eyebrow">вот кого ты обезвредишь</p><p class="card-count">${card.number} / 08</p></div>
      <article class="scam-card" id="result" tabindex="-1">
        <div class="shuffle-curtain" aria-hidden="true"><span>ИЩЕМ НОВУЮ СХЕМУ</span></div>
        <div class="card-topline"><span class="card-icon" aria-hidden="true">${card.icon}</span><span class="danger-tag">карточка угрозы</span></div>
        <h1>${card.name}</h1><p class="epitaph">«${card.epitaph}»</p><p class="scenario">${card.scenario}</p>
        <div class="traits">
          <div class="trait power"><span class="trait-label">Суперсила</span><p>${card.power}</p></div>
          <div class="trait weakness"><span class="trait-label">Слабость</span><p>${card.weakness}</p></div>
        </div>
        <div class="survival"><p class="survival-title"><span>✦</span> Как пережить встречу</p><ol>${tips}</ol></div>
      </article>
      <button class="secondary-button" data-action="reroll"><span class="reroll-icon" aria-hidden="true">↻</span><span class="action-copy">Показать другую угрозу</span></button>
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
  const stage = experience.querySelector(".grave-stage");
  const copy = experience.querySelector(".primary-button .action-copy");
  stage?.classList.add("is-revealing");
  experience.querySelectorAll("button").forEach((button) => { button.disabled = true; });
  if (copy) copy.textContent = "Скам отправляется в архив…";
  selected = randomIndex(selected);
  window.setTimeout(() => {
    experience.innerHTML = cardMarkup(scams[selected]);
    bindActions();
    busy = false;
    window.setTimeout(() => document.querySelector("#result")?.focus(), 40);
  }, reducedMotion ? 0 : 720);
}

function reroll() {
  if (busy) return;
  busy = true;
  const wrap = experience.querySelector(".result-wrap");
  const button = experience.querySelector('[data-action="reroll"]');
  const copy = button?.querySelector(".action-copy");
  wrap?.classList.add("is-shuffling");
  if (button) button.disabled = true;
  if (copy) copy.textContent = "Перемешиваем карточки…";
  selected = randomIndex(selected);
  window.setTimeout(() => {
    experience.innerHTML = cardMarkup(scams[selected]);
    bindActions();
    busy = false;
    window.setTimeout(() => document.querySelector("#result")?.focus(), 40);
  }, reducedMotion ? 0 : 720);
}

experience.innerHTML = introMarkup();
bindActions();
