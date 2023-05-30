const locationSelect = document.getElementById("location");
const timeTable = document.getElementById("time-table");
const bookAppointmentBtn = document.getElementById("book-appointment");

const locations = {
  location1: [
    { time: "time1", address: "רודן 1" },
    { time: "time2", address: "ביאליק 7" },
    { time: "time3", address: "סולם יצחק 12" },
  ],
  location2: [
    { time: "time1", address: "כנצלסון 22" },
    { time: "time2", address: "הבימה 3" },
    { time: "time3", address: "אלמוגי 12" },
  ],
  location3: [
    { time: "time1", address: "סמטת ריחן 22" },
    { time: "time2", address: "חן קרן 17" },
    { time: "time3", address: "שפירא 4" },
  ],
};

// Remove "בחירת עיר" option when a different option is selected
locationSelect.addEventListener("change", (event) => {
  const selectedLocation = event.target.value;
  const placeholderOption = locationSelect.querySelector("option[value='']");
  if (selectedLocation && placeholderOption) {
    placeholderOption.remove();
  }
});

// Update the time options when a location is selected
locationSelect.addEventListener("change", (event) => {
  const selectedLocation = event.target.value;
  if (selectedLocation in locations) {
    const locationData = locations[selectedLocation];
    timeTable.innerHTML = "";
    for (const data of locationData) {
      const row = document.createElement("tr");
      const radioCell = document.createElement("td");
      const radioInput = document.createElement("input");
      radioInput.type = "radio";
      radioInput.name = "time";
      radioInput.value = data.time;
      radioInput.required = true;
      radioCell.appendChild(radioInput);
      radioCell.appendChild(document.createTextNode(` ${data.time}`));
      row.appendChild(radioCell);
      const addressCell = document.createElement("td");
      addressCell.textContent = data.address;
      row.appendChild(addressCell);
      timeTable.appendChild(row);
    }
    bookAppointmentBtn.style.display = "none";
  }
});

// Show the button when a time is selected
timeTable.addEventListener("change", (event) => {
  bookAppointmentBtn.style.display = "block";
});
