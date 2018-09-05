const brain = require("brain.js");

const network = new brain.NeuralNetwork();


const WorthingtonChristianSchool = 0;
const FisherCatholic = 1;
const BishopRosecrans = 2;
const HarvestPrepAcademy = 3;
const DaytonChristianSchool = 4;
const GroveCityChristianSchool = 5;
const GrandviewHeights = 6;
const ColumbusAcademy = 7;
const Granville = 8;
const BishopHartley = 9;
const Bexley = 10;
const BishopWatterson = 11;
const TheWellingtonSchool = 12;
const WestervilleSouth = 13;
const MadisonChristianSchool = 14;
const TreeOfLifeSchool = 15;
const Pleasant = 16;
const Zanesville = 17;
const LibertyUnion = 18;
const South = 19;
const LegacyChristianAcademy = 20;
const DelawareChristianSchool = 21;
const BishopReady = 22;
const Mifflin = 23;
const TroyChristianSchool = 24;
const Fairbanks = 25;
const CuyahogaValleyChristianAcademy = 26;
const PickeringtonNorth = 27;
const PickeringtonCentral =28;
const BloomCarroll = 29;
const HamiltonTownship = 30;
const Chillicothe = 31;
const JonathanAlder = 32;
const LickingHeights = 33;
const LickingValley = 34;
const MiamiValleySchool = 35;
const CincinnatiCountryDaySchool = 36;
const Lakewood = 37;
const Independence = 38;
const Whetstone = 39;


network.train([

// ================================================== THE WELLINGTON SCHOOL ===================================================== \\

  { input: [TheWellingtonSchool, WorthingtonChristianSchool], output: [0]}, //Aug 21
  { input: [TheWellingtonSchool, FisherCatholic], output: [0]}, //Aug 27
  { input: [TheWellingtonSchool, BishopRosecrans], output: [0]}, //Aug 29

// ================================================ WORTHINGTON CHRISTIAN SCHOOL ===========================================\\  

  { input: [WorthingtonChristianSchool, WestervilleSouth], output: [1]}, // Aug 17
  { input: [WorthingtonChristianSchool, TheWellingtonSchool], output: [1]}, //Aug 21
  { input: [WorthingtonChristianSchool, MadisonChristianSchool], output: [0]}, // Aug 23
  { input: [WorthingtonChristianSchool, TreeOfLifeSchool], output: [0]}, //Aug 25
  { input: [WorthingtonChristianSchool, DaytonChristianSchool], output: [1]}, //Sep 1

// ================================================== FISHER CATHOLIC ================================================\\

  { input: [FisherCatholic, Pleasant], output: [0]}, // Aug 17
  { input: [FisherCatholic, TheWellingtonSchool], output: [1]}, // Aug 27
  { input: [FisherCatholic, GroveCityChristianSchool], output: [1]}, // Aug 29

// ===================================================== BISHOP ROSECRANS ================================================== \\

  { input: [BishopRosecrans, Zanesville], output: [0]}, // Aug 17
  { input: [BishopRosecrans, LibertyUnion], output: [0]}, // Aug 20
  { input: [BishopRosecrans, ColumbusAcademy], output: [1]}, // Aug 22
  { input: [BishopRosecrans, LickingHeights], output: [0]}, // Aug 27
  { input: [BishopRosecrans, TheWellingtonSchool], output: [1]}, // Aug 29

// ==================================================== HARVEST PREP ACADEMY ================================================= \\

  { input: [HarvestPrepAcademy, South], output: [1]}, // Aug 18

// ====================================================== DAYTON CHRISTIAN SCHOOL ================================================ \\

  { input: [DaytonChristianSchool, LegacyChristianAcademy], output: [0]},  // Aug 23
  { input: [DaytonChristianSchool, MiamiValleySchool], output: [0]},  // Aug 30
  { input: [DaytonChristianSchool, WorthingtonChristianSchool], output: [0]},  // Sep 1
  { input: [DaytonChristianSchool, CincinnatiCountryDaySchool], output: [0]},  // Sep 4

// ======================================================= GROVE CITY CHRISTIAN SCHOOL ======================================== \\

  { input: [GroveCityChristianSchool, DelawareChristianSchool], output: [0]}, // Aug 23
  { input: [GroveCityChristianSchool, BishopReady], output: [0]}, // Aug 25
  { input: [GroveCityChristianSchool, FisherCatholic], output: [0]}, // Aug 29

// ========================================================= GRANDVIEW HEIGHTS ===============================================\\

  { input: [GrandviewHeights, Mifflin], output: [0]}, // Aug 17
  { input: [GrandviewHeights, TroyChristianSchool], output: [1]}, // Aug 18
  { input: [GrandviewHeights, MadisonChristianSchool], output: [0]}, // Aug 21
  { input: [GrandviewHeights, Fairbanks], output: [0]}, // Aug 25

// ======================================================== COLUMBUS ACADEMY ============================================== \\

  { input: [ColumbusAcademy, CuyahogaValleyChristianAcademy], output: [0]}, // Aug 18
  { input: [ColumbusAcademy, BishopRosecrans], output: [0]}, // Aug 22
  { input: [ColumbusAcademy, PickeringtonNorth], output: [1]}, // Aug 25
  { input: [ColumbusAcademy, WestervilleSouth], output: [1]}, // Aug 30
  { input: [ColumbusAcademy, BloomCarroll], output: [0]}, // Sep 1

// ============================================================ GRANVILLE =============================================== \\

  { input: [Granville, PickeringtonCentral], output: [1]}, // Aug 21
  { input: [Granville, LickingValley], output: [0]}, // Aug 22
  { input: [Granville, Lakewood], output: [0]}, // Aug 30

// ============================================================== HARVEST PREP ACADEMY ========================================== \\

  { input: [HarvestPrepAcademy, South], output: [1]}, // Aug 18

// ========================================================== BISHOP HARTLEY ====================================================== \\

  { input: [BishopHartley, BloomCarroll], output: [1]}, // Aug 18
  { input: [BishopHartley, HamiltonTownship], output: [0]}, // Aug 23
  { input: [BishopHartley, Independence], output: [0]}, // Aug 30

// ===================================================== FISHER CATHOLIC ==================================================== \\

  { input: [FisherCatholic, Pleasant], output: [0]}, // Aug 17
  { input: [FisherCatholic, TheWellingtonSchool], output: [1]}, //Aug 27
  { input: [FisherCatholic, GroveCityChristianSchool], output: [1]}, //Aug 29

// ===================================================== BEXLEY ============================================================ \\

  { input: [Bexley, BloomCarroll], output: [0]}, // Aug 22
  { input: [Bexley, Chillicothe], output: [0]}, // Aug 25
  { input: [Bexley, Zanesville], output: [0]}, // Sep 1

// ================================================== GROVE CITY CHRISTIAN SCHOOL ================================================= \\

  { input: [GroveCityChristianSchool, DelawareChristianSchool], output: [0]}, // Aug 23
  { input: [GroveCityChristianSchool, BishopReady], output: [0]}, // Aug 25
  { input: [GroveCityChristianSchool, FisherCatholic], output: [0]}, // Aug 29

// ====================================================== BISHOP WATTERSON ===================================================== \\

  { input: [BishopWatterson, JonathanAlder], output: [0]}, // Aug 17
  { input: [BishopWatterson, Whetstone], output: [1]} // Aug 30

// ======================================================= END =============================================================== \\
 // { input: [], output: []},

])
//August 21 Correct 97%
//August 27 Wrong 37%
//August 29 Wrong 48%
//September 5 90%

//Correct: 1
//Wrong: 2
const output = network.run([HarvestPrepAcademy, TheWellingtonSchool]); //Chance of wellington winning
let fullOutput = output * 100

if (fullOutput >=50) {
  console.log("Wellington will most likely win")
  console.log(`With a chance of ${Math.floor(fullOutput)}%`)
} else {
  console.log("Wellington will most likely lose")
  console.log(`With a chance of ${Math.floor(fullOutput)}%`)
}