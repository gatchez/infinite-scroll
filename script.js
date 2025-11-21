const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('loader');

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

// Number of photos per batch
const count = 30;

// Backend endpoint (placeholder for Github, update to hosted backend for live demo)
const apiUrl = '/infinite-scroll/api.php';

// Track each image load
function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
        ready = true;
        loader.style.display = 'none'; // hide loader after batch loads
    }
}

// Helper to set attributes
function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

// Display photos in DOM
function displayPhotos() {
    imagesLoaded = 0; // reset loaded images count before each batch
    totalImages = photosArray.length;
    
    photosArray.forEach((photo) => {
        // <a> tag to link to Unspalsh
        const anchor = document.createElement('a');
        setAttributes(anchor, {
            href: photo.links.html,
            target: '_blank'
        });

        // <img> tag for photo
        const img = document.createElement('img');
        setAttributes(img, {
            src: photo.urls.regular,
            alt: photo.alt_description || "Unspalsh Image",
            title: photo.alt_description || "Unspalsh Image"
        });

        // Event listner: check when each image finishes loading
        img.addEventListener('load', imageLoaded);

        // Put <img> in <a>, then into container
        anchor.appendChild(img);
        imageContainer.appendChild(anchor);
    });
}

// Fetch photos from backend
async function getPhotos() {
    try {
        loader.style.display = 'block'; // show loader at bottom
        loader.scrollIntoView({behavior: 'smooth', block: 'end'}); // scroll loader into view

        const response = await fetch(apiUrl);
        photosArray = await response.json();
        displayPhotos();
    } catch (error) {
        console.log("Erro fetching photos: ", error);
        loader.style.display = 'none';
    }
}

// Infinite scroll
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && ready) { 
        ready = false; // prevent multiple calls
        getPhotos();
    }
});

// Initial Load
getPhotos();
