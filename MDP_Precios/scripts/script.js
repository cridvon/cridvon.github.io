// script.js

// Ruta al archivo Excel
const filePath = 'data/productos.xlsx';

// Función para cargar y procesar el archivo Excel
async function loadExcelFile() {
    try {
        const response = await fetch(filePath);
        const arrayBuffer = await response.arrayBuffer();
        const data = new Uint8Array(arrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0]; // Selecciona la primera hoja
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet); // Convierte la hoja a JSON

        // Generar la lista de precios
        const pricingContainer = document.getElementById('pricing');
        pricingContainer.innerHTML = ''; // Limpia cualquier contenido previo
        jsonData.forEach((row) => {
            const item = document.createElement('div');
            item.classList.add('pricing-item');
            item.innerHTML = `
                <img src="${row.Imagen}" alt="${row.Producto}" class="product-image" />
                <h2>${row.Producto}</h2>
                <p>${row.Descripción}</p>
                <span class="price">$${parseFloat(row.Precio).toFixed(2)}</span>
            `;
            pricingContainer.appendChild(item);
        });
    } catch (error) {
        console.error('Error al cargar el archivo Excel:', error);
    }
}

// Cargar el archivo Excel al iniciar la página
document.addEventListener('DOMContentLoaded', loadExcelFile);
