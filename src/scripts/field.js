const plantedPlants = [];

export const addPlant = (seedObject) => {
    if (Array.isArray(seedObject) === true) {
        for (let i = 0; i < seedObject.length; i++) {
            plantedPlants.push(seedObject[i]);
        }
    } else {
        plantedPlants.push(seedObject);
    }
}

// for testing purposes;
// const asparagus = {type: "asparagus", height: 24, output: 4};

// const createCorn = () => {
//     const seedType = [{type: "corn", height: 180, output: 6}, {type: "corn", height: 180, output: 6}];
//     return seedType;
// }
// console.log(addPlant(createCorn()))

export const usePlants = () => {
    return plantedPlants;
}
