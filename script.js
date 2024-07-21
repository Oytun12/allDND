const calculateBonus = (stat) => {
    return Math.floor((stat - 10) / 2);
};

const classPriorities = {
    Fighter: ['str', 'con', 'wis', 'cha', 'dex', 'int'],
    Wizard: ['int', 'wis', 'dex', 'con', 'cha', 'str'],
    Rogue: ['dex', 'int', 'wis', 'cha', 'str', 'con']
};

const updateStatsAndSkills = () => {
    const race = document.getElementById('race').value;
    const background = document.getElementById('background').value;
    const selectedClass = document.getElementById('class').value;

    let stats = {
        str: 10,
        dex: 10,
        con: 10,
        int: 10,
        wis: 10,
        cha: 10
    };

    if (race === 'Human') {
        stats.str += 1;
        stats.dex += 1;
        stats.con += 1;
        stats.int += 1;
        stats.wis += 1;
        stats.cha += 1;
    } else if (race === 'Elf') {
        stats.dex += 2;
        stats.int += 1;
    } else if (race === 'Dwarf') {
        stats.str += 2;
        stats.con += 2;
    }

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

    if (selectedClass) {
        const priorities = classPriorities[selectedClass];
        const priorityOrder = document.getElementById('sortable');
        priorityOrder.innerHTML = '';
        priorities.forEach(stat => {
            const li = document.createElement('li');
            li.id = `${stat}-priority`;
            li.innerHTML = `
                ${{
                    str: 'Güç (STR)',
                    dex: 'Çeviklik (DEX)',
                    con: 'Dayanıklılık (CON)',
                    int: 'Zeka (INT)',
                    wis: 'Bilgelik (WIS)',
                    cha: 'Karizma (CHA)'
                }[stat]}
            `;
            priorityOrder.appendChild(li);
        });

        const scores = [5, 4, 3, 2, 0, -2];
        const orderedStats = [...document.getElementById('sortable').children].map(li => li.id.split('-')[0]);
        orderedStats.forEach((stat, index) => {
            stats[stat] += scores[index];
        });
    }

    document.getElementById('str').textContent = `${stats.str} (${calculateBonus(stats.str)})`;
    document.getElementById('dex').textContent = `${stats.dex} (${calculateBonus(stats.dex)})`;
    document.getElementById('con').textContent = `${stats.con} (${calculateBonus(stats.con)})`;
    document.getElementById('int').textContent = `${stats.int} (${calculateBonus(stats.int)})`;
    document.getElementById('wis').textContent = `${stats.wis} (${calculateBonus(stats.wis)})`;
    document.getElementById('cha').textContent = `${stats.cha} (${calculateBonus(stats.cha)})`;

    document.getElementById('athletics').textContent = calculateBonus(stats.str);
    document.getElementById('acrobatics').textContent = calculateBonus(stats.dex);
    document.getElementById('stealth').textContent = calculateBonus(stats.dex);
    document.getElementById('sleightOfHand').textContent = calculateBonus(stats.dex);
    document.getElementById('insight').textContent = calculateBonus(stats.wis);
    document.getElementById('medicine').textContent = calculateBonus(stats.wis);
    document.getElementById('perception').textContent = calculateBonus(stats.wis);
    document.getElementById('survival').textContent = calculateBonus(stats.wis);
    document.getElementById('religion').textContent = calculateBonus(stats.int);
    document.getElementById('investigation').textContent = calculateBonus(stats.int);
    document.getElementById('nature').textContent = calculateBonus(stats.int);
    document.getElementById('arcana').textContent = calculateBonus(stats.int);
    document.getElementById('deception').textContent = calculateBonus(stats.cha);
    document.getElementById('persuasion').textContent = calculateBonus(stats.cha);
    document.getElementById('performance').textContent = calculateBonus(stats.cha);
    document.getElementById('intimidation').textContent = calculateBonus(stats.cha);
};

document.getElementById('race').addEventListener('change', updateStatsAndSkills);
document.getElementById('background').addEventListener('change', updateStatsAndSkills);
document.getElementById('class').addEventListener('change', updateStatsAndSkills);
