const form = document.getElementById('facturaForm');
const tbody = document.querySelector('#tablaFacturas tbody');

let facturas = JSON.parse(localStorage.getItem('facturas')) || [];

function cargarFacturas() {
    tbody.innerHTML = '';
    facturas.forEach(f => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${f.cliente}</td>
            <td>${f.producto}</td>
            <td>${f.cantidad}</td>
            <td>${f.precio}</td>
            <td>${f.cantidad * f.precio}</td>
        `;
        tbody.appendChild(tr);
    });
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const cliente = document.getElementById('cliente').value;
    const producto = document.getElementById('producto').value;
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const precio = parseFloat(document.getElementById('precio').value);

    const factura = { cliente, producto, cantidad, precio };
    facturas.push(factura);
    localStorage.setItem('facturas', JSON.stringify(facturas));
    cargarFacturas();

    form.reset();
});

// Cargar facturas al inicio
cargarFacturas();
