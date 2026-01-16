// ===== Mobile Drawer =====
const body = document.body;
const openBtn = document.querySelector("[data-drawer-open]");
const closeBtn = document.querySelector("[data-drawer-close]");
const backdrop = document.querySelector(".drawer-backdrop");

function openDrawer(){
  body.classList.add("drawer-open");
}
function closeDrawer(){
  body.classList.remove("drawer-open");
}

openBtn?.addEventListener("click", openDrawer);
closeBtn?.addEventListener("click", closeDrawer);
backdrop?.addEventListener("click", closeDrawer);

// Close drawer when clicking a link
document.querySelectorAll(".drawer a").forEach(a => {
  a.addEventListener("click", closeDrawer);
});

// ===== Reveal on scroll =====
const reveals = document.querySelectorAll(".reveal");
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting) e.target.classList.add("show");
  });
}, {threshold: 0.12});
reveals.forEach(el => io.observe(el));

// ===== FAQ Accordion =====
document.querySelectorAll("[data-acc-btn]").forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".accordion-item");
    const panel = item.querySelector(".accordion-panel");
    const isOpen = item.classList.contains("open");

    // close others (optional)
    document.querySelectorAll(".accordion-item.open").forEach(i => {
      if(i !== item){
        i.classList.remove("open");
        const p = i.querySelector(".accordion-panel");
        p.style.maxHeight = "0px";
      }
    });

    if(isOpen){
      item.classList.remove("open");
      panel.style.maxHeight = "0px";
    } else {
      item.classList.add("open");
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
});
