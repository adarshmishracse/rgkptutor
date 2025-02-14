
document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const name = document.getElementById('feedback-name').value;
    const feedbackMessage = document.getElementById('feedback-message').value;
    const rating = document.querySelector('input[name="star"]:checked') ? document.querySelector('input[name="star"]:checked').value : 'No rating';
    document.getElementById('name-display').innerText = `Name: ${name}`;
    document.getElementById('feedback-text-display').innerText = `Feedback: ${feedbackMessage}`;
    document.getElementById('rating-display').innerText = `Rating: ${rating}`;
    document.getElementById('feedback-preview').style.display = 'block';
    const imageInput = document.getElementById('student-image');  
    const uploadedImage = document.getElementById('uploaded-image');
    const imageMessage = document.getElementById('image-message');
    if (imageInput.files && imageInput.files[0]) {
        const file = imageInput.files[0];
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedImage.src = e.target.result;  
            uploadedImage.style.display = 'block';  
            imageMessage.style.display = 'block';   
            document.getElementById('feedback-image').style.display = 'block'; 
        };
        reader.readAsDataURL(file);
    } else {
        uploadedImage.style.display = 'none';
        imageMessage.style.display = 'none';
        document.getElementById('feedback-image');}
});
