export const Catalog = (harvestArray) => {
    // set up <div> here to work on HTML class???
    let div = document.querySelector('.container');

    for (const foodObject of harvestArray) {
        // TODO: append foodObject to inner HTML in <main> element
        div.innerHTML += `<section class="plant">${foodObject.type}</section>`;
    }
}