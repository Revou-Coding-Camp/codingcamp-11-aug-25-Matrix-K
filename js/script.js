document.addEventListener("DOMContentLoaded", function () {
	if (document.getElementById("welcome")) {
		let userName = prompt("What is your name?");
		if (userName) {
			document.getElementById("welcome").innerText = userName;
		}
	}

	// Validasi Form Message Us
	const messageForm = document.getElementById("messageForm");
	if (messageForm) {
		messageForm.addEventListener("submit", function (e) {
			e.preventDefault();

			let name = document.getElementById("name").value.trim();
			let date = document.getElementById("date").value.trim();
			let gender = document.querySelector('input[name="gender"]:checked');
			let message = document.getElementById("messageInput").value.trim();

			// Validasi semua field harus diisi
			if (!name || !date || !gender || !message) {
				alert("All field must be filled");
				return;
			}

			// Format date ke dd/mm/yyyy
			let dateObj = new Date(date);
			let formattedDate =
				String(dateObj.getDate()).padStart(2, "0") +
				"/" +
				String(dateObj.getMonth() + 1).padStart(2, "0") +
				"/" +
				dateObj.getFullYear();

			// Ambil waktu saat ini
			let currentTime = new Date().toString();

			// Output
			document.getElementById("output").innerHTML = `
			<strong>Current time</strong> : ${currentTime} <br><br>
			<strong>Nama</strong> : ${name} <br>
			<strong>Tanggal Lahir</strong> : ${formattedDate} <br>
			<strong>Jenis Kelamin</strong> : ${gender.value} <br>
			<strong>Pesan</strong> : ${message}
		`;

			messageForm.reset();
		});
	}
});
