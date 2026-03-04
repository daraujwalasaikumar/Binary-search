function searchBus() {

    const busData = [
        { name: "VRL Travels", type: "AC Sleeper", time: "8:00 AM - 4:00 PM", price: 1200 },
        { name: "RedBus Express", type: "Non-AC Seater", time: "9:30 AM - 5:30 PM", price: 850 },
        { name: "SRS Travels", type: "AC Sleeper", time: "10:15 AM - 6:45 PM", price: 1500 }
    ];

    const busList = document.getElementById("busList");
    busList.innerHTML = "";

    busData.forEach(bus => {
        const div = document.createElement("div");
        div.className = "bus-card";
        div.innerHTML = `
            <div>
                <h3>${bus.name}</h3>
                <p>${bus.type}</p>
                <p>${bus.time}</p>
            </div>
            <div>
                <h3>₹ ${bus.price}</h3>
                <button onclick="bookBus('${bus.name}', ${bus.price})">Book Now</button>
            </div>
        `;
        busList.appendChild(div);
    });
}

function bookBus(name, price) {
    alert("Booking Confirmed!\nBus: " + name + "\nPrice: ₹" + price);
}