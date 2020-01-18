
var blade_counter = 0;
var trap_counter = 0;
var blades_id = [];
var traps_id = [];
var blades = [];
var traps = [];
var school_boost = "";
var school_flat = "";

// function showBasic() {
//     var x = document.getElementById("generic_table");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }
function select_school_boost() {
    switch (document.getElementById("card_type_selector").value) {
        case "fire":
            school_boost = (document.getElementById("fire_percentage_boost").value) / 100;
            school_boost += 1;
            school_flat = document.getElementById("fire_flat_boost").value;
            break;
        case "storm":
            school_boost = (document.getElementById("storm_percentage_boost").value) / 100;
            school_boost += 1;
            school_flat = document.getElementById("storm_flat_boost").value;
            break;
        case "ice":
            school_boost = (document.getElementById("ice_percentage_boost").value) / 100;
            school_boost += 1;
            school_flat = document.getElementById("ice_flat_boost").value;
            break;
        case "death":
            school_boost = (document.getElementById("death_percentage_boost").value) / 100;
            school_boost += 1;
            school_flat = document.getElementById("death_flat_boost").value;
            break;
        case "myth":
            school_boost = (document.getElementById("myth_percentage_boost").value) / 100;
            school_boost += 1;
            school_flat = document.getElementById("myth_flat_boost").value;
            break;
        case "balance":
            school_boost = (document.getElementById("balance_percentage_boost").value) / 100;
            school_boost += 1;
            school_flat = document.getElementById("balance_flat_boost").value;
            break;
        case "life":
            school_boost = (document.getElementById("life_percentage_boost").value) / 100;
            school_boost += 1;
            school_flat = document.getElementById("life_flat_boost").value;
            break;
        case "shadow":
            school_boost = (document.getElementById("shadow_percentage_boost").value) / 100;
            school_boost += 1;
            school_flat = document.getElementById("shadow_flat_boost").value;
            break;
    }
}
function add_blades() {

    let current_blade = document.getElementById('blade_boost').value;
    blades.push(1 + current_blade / 100);
    var ul = document.getElementById("blades_list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("+" + current_blade + "%"));
    li.setAttribute("id", "blade" + blade_counter); // added line
    blades_id.push("blade" + blade_counter);
    li.setAttribute("class", "list-group-item");
    ul.appendChild(li);
    blade_counter += 1;
}

function add_traps() {
    let current_trap = document.getElementById('trap_boost').value;
    traps.push(1 + current_trap / 100);

    var ul = document.getElementById("traps_list");
    var li = document.createElement("li");

    li.appendChild(document.createTextNode("+" + current_trap + "%"));
    li.setAttribute("id", "trap" + trap_counter); // added line
    traps_id.push("trap" + trap_counter)
    li.setAttribute("class", "list-group-item")
    ul.appendChild(li);

    trap_counter += 1;
}


function calculateDamage() {
    var card_damage_min = document.getElementById('card_damage_min').value;
    var card_damage_max = document.getElementById('card_damage_max').value;
    select_school_boost();

    //Multiplying by wizard percentage boost
    card_damage_min *= school_boost;
    card_damage_max *= school_boost;

    for (let i = 0; i < blades.length; i++) {
        card_damage_min *= blades[i];
        card_damage_max *= blades[i];
    }
    //personal Aura
    let personal_aura = document.getElementById('aura_damage').value / 100;
    personal_aura += 1;

    card_damage_min *= personal_aura;
    card_damage_max *= personal_aura;

    //global Aura
    let global_aura = document.getElementById('global_aura').value / 100;
    global_aura += 1;
    card_damage_min *= global_aura;
    card_damage_max *= global_aura;

    // get personal boost and global boost into calculations
    for (let i = 0; i < traps.length; i++) {
        card_damage_min *= traps[i];
        card_damage_max *= traps[i];
    }

    //Adding wizard flat boost
    card_damage_min += parseInt(school_flat, 10);
    card_damage_max += parseInt(school_flat, 10);

    //return final values to card damage inputs 


    document.getElementById('min_damage').value = card_damage_min;
    document.getElementById('max_damage').value = card_damage_max;
}
// console.log(card_damage_min * (1 + wizard_boost / 100) * (1 + blade_boost / 100 * (1 + trap_boost / 100)));
// console.log(card_damage_max * (1 + wizard_boost / 100) * (1 + blade_boost / 100 * (1 + trap_boost / 100)));
// console.log("Here");
function removeBlades() {
    for (let i = 0; i < blades_id.length; i++) {
        var element = document.getElementById(blades_id[i]);
        element.parentNode.removeChild(element);
    }
    blades = [];
    blades_id = [];

}
function removeTraps() {
    for (let i = 0; i < traps_id.length; i++) {
        var element = document.getElementById(traps_id[i]);
        element.parentNode.removeChild(element);
    }
    traps_id = [];
    traps = [];

}
function runTest() {
    removeBlades();
    removeTraps();
}
function resetForm() {

}