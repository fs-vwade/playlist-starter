const express = require("express");
const app = express();
const PORT = 3000;

const playlist = require("./playlist");

app.get("/", (req, res) => {
	res.send("You've reached the Playlist API!");
});

app.get("/playlist", (req, res) => {
	res.json(playlist);
});
app.get("/playlist/:idx", (req, res) => {
	const { idx } = req.params;

	if (+idx < playlist.length) {
		res.json(playlist[+idx]);
	} else {
		res.status(404).send("That song does not exist in the playlist.");
	}
	res.json(playlist);
});

app.listen(PORT);
