<<<<<<< HEAD
const START = "2026-08-31";

const DAY = 86400000;
const $ = s => document.querySelector(s);
const utc = (y, m, d) => Date.UTC(y, m, d);
const now = new Date();
const today = utc(now.getFullYear(), now.getMonth(), now.getDate());
let view = { y: now.getFullYear(), m: now.getMonth() };

const DAYS = ["недела", "понеделник", "вторник", "среда", "четврток", "петок", "сабота"];
const MONTHS = ["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"];


const NOTES = {
  "2026-06-10": "ЛЕТООООО☀️☀️☀️☀️",
  "2026-06-16": "на одмор 🏝️🍹⛱️🌞 🌊",
  "2026-06-17": "на одмор 🏝️🍹⛱️🌞 🌊",
  "2026-06-18": "на одмор 🏝️🍹⛱️🌞 🌊",
  "2026-06-19": "на одмор 🏝️🍹⛱️🌞 🌊",
  "2026-06-20": "на одмор 🏝️🍹⛱️🌞 🌊",
  "2026-06-21": "на одмор 🏝️🍹⛱️🌞 🌊",
  "2026-06-22": "на одмор 🏝️🍹⛱️🌞 🌊",

  "2026-07-11": "славењето на родендено на баба леонаа😝😝",
  "2026-07-12": "нешто мораше да се признај🥰",

  "2026-08-01": "shopping assistant-леона🛍️🛍️",
  "2026-08-02": "мхм требаше да иди на концерт🎤🎤",
  "2026-08-05": "кај глигор и софија на роденден🎉🎉",
  "2026-08-12": "метеории🌠🌠",
  "2026-08-15": "баскетт🏀",
  "2026-08-16": "баскетт🏀🏀",
  "2026-08-17": "баскетт🏀🏀🏀",
  "2026-08-21": "не се мрсни палачинките🥀🥀",
  "2026-08-30": "one dayy🗓️🗓️",

  "2026-09-01": "малку збунувашки ден на школо 🏫",
  "2026-09-02": "купување тетратки📝😉",
  "2026-09-03": "кај марко на роденден🎉🎉..без поклон",
  "2026-09-08": "лелее замисли да бевме на david guettaаа🎧🎧",
  "2026-09-14": "топ 3 најубај излегувања🥰🥰",
  "2026-09-15": "топ 3 најубај родендени🥳🥳",
  "2026-09-19": "кај мене на роденден🎉🎉",
  "2026-09-20": "кај Ана Марија на роденден🎉🎉",
  "2026-09-24": "вистински роденден на Ана Марија🎉🎉",
  "2026-09-25": "спремање за на натпревар..скроз на време",
  "2026-09-26": "прејак пич🔥🔥 и на забава🎉🎉",
  "2026-09-30": "хммм денес или утре еден месец?🤔",

  "2026-10-01": "хммм денес или вчера беше еден месец?🤔",
  "2026-10-02": "мхм🥹",
  "2026-10-03": "СКОПЈЕЕЕ💸💸",
  "2026-10-04": "не ми се верува за streako😭😭😭",
  "2026-10-06": "THE MILLION DOLLAR QUESTION💰💰",
  "2026-10-10": "JAW DROPPING ОГНОМЕТ 🔥🔥",
  "2026-10-11": "марио и галина беа speechless😲😲",
  "2026-10-23": "неонката..🥀🥀🥀",
  "2026-10-31": "2 МЕСЕЦИИИ🥳🥳🥳",

  "2026-11-02": "1 МЕСЕЦ OFFICIALLL 🥳",
  "2026-11-03": "кај никола на 3ти ноември🏅",
  "2026-11-04": "конечно да се поделиме за brainster🙌",
  "2026-11-06": "ЕЕЕЕ 67! 🥳"
};
const parse = s => { const [y, m, d] = s.split("-").map(Number); return utc(y, m - 1, d); };
const fmt = ms => { const d = new Date(ms); return DAYS[d.getUTCDay()] + ", " + d.getUTCDate() + " " + MONTHS[d.getUTCMonth()] + " " + d.getUTCFullYear(); };
const dateOf = n => parse(START) + n * 67 * DAY;

function countdownText(diff) {
  if (diff === 0) return "ДЕНЕЕЕЕЕС🎉";
  if (diff === 1) return "УТРЕЕЕЕЕЕЕ";
  return "ЗА " + diff + " ДЕНА";
}

function render() {
  const s = parse(START);
  const together = Math.round((today - s) / DAY);
  const nextN = Math.max(1, Math.ceil(together / 67));


  const toNext = Math.round((dateOf(nextN) - today) / DAY);
  const done = Math.max(0, Math.floor(together / 67));

  let upcoming = "";
  for (let i = 0; i < 12; i++) {
    const n = nextN + i, diff = Math.round((dateOf(n) - today) / DAY);
    upcoming += '<li data-n="' + n + '"><span class="num">#' + n + '</span><span class="when">' + fmt(dateOf(n)) + '<small>ден ' + (n * 67) + ' во нашата ера</small></span><span class="in">' + countdownText(diff) + '</span></li>';
  }



  $("#app").innerHTML =
    '<div class="stats">' +
      '<div class="stat"><b>' + Math.max(0, together) + '</b><span>дена после...</span></div>' +
      '<div class="stat"><b>' + done + '</b><span>(засега)</span></div>' +
      '<div class="stat"><b>' + (together / 67).toFixed(2) + '</b><span>67-си</span></div>' +
    '</div>' +
    '<div class="card next"><div>Следен е #' + nextN +  ' 67en</div><div class="big">' + (toNext === 0 ? "ДЕНЕССС" : toNext) + '</div><div>' + (toNext === 0 ? "СРЕЌЕН 67!! 🥳" : "следен е во " + fmt(dateOf(nextN))) + '</div></div>' +
    '<div class="card"><div class="cal-head"><button id="prev">◀</button><h2 id="mt"></h2><button id="nxt">▶</button></div><div class="grid" id="grid"></div><div class="detail" id="detail"></div></div>' +
    '<div class="card"><h2 style="margin-top:0">Следни 🗓️</h2><ul id="list">' + upcoming + '</ul></div>';

  $("#prev").onclick = () => shift(-1);
  $("#nxt").onclick = () => shift(1);
  $("#list").onclick = e => { const li = e.target.closest("li"); if (li) jump(+li.dataset.n); };
  drawCal();
}

function shift(d) {
  view.m += d;
  if (view.m < 0) { view.m = 11; view.y--; }
  if (view.m > 11) { view.m = 0; view.y++; }
  drawCal();
}

function drawCal() {
  const s = parse(START);
  $("#mt").textContent = new Date(utc(view.y, view.m, 1)).toLocaleDateString("en-GB", { month: "long", year: "numeric", timeZone: "UTC" });
  let h = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(d => '<div class="dow">' + d + '</div>').join("");
  const first = new Date(utc(view.y, view.m, 1));
  const lead = (first.getUTCDay() + 6) % 7;
  const dim = new Date(utc(view.y, view.m + 1, 0)).getUTCDate();
  for (let i = 0; i < lead; i++) h += "<div></div>";
  for (let d = 1; d <= dim; d++) {
    const ms = utc(view.y, view.m, d), diff = Math.round((ms - s) / DAY);
    const key = view.y + "-" + String(view.m + 1).padStart(2, "0") + "-" + String(d).padStart(2, "0");
    let cls = "day", inner = d;
    if (ms === today) cls += " today";
    if (diff === 0) { cls += " start"; inner = d + "<small>💗</small>"; }
    if (diff > 0 && diff % 67 === 0) { cls += " sp"; inner = d + "<small>#" + (diff / 67) + "</small>"; }
    if (NOTES[key]) inner += '<span class="note">' + NOTES[key] + "</span>";
    h += '<button class="' + cls + '" data-key="' + key + '" data-ms="' + ms + '" data-diff="' + diff + '">' + inner + "</button>";
  }
  const g = $("#grid");
  g.innerHTML = h;
  g.onclick = e => {
    const b = e.target.closest(".day"); if (!b) return;
    const diff = +b.dataset.diff, ms = +b.dataset.ms;
    if (NOTES[b.dataset.key]) { $("#detail").innerHTML = "<b>" + fmt(ms) + "</b><br>" + NOTES[b.dataset.key]; return; }
    if (diff > 0 && diff % 67 === 0) { show(diff / 67, b); }
    else if (diff === 0) { $("#detail").innerHTML = "<b>Day 1</b> 💗 where it all began"; boom(b); }
    else { $("#detail").textContent = fmt(ms) + (diff > 0 ? " · day " + diff + " together" : ""); }
  };
}

function show(n, el) {
  const ms = dateOf(n), diff = Math.round((ms - today) / DAY);
  const msg = diff > 0 ? "ЗА " + diff + " ДЕНА" : diff === 0 ? "ТО Е ДЕНЕС!" : Math.abs(diff) + " ДЕНА НАЗАД";
  $("#detail").innerHTML = "<b>67versary #" + n + "</b> 🎉<br>" + fmt(ms) + " · ден " + (n * 67) + " во нашата ера· " + msg;

}

function jump(n) {
  const d = new Date(dateOf(n));
  view = { y: d.getUTCFullYear(), m: d.getUTCMonth() };
  drawCal();
  const el = document.querySelector('.day.sp[data-diff="' + (n * 67) + '"]');
  show(n, el);
  $("#grid").scrollIntoView({ behavior: "smooth", block: "center" });
}









$("#logo").onclick = e => boom(e.target);
render();
=======
  const START = "2026-08-31";

  const DAY = 86400000;
  const $ = s => document.querySelector(s);
  const utc = (y, m, d) => Date.UTC(y, m, d);
  const now = new Date();
  const today = utc(now.getFullYear(), now.getMonth(), now.getDate());
  let view = { y: now.getFullYear(), m: now.getMonth() };

  const DAYS = ["недела", "понеделник", "вторник", "среда", "четврток", "петок", "сабота"];
  const MONTHS = ["јануари", "февруари", "март", "април", "мај", "јуни", "јули", "август", "септември", "октомври", "ноември", "декември"];


  const NOTES = {
    "2026-06-10": "ЛЕТООООО☀️☀️☀️☀️",
    "2026-06-16": "на одмор 🏝️🍹⛱️🌞 🌊",
    "2026-06-17": "на одмор 🏝️🍹⛱️🌞 🌊",
    "2026-06-18": "на одмор 🏝️🍹⛱️🌞 🌊",
    "2026-06-19": "на одмор 🏝️🍹⛱️🌞 🌊",
    "2026-06-20": "на одмор 🏝️🍹⛱️🌞 🌊",
    "2026-06-21": "на одмор 🏝️🍹⛱️🌞 🌊",
    "2026-06-22": "на одмор 🏝️🍹⛱️🌞 🌊",

    "2026-07-11": "славењето на родендено на баба леонаа😝😝",
    "2026-07-12": "нешто мораше да се признај🥰",

    "2026-08-01": "shopping assistant-леона🛍️🛍️",
    "2026-08-02": "мхм требаше да иди на концерт🎤🎤",
    "2026-08-05": "кај глигор и софија на роденден🎉🎉",
    "2026-08-12": "метеории🌠🌠",
    "2026-08-15": "баскетт🏀",
    "2026-08-16": "баскетт🏀🏀",
    "2026-08-17": "баскетт🏀🏀🏀",
    "2026-08-21": "не се мрсни палачинките🥀🥀",
    "2026-08-30": "one dayy🗓️🗓️",

    "2026-09-01": "малку збунувашки ден на школо 🏫",
    "2026-09-02": "купување тетратки📝😉",
    "2026-09-03": "кај марко на роденден🎉🎉..без поклон",
    "2026-09-08": "лелее замисли да бевме на david guettaаа🎧🎧",
    "2026-09-14": "топ 3 најубај излегувања🥰🥰",
    "2026-09-15": "топ 3 најубај родендени🥳🥳",
    "2026-09-19": "кај мене на роденден🎉🎉",
    "2026-09-20": "кај Ана Марија на роденден🎉🎉",
    "2026-09-24": "вистински роденден на Ана Марија🎉🎉",
    "2026-09-25": "спремање за на натпревар..скроз на време",
    "2026-09-26": "прејак пич🔥🔥 и на забава🎉🎉",
    "2026-09-30": "хммм денес или утре еден месец?🤔",

    "2026-10-01": "хммм денес или вчера беше еден месец?🤔",
    "2026-10-02": "мхм🥹",
    "2026-10-03": "СКОПЈЕЕЕ💸💸",
    "2026-10-04": "не ми се верува за streako😭😭😭",
    "2026-10-06": "THE MILLION DOLLAR QUESTION💰💰",
    "2026-10-10": "JAW DROPPING ОГНОМЕТ 🔥🔥",
    "2026-10-11": "марио и галина беа speechless😲😲",
    "2026-10-23": "неонката..🥀🥀🥀",
    "2026-10-31": "2 МЕСЕЦИИИ🥳🥳🥳",

    "2026-11-02": "1 МЕСЕЦ OFFICIALLL 🥳",
    "2026-11-03": "кај никола на 3ти ноември🏅",
    "2026-11-04": "конечно да се поделиме за brainster🙌",
    "2026-11-06": "ЕЕЕЕ 67! 🥳"
  };
  const parse = s => { const [y, m, d] = s.split("-").map(Number); return utc(y, m - 1, d); };
  const fmt = ms => { const d = new Date(ms); return DAYS[d.getUTCDay()] + ", " + d.getUTCDate() + " " + MONTHS[d.getUTCMonth()] + " " + d.getUTCFullYear(); };
  const dateOf = n => parse(START) + n * 67 * DAY;

  function countdownText(diff) {
    if (diff === 0) return "ДЕНЕЕЕЕЕС🎉";
    if (diff === 1) return "УТРЕЕЕЕЕЕЕ";
    return "ЗА " + diff + " ДЕНА";
  }

  function render() {
    const s = parse(START);
    const together = Math.round((today - s) / DAY);
    const nextN = Math.max(1, Math.ceil(together / 67));


    const toNext = Math.round((dateOf(nextN) - today) / DAY);
    const done = Math.max(0, Math.floor(together / 67));

    let upcoming = "";
    for (let i = 0; i < 12; i++) {
      const n = nextN + i, diff = Math.round((dateOf(n) - today) / DAY);
      upcoming += '<li data-n="' + n + '"><span class="num">#' + n + '</span><span class="when">' + fmt(dateOf(n)) + '<small>ден ' + (n * 67) + ' во нашата ера</small></span><span class="in">' + countdownText(diff) + '</span></li>';
    }



    $("#app").innerHTML =
      '<div class="stats">' +
        '<div class="stat"><b>' + Math.max(0, together) + '</b><span>дена после...</span></div>' +
        '<div class="stat"><b>' + done + '</b><span>(засега)</span></div>' +
        '<div class="stat"><b>' + (together / 67).toFixed(2) + '</b><span>67-си</span></div>' +
      '</div>' +
      '<div class="card next"><div>Следен е #' + nextN +  ' за</div><div class="big">' + (toNext === 0 ? "ДЕНЕССС" : toNext) + '</div><div>' + (toNext === 0 ? "СРЕЌЕН 67!! 🥳" : "дена во " + fmt(dateOf(nextN))) + '</div></div>' +
          '<div class="card"><div class="cal-head"><button id="prev">◀</button><h2 id="mt"></h2><button id="nxt">▶</button></div><div class="grid" id="grid"></div><div class="detail" id="detail"></div></div>' +
    '<div class="card"><h2 style="margin-top:0">колку време помина после 31?</h2><div class="live"><div><b id="lh">0</b><span>сати</span></div><div><b id="lm">0</b><span>минути</span></div><div><b id="ls">0</b><span>секунди</span></div></div><div class="since">од 31.08.2026 во 19:40</div></div>' +
    '<div class="card"><h2 style="margin-top:0">Следни 🗓️</h2><ul id="list">' + upcoming + '</ul></div>';

    $("#prev").onclick = () => shift(-1);
    $("#nxt").onclick = () => shift(1);
    $("#list").onclick = e => { const li = e.target.closest("li"); if (li) jump(+li.dataset.n); };
    drawCal();
  }

  function shift(d) {
    view.m += d;
    if (view.m < 0) { view.m = 11; view.y--; }
    if (view.m > 11) { view.m = 0; view.y++; }
    drawCal();
  }

  function drawCal() {
    const s = parse(START);
    $("#mt").textContent = new Date(utc(view.y, view.m, 1)).toLocaleDateString("en-GB", { month: "long", year: "numeric", timeZone: "UTC" });
    let h = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(d => '<div class="dow">' + d + '</div>').join("");
    const first = new Date(utc(view.y, view.m, 1));
    const lead = (first.getUTCDay() + 6) % 7;
    const dim = new Date(utc(view.y, view.m + 1, 0)).getUTCDate();
    for (let i = 0; i < lead; i++) h += "<div></div>";
    for (let d = 1; d <= dim; d++) {
      const ms = utc(view.y, view.m, d), diff = Math.round((ms - s) / DAY);
      const key = view.y + "-" + String(view.m + 1).padStart(2, "0") + "-" + String(d).padStart(2, "0");
      let cls = "day", inner = d;
      if (ms === today) cls += " today";
      if (diff === 0) { cls += " start"; inner = d + "<small>💗</small>"; }
      if (diff > 0 && diff % 67 === 0) { cls += " sp"; inner = d + "<small>#" + (diff / 67) + "</small>"; }
      if (NOTES[key]) inner += '<span class="note">' + NOTES[key] + "</span>";
      h += '<button class="' + cls + '" data-key="' + key + '" data-ms="' + ms + '" data-diff="' + diff + '">' + inner + "</button>";
    }
    const g = $("#grid");
    g.innerHTML = h;
    g.onclick = e => {
      const b = e.target.closest(".day"); if (!b) return;
      const diff = +b.dataset.diff, ms = +b.dataset.ms;
      if (NOTES[b.dataset.key]) { $("#detail").innerHTML = "<b>" + fmt(ms) + "</b><br>" + NOTES[b.dataset.key]; return; }
      if (diff > 0 && diff % 67 === 0) { show(diff / 67, b); }
      else if (diff === 0) { $("#detail").innerHTML = "<b>Ден 1</b> 💗"; }
      else { $("#detail").textContent = fmt(ms) + (diff > 0 ? " · ден " + diff + " после" : ""); }
    };
  }

  function show(n, el) {
    const ms = dateOf(n), diff = Math.round((ms - today) / DAY);
    const msg = diff > 0 ? "ЗА " + diff + " ДЕНА" : diff === 0 ? "ТО Е ДЕНЕС!" : Math.abs(diff) + " ДЕНА НАЗАД";
    $("#detail").innerHTML = "<b>67versary #" + n + "</b> 🎉<br>" + fmt(ms) + " · ден " + (n * 67) + " во нашата ера· " + msg;

  }

  function jump(n) {
    const d = new Date(dateOf(n));
    view = { y: d.getUTCFullYear(), m: d.getUTCMonth() };
    drawCal();
    const el = document.querySelector('.day.sp[data-diff="' + (n * 67) + '"]');
    show(n, el);
    $("#grid").scrollIntoView({ behavior: "smooth", block: "center" });
  }

const SINCE = new Date(2026, 7, 31, 19, 40, 0).getTime();

function live() {
  const s = Math.max(0, Math.floor((Date.now() - SINCE) / 1000));
  $("#lh").textContent = Math.floor(s / 3600).toLocaleString("en-GB");
  $("#lm").textContent = Math.floor(s / 60).toLocaleString("en-GB");
  $("#ls").textContent = s.toLocaleString("en-GB");
}

render();
live();
setInterval(live, 1000);
>>>>>>> eb0bd0a (Update website files)
