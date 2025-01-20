const fs = require("fs");
const path = require("path");
const zlib = require("zlib");
const { pipeline } = require("stream");

const filePathRead = path.join(
	__dirname,
	"..",
	"readable-stream",
	"source.txt"
);
const filePathWrite = path.join(
	__dirname,
	"..",
	"combining-readable-writable-streams",
	"destination.txt"
);
const filePathWriteGz = path.join(
	__dirname,
	"..",
	"combining-readable-writable-streams",
	"destination.txt.gz"
);

const input = fs.createReadStream(filePathRead, "utf-8");
const output = fs.createWriteStream(filePathWrite);
const outputGz = fs.createWriteStream(filePathWriteGz);

// compressing files
const gzip = zlib.createGzip();
input.pipe(gzip).pipe(outputGz);

/* The pipe() method, available on every stream, can be used to combine one stream with another. 
Such chains can connect multiple streams. */
input.pipe(output);

/* There is a convenient way to combine multiple streams, 
allowing the use of a single error handler — the pipeline function */
pipeline(input, gzip, output, (err) => {
	if (err) {
		// handle errors
	}
});
