document.getElementById('imageUpload').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = function(e) {
        document.getElementById('uploadedImage').src = e.target.result;
    }
    
    if (file) {
        reader.readAsDataURL(file);
    }
});

document.getElementById('generateCaption').addEventListener('click', function() {
    const img = document.getElementById('uploadedImage').src;
    
    if (!img) {
        alert('Please upload an image first!');
        return;
    }

    
    fetch('/generate-caption', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ image: img })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('captionResult').innerText = 'Caption: ' + data.caption;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
