function showAddress() {
	var elem = document.getElementById('addressplacer');
	if (elem) {
		var code = "mcreichelt+web" + "\x40" + "gmail" + "." + "com";
		elem.innerHTML = "<a href=\"" + "mai" + "lto:" + code + "\">" + code + "</a>";
	}
}

