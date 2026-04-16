// Menu Mobile
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => { 
    navLinks.classList.toggle('active'); 
});

// Funções das Abas (Tabs) de Contato
function openTab(evt, tabName) {
    let i, tabContent, tabBtns;
    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) { 
        tabContent[i].style.display = "none"; 
        tabContent[i].classList.remove("active"); 
    }
    tabBtns = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tabBtns.length; i++) { 
        tabBtns[i].className = tabBtns[i].className.replace(" active", ""); 
    }
    document.getElementById(tabName).style.display = "block";
    document.getElementById(tabName).classList.add("active");
    evt.currentTarget.className += " active";
}

// Configuração do envio de formulários (Simulação)
const setupForm = (formId) => {
    const form = document.getElementById(formId);
    if(form) {
        form.onsubmit = (e) => {
            e.preventDefault();
            form.innerHTML = `
                <div class="success-msg">
                    <i class="fas fa-check-circle"></i>
                    <h3 style="color: var(--accent); margin-bottom: 10px;">Enviado com sucesso!</h3>
                    <p>Recebemos suas informações. Nossa equipe entrará em contato em breve.</p>
                </div>`;
        }
    }
};

setupForm('form-cliente');
setupForm('form-trabalhe');

// Efeito Parallax das Estrelas
document.addEventListener("mousemove", (e) => {
    document.querySelectorAll(".parallax").forEach(item => {
        const speed = item.getAttribute("data-speed");
        const x = (window.innerWidth - e.pageX * speed) / 100;
        const y = (window.innerHeight - e.pageY * speed) / 100;
        item.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
});

// Animação de Revelar Seções ao Rolar
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => { 
        if (entry.isIntersecting) entry.target.classList.add('active'); 
    });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(section => { 
    observer.observe(section); 
});