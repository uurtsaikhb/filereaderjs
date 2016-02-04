if(window.File && window.FileList && window.FileReader && window.Blob) {
    
    window.onload = function () {
        
        function handleFileSelect(evt) {
            evt.stopPropagation();
            evt.preventDefault();
            
            var files = evt.dataTransfer.files;
            
            var output = [];
            for (var i = 0; i < files.length; i++) {
                output.push('<li>' + files[i].name + '</li>');
            }
            
            document.getElementById('list').innerHTML = 
                '<ul>' + output.join('') + '</ul>';
        }
        
        function handleDragOver(evt) {
            evt.stopPropagation();
            evt.preventDefault();
            evt.dataTransfer.dropEffect = 'copy';
        }
        
        var dropZone = document.getElementById('drop-zone');
        dropZone.addEventListener('dragover', handleDragOver, false);
        dropZone.addEventListener('drop', handleFileSelect, false);
        
    };
    
} else {
    alert('This browser does NOT support File APIs !');
}