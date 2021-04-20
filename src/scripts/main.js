import { createPlan } from "./plan.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createPotato } from "./seeds/potato.js";
import { createCorn } from "./seeds/corn.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { plantSeeds } from "./tractor.js";
import { addPlant, usePlants } from "./field.js";
import { harvestPlants } from "./harvester.js";
import { Catalog } from "./catalog.js"

console.log("Welcome to the main module");

// creates seed objects
const asparagusSeed = createAsparagus();
console.log(asparagusSeed);

const potatoSeed = createPotato();
console.log(potatoSeed);

const cornSeed = createCorn();
console.log(cornSeed);

const soybeanSeed = createSoybean();
console.log(soybeanSeed);

const sunflowerSeed = createSunflower();
console.log(sunflowerSeed);

const wheatSeed = createWheat();
console.log(wheatSeed);

// creates plan (pre-programmed)
const yearlyPlan = createPlan();
console.log(yearlyPlan);


// adds plants to plantedPlants array
// this was a test: addPlant(soybeanSeed);
let plantedPlants = usePlants();
console.log(plantedPlants);

// sowing the field with your tractor
plantSeeds(yearlyPlan);
console.log(usePlants());

// harvest time!!!
const myHarvest = harvestPlants(usePlants());
console.log(myHarvest);

// selling the harvest???
Catalog(myHarvest);