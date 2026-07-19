console.log("AuraGPT loaded");

document.documentElement.classList.add("auragpt");

function ensureComposerGlow() {
    if (document.getElementById("ag-composer-glow")) return;

    const glow = document.createElement("div");
    glow.id = "ag-composer-glow";

    Object.assign(glow.style, {
        position: "fixed",
        left: "50%",
        bottom: "45px",
        width: "700px",
        height: "180px",
        transform: "translateX(-50%)",
        background:
            "radial-gradient(circle, rgba(96,165,250,.18), transparent 70%)",
        filter: "blur(80px)",
        pointerEvents: "none",
        zIndex: "-1"
    });

    document.body.appendChild(glow);
}

ensureComposerGlow();

new MutationObserver(() => {
    document.documentElement.classList.add("auragpt");
    ensureComposerGlow();
}).observe(document.body, {
    childList: true,
    subtree: true
});console.log("AuraGPT loaded");

document.documentElement.classList.add("auragpt");

function ensureComposerGlow() {
    if (document.getElementById("ag-composer-glow")) return;

    const glow = document.createElement("div");
    glow.id = "ag-composer-glow";

    Object.assign(glow.style, {
        position: "fixed",
        left: "50%",
        bottom: "45px",
        width: "700px",
        height: "180px",
        transform: "translateX(-50%)",
        background:
            "radial-gradient(circle, rgba(96,165,250,.18), transparent 70%)",
        filter: "blur(80px)",
        pointerEvents: "none",
        zIndex: "-1"
    });

    document.body.appendChild(glow);
}

ensureComposerGlow();

new MutationObserver(() => {
    document.documentElement.classList.add("auragpt");
    ensureComposerGlow();
}).observe(document.body, {
    childList: true,
    subtree: true
});