function selectEvent(name, date, location, seats) {
  localStorage.setItem("eventName", name);
  localStorage.setItem("eventDate", date);
  localStorage.setItem("eventLocation", location);
  localStorage.setItem("eventSeats", seats);
  window.location.href = "../reservation.html";
}

function loadReservation() {
  document.getElementById("resEvent").innerText =
    localStorage.getItem("eventName");

  document.getElementById("resDate").innerText =
    localStorage.getItem("eventDate");

  document.getElementById("resLocation").innerText =
    localStorage.getItem("eventLocation");

  document.getElementById("resSeats").innerText =
    localStorage.getItem("eventSeats");
}

function submitReservation() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please fill all required fields.");
    return;
  }

  localStorage.setItem("userName", name);
  localStorage.setItem("userEmail", email);

  alert("Reservation successful!");
  window.location.href = "confirmation.html";
}

function loadConfirmation() {
  document.getElementById("confName").innerText =
    localStorage.getItem("userName");

  document.getElementById("confEmail").innerText =
    localStorage.getItem("userEmail");

  document.getElementById("confEvent").innerText =
    localStorage.getItem("eventName");

  document.getElementById("confLocation").innerText =
    localStorage.getItem("eventLocation");
}
function choosePlan(plan) {
  const name = document.getElementById("planName").value;
  const email = document.getElementById("planEmail").value;

  if (name === "" || email === "") {
    alert("Please complete all fields.");
    return;
  }

  localStorage.setItem("planType", plan);
  localStorage.setItem("planUser", name);

  if (plan === "Premium") {
    document.getElementById("premiumCard").classList.add("premium-active");
  }

  alert("Welcome to " + plan + " plan, " + name + "!");
}
