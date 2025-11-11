const WEIGHTS = [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000",
    "100italic",
    "200italic",
    "300italic",
    "400italic",
    "500italic",
    "600italic",
    "700italic",
    "800italic",
    "900italic",
    "1000italic",
];

export default function changeFont(fontname, fontFamily, fontBase64) {
    if (typeof document == 'undefined') {
        return; // We're running on the server or worker, ignore.
    }

    if (fontBase64 && fontFamily) {
        const style = document.createElement('style');
        style.innerHTML = `
            @font-face {
                font-family: '${fontFamily}';
                src: url(data:font/truetype;charset=utf-8;base64,${fontBase64});
            }
        `;
        document.head.appendChild(style);
        document.documentElement.style.fontFamily = `'${fontFamily}'`;
    } else {
        fontname = fontname || 'Poppins';
        document.documentElement.style.fontFamily = `'${fontname}'`;
        WebFont.load({
            google: {
                families: [`${fontname}:${WEIGHTS.join(",")}`]
            }
        });
    }
}
