function rysujChoinke(i) {
	for (i = 0; i <= 5; i++) {
	var star =' ';
		for (n = 0; n < (2*i - 1); n++) {
			var star = star + '*';
		}
	console.log(star);
	}
}

rysujChoinke(10);
