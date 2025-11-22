/* --- TRANSLATION DATA --- */
const i18n = {
    en: {
        app_title: "Magic Bytes",
        input_header: "Source Input",
        drag_drop: "Tap or Drop file here",
        or: "OR",
        result_header: "Analysis Report",
        filename: "Filename",
        size: "Size",
        detected: "Detected Type",
        magic_bytes: "Magic Bytes (Hex)",
        warning: "Warning",
        spoof_msg: "Extension mismatch detected!",
        waiting: "Waiting for input...",
        unknown: "Unknown Format",
        forensic_note: "Forensic Analysis Note",
        footer_text: "AI-Powered Forensic Tool",
        intro: "The file header {hex} matches the signature for {type}.",
        cat_info: "This format is classified under the {cat} category.",
        risk_high: "Security Analysis: HIGH RISK. Executable content detected.",
        risk_med: "Security Analysis: MEDIUM RISK. Container format may hide payloads.",
        risk_low: "Security Analysis: LOW RISK. Standard media format.",
        action: "Recommendation: Verify file integrity and origin before opening."
    },
    az: {
        app_title: "Sehrli Baytlar",
        input_header: "Giriş Mənbəyi",
        drag_drop: "Faylı bura toxundurun",
        or: "VƏ YA",
        result_header: "Analiz Hesabatı",
        filename: "Fayl Adı",
        size: "Ölçü",
        detected: "Tapılan Növ",
        magic_bytes: "Sehrli Baytlar (Hex)",
        warning: "Diqqət",
        spoof_msg: "Format uyğunsuzluğu aşkarlandı!",
        waiting: "Giriş gözlənilir...",
        unknown: "Naməlum Format",
        forensic_note: "Forensik Analiz Qeydi",
        footer_text: "AI-Dəstəkli Forensik Alət",
        intro: "{hex} başlıq imzası {type} növü ilə uyğun gəlir.",
        cat_info: "Bu format rəqəmsal kriminalistikada {cat} kateqoriyasına aiddir.",
        risk_high: "Təhlükəsizlik: YÜKSƏK RİSK. İcra edilə bilən kod aşkarlandı.",
        risk_med: "Təhlükəsizlik: ORTA RİSK. Arxiv daxilində gizli fayllar ola bilər.",
        risk_low: "Təhlükəsizlik: AŞAĞI RİSK. Standart media faylı.",
        action: "Tövsiyə: Açmazdan əvvəl faylın mənbəyini yoxlayın."
    },
    ru: {
        app_title: "Magic Bytes",
        input_header: "Источник",
        drag_drop: "Нажмите или перетащите файл",
        or: "ИЛИ",
        result_header: "Отчет Анализа",
        filename: "Имя Файла",
        size: "Размер",
        detected: "Тип Файла",
        magic_bytes: "Магические Байты",
        warning: "Внимание",
        spoof_msg: "Обнаружена подмена расширения!",
        waiting: "Ожидание ввода...",
        unknown: "Неизвестный формат",
        forensic_note: "Заметка Форензики",
        footer_text: "AI Инструмент Анализа",
        intro: "Заголовок {hex} соответствует сигнатуре {type}.",
        cat_info: "Этот формат относится к категории {cat}.",
        risk_high: "Безопасность: ВЫСОКИЙ РИСК. Исполняемый файл.",
        risk_med: "Безопасность: СРЕДНИЙ РИСК. Архив может содержать угрозы.",
        risk_low: "Безопасность: НИЗКИЙ РИСК. Стандартный медиа-файл.",
        action: "Рекомендация: Проверьте целостность перед открытием."
    }
};

/* --- DB --- */
const signatures = [
    { hex: "FF D8 FF", type: "JPEG Image", cat: "IMG" },
    { hex: "89 50 4E 47", type: "PNG Image", cat: "IMG" },
    { hex: "47 49 46 38", type: "GIF Image", cat: "IMG" },
    { hex: "25 50 44 46", type: "PDF Document", cat: "DOC" },
    { hex: "50 4B 03 04", type: "ZIP Archive", cat: "ARC" },
    { hex: "52 61 72 21", type: "RAR Archive", cat: "ARC" },
    { hex: "4D 5A", type: "Windows EXE", cat: "EXE" },
    { hex: "7F 45 4C 46", type: "Linux ELF", cat: "EXE" },
    { hex: "49 44 33", type: "MP3 Audio", cat: "MED" },
    { hex: "00 00 00 18", type: "MP4 Video", cat: "MED" },
    { hex: "D4 C3 B2 A1", type: "PCAP Dump", cat: "SYS" }
];

/* --- STATE --- */
let currentLang = 'en';
const fileInput = document.getElementById('fileInput');
const base64Input = document.getElementById('base64Input');
const langSelect = document.getElementById('langSelect');
const themeToggle = document.getElementById('themeToggle');

/* --- EVENTS --- */
document.addEventListener('DOMContentLoaded', updateText);
langSelect.addEventListener('change', (e) => { currentLang = e.target.value; updateText(); });
themeToggle.addEventListener('click', toggleTheme);
fileInput.addEventListener('change', (e) => processFile(e.target.files[0]));
base64Input.addEventListener('input', (e) => { if(e.target.value.trim()) processBase64(e.target.value.trim()); });

/* --- FUNCTIONS --- */
function toggleTheme() {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    document.getElementById('moonIcon').style.display = isDark ? 'none' : 'block';
    document.getElementById('sunIcon').style.display = isDark ? 'block' : 'none';
}

function updateText() {
    const t = i18n[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(t[key]) el.innerText = t[key];
    });
    
    if(document.getElementById('resName').innerText === "-") {
        document.getElementById('resType').innerText = t.waiting;
    }
}

function processFile(file) {
    if(!file) return;
    
    document.getElementById('resName').innerText = file.name;
    document.getElementById('resSize').innerText = formatBytes(file.size);

    // --- PREVIEW LOGIC START ---
    const previewBox = document.getElementById('filePreview');
    
    // Check if element exists to prevent errors
    if (previewBox) {
        if (file.type.startsWith('image/')) {
            const imageUrl = URL.createObjectURL(file);
            previewBox.innerHTML = `<img src="${imageUrl}" alt="File Preview">`;
        } else {
            previewBox.innerHTML = `
                <svg class="preview-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <line x1="16" y1="13" x2="8" y2="13"></line>
                    <line x1="16" y1="17" x2="8" y2="17"></line>
                    <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
            `;
        }
    }
    // --- PREVIEW LOGIC END ---

    const reader = new FileReader();
    reader.onload = function(e) {
        const arr = new Uint8Array(e.target.result);
        analyze(arrToHex(arr), file.name);
    };
    reader.readAsArrayBuffer(file.slice(0, 16));
}

function processBase64(b64) {
    const t = i18n[currentLang];
    document.getElementById('resName').innerText = "Base64";
    document.getElementById('resSize').innerText = "RAW";
    
    const previewBox = document.getElementById('filePreview');
    if(previewBox) {
        previewBox.innerHTML = `
            <svg class="preview-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <polyline points="16 18 22 12 16 6"></polyline>
                <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
        `;
    }

    try {
        const clean = b64.split(',').pop();
        const bin = atob(clean.substring(0, 50));
        const arr = new Uint8Array(bin.length);
        for(let i=0; i<bin.length; i++) arr[i] = bin.charCodeAt(i);
        analyze(arrToHex(arr.subarray(0, 16)), "Base64");
    } catch(e) {
        analyze("INVALID", "ERROR");
    }
}

function analyze(hex, name) {
    const t = i18n[currentLang];
    const alertBox = document.getElementById('mismatchAlert');
    const typeEl = document.getElementById('resType');
    const dot = document.querySelector('.dot');

    alertBox.classList.add('hidden');
    document.getElementById('resHex').innerText = hex;

    let match = signatures.find(s => hex.startsWith(s.hex));

    if (match) {
        typeEl.innerText = match.type;
        typeEl.style.color = "var(--success)";
        if(dot) dot.style.background = "var(--success)";
        generateForensicNote(match, hex);

        if(name !== "Base64" && name !== "ERROR") {
            const ext = name.split('.').pop().toLowerCase();
            if(match.cat === "EXE" && !['exe','dll'].includes(ext)) {
                alertBox.classList.remove('hidden');
                document.getElementById('spoofMsg').innerText = `${t.spoof_msg} (.${ext} ≠ ${match.type})`;
            }
        }
    } else {
        typeEl.innerText = t.unknown;
        typeEl.style.color = "var(--danger)";
        if(dot) dot.style.background = "var(--danger)";
        document.getElementById('resNote').innerText = "Signature not found in database.";
    }
}

function generateForensicNote(match, hex) {
    const t = i18n[currentLang];
    let note = t.intro.replace('{hex}', hex.substring(0,8)).replace('{type}', match.type) + " ";
    note += t.cat_info.replace('{cat}', match.cat) + " ";
    if(match.cat === "EXE") note += t.risk_high + " ";
    else if(match.cat === "ARC") note += t.risk_med + " ";
    else note += t.risk_low + " ";
    note += t.action;
    document.getElementById('resNote').innerText = note;
}

function formatBytes(bytes, decimals = 2) {
    if (!+bytes) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

function arrToHex(arr) {
    return Array.from(arr).map(b => b.toString(16).padStart(2,'0').toUpperCase()).join(' ');
}