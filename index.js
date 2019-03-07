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
const EmmanuelChristianSchool = 40;
const WhitehallYearling = 41;
const Centennial = 42;
const Northridge = 43;
const Olentangy = 44;
const WestJefferson = 45;
const FranklinMonroe = 46;
const GranvilleChristianAcademy = 47;
const Alter = 48;
const HorizonScienceAcademy = 49;
const StCharlesPrepSchool = 50;
const AmandaCiearcreek = 51;
const OttawaHills = 52;
const Bethel = 53;
const CentralCrossing = 54;
const StFrancisDeSales = 55;
const JohnGlenn = 56;
const ChaminadeJulienne = 57;
const CatholicCentral = 58;
const MansfieldChristianSchool = 59;
const CristoRey = 60;
const SummitCountryDaySchool = 61;
const Lancaster = 62;
const Berlin = 63;
const Huntington = 64;
const Heath = 65;
const Marietta = 66;
const RiverView = 67;
const Marysville = 68;
const DelawareHayes = 69;
const YellowSprings = 70;
const WatkinsMemorial = 71;
const Ontario = 72;
const HilliardBradley = 73;
const UpperArlington = 74;
const Fairmount = 75;
const JohnstownMonroe = 76;
const ColumbusInternational = 77;
const MonroeCentral = 78;
const UnionLocal = 79;
const PatriotPrepAcademy = 80;
const LindenMcKinley = 81;
const WalnutRidge = 82;
const Beechcroft = 83;
const NorthsideChristianSchool = 84;
const Fairlawn = 85;
const JacksonCenter = 86;
const BuckeyeValley = 87;
const Coshocton = 88;
const Hiland = 89;
const MiamiEast = 90;
const DublinJerome = 91;

network.train([

// ================================================== THE WELLINGTON SCHOOL ===================================================== \\

  { input: [TheWellingtonSchool, WorthingtonChristianSchool], output: [0]}, //Aug 21
  { input: [TheWellingtonSchool, FisherCatholic], output: [0]}, //Aug 27
  { input: [TheWellingtonSchool, BishopRosecrans], output: [0]}, //Aug 29
  { input: [TheWellingtonSchool, HarvestPrepAcademy], output: [0]}, //Sep 5
  { input: [TheWellingtonSchool, DaytonChristianSchool], output: [1]}, //Sep 8
  { input: [TheWellingtonSchool, GroveCityChristianSchool], output: [0]}, //Sep 11
  { input: [TheWellingtonSchool, GrandviewHeights], output: [1]}, //Sep 12
  { input: [TheWellingtonSchool, ColumbusAcademy], output: [1]}, //Sep 15
  { input: [TheWellingtonSchool, Granville], output: [0]}, //Sep 18
  { input: [TheWellingtonSchool, BishopHartley], output: [0]}, //Sep 25
  { input: [TheWellingtonSchool, FisherCatholic], output: [0]}, //Sep 29
  { input: [TheWellingtonSchool, Bexley], output: [1]}, //Oct 1
  { input: [TheWellingtonSchool, GroveCityChristianSchool], output: [0]}, //Oct 3
  { input: [TheWellingtonSchool, HarvestPrepAcademy], output: [0]}, //Oct 10
  { input: [TheWellingtonSchool, BishopWatterson], output: [0]}, //Oct 13
  { input: [TheWellingtonSchool, ColumbusInternational], output: [0]}, //Oct 17
  { input: [TheWellingtonSchool, GroveCityChristianSchool], output: [0]}, //Oct 23
  { input: [TheWellingtonSchool, WorthingtonChristianSchool], output: [0]}, //Oct 27

// ====================DONE========================= WORTHINGTON CHRISTIAN SCHOOL ===========================================\\  

  { input: [WorthingtonChristianSchool, WestervilleSouth], output: [1]}, // Aug 17
  { input: [WorthingtonChristianSchool, TheWellingtonSchool], output: [1]}, //Aug 21
  { input: [WorthingtonChristianSchool, MadisonChristianSchool], output: [0]}, // Aug 23
  { input: [WorthingtonChristianSchool, TreeOfLifeSchool], output: [0]}, //Aug 25
  { input: [WorthingtonChristianSchool, DaytonChristianSchool], output: [1]}, //Sep 1
  { input: [WorthingtonChristianSchool, ColumbusAcademy], output: [1]}, //Sep 5
  { input: [WorthingtonChristianSchool, Bexley], output: [1]}, //Sep 12
  { input: [WorthingtonChristianSchool, LickingHeights], output: [0]}, //Sep 18
  { input: [WorthingtonChristianSchool, BishopWatterson], output: [1]}, //Oct 1
  { input: [WorthingtonChristianSchool, DelawareHayes], output: [0]}, //Oct 4
  { input: [WorthingtonChristianSchool, MansfieldChristianSchool], output: [0]}, //Oct 6
  { input: [WorthingtonChristianSchool, BishopHartley], output: [0]}, //Oct 11
  { input: [WorthingtonChristianSchool, Berlin], output: [1]}, //Oct 13
  { input: [WorthingtonChristianSchool, GranvilleChristianAcademy], output: [0]}, //Oct 15
  { input: [WorthingtonChristianSchool, TreeOfLifeSchool], output: [0]}, //Oct 17
  { input: [WorthingtonChristianSchool, LibertyUnion], output: [0]}, //Oct 23
  { input: [WorthingtonChristianSchool, TheWellingtonSchool], output: [1]}, //Oct 27

// ===================DONE=============================== FISHER CATHOLIC ==================================\\

  { input: [FisherCatholic, Pleasant], output: [0]}, // Aug 17
  { input: [FisherCatholic, TheWellingtonSchool], output: [1]}, // Aug 27
  { input: [FisherCatholic, GroveCityChristianSchool], output: [1]}, // Aug 29
  { input: [FisherCatholic, BishopRosecrans], output: [1]}, // Sep 5
  { input: [FisherCatholic, GranvilleChristianAcademy], output: [0]}, // Sep 13
  { input: [FisherCatholic, AmandaCiearcreek], output: [0]}, // Sep 15
  { input: [FisherCatholic, GroveCityChristianSchool], output: [0]}, // Sep 22
  { input: [FisherCatholic, BishopRosecrans], output: [1]}, // Sep 26
  { input: [FisherCatholic, TheWellingtonSchool], output: [1]}, // Sep 29
  { input: [FisherCatholic, JohnstownMonroe], output: [1]}, //Oct 17

// ===================================================== BISHOP ROSECRANS ================================================== \\

  { input: [BishopRosecrans, Zanesville], output: [0]}, // Aug 17
  { input: [BishopRosecrans, LibertyUnion], output: [0]}, // Aug 20
  { input: [BishopRosecrans, ColumbusAcademy], output: [1]}, // Aug 22
  { input: [BishopRosecrans, LickingHeights], output: [0]}, // Aug 27
  { input: [BishopRosecrans, TheWellingtonSchool], output: [1]}, // Aug 29
  { input: [BishopRosecrans, FisherCatholic], output: [0]}, // Sep 5
  { input: [BishopRosecrans, HarvestPrepAcademy], output: [0]}, // Sep 12
  { input: [BishopRosecrans, GroveCityChristianSchool], output: [0]}, // Sep 15
  { input: [BishopRosecrans, FisherCatholic], output: [0]}, // Sep 26
  { input: [BishopRosecrans, JohnGlenn], output: [0]}, // Sep 29
  { input: [BishopRosecrans, HarvestPrepAcademy], output: [0]}, // Oct 3
  { input: [BishopRosecrans, GroveCityChristianSchool], output: [0]}, // Oct 6
  { input: [BishopRosecrans, MonroeCentral], output: [0]}, // Oct 15
  { input: [BishopRosecrans, UnionLocal], output: [0]}, // Oct 17
  { input: [BishopRosecrans, Coshocton], output: [0]}, // Oct 23
  { input: [BishopRosecrans, Hiland], output: [1]}, // Oct 27

// ==============DONE====================================== HARVEST PREP ACADEMY =================================== \\

  { input: [HarvestPrepAcademy, South], output: [1]}, // Aug 18
  { input: [HarvestPrepAcademy, TheWellingtonSchool], output: [1]}, // Sep 5
  { input: [HarvestPrepAcademy, GroveCityChristianSchool], output: [1]}, // Sep 8
  { input: [HarvestPrepAcademy, WestJefferson], output: [1]}, // Sep 11
  { input: [HarvestPrepAcademy, BishopRosecrans], output: [1]}, // Sep 12
  { input: [HarvestPrepAcademy, MadisonChristianSchool], output: [1]}, // Sep 22
  { input: [HarvestPrepAcademy, GroveCityChristianSchool], output: [1]}, // Sep 29
  { input: [HarvestPrepAcademy, BishopRosecrans], output: [1]}, // Oct 3
  { input: [HarvestPrepAcademy, TheWellingtonSchool], output: [1]}, // Oct 10
  { input: [HarvestPrepAcademy, JohnstownMonroe], output: [1]}, // Oct 15

// ====================================================== DAYTON CHRISTIAN SCHOOL ================================================ \\

  { input: [DaytonChristianSchool, LegacyChristianAcademy], output: [0]},  // Aug 23
  { input: [DaytonChristianSchool, MiamiValleySchool], output: [0]},  // Aug 30
  { input: [DaytonChristianSchool, WorthingtonChristianSchool], output: [0]},  // Sep 1
  { input: [DaytonChristianSchool, CincinnatiCountryDaySchool], output: [0]},  // Sep 4
  { input: [DaytonChristianSchool, EmmanuelChristianSchool], output: [0]},  // Sep 6
  { input: [DaytonChristianSchool, TheWellingtonSchool], output: [0]},  // Sep 8
  { input: [DaytonChristianSchool, FranklinMonroe], output: [0]},  // Sep 10
  { input: [DaytonChristianSchool, Alter], output: [1]},  // Sep 13
  { input: [DaytonChristianSchool, OttawaHills], output: [1]},  // Sep 15
  { input: [DaytonChristianSchool, Bethel], output: [0]},  // Sep 18
  { input: [DaytonChristianSchool, ChaminadeJulienne], output: [0]},  // Sep 20
  { input: [DaytonChristianSchool, CatholicCentral], output: [0]},  // Sep 25
  { input: [DaytonChristianSchool, MansfieldChristianSchool], output: [0]},  // Sep 29
  { input: [DaytonChristianSchool, YellowSprings], output: [0]},  // Oct 9
  { input: [DaytonChristianSchool, Fairmount], output: [0]},  // Oct 11
  { input: [DaytonChristianSchool, EmmanuelChristianSchool], output: [0]},  // Oct 15
  { input: [DaytonChristianSchool, Fairlawn], output: [0]},  // Oct 18
  { input: [DaytonChristianSchool, JacksonCenter], output: [0]},  // Oct 22
  { input: [DaytonChristianSchool, MiamiEast], output: [0]},  // Oct 25

// ============DONE================================== GROVE CITY CHRISTIAN SCHOOL ======================================== \\

  { input: [GroveCityChristianSchool, DelawareChristianSchool], output: [0]}, // Aug 23
  { input: [GroveCityChristianSchool, BishopReady], output: [0]}, // Aug 25
  { input: [GroveCityChristianSchool, FisherCatholic], output: [0]}, // Aug 29
  { input: [GroveCityChristianSchool, TreeOfLifeSchool], output: [1]}, // Sep 6
  { input: [GroveCityChristianSchool, HarvestPrepAcademy], output: [0]}, // Sep 8
  { input: [GroveCityChristianSchool, TheWellingtonSchool], output: [1]}, // Sep 11
  { input: [GroveCityChristianSchool, BishopRosecrans], output: [1]}, // Sep 15
  { input: [GroveCityChristianSchool, CentralCrossing], output: [1]}, // Sep 18
  { input: [GroveCityChristianSchool, FisherCatholic], output: [1]}, // Sep 22
  { input: [GroveCityChristianSchool, MadisonChristianSchool], output: [1]}, // Sep 27
  { input: [GroveCityChristianSchool, HarvestPrepAcademy], output: [0]}, // Sep 29
  { input: [GroveCityChristianSchool, TheWellingtonSchool], output: [1]}, // Oct 3
  { input: [GroveCityChristianSchool, BishopRosecrans], output: [1]}, // Oct 6
  { input: [GroveCityChristianSchool, LibertyUnion], output: [0]}, // Oct 9
  { input: [GroveCityChristianSchool, PatriotPrepAcademy], output: [0]}, // Oct 15
  { input: [GroveCityChristianSchool, BishopReady], output: [0]}, // Oct 17
  { input: [GroveCityChristianSchool, TheWellingtonSchool], output: [1]}, // Oct 23

// ========================================================= GRANDVIEW HEIGHTS ===============================================\\

  { input: [GrandviewHeights, Mifflin], output: [0]}, // Aug 17
  { input: [GrandviewHeights, TroyChristianSchool], output: [1]}, // Aug 18
  { input: [GrandviewHeights, MadisonChristianSchool], output: [0]}, // Aug 21
  { input: [GrandviewHeights, Fairbanks], output: [0]}, // Aug 25
  { input: [GrandviewHeights, WhitehallYearling], output: [1]}, // Sep 5
  { input: [GrandviewHeights, Centennial], output: [0]}, // Sep 8
  { input: [GrandviewHeights, TheWellingtonSchool], output: [0]}, // Sep 12
  { input: [GrandviewHeights, Bexley], output: [0]}, // Sep 20
  { input: [GrandviewHeights, CristoRey], output: [0]}, // Sep 25
  { input: [GrandviewHeights, CentralCrossing], output: [0]}, // Sep 27
  { input: [GrandviewHeights, SummitCountryDaySchool], output: [0]}, // Sep 29
  { input: [GrandviewHeights, ColumbusAcademy], output: [0]}, // Oct 3
  { input: [GrandviewHeights, Zanesville], output: [0]}, // Oct 6
  { input: [GrandviewHeights, WestJefferson], output: [0]}, // Oct 17
  { input: [GrandviewHeights, HorizonScienceAcademy], output: [0]}, // Oct 23
  { input: [GrandviewHeights, JohnstownMonroe], output: [0]}, // Oct 27

// =============DONE====================================== COLUMBUS ACADEMY ============================================== \\

  { input: [ColumbusAcademy, CuyahogaValleyChristianAcademy], output: [0]}, // Aug 18
  { input: [ColumbusAcademy, BishopRosecrans], output: [0]}, // Aug 22
  { input: [ColumbusAcademy, PickeringtonNorth], output: [1]}, // Aug 25
  { input: [ColumbusAcademy, WestervilleSouth], output: [1]}, // Aug 30
  { input: [ColumbusAcademy, BloomCarroll], output: [0]}, // Sep 1
  { input: [ColumbusAcademy, WorthingtonChristianSchool], output: [0]}, // Sep 5
  { input: [ColumbusAcademy, JonathanAlder], output: [0]}, // Sep 12
  { input: [ColumbusAcademy, TheWellingtonSchool], output: [0]}, // Sep 15
  { input: [ColumbusAcademy, BishopHartley], output: [0]}, // Sep 20
  { input: [ColumbusAcademy, Bexley], output: [0]}, // Sep 26
  { input: [ColumbusAcademy, Lancaster], output: [0]}, // Sep 29
  { input: [ColumbusAcademy, GrandviewHeights], output: [1]}, // Oct 3
  { input: [ColumbusAcademy, WatkinsMemorial], output: [1]}, // Oct 6
  { input: [ColumbusAcademy, HamiltonTownship], output: [0]}, // Oct 11
  { input: [ColumbusAcademy, Granville], output: [1]}, // Oct 13
  { input: [ColumbusAcademy, BuckeyeValley], output: [0]}, // Oct 20
  { input: [ColumbusAcademy, Berlin], output: [1]}, // Oct 24

// ============================================================ GRANVILLE =============================================== \\

  { input: [Granville, PickeringtonCentral], output: [1]}, // Aug 21
  { input: [Granville, LickingValley], output: [0]}, // Aug 22
  { input: [Granville, Lakewood], output: [0]}, // Aug 30
  { input: [Granville, Northridge], output: [0]}, // Sep 6
  { input: [Granville, Bexley], output: [1]}, // Sep 15
  { input: [Granville, TheWellingtonSchool], output: [1]}, // Sep 18
  { input: [Granville, LickingHeights], output: [0]}, // Sep 20
  { input: [Granville, Berlin], output: [1]}, // Sep 27
  { input: [Granville, Huntington], output: [0]}, // Sep 29
  { input: [Granville, Heath], output: [0]}, // Oct 4
  { input: [Granville, Ontario], output: [0]}, // Oct 6
  { input: [Granville, BishopHartley], output: [0]}, // Oct 9
  { input: [Granville, JohnstownMonroe], output: [0]}, // Oct 11
  { input: [Granville, ColumbusAcademy], output: [0]}, // Oct 13
  { input: [Granville, LindenMcKinley], output: [0]}, // Oct 16
  { input: [Granville, CristoRey], output: [0]}, // Oct 20

// ===================DONE================================== BISHOP HARTLEY ====================================================== \\

  { input: [BishopHartley, BloomCarroll], output: [1]}, // Aug 18
  { input: [BishopHartley, HamiltonTownship], output: [0]}, // Aug 23
  { input: [BishopHartley, Independence], output: [0]}, // Aug 30
  { input: [BishopHartley, BishopWatterson], output: [0]}, // Sep 4
  { input: [BishopHartley, Bexley], output: [1]}, // Sep 6
  { input: [BishopHartley, BishopReady], output: [0]}, // Sep 11
  { input: [BishopHartley, HorizonScienceAcademy], output: [0]}, // Sep 13
  { input: [BishopHartley, StCharlesPrepSchool], output: [1]}, // Sep 18
  { input: [BishopHartley, ColumbusAcademy], output: [1]}, // Sep 20
  { input: [BishopHartley, Heath], output: [0]}, // Sep 22
  { input: [BishopHartley, TheWellingtonSchool], output: [1]}, // Sep 25
  { input: [BishopHartley, JonathanAlder], output: [1]}, // Sep 27
  { input: [BishopHartley, StFrancisDeSales], output: [1]}, // Oct 2
  { input: [BishopHartley, Centennial], output: [1]}, // Oct 3
  { input: [BishopHartley, Granville], output: [1]}, // Oct 9
  { input: [BishopHartley, WorthingtonChristianSchool], output: [1]}, // Oct 11
  { input: [BishopHartley, AmandaCiearcreek], output: [0]}, // Oct 20
  { input: [BishopHartley, StFrancisDeSales], output: [1]}, // Oct 24

// =============DONE======================================== FISHER CATHOLIC ======================================== \\

  { input: [FisherCatholic, Pleasant], output: [0]}, // Aug 17
  { input: [FisherCatholic, TheWellingtonSchool], output: [1]}, //Aug 27
  { input: [FisherCatholic, GroveCityChristianSchool], output: [1]}, //Aug 29
  { input: [FisherCatholic, BishopRosecrans], output: [1]}, //Sep 5
  { input: [FisherCatholic, GranvilleChristianAcademy], output: [0]}, //Sep 13
  { input: [FisherCatholic, AmandaCiearcreek], output: [0]}, //Sep 15
  { input: [FisherCatholic, GroveCityChristianSchool], output: [0]}, //Sep 22
  { input: [FisherCatholic, BishopRosecrans], output: [1]}, //Sep 26
  { input: [FisherCatholic, TheWellingtonSchool], output: [1]}, //Sep 29
  { input: [FisherCatholic, JohnstownMonroe], output: [1]}, //Oct 17

// ===================================================== BEXLEY ============================================================ \\

  { input: [Bexley, BloomCarroll], output: [0]}, // Aug 22
  { input: [Bexley, Chillicothe], output: [0]}, // Aug 25
  { input: [Bexley, Zanesville], output: [0]}, // Sep 1
  { input: [Bexley, BishopHartley], output: [0]}, // Sep 6
  { input: [Bexley, Olentangy], output: [1]}, // Sep 8
  { input: [Bexley, WorthingtonChristianSchool], output: [0]}, // Sep 12
  { input: [Bexley, Granville], output: [0]}, // Sep 15
  { input: [Bexley, GrandviewHeights], output: [1]}, // Sep 20
  { input: [Bexley, Marietta], output: [0]}, // Sep 22
  { input: [Bexley, ColumbusAcademy], output: [1]}, // Sep 26
  { input: [Bexley, RiverView], output: [0]}, // Sep 29
  { input: [Bexley, TheWellingtonSchool], output: [0]}, // Oct 1
  { input: [Bexley, Berlin], output: [1]}, // Oct 4
  { input: [Bexley, StCharlesPrepSchool], output: [1]}, // Oct 9
  { input: [Bexley, WhitehallYearling], output: [0]}, // Oct 10
  { input: [Bexley, WatkinsMemorial], output: [1]}, // Oct 13
  { input: [Bexley, Berlin], output: [0]}, // Oct 27

// =======================DONE========================== BISHOP WATTERSON ===================================================== \\

  { input: [BishopWatterson, JonathanAlder], output: [0]}, // Aug 17
  { input: [BishopWatterson, Whetstone], output: [1]}, // Aug 30
  { input: [BishopWatterson, BishopHartley], output: [1]}, // Sep 4
  { input: [BishopWatterson, StCharlesPrepSchool], output: [1]}, // Sep 11
  { input: [BishopWatterson, StFrancisDeSales], output: [1]}, // Sep 18
  { input: [BishopWatterson, Marysville], output: [1]}, // Sep 22
  { input: [BishopWatterson, BishopReady], output: [0]}, // Sep 25
  { input: [BishopWatterson, TreeOfLifeSchool], output: [1]}, // Sep 29
  { input: [BishopWatterson, WorthingtonChristianSchool], output: [0]}, // Oct 1
  { input: [BishopWatterson, HilliardBradley], output: [1]}, // Oct 4
  { input: [BishopWatterson, UpperArlington], output: [1]}, // Oct 6
  { input: [BishopWatterson, TheWellingtonSchool], output: [1]}, // Oct 13
  { input: [BishopWatterson, DublinJerome], output: [1]}, // Oct 20

  // ================DONE================================================ COLUMBUS INTERNATIONAL ============================= \\

  { input: [ColumbusInternational, WalnutRidge], output: [0]}, // Sep 6
  { input: [ColumbusInternational, Whetstone], output: [0]}, // Sep 27
  { input: [ColumbusInternational, Centennial], output: [1]}, // Oct 10
  { input: [ColumbusInternational, Beechcroft], output: [0]}, // Oct 13
  { input: [ColumbusInternational, NorthsideChristianSchool], output: [0]}, // Oct 15
  { input: [ColumbusInternational, TheWellingtonSchool], output: [1]}, // Oct 17

// ======================================================= END =============================================================== \\
 // { input: [], output: []},

])
//August 21 Correct 97%
//August 27 Wrong 37%
//August 29 Wrong 48%
//September 5 Correct 90%
//September 8 Correct 44%
//September 11 Wrong 47%
//September 12 correct 47%
//September 15 Correct 47%
//September 18 Correct 54%
//September 25 Correct 58%
//September 29 Correct 78%
//October 1 wrong 72% 
//October 3 wrong 49%
//October 10 correct 55%
//October 13 correct 65%
//October 17 wrong 10%
//October 23 wrong 46%
//October 27 correct 80%
//October 31 correct 44%

//Correct: 12
//Wrong: 7
//63 percent accurate

const output = network.run([GrandviewHeights, TheWellingtonSchool]);
let fullOutput = output * 100

if (fullOutput >=50) {
  console.log("Wellington will most likely win")
  console.log(`With a chance of ${Math.round(fullOutput)}%`)
} else {
  console.log("Wellington will most likely lose")
  console.log(`With a chance of ${Math.round(fullOutput)}%`)
}
