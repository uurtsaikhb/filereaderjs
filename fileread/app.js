window.onload = function () {
    
    if (window.File && window.FileList && window.FileReader && window.Blob) {
        console.log('This browser does support File APIs...');
        
        function handleFileSelect(evt) {

            var files = evt.target.files;
            var output = [];
            
            for (var i = 0; i < files.length; i ++) {
                output.push(
                    '<li>' + files[i].name + ' | size: ' + bytesToSize(files[i].size, 2) +  '</li>'
                );
            }
            
            document.getElementById('list').innerHTML = 
                '<ul>' + output.join('') + '</ul>';
        }
        
        document.getElementById('files').addEventListener('change', handleFileSelect, false);
        
        
        // convert bytes to Sizes
        function bytesToSize(bytes, precision) {
            var kilobyte = 1024;
            var megabyte = kilobyte * 1024;
            var gigabyte = megabyte * 1024;
            var terabyte = gigabyte * 1024;

            if ((bytes >= 0) && (bytes < kilobyte)) {
                return bytes + ' B';

            } else if ((bytes >= kilobyte) && (bytes < megabyte)) {
                return (bytes / kilobyte).toFixed(precision) + ' KB';

            } else if ((bytes >= megabyte) && (bytes < gigabyte)) {
                return (bytes / megabyte).toFixed(precision) + ' MB';

            } else if ((bytes >= gigabyte) && (bytes < terabyte)) {
                return (bytes / gigabyte).toFixed(precision) + ' GB';

            } else if (bytes >= terabyte) {
                return (bytes / terabyte).toFixed(precision) + ' TB';

            } else {
                return bytes + ' B';
            }
        }
        
        
    } else {
        alert('This browser does NOT support File APIs !');
    }
    
}