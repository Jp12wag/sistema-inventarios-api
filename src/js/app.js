
document.getElementById('addProductForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Evitar el envío del formulario por defecto

    const formData = new FormData(event.target); // Obtener los datos del formulario
    const producto = Object.fromEntries(formData.entries());
   
    console.log(localStorage);

    fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',  
        },
        body: JSON.stringify(producto)
      
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al agregar el producto');
            }
            
            return response.json();
        })
        .then(data => {
            localStorage.setItem('token', data.token);
            window.location.href = '/principal.html';

        })
        .catch(error => {
            console.error('Error:', error.message);
        });
});


// Cargar la lista de productos al cargar la página
window.addEventListener('DOMContentLoaded', fetchProducts);
