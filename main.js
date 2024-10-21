document.addEventListener('DOMContentLoaded', function() {
    const aboutUsDropdown = document.getElementById('about-us-dropdown');
    const arrowIcon = document.getElementById('arrow-icon');

    arrowIcon.addEventListener('click', function(e) {
        e.preventDefault();
        // Toggle the display of the dropdown menu
        if (aboutUsDropdown.style.display === 'block') {
            aboutUsDropdown.style.display = 'none';
            arrowIcon.classList.remove('rotated');
        } else {
            aboutUsDropdown.style.display = 'block';
            arrowIcon.classList.add('rotated');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const aboutUsDropdown = document.getElementById('about-us-dropdown');
    const arrowIcon2 = document.getElementById('arrow-icon2');

    arrowIcon2.addEventListener('click', function(e) {
        e.preventDefault();

        // Toggle the dropdown visibility
        aboutUsDropdown.classList.toggle('show');

        // Rotate the arrow by 270 degrees on click
        arrowIcon2.classList.toggle('rotated');
    });
});












let map;

async function initMap() {
  // The location of Uluru
  const position = { lat: 9.0820, lng: 8.6753 };
  // Request needed libraries.
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

  // The map, centered at Uluru
  map = new Map(document.getElementById("map"), {
    zoom: 4,
    center: position,
    mapId: "DEMO_MAP_ID",
  });

  // The marker, positioned at Uluru
  const marker = new AdvancedMarkerElement({
    map: map,
    position: position,
    title: "Uluru",
  });
}

initMap();




// JavaScript: Toggle the menu visibility
function toggleMenu() {
  const navList = document.getElementById("ullist");
  navList.style.display = navList.style.display === "flex" ? "none" : "flex";
}

