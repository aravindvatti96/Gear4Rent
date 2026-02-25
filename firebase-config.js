// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "gear4rent-xxxxx.firebaseapp.com",
  projectId: "gear4rent-xxxxx",
  storageBucket: "gear4rent-xxxxx.appspot.com",
  messagingSenderId: "xxxxxxx",
  appId: "xxxxxxx"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Create global variables to use on other pages
const db = firebase.firestore();
const auth = firebase.auth();

// Function to load laptops from Firestore
function loadInventoryFromFirestore() {
    const grid = document.getElementById('inventoryGrid');
    
    // 1. Reference your 'laptops' collection in Firebase
    db.collection("laptops").get().then((querySnapshot) => {
        // Clear the hard-coded items if you want only DB items to show
        // grid.innerHTML = ""; 

        querySnapshot.forEach((doc) => {
            const item = doc.data();
            
            // 2. Create the HTML for each laptop found in the database
            const card = `
                <div class="card product-item" data-name="${item.name}">
                    <div class="image-box">
                        <img src="${item.imageUrl || 'https://via.placeholder.com/600'}" alt="${item.name}">
                    </div>
                    <div class="product-info">
                        <span style="color:#1e3a8a; font-weight:bold; font-size:0.7rem;">DATABASE ITEM</span>
                        <h3>${item.name}</h3>
                        <p style="font-size:0.85rem; color:#475569;">${item.specs}</p>
                        <div class="price" style="margin:10px 0; font-size:1.4rem; font-weight:800; color:#1e3a8a;">₹${item.price}/mo</div>
                        <button class="nav-btn btn-primary" style="width:100%; border:none; cursor:pointer;" 
                            onclick="location.href='checkout.html?name=${item.name}&price=${item.price}&specs=${item.specs}'">
                            Rent Now
                        </button>
                    </div>
                </div>`;
            
            // 3. Add the card to your grid
            grid.innerHTML += card;
        });
    }).catch((error) => {
        console.error("Error loading products: ", error);
    });
}

// Run the function when the page loads
window.onload = loadInventoryFromFirestore;

console.log("Gear 4 Rent is now connected to the Cloud! 🚀");