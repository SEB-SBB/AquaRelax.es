function filterProducts() {
    const aantalPersonen = document.getElementById('aantal-personen').value;
    const aantalJets = document.getElementById('aantal-jets').value;
    const ledVerlichting = document.getElementById('led-verlichting').value;
    const prijs = document.getElementById('prijs').value;
    const afmetingen = document.getElementById('afmetingen').value;

    let filteredData = jacuzziData.filter(jacuzzi => {
        // ... (filterlogica voor personen, jets, led) ...

        if (prijs !== 'all') {
            // Voeg filterlogica voor prijs toe
        }

        if (afmetingen !== 'all') {
            // Voeg filterlogica voor afmetingen toe
        }

        return true; // Indien alle filters passeren
    });

    displayProducts(filteredData);
}
document.addEventListener('DOMContentLoaded', function() {
    const images = [
        'images/jw-2226-1.png',
        'images/jw-2226-2.png',
        'images/jw-2226-3.png'
    ];

    let currentIndex = 0;
    const productImage = document.querySelector('.product-image');
    const prevButton = document.querySelector('.prev-btn');
    const nextButton = document.querySelector('.next-btn');

    function updateImage() {
        productImage.src = images[currentIndex];
    }

    prevButton.addEventListener('click', function() {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateImage();
    });

    nextButton.addEventListener('click', function() {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateImage();
    });

    updateImage();
});

function toggleSpecificaties() {
    var specificatiesVenster = document.getElementById('specificatiesVenster');
    if (specificatiesVenster.style.display === "none") {
        specificatiesVenster.style.display = "block";
    } else {
        specificatiesVenster.style.display = "none";
    }
}
