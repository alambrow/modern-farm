// TODO: import sub-modules up here!
import { createAsparagus } from "./seeds/asparagus.js";
import { createPotato } from "./seeds/potato.js";
import { createCorn } from "./seeds/corn.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { addPlant } from "./field.js"

export const plantSeeds = (yearlyPlan) => {
    for (const season of yearlyPlan) {
        for (let i = 0; i < season.length; i++) {

            if (season[i] === "Asparagus") {
                addPlant(createAsparagus());
            }
            if (season[i] === "Potato") {
                addPlant(createPotato());
            }
            if (season[i] === "Corn") {
                addPlant(createCorn());
            }
            if (season[i] === "Soybean") {
                addPlant(createSoybean());
            }
            if (season[i] === "Sunflower") {
                addPlant(createSunflower());
            }
            if (season[i] === "Wheat") {
                addPlant(createWheat());
            }
        }

    }
}