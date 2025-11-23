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

const signatures = [
    // sys types
    { hex: "23 21", type: "Script (Shebang)", cat: "SCR" },
    { hex: "4D 5A", type: "Windows EXE/DLL/SYS", cat: "EXE/SYS" },
    { hex: "7F 45 4C 46", type: "Linux ELF (Executable)", cat: "EXE" },
    { hex: "FE ED FA CE", type: "macOS Mach-O (32-bit)", cat: "EXE" },
    { hex: "FE ED FA CF", type: "macOS Mach-O (64-bit)", cat: "EXE" },
    { hex: "CA FE BA BE", type: "Java Class File", cat: "EXE" },
    { hex: "D4 C3 B2 A1", type: "Libpcap File Format (Little-Endian)", cat: "SYS" },
    { hex: "A1 B2 C3 D4", type: "Libpcap File Format (Big-Endian)", cat: "SYS" },
    { hex: "0A 0D 0D 0A", type: "PCAP Next Generation Dump (PCAPNG)", cat: "SYS" },
    { hex: "49 4E 46 4F", type: "Windows INF File", cat: "SYS" },
    { hex: "43 44 30 30 31", type: "ISO9660 CD/DVD image (CD001)", cat: "SYS" },
    { hex: "4C 66 4C 65", type: "Windows Event Viewer (EVT)", cat: "SYS" },
    { hex: "45 6C 66 46 69 6C 65", type: "Windows Event Viewer XML (EVTX)", cat: "SYS" },
    { hex: "73 64 62 66", type: "Windows Customized Database (SDB)", cat: "SYS" },
    { hex: "4C 50 4B 53 48 48 52 48", type: "journald log file", cat: "SYS" },

    // db types
    { hex: "53 51 4C 69 74 65 20 66 6F 72 6D 61 74 20 33 00", type: "SQLite Database (Format 3)", cat: "DB" },
    { hex: "50 57 53 33", type: "Password Gorilla Database (PWS3)", cat: "DB" },
    { hex: "BE BA FE CA", type: "Palm Desktop Calendar Archive (DBA)", cat: "DB" },
    { hex: "00 01 42 44", type: "Palm Desktop Calendar Archive", cat: "DB" },
    { hex: "00 01 44 54", type: "Palm Desktop To Do Archive", cat: "DB" },
    { hex: "00 01 00 00 53 74 61 6E 64 61 72 64 20 41 43 45 20 44 42", type: "Microsoft Access 2007 (ACCDB)", cat: "DB" },
    { hex: "00 01 00 00 53 74 61 6E 64 61 72 64 20 4A 65 74 20 44 42", type: "Microsoft Access Database (MDB)", cat: "DB" },
    { hex: "44 55 43 4B", type: "DuckDB Database File", cat: "DB" },

    // img types
    { hex: "FF D8 FF", type: "JPEG Image (JFIF/Exif)", cat: "IMG" },
    { hex: "89 50 4E 47", type: "PNG Image", cat: "IMG" },
    { hex: "47 49 46 38", type: "GIF Image", cat: "IMG" },
    { hex: "42 4D", type: "BMP File", cat: "IMG" },
    { hex: "00 00 01 00", type: "ICO/CUR Icon Format", cat: "IMG" },
    { hex: "69 63 6E 73", type: "Apple Icon Image Format (icns)", cat: "IMG" },
    { hex: "49 49 2A 00", type: "TIFF (Little-Endian)", cat: "IMG" },
    { hex: "4D 4D 00 2A", type: "TIFF (Big-Endian)", cat: "IMG" },
    { hex: "49 49 2B 00", type: "BigTIFF (Little-Endian)", cat: "IMG" },
    { hex: "00 00 00 0C 6A 50 20 20", type: "JPEG 2000 (JP2)", cat: "IMG" },
    { hex: "38 42 50 53", type: "Photoshop Document (PSD)", cat: "IMG" },
    { hex: "52 49 46 46", type: "RIFF Container (AVI/WAV/WEBP)", cat: "IMG/MED" },
    { hex: "52 59 46 46", type: "RIFX Container (Macromedia Director)", cat: "IMG/MED" },
    { hex: "46 4F 52 4D", type: "IFF Container (Amiga ILBM/AIFF)", cat: "IMG/MED" },
    { hex: "53 44 50 58", type: "SMPTE DPX Image (Big-Endian)", cat: "IMG" },
    { hex: "76 2F 31 01", type: "OpenEXR Image", cat: "IMG" },
    { hex: "42 50 47 46 42", type: "Better Portable Graphics (BPG)", cat: "IMG" },
    { hex: "71 6F 69 66", type: "Quite OK Image Format (QOI)", cat: "IMG" },
    { hex: "49 49 2A 00 10 00 00 00 43 52", type: "Canon RAW Format 2 (CR2)", cat: "IMG" },
    { hex: "8B 45 52 02 00 00 00", type: "Roxio Toast Disc Image (ISO)", cat: "IMG/ARC" },
    { hex: "44 49 43 4D", type: "DICOM Medical Image Format", cat: "MED" },
    { hex: "46 4C 49 46", type: "Free Lossless Image Format (FLIF)", cat: "IMG" },
    { hex: "44 52 41 43 4F", type: "Draco Compressed 3D Model", cat: "IMG" },
    { hex: "00 00 00 0C 4A 58 4C 20 0D 0A 87 0A", type: "JPEG XL Format (JXL)", cat: "IMG" },

    // media types
    { hex: "49 44 33", type: "MP3 Audio (ID3v2)", cat: "MED" },
    { hex: "4D 54 68 64", type: "MIDI Sound File (MThd)", cat: "MED" },
    { hex: "00 00 00 18", type: "MP4/MOV Container (FTYP)", cat: "MED" },
    { hex: "66 74 79 70 33 67", type: "3GP/3G2 Multimedia File", cat: "MED" },
    { hex: "4F 67 67 53", type: "Ogg Container (Vorbis/Theora/FLAC)", cat: "MED" },
    { hex: "1A 45 DF A3", type: "Matroska/WebM Container (MKV/WEBM)", cat: "MED" },
    { hex: "46 4C 56", type: "Flash Video (FLV)", cat: "MED" },
    { hex: "30 26 B2 75 8E 66 CF 11", type: "Advanced Systems Format (ASF/WMA/WMV)", cat: "MED" },
    { hex: "47", type: "MPEG Transport Stream (TS)", cat: "MED" },
    { hex: "00 00 01 BA", type: "MPEG Program Stream (PS)", cat: "MED" },
    { hex: "00 00 01 B3", type: "MPEG Video Stream (MPEG-1/2)", cat: "MED" },
    { hex: "66 4C 61 43", type: "Free Lossless Audio Codec (FLAC)", cat: "MED" },
    { hex: "43 77 53", type: "Flash Shockwave (CWS)", cat: "MED" },
    { hex: "46 57 53", type: "Flash Shockwave (FWS)", cat: "MED" },
    { hex: "23 21 41 4D 52", type: "Adaptive Multi-Rate Codec (AMR)", cat: "MED" },
    { hex: "23 21 53 49 4C 4B 0A", type: "Skype Audio Codec (SILK)", cat: "MED" },

    // archive types
    { hex: "50 4B 03 04", type: "ZIP Archive / OOXML", cat: "ARC/DOC" },
    { hex: "52 61 72 21 1A 07 00", type: "RAR Archive (v1.50+)", cat: "ARC" },
    { hex: "52 61 72 21 1A 07 01 00", type: "RAR Archive (v5.00+)", cat: "ARC" },
    { hex: "37 7A BC AF 27 1C", type: "7z Archive", cat: "ARC" },
    { hex: "1F 8B", type: "GZIP Archive", cat: "ARC" },
    { hex: "FD 37 7A 58 5A 00", type: "XZ Archive", cat: "ARC" },
    { hex: "4D 53 43 46", type: "Microsoft Cabinet File (CAB)", cat: "ARC" },
    { hex: "1F 9D", type: "Compress (.Z) LZW", cat: "ARC" },
    { hex: "1F A0", type: "Compress (.Z) LZH", cat: "ARC" },
    { hex: "42 5A 68", type: "Bzip2 Compressed File", cat: "ARC" },
    { hex: "4C 5A 49 50", type: "LZIP Compressed File", cat: "ARC" },
    { hex: "43 72 32 34", type: "Google Chrome Extension/App (CRX)", cat: "ARC" },
    { hex: "63 6F 6E 65 63 74 69 78", type: "Virtual PC Virtual Hard Disk (VHD)", cat: "SYS/ARC" },
    { hex: "76 68 64 78 66 69 6C 65", type: "Windows 8 Virtual Hard Disk (VHDX)", cat: "SYS/ARC" },
    { hex: "49 73 5A 21", type: "Compressed ISO Image (ISZ)", cat: "ARC" },
    { hex: "44 41 41", type: "Direct Access Archive (DAA)", cat: "ARC" },
    { hex: "78 61 72 21", type: "Apple XAR Archive", cat: "ARC" },

    // document types
    { hex: "25 50 44 46", type: "PDF Document", cat: "DOC" },
    { hex: "D0 CF 11 E0 A1 B1 1A E1", type: "Compound File Binary Format (MS Office, MSI)", cat: "DOC/SYS" },
    { hex: "7B 5C 72 74 66 31", type: "Rich Text Format (RTF)", cat: "DOC" },
    { hex: "25 21 50 53", type: "PostScript Document", cat: "DOC" },
    { hex: "25 21 50 53 2D 41 64 6F 62 65 2D 33 2E 30 20 45 50 53 46 2D 33 2E 30", type: "Encapsulated PostScript (EPSF 3.0)", cat: "DOC" },
    { hex: "EF BB BF", type: "UTF-8 Byte Order Mark (BOM)", cat: "TXT" },
    { hex: "FF FE", type: "UTF-16LE Byte Order Mark (BOM)", cat: "TXT" },
    { hex: "FE FF", type: "UTF-16BE Byte Order Mark (BOM)", cat: "TXT" },
    { hex: "3C 3F 78 6D 6C 20", type: "XML Document (<?xml )", cat: "WEB/DOC" },
    { hex: "2D 2D 2D 2D 2D 42 45 47 49 4E 20 43 45 52 54 49 46 49 43 41 54 45 2D 2D 2D 2D 2D", type: "PEM encoded X.509 Certificate", cat: "SYS" },

    // game types
    { hex: "49 57 41 44", type: "Doom Internal WAD File (IWAD)", cat: "GAM" },
    { hex: "4E 45 53 1A", type: "Nintendo NES ROM File", cat: "GAM" },
    { hex: "43 36 34 20 74 61 70 65 20 69 6D 61 67 65 20 66 69 6C 65", type: "Commodore 64 Tape Image (T64)", cat: "GAM" },
    { hex: "43 36 34 20 43 41 52 54 52 49 44 47 45", type: "Commodore 64 Cartridge Image (CRT)", cat: "GAM" },
    { hex: "43 36 34 46 69 6C 65 00", type: "Commodore 64 Binary File (P00)", cat: "GAM" },
    { hex: "44 52 41 43 4F", type: "Draco Compressed 3D Model", cat: "GAM" },

    // font types
    { hex: "00 01 00 00 00", type: "TrueType Font (TTF)", cat: "FNT" },
    { hex: "4F 54 54 4F", type: "OpenType Font (OTF)", cat: "FNT" },
    { hex: "77 4F 46 46", type: "WOFF File Format 1.0", cat: "FNT" },
    { hex: "77 4F 46 32", type: "WOFF File Format 2.0", cat: "FNT" },

    // web types
    { hex: "3C 3F 78 6D 6C", type: "XML Document", cat: "WEB" },
    { hex: "3C 21 44 4F 43 54 59 50 45 20 68 74 6D 6C", type: "HTML Document (DOCTYPE)", cat: "WEB" },

    // other types
    { hex: "53 54 45 41 4D", type: "Steam Archive (Compressed data)", cat: "SYS/ARC" },
    { hex: "42 41 43 4B 4D 49 4B 45 44 49 53 4B", type: "AmiBack Amiga Backup Data (BAC)", cat: "ARC" },
    { hex: "49 4E 44 58", type: "AmiBack Amiga Backup Index (IDX)", cat: "ARC" },
    { hex: "62 70 6C 69 73 74", type: "Binary Property List (bplist)", cat: "SYS" },
    { hex: "6C 68 30 2D", type: "LZH Archive Method 0", cat: "ARC" },
    { hex: "49 53 63 28", type: "InstallShield CAB Archive (ISC)", cat: "ARC" },
    { hex: "44 72 61 63 6F 43 6F 6D 70 72 65 73 73", type: "Draco Compression Format", cat: "GAM/IMG" },
    { hex: "46 4C 68 64", type: "FL Studio Project File (FLP)", cat: "MED" },
];


let currentLang = 'en';
const fileInput = document.getElementById('fileInput');
const base64Input = document.getElementById('base64Input');
const langSelect = document.getElementById('langSelect');
const themeToggle = document.getElementById('themeToggle');


document.addEventListener('DOMContentLoaded', updateText);
langSelect.addEventListener('change', (e) => { currentLang = e.target.value; updateText(); });
themeToggle.addEventListener('click', toggleTheme);
fileInput.addEventListener('change', (e) => processFile(e.target.files[0]));
base64Input.addEventListener('input', (e) => { if(e.target.value.trim()) processBase64(e.target.value.trim()); });


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

 
    const previewBox = document.getElementById('filePreview');
    
  
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