// Array of image paths
const images = [
    "Slide-1.jpg", "Slide-2.jpg","Slide-3.jpg", "Slide-4.jpg", "Slide-5.jpg", "Slide-6.jpg", "Slide-7.jpg", "Slide-8.jpg", "Slide-9.jpg", "Slide-10.jpg", "Slide-11.jpg", "Slide-12.jpg", "Slide-13.jpg", "Slide-14.jpg", "Slide-15.jpg", "Slide-16.jpg", "Slide-17.jpg", "Slide-18.jpg", "Slide-19.jpg", "Slide-20.jpg", "Slide-21.jpg", "Slide-22.jpg",  "Slide-23.jpg", "Slide-24.jpg"      
    
];

let currentIndex = 0; // Track the current image index
const slideshowElements = document.querySelectorAll('.slideshow'); // Get all images with the class 'slideshow'

function updateSlideshow() {
    // Update the src of the first image in the 'slideshow' class group
    slideshowElements.forEach(img => img.style.display = 'none'); // Hide all images
    slideshowElements[currentIndex].style.display = 'block'; // Show the current image

    currentIndex = (currentIndex + 1) % slideshowElements.length; // Loop back to the first image
}

// Initially hide all images except the first
slideshowElements.forEach(img => img.style.display = 'none');
slideshowElements[0].style.display = 'block';

// Change image every 10 seconds (10000ms)
setInterval(updateSlideshow, 10000);

