// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// ---- #1 - #6 ----

function pAequorFactory(num, array) {
  return {
    specimenNum: num,
    dna: array,
    mutate() {
      let mutatedDna = returnRandBase();
      // console.log("Mutating specimen " + this.specimenNum + " DNA strand ");
      // console.log("~~ randomly selected DNA base to splice: " + mutatedDna);
      let i = Math.floor(Math.random() * array.length);
      // console.log("~~ targetting DNA base number " + i);
      if (mutatedDna === array[i]) {
        // console.log("~~ ERROR!! Mutated DNA duplicate found");
        mutatedDna = returnRandBase();
        this.dna.splice(i, 1, mutatedDna);
        // console.log("~~ New DNA base to splice: " + mutatedDna);
      } else {
        this.dna.splice(i - 1, 1, mutatedDna);
      }
      // console.log("~~ the mutated DNA strand is " + this.dna);
    },
    compareDNA(compare) {
      let commonDNA = 0;
      // console.log(
      //   "Comparing DNA strands from specimen " +
      //     +this.specimenNum +
      //     " and specimen " +
      //     compare.specimenNum +
      //     " ..."
      // );
      // console.log(
      //   "~~ specimen " + this.specimenNum + " DNA strand: " + this.dna
      // );
      // console.log(
      //   "~~ specimen " + compare.specimenNum + " DNA strand: " + compare.dna
      // );
      for (let i = 0; i <= compare.dna.length - 1; i++) {
        if (compare.dna[i] === this.dna[i]) {
          commonDNA += 1;
        }
      }
      let matchPercent = (commonDNA / this.dna.length) * 100;
      // console.log("~~ matches found: " + commonDNA);
      // console.log(
      //   "~~ specimen " +
      //     this.specimenNum +
      //     " and specimen " +
      //     compare.specimenNum +
      //     " have " +
      //     matchPercent.toFixed(0) +
      //     "%" +
      //     " DNA in common"
      // );
    },
    willLikelySurvive() {
      let survivalChance = 0;
      // console.log(
      //   "Analyzing chance of specimen " +
      //     this.specimenNum +
      //     " survivability based on presence of 'C' and 'G' DNA bases ..."
      // );
      for (let i = 0; i <= this.dna.length - 1; i++) {
        if (this.dna[i] === "C" || this.dna[i] === "G") {
          survivalChance += 1;
        }
      }
      // console.log("~~ instances of 'C' and 'G' found: " + survivalChance);
      let survivePercent = (survivalChance / this.dna.length) * 100;
      // console.log(
      //   "~~ chance of survival is " + survivePercent.toFixed(0) + "%"
      // );
      if (survivePercent >= 60) {
        return true;
      } else {
        return false;
      }
    },
  };
}

// ---- #7 With the factory function set up, your team requests that you create 30 instances of pAequor that can survive in their natural environment. Store these instances in an array for your team to study later. ----

function createSpecimens(num) {
  const specimens = [];
  let specimenArray = [];
  // console.log("-----------------------------------");
  // console.log("Creating " + num + " new specimens capable of survival.");
  // pAequorFactory(num, array)
  for (let i = 0; specimenArray.length < num; i++) {
    const newSpecimen = pAequorFactory(i, mockUpStrand());
    // console.log("~~ specimen " + newSpecimen.specimenNum +" created");
    if (newSpecimen.willLikelySurvive()) {
      specimenArray.push(newSpecimen);
      // console.log("~~ specimen survival likely");
      // console.log("~~ specimen added to batch");
    } else {
      // console.log("~~ specimen survival unlikely");
      // console.log("~~ specimen " + newSpecimen.specimenNum +" destroyed");
    }
  }
  // console.log("~~ requested number of capable DNA specimens have been created");
  // console.log("--------------------------------------------------------------");
  return specimenArray;
}

// ---- TEST CALLS ----
const test1 = pAequorFactory(1, mockUpStrand());
const test2 = pAequorFactory(2, mockUpStrand());
// console.log(test1)
// test1.mutate();
// console.log(test1)
// test1.compareDNA(test2);
// test1.willLikelySurvive();

const group1 = createSpecimens(30);
console.log(group1);

// ---- wilfred turcotte
