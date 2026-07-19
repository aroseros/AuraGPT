console.log("AuraGPT v0.4");

document.documentElement.classList.add("auragpt");

function applyAuraClasses() {

    // Sidebar
    const sidebar = document.querySelector("aside");
    if (sidebar)
        sidebar.classList.add("ag-sidebar");

    // Main
    const main = document.querySelector("main");
    if (main)
        main.classList.add("ag-main");

    // Prompt
    const form = document.querySelector("form");
    if (form)
        form.classList.add("ag-composer");

    // Header
    const header = document.querySelector("header");
    if (header)
        header.classList.add("ag-header");

    // Code Blocks
    document.querySelectorAll("pre").forEach(pre=>{
        pre.classList.add("ag-code");
    });

    // Tables
    document.querySelectorAll("table").forEach(table=>{
        table.classList.add("ag-table");
    });

    // Messages
    document.querySelectorAll("article > div").forEach(msg=>{
        msg.classList.add("ag-message");
    });

}

function replaceBranding() {

    const title = [...document.querySelectorAll("button,div,span")]
        .find(el => el.textContent.trim() === "ChatGPT");

    if (!title) return;

    title.classList.add("ag-brand-original");

    if (document.querySelector(".ag-brand")) return;

    const aura = document.createElement("div");

    aura.className = "ag-brand";

    aura.innerHTML = `
        <img src="${chrome.runtime.getURL("assets/logo.svg")}"
             width="26"
             height="26">
        <span>Aura</span>
    `;

    title.parentElement.appendChild(aura);

}

function initialize(){

    applyAuraClasses();

    replaceBranding();

}

initialize();

new MutationObserver(initialize).observe(document.body,{
    subtree:true,
    childList:true
});