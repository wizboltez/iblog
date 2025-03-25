document.addEventListener("DOMContentLoaded", () => {
    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser.");
        return;
    }

    navigator.geolocation.getCurrentPosition(async (position) => {
        // Get actual location
        let lat = position.coords.latitude || 18.651207527624404; 
        let lng = position.coords.longitude || 73.7623314801032;

        console.log(`Actual Location: ${lat}, ${lng}`);  // Debugging log

        
        lat = 18.651207527624404;  
        lng = 73.7623314801032; 

        console.log(`Using Manual Location: ${lat}, ${lng}`); // Debugging log

        // Initialize Map
        let map = L.map('map').setView([lat, lng], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        // Custom Red Marker to show "You Are Here"
        let redIcon = L.icon({
            iconUrl: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
            iconSize: [32, 32],
            iconAnchor: [16, 32],
            popupAnchor: [0, -32]
        });

        // Mark user's location (Red Marker)
        let userMarker = L.marker([lat, lng], { icon: redIcon }).addTo(map);

        //Reverse Geocode: Get Address from Coordinates
        let address = "Fetching address...";
        try {
            let response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`);
            let data = await response.json();
            address = data.display_name || "Unknown Location";
            console.log("Your Address:", address);
        } catch (error) {
            console.error("Error fetching address:", error);
        }

        // Show Address in Popup
        userMarker.bindPopup(`📍 <b>You are here!</b><br>${address}`).openPopup();

        //NEW: Try different queries if no data is found
        let queries = [
            `node["shop"]["brand"="Apple"](around:25000,${lat},${lng});out;`,
            `node["shop"="electronics"](around:25000,${lat},${lng});out;`, 
            `node["name"~"Apple"](around:25000,${lat},${lng});out;`
        ];

        let foundStores = false;

        for (let query of queries) {
            let overpassUrl = `https://overpass-api.de/api/interpreter?data=[out:json];${query}`;
            
            try {
                let response = await fetch(overpassUrl);
                let data = await response.json();

                console.log("API Raw Data:", JSON.stringify(data, null, 2)); // Debugging

                if (data.elements.length > 0) {
                    foundStores = true;

                    // Loop through each store
                    for (let store of data.elements) {
                        let storeLat = store.lat;
                        let storeLng = store.lon;
                        let storeName = store.tags.name || "Apple Store";

                        // Fetch full address using Reverse Geocoding
                        let storeAddress = "Fetching address...";
                        try {
                            let response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${storeLat}&lon=${storeLng}&format=json`);
                            let addressData = await response.json();
                            storeAddress = addressData.display_name || "Address not available";
                            console.log(`Address for ${storeName}: ${storeAddress}`);
                        } catch (error) {
                            console.error("Error fetching store address:", error);
                        }

                        // Add marker for the store
                        L.marker([storeLat, storeLng]).addTo(map)
                            .bindPopup(`<b>${storeName}</b><br>${storeAddress}`);
                    }

                    break; // Stop if results are found
                }
            } catch (error) {
                console.error("Error fetching Apple Stores:", error);
            }
        }

        if (!foundStores) {
            console.warn("No Apple Stores found.");
            alert("No Apple Stores found nearby.");
        }

    }, (error) => {
        console.error("Geolocation Error:", error);
        alert("Could not fetch location. Ensure location services are enabled.");
    });
});