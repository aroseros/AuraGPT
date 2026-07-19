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

function replaceBranding(){

    document.querySelectorAll("*").forEach(el=>{

        if(el.children.length) return;

        if(el.textContent.trim()==="ChatGPT"){

            el.textContent="Aura";

        }

    });

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