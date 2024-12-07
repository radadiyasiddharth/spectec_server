const { default: mongoose } = require("mongoose");

const databaseConnetion = () => {
  mongoose
    .connect(
      "mongodb+srv://radadiyasiddharth994:Siddh123@cluster0.tsrp14z.mongodb.net/spectec"
    )
    // .connect(
    //   "mongodb+srv://assc0760:ASSC_SURAT@cluster0.ovh9fz8.mongodb.net/project_skin"
    // )
    // .connect(
    //   "mongodb+srv://asscpritesh:asscpritesh@cluster0.mzr0bnp.mongodb.net/mw"
    // )
    // .connect(
    //   "mongodb+srv://dhyey:dhyey@cluster0.au39p.mongodb.net/windWizard"
    // )
    .then(() => {
      console.log("connect database");
    }) 
    .catch((err) => {
      console.log(err);
    });
};

module.exports = databaseConnetion;
