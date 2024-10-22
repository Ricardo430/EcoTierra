$(document).ready(function() {
    $('#entregarBtn').on('click', function() {
        var selectedValue = $('#dropdownList').val();
        var modalBody = $('#modalBody');

        if(selectedValue === '0'){
            alert('Selecciona una ubicación');
            return;
        }
            
        if (selectedValue === '3') {
            modalBody.html(`                
                <div class="text-center mt-3">
                    <h5>Tu Recompensa</h5>
                    <p>Escanea el siguiente código QR para ver tu recompensa:</p>
                    <img src="/img/QR.png" alt="Código QR de Recompensa" class="img-fluid">
                </div>
            `);
        } else {
            modalBody.html('<p style="color: red; font-weight: bold;">¡Ups! No te encuentras en la ubicación seleccionada. Por favor, selecciona la ubicación correcta para continuar.</p>');
        }

        $('#exampleModal').modal('show');
    });
});