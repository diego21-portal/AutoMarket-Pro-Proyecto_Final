
// AutoMarket PRO - JS
// Features: filtros simples, toasts, scroll suave, ejemplo de carrito en localStorage

document.addEventListener("DOMContentLoaded", () => {
  const toTopBtn = document.getElementById("toTopBtn");
  if (toTopBtn) {
    window.addEventListener("scroll", () => {
      toTopBtn.style.opacity = window.scrollY > 300 ? "1" : "0";
    });
    toTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  // Filtro simple de vehículos
  const searchInput = document.getElementById("searchVehicles");
  const cards = document.querySelectorAll(".card-vehicle");
  if (searchInput && cards.length) {
    searchInput.addEventListener("input", (e) => {
      const q = e.target.value.toLowerCase().trim();
      cards.forEach(c => {
        const text = c.innerText.toLowerCase();
        c.style.display = text.includes(q) ? "" : "none";
      });
    });
  }

  // Simular agregar al carrito (localStorage)
  document.body.addEventListener("click", (e) => {
    const btn = e.target.closest("[data-add]");
    if (!btn) return;
    const vehicleId = btn.dataset.add;
    const item = {
      id: vehicleId,
      title: btn.dataset.title || "Vehículo",
      price: parseFloat(btn.dataset.price || "0")
    };
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    toast("Agregado al carrito: " + item.title);
  });
});


function toast(msg) {
  const t = document.createElement("div");
  t.className = "position-fixed bottom-0 end-0 m-3 toast-custom p-3";
  t.innerHTML = `<div class="d-flex align-items-center gap-2">
      <i class="bi bi-check2-circle fs-5"></i>
      <div>${msg}</div>
    </div>`;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 2400);
}

// Esperamos a que el DOM esté cargado y asi encontrar y eliminar elementos
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("Form_Profile");
  const btnReset = document.getElementById("btnReset");

  btnReset.addEventListener("click", () => {
    form.reset();
  });
});

//Cargar imagenes en el profile
const input = document.getElementById('CambiarFoto');
const preview = document.getElementById('fotoSubida');
const container = document.getElementById('fotoSubida-container');

input.addEventListener('change', function(){
  const file = this.files[0];
    if(file){
      const reader = new FileReader();
      reader.onload = function(e){
        preview.src = e.target.result;
        preview.classList.remove("d-none"); // mostrar imagen
        container.querySelector("p").style.display = "none"; // ocultar texto
      }
      reader.readAsDataURL(file);
    }
  });

//para validación de datos en los formularios
document.addEventListener('DOMContentLoaded', () => {
  const forms = document.querySelectorAll('.needs-validation');

  console.log('Formularios detectados:', forms.length); // Útil para debugging

  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    });
  });
});