//jquery
$('#inputGroupFile01').on('change', function() {
    //get the file name
    var fileName = $(this).val();
    //replace the "Choose a file" label
    $(this).next('.custom-file-label').html(fileName);
    readURL(this, 'imagem01');
})

$('#inputGroupFile02').on('change', function() {
    //get the file name
    var fileName = $(this).val();
    //replace the "Choose a file" label
    $(this).next('.custom-file-label').html(fileName);
    readURL(this, 'imagem02');
})

function readURL(input, id) {
    if (input.files && input.files[0]) {
        let leitor = new FileReader();
        leitor.onload = function(e) {
            $('#' + id)
                .attr('src', e.target.result);
        }

        leitor.readAsDataURL(input.files[0]);
    }
}