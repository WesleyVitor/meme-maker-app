import memeMaker from "@erickwendel/meme-maker";

const options = {
    image: "./src/img/sorry.jpg", // Required
    outfile: "./src/img/sorry-meme.jpg", // Required
    topText: "DESCULPE", // Required
    bottomText: "EU VENDI A CASA", // Optional
};

memeMaker(options)
    .then((_) => {
        console.log("Image saved: " + options.outfile);
    })
    .catch((error) => console.log(error));
