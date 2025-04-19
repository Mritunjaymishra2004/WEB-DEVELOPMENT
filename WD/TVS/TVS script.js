document.getElementById('recommend-btn').addEventListener('click', function() {
    const destination = document.getElementById('destination').value;
    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = ""; // Clear previous recommendations

    let recommendations = [];

    switch (destination) {
        case 'paris':
            recommendations = [
                "Visit the Eiffel Tower.",
                "Explore the Louvre Museum.",
                "Stroll along the Seine River."
            ];
            break;
        case 'tokyo':
            recommendations = [
                "Check out the Senso-ji Temple.",
                "Visit the Tokyo Tower.",
                "Experience Shibuya Crossing."
            ];
            break;
        case 'new-york':
            recommendations = [
                "See the Statue of Liberty.",
                "Walk through Central Park.",
                "Explore the Metropolitan Museum of Art."
            ];
            break;
        case 'bali':
            recommendations = [
                "Visit the rice terraces in Ubud.",
                "Relax on the beaches of Seminyak.",
                "Explore the sacred monkey forest."
            ];
            break;
        default:
            recommendationsDiv.innerHTML = "<p>Please select a destination to get recommendations!</p>";
            return;
    }

    const ul = document.createElement('ul');
    recommendations.forEach(function(rec) {
        const li = document.createElement('li');
        li.textContent = rec;
        ul.appendChild(li);
    });

    recommendationsDiv.appendChild(ul);
});
