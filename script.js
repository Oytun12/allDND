const calculateBonus = (stat) => {
    return Math.floor((stat - 10) / 2);
};

const classPriorities = {
    Fighter: ['str', 'con', 'wis', 'cha', 'dex', 'int'],
    Wizard: ['int', 'wis', 'dex', 'con', 'cha', 'str'],
    Rogue: ['dex', 'int', 'wis', 'cha', 'str', 'con']
};

const skillDependencies = {
    athletics: 'str',
    acrobatics: 'dex',
    animalHanding: 'wis',
    stealth: 'dex',
    sleightOfHand: 'dex',
    insight: 'wis',
    medicine: 'wis',
    history: 'int',
    perception: 'wis',
    survival: 'wis',
    religion: 'int',
    investigation: 'int',
    nature: 'int',
    arcana: 'int',
    deception: 'cha',
    persuasion: 'cha',
    performance: 'cha',
    intimidation: 'cha'
};

let stats = {
    str: 10,
    dex: 10,
    con: 10,
    int: 10,
    wis: 10,
    cha: 10
};

const updateStatsAndSkills = () => {
    const race = document.getElementById('race').value;
    const background = document.getElementById('background').value;
    const selectedClass = document.getElementById('class').value;

    stats = {
        str: 10,
        dex: 10,
        con: 10,
        int: 10,
        wis: 10,
        cha: 10
    };

    // Apply race bonuses
    if (race === 'Human') {
        stats.str += 1;
        stats.dex += 1;
        stats.con += 1;
        stats.int += 1;
        stats.wis += 1;
        stats.cha += 1;
    } else if (race === 'Elf(Ulu)') {
        stats.dex += 2;
        stats.int += 1;
    } else if (race === 'Elf(Or)') {
        stats.dex += 2;
        stats.wis += 1;
    } else if (race === 'Elf(Drow)') {
        stats.dex += 2;
        stats.cha += 1;
    } else if (race === 'Dwarf(Dağ)') {
        stats.str += 2;
        stats.con += 2;
    } else if (race === 'Dwarf(Tepe)') {
        stats.con += 2;
        stats.wis += 1;
    } else if (race === 'Halfling(Tez)') {
        stats.dex += 2;
        stats.cha += 1;
    } else if (race === 'Halfling(Tık)') {
        stats.dex += 2;
        stats.con += 1;
    } else if (race === 'Dragonborn') {
        stats.str += 2;
        stats.cha += 1;
    } else if (race === 'Gnome(Kaya)') {
        stats.int += 2;
        stats.con += 1;
    } else if (race === 'Gnome(Or)') {
        stats.int += 2;
        stats.dex += 1;
    } else if (race === 'Tiefling') {
        stats.int += 1;
        stats.cha += 2;
    }

    // Apply background bonuses
    if (background === 'Acolyte') {
        stats.wis += 1;
    } else if (background === 'Criminal') {
        stats.dex += 1;
    } else if (background === 'Folk Hero') {
        stats.str += 1;
    } else if (background === 'Noble') {
        stats.cha += 1;
    } else if (background === 'Sage') {
        stats.int += 1;
    } else if (background === 'Soldier') {
        stats.str += 1;
        stats.con += 1;
    }

    // Apply class bonuses
    if (selectedClass === 'Fighter') {
        stats.str += 5;
        stats.con += 4;
        stats.wis += 3;
        stats.cha += 4;
        stats.dex += 4;
        stats.int += 4;
    } else if (selectedClass === 'Wizard') {
        stats.int += 5;
        stats.wis += 4;
        stats.dex += 3;
        stats.con += 4;
        stats.cha += 4;
        stats.str += 4;
    } else if (selectedClass === 'Rogue') {
        stats.dex += 5;
        stats.int += 4;
        stats.wis += 3;
        stats.cha += 4;
        stats.str += 4;
        stats.con += 4;
    }

    document.getElementById('str').innerText = `${stats.str} (${calculateBonus(stats.str)})`;
    document.getElementById('dex').innerText = `${stats.dex} (${calculateBonus(stats.dex)})`;
    document.getElementById('con').innerText = `${stats.con} (${calculateBonus(stats.con)})`;
    document.getElementById('int').innerText = `${stats.int} (${calculateBonus(stats.int)})`;
    document.getElementById('wis').innerText = `${stats.wis} (${calculateBonus(stats.wis)})`;
    document.getElementById('cha').innerText = `${stats.cha} (${calculateBonus(stats.cha)})`;

    const priorityList = document.getElementById('sortable');
    priorityList.innerHTML = '';

    if (selectedClass) {
        const priorities = classPriorities[selectedClass];
        priorities.forEach(priority => {
            const listItem = document.createElement('li');
            listItem.id = `${priority}-priority`;
            listItem.innerText = document.querySelector(`#${priority}`).parentNode.innerText.split(':')[0];
            priorityList.appendChild(listItem);
        });
    }

    updateSkillBonuses();
};

const skillBonuses = {
    athletics: 0,
    acrobatics: 0,
    animalHanding: 0,
    stealth: 0,
    sleightOfHand: 0,
    insight: 0,
    medicine: 0,
    history: 0,
    perception: 0,
    survival: 0,
    religion: 0,
    investigation: 0,
    nature: 0,
    arcana: 0,
    deception: 0,
    persuasion: 0,
    performance: 0,
    intimidation: 0
};

const toggleBonus = (skill) => {
    if (skillBonuses[skill] === 0) {
        skillBonuses[skill] = 2;
    } else {
        skillBonuses[skill] = 0;
    }
    updateSkillBonuses();
};

const updateSkillBonuses = () => {
    for (const skill in skillBonuses) {
        const baseBonus = calculateBonus(stats[skillDependencies[skill]]);
        const totalBonus = baseBonus + skillBonuses[skill];
        document.getElementById(skill).innerText = totalBonus;
    }
};

document.getElementById('race').addEventListener('change', updateStatsAndSkills);
document.getElementById('background').addEventListener('change', updateStatsAndSkills);
document.getElementById('class').addEventListener('change', updateStatsAndSkills);

updateStatsAndSkills();
