

# Magic Bytes Identifier & Forensic Tool

<div align="center">
<img src="logo.png" alt="Magic Bytes Logo" width="120px" />
<br>
<br>

[](https://opensource.org/licenses/MIT)
[](https://developer.mozilla.org/en-US/docs/Web/HTML)
[](https://javascript.info/)
[](https://en.wikipedia.org/wiki/File_signature)

<p><strong>A sophisticated, browser-based tool for digital forensics, file signature analysis, and extension spoofing detection.</strong></p>

[View Live Demo](https://www.google.com/search?q=%23) • [Report Bug](https://www.google.com/search?q=https://github.com/infat0x/issues) • [Request Feature](https://www.google.com/search?q=https://github.com/infat0x/issues)

</div>

-----

## ⚡ Overview



**Magic Bytes** is a client-side web application designed to analyze file headers (hex signatures) to identify the *true* format of a file, regardless of its file extension. This tool is essential for security researchers, developers, and forensic analysts to detect **Extension Spoofing** (e.g., an `.exe` disguised as a `.jpg`) and analyze raw Base64 data safely.

Built with a **Privacy-First** approach, all processing happens locally in your browser. No files are uploaded to any server.

## ✨ Key Features

### 🛡️ Forensic Analysis & Security

  * **True File Type Detection:** Identifies files by their "Magic Bytes" (file signatures) rather than trusting the operating system's file extension.
  * **Spoofing Alert System:** Automatically detects and warns if a file's extension does not match its internal signature (e.g., `malware.pdf` containing executable headers).
  * **Risk Assessment:** Categorizes files into High, Medium, or Low security risks based on their executable potential.
  * **Base64 Decoder:** Capable of analyzing raw Base64 strings directly to determine the encoded file type.

### 🎨 UI & Experience

  * **Cyber-Aesthetic Design:** Features a "GitHub Dark Mode" inspired interface with smooth, cinematic CSS animations.
  * **Responsive & Adaptive:** Fully responsive layout with a built-in Dark/Light theme toggle.
  * **Multi-Language Support:** Full localization support for **English**, **Azerbaijani**, and **Russian**.
  * **Instant Preview:** Generates safe previews for supported image formats.

## 🛠️ Technical Stack

  * **Core:** HTML5, CSS3, Vanilla JavaScript (ES6+)
  * **Styling:** CSS Variables, Flexbox/Grid, Keyframe Animations.
  * **Logic:** `FileReader` API for hex extraction, ArrayBuffers for byte manipulation.
  * **Icons:** Scalable Vector Graphics (SVG).

## 🚀 How to Run

Since this is a static web application, no backend installation is required.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/infat0x/magic-bytes.git
    ```
2.  **Navigate to the directory:**
    ```bash
    cd magic-bytes
    ```
3.  **Launch:**
    Simply open `index.html` in any modern web browser.

    https://magby.site

## 📊 Supported Formats (Signature Database)

The current version supports detection for the following file signatures:

| Category | Format | Hex Signature (Magic Bytes) |
| :--- | :--- | :--- |
| **Images** | JPEG, PNG, GIF | `FF D8 FF`, `89 50 4E 47`, etc. |
| **Archives** | ZIP, RAR | `50 4B 03 04`, `52 61 72 21` |
| **Documents** | PDF | `25 50 44 46` |
| **Executables** | Windows EXE, Linux ELF | `4D 5A`, `7F 45 4C 46` |
| **Media** | MP3, MP4 | `49 44 33`, `00 00 00 18` |
| **Network** | PCAP (Wireshark) | `D4 C3 B2 A1` |

> *Note: The database is easily extensible in `script.js`.*



## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 👤 Author

**infat0x**

  * GitHub: [@infat0x](https://github.com/infat0x)

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

-----

<div align="center">
<sub>Built with 💻 and ☕ by infat0x</sub>
</div>

-----

