// plantsArray = [{id: 1, name: "it", output: 2}, {id: 2, name: "that", output: 3}]


export const harvestPlants = (plantsArray) => {
    const seedObjectArray = [];
    for (const plant of plantsArray) {
        let plantOutput = plant.output;

        if (plant.type === "Corn") {
            let cornSaleOutput = (plantOutput / 2);
            for (let x = 0; x < cornSaleOutput; x++) {
                seedObjectArray.push(plant);
            }
        } else {
            for (let i = 0; i < plantOutput; i++) {
                seedObjectArray.push(plant);
            }
        }
    }
    return seedObjectArray;
}



// console.log(harvestPlants(plantsArray))