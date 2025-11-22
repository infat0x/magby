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
    // 🖼️ Şəkil Faylları (IMG)
    { hex: "FF D8 FF", type: "JPEG Image", cat: "IMG" },
    { hex: "89 50 4E 47", type: "PNG Image", cat: "IMG" },
    { hex: "47 49 46 38", type: "GIF Image", cat: "IMG" },
    { hex: "42 4D", type: "BMP Image", cat: "IMG" },
    { hex: "49 49 2A 00", type: "TIFF Image (Little-Endian)", cat: "IMG" },
    { hex: "4D 4D 00 2A", type: "TIFF Image (Big-Endian)", cat: "IMG" },
    { hex: "00 00 01 00", type: "ICO/CUR (Icon/Cursor)", cat: "IMG" },
    { hex: "38 42 50 53", type: "Photoshop Document (PSD)", cat: "IMG" },
    { hex: "00 00 00 0C 6A 50 20 20", type: "JPEG 2000 Image (JP2)", cat: "IMG" },
    { hex: "52 49 46 46", type: "WebP/WAV/AVI (RIFF Container)", cat: "IMG/MED" }, // Daha dərin yoxlama tələb olunur
    { hex: "49 49 52 4F", type: "Canon RAW 2 (CR2)", cat: "IMG" },
    { hex: "52 54 52 49", type: "Nikon RAW (NEF)", cat: "IMG" },
    { hex: "59 A6 6A 95", type: "Sun Rasterfile", cat: "IMG" },
    { hex: "67 69 6D 70 20 78 63 66 20 76", type: "GIMP XCF File", cat: "IMG" },

    // 📄 Sənəd Faylları (DOC)
    { hex: "25 50 44 46", type: "PDF Document", cat: "DOC" },
    { hex: "D0 CF 11 E0 A1 B1 1A E1", type: "Old MS Office (DOC/XLS/PPT)", cat: "DOC" },
    { hex: "50 4B 03 04", type: "OOXML (DOCX, XLSX, PPTX) / ZIP", cat: "DOC/ARC" },
    { hex: "7B 5C 72 74 66", type: "RTF Document", cat: "DOC" },
    { hex: "25 21 50 53", type: "PostScript Document", cat: "DOC" },
    { hex: "3C 21 44 4F 43 54 59 50 45 20 68 74 6D 6C", type: "HTML Document (DOCTYPE)", cat: "WEB" },
    { hex: "3C 3F 78 6D 6C", type: "XML Document", cat: "WEB/DOC" },
    { hex: "53 4D 46", type: "StarOffice Calc File", cat: "DOC" },
    { hex: "53 44 57", type: "StarOffice Writer File", cat: "DOC" },
    
    // 🎧 Multimedia Faylları (MED)
    { hex: "49 44 33", type: "MP3 Audio (ID3 Tag)", cat: "MED" },
    { hex: "00 00 00 18", type: "MP4/MOV Container (FTYP)", cat: "MED" },
    { hex: "4D 54 68 64", type: "MIDI File", cat: "MED" },
    { hex: "46 4C 56 01", type: "Flash Video (FLV)", cat: "MED" },
    { hex: "4F 67 67 53", type: "OGG (Vorbis/Theora/FLAC)", cat: "MED" },
    { hex: "1A 45 DF A3", type: "Matroska (MKV, MKA)", cat: "MED" },
    { hex: "47", type: "MPEG-TS (Transport Stream)", cat: "MED" },
    { hex: "30 26 B2 75 8E 66 CF 11", type: "ASF/WMV/WMA", cat: "MED" },
    { hex: "57 48 44 31", type: "Windows Heap Dump (WHD)", cat: "MED" },
    { hex: "41 53 44 46", type: "Adobe Sound Document", cat: "MED" },
    { hex: "56 4D 44 4B", type: "VMDK Virtual Disk (v5+)", cat: "SYS" },
    { hex: "49 49 53 4F", type: "IFF File (Amiga)", cat: "MED" },
    { hex: "46 57 53", type: "Flash Shockwave (SWF)", cat: "MED" },

    // 🗜️ Arxiv Faylları (ARC)
    { hex: "52 61 72 21 1A 07 00", type: "RAR Archive (v5.0-dən əvvəl)", cat: "ARC" },
    { hex: "52 61 72 21 1A 07 01 00", type: "RAR Archive (v5.0+)", cat: "ARC" },
    { hex: "37 7A BC AF 27 1C", type: "7z Archive", cat: "ARC" },
    { hex: "1F 8B", type: "GZIP Archive", cat: "ARC" },
    { hex: "4D 53 43 46", type: "Windows Cabinet File (CAB)", cat: "ARC" },
    { hex: "1F 9D", type: "Compress (.Z) LZW", cat: "ARC" },
    { hex: "41 52 21 3C 61 72 63 68", type: "Debian Archive (deb)", cat: "ARC" },
    { hex: "41 52 21 0A", type: "Unix Archive (ar)", cat: "ARC" },
    { hex: "ED AB EE DB", type: "RedHat Package Manager (RPM)", cat: "ARC" },
    { hex: "53 50 30 31", type: "Amazon Kindle Update Package", cat: "ARC" },

    // 🖥️ İcrayi & Sistem Faylları (EXE/SYS)
    { hex: "4D 5A", type: "Windows EXE/DLL/SYS", cat: "EXE/SYS" },
    { hex: "7F 45 4C 46", type: "Linux ELF (Executable)", cat: "EXE" },
    { hex: "FE ED FA CE", type: "macOS Mach-O (32-bit)", cat: "EXE" },
    { hex: "CA FE BA BE", type: "Java Class File", cat: "EXE" },
    { hex: "23 21", type: "Script (Shell Script, Python, Perl)", cat: "SCR" }, // Shebang
    { hex: "D4 C3 B2 A1", type: "PCAP (Network Dump)", cat: "SYS" },
    { hex: "0A 0D 0D 0A", type: "PCAPNG (Next Generation Dump)", cat: "SYS" },
    { hex: "49 4E 46 4F", type: "Windows INF File", cat: "SYS" },
    { hex: "4B 44 4D 56", type: "VMWare Virtual Disk (VMDK Header)", cat: "SYS" },
    { hex: "01 00 00 00", type: "Windows Shortcut (LNK)", cat: "SYS" },
    { hex: "52 54 53 32", type: "Windows System Restore", cat: "SYS" },

    // 🗄️ Verilənlər Bazası və Xüsusi Fayllar (DB)
    { hex: "53 51 4C 69 74 65 20 66 6F 72 6D 61 74 20 33 00", type: "SQLite Database", cat: "DB" },
    { hex: "53 74 61 6E 64 61 72 64 20 4A 65 74", type: "Microsoft Access DB (MDB)", cat: "DB" },
    { hex: "00 01 00 00 53 74 61 6E 64 61 72 64 20 4A 65 74", type: "MS Access 2007 (ACCDB)", cat: "DB" },
    { hex: "50 57 53 33", type: "Password Gorilla DB", cat: "DB" },
    { hex: "BE BA FE CA", type: "Palm Desktop Calendar Archive (DBA)", cat: "DB" },

    // 📐 CAD və Qrafika Xüsusi Formatları (CAD/FNT)
    { hex: "41 43 31 30", type: "AutoCAD Drawing (DWG)", cat: "CAD" },
    { hex: "48 50 49 4E", type: "HP-GL/2 Plotter", cat: "CAD" },
    { hex: "44 43 4D", type: "DICOM Image", cat: "MED" },
    { hex: "43 46 44 37", type: "CorelDRAW File (CDR)", cat: "DOC" },
    { hex: "32 30 30 32", type: "Autodesk Inventor", cat: "CAD" },
    { hex: "4D 54 41 58", type: "Autodesk MAX", cat: "CAD" },
    { hex: "4F 50 43 46", type: "OpenType Font (OTF)", cat: "FNT" },
    { hex: "74 72 75 65", type: "TrueType Font (TTF)", cat: "FNT" },
    { hex: "34 33 42 41", type: "3ds Max Scene File", cat: "CAD" },

    // 🎮 Oyun və Digər Xüsusi Formatlar (GAM)
    { hex: "49 57 41 44", type: "Doom WAD File", cat: "GAM" },
    { hex: "52 53 49 46", type: "RSS Feed / XML", cat: "WEB" },
    { hex: "48 58 44 4D", type: "HexDump Utility Output", cat: "TXT" },
    { hex: "30 78 30", type: "Windows Registry Hive", cat: "SYS" },
    
    // Əlavə, Az Görülən İmzalar
    { hex: "53 51 4C 69", type: "SQLite Format 3 (Short)", cat: "DB" },
    { hex: "41 53 46", type: "Advanced Systems Format (ASF)", cat: "MED" },
    { hex: "50 4B 05 06", type: "ZIP Archive (End of Central Directory)", cat: "ARC" },
    { hex: "50 48 54 4F 53 48 4F 50", type: "PHPTOSHOP Image", cat: "IMG" },
    { hex: "41 43 31 30 31 35", type: "AutoCAD DWG (R2000)", cat: "CAD" },
    { hex: "41 43 31 30 31 38", type: "AutoCAD DWG (R2004)", cat: "CAD" },
    { hex: "50 43 44 20", type: "Kodak Photo CD Image", cat: "IMG" },
    { hex: "4F 46 44 20 31 2E 30", type: "Open Font Format (OFD)", cat: "FNT" },
    { hex: "49 53 43 46", type: "Internet Scout Checklist Format", cat: "SYS" },
    { hex: "52 49 46 46", type: "RIFF Container (General)", cat: "SYS" },
    { hex: "49 43 45 44", type: "ICED Txt", cat: "TXT" },
    { hex: "54 65 6E 73 6F 72 46 6C 6F 77", type: "TensorFlow Checkpoint", cat: "DB" },
    { hex: "4E 45 53 1A", type: "Nintendo NES ROM", cat: "GAM" },
    { hex: "47 42 43 56", type: "Game Boy Color ROM", cat: "GAM" },
    { hex: "00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00", type: "Palm PDB Header (Offset)", cat: "DB" },
    { hex: "53 49 54 21", type: "StuffIt Archive", cat: "ARC" },
    { hex: "78 61 72 21", type: "Apple XAR Archive", cat: "ARC" },
    { hex: "30 82", type: "ASN.1/DER (Certificates/PKCS)", cat: "SYS" },
    { hex: "00 00 01 BA", type: "MPEG Program Stream", cat: "MED" }
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