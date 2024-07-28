document.addEventListener("DOMContentLoaded", function() {
    const raceSelect = document.getElementById("race");
    const backgroundSelect = document.getElementById("background");
    const classSelect = document.getElementById("class");
    const classInfoDiv = document.getElementById("class-info");
    document.getElementById('skills').classList.add('hidden');

    // document.addEventListener('DOMContentLoaded', (event) => {
    //     document.getElementById('skills-info').classList.add('hidden');
    // });
  
    let remainingSkillSlots = 0;
  
    function calculateSkillSlots() {
        let skillSlots = 0; // Yerel skillSlots değişkeni
  
        const calculateSkillSlotsClass = () => {
            const selectedClass = classSelect.value;
  
            if (selectedClass === 'Fighter') {
                skillSlots += 2;
            } else if (selectedClass === 'Wizard') {
                skillSlots += 3;
            } else if (selectedClass === 'Rogue') {
                skillSlots += 4;
            }
        };
  
        const calculateSkillSlotsBackground = () => {
            const selectedBackground = backgroundSelect.value;
            if (selectedBackground === 'Acolyte') {
                skillSlots += 2;
            } else if (selectedBackground === 'Criminal') {
                skillSlots += 2;
            } else if (selectedBackground === 'Folk Hero') {
                skillSlots += 2;
            } else if (selectedBackground === 'Noble') {
                skillSlots += 2;
            } else if (selectedBackground === 'Sage') {
                skillSlots += 2;
            } else if (selectedBackground === 'Soldier') {
                skillSlots += 2;
            }
        };
  
        calculateSkillSlotsClass();
        calculateSkillSlotsBackground();
  
        remainingSkillSlots = skillSlots; // remainingSkillSlots güncelle
        updateRemainingSkillSlots(); // remainingSkillSlots metnini güncelle
  
        document.getElementById('skill-slots').innerText = `Kalan Skill Yuvası: ${skillSlots}`; // Hesaplanan skillSlots değerini güncelle
    }
  
    const updateRemainingSkillSlots = () => {
        document.getElementById('skill-slots').innerText = `Kalan Skill Yuvası: ${remainingSkillSlots}`;
    };
  
    const handleSkillButtonClick = (event) => {
        if (remainingSkillSlots > 0) {
            const skillId = event.target.id.replace('-plus', '');
            skillBonuses[skillId] += 2;
            remainingSkillSlots -= 1;
            updateSkillBonuses();
            updateRemainingSkillSlots();
        }
    };
  
    const classInfo = {
        Fighter: {
            title: "Savaşçı",
            description: "Savaşçılar, güçlü ve taktiksel yetenekleriyle silahlı çatışmalara girebilen savaşçılardır."
        },
        Wizard: {
            title: "Büyücü",
            description: "Büyücüler, güçlü büyüler yapmak için bilgi ve zekalarını kullanan büyücülerdir."
        },
        Rogue: {
            title: "Hırsız",
            description: "Hırsızlar, gizlilik, kilit açma ve tuzak bulma ve etkisiz hale getirme konusunda yeteneklidir."
        }
        // Diğer sınıflar ve bilgileri buraya ekleyin
    };
  
    const updateClassInfo = () => {
        const selectedClass = classSelect.value;
  
        if (selectedClass === "select") {
            classInfoDiv.classList.add('hidden');
            classInfoDiv.classList.remove('visible');
            classInfoDiv.innerHTML = '';
        } else {
            const info = classInfo[selectedClass];
            if (info) {
                classInfoDiv.classList.remove('hidden');
                classInfoDiv.classList.add('visible');
                classInfoDiv.innerHTML = `<h3>${info.title}</h3><p>${info.description}</p>`;
            } else {
                classInfoDiv.classList.add('hidden');
                classInfoDiv.classList.remove('visible');
                classInfoDiv.innerHTML = '';
            }
        }
    };


    document.getElementById('class').addEventListener('change', function() {
        var classSelect = document.getElementById('class');
        var skillsInfo = document.getElementById('skills');

        if (classSelect.value !== "") {
            skillsInfo.classList.remove('hidden');
        } else {
            skillsInfo.classList.add('hidden');
        }
    });
    

    classSelect.addEventListener('change', updateClassInfo);
    updateClassInfo();  // Sayfa yüklendiğinde bilgileri güncelle
    raceSelect.addEventListener('change', updateStatsAndSkills);
    backgroundSelect.addEventListener('change', updateStatsAndSkills);
    classSelect.addEventListener('change', updateStatsAndSkills);
  
    raceSelect.addEventListener('change', calculateSkillSlots);
    backgroundSelect.addEventListener('change', calculateSkillSlots);
    classSelect.addEventListener('change', calculateSkillSlots);
  
    document.querySelectorAll('.plus-button').forEach(button => {
        button.addEventListener('click', handleSkillButtonClick);
    });
  
    document.getElementById('reset-skills').addEventListener('click', () => {
        skillBonuses = {
            athletics: 0,
            acrobatics: 0,
            animalHandling: 0,
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
        remainingSkillSlots = 10;
        updateSkillBonuses();
        updateRemainingSkillSlots();
    });
  
    updateRemainingSkillSlots();
    updateStatsAndSkills();
  });
  
  const hesaplanmisBonus = (stat) => {
    return Math.floor((stat - 10) / 2);
  };
  
  const classPriorities = {
    Fighter: ['str', 'con', 'wis', 'cha', 'dex', 'int'],
    Wizard: ['int', 'wis', 'dex', 'con', 'cha', 'str'],
    Rogue: ['dex', 'int', 'wis', 'cha', 'str', 'con']
  };
  
  const skillDependencies = {
    athletics: 'str-b',
    acrobatics: 'dex-b',
    animalHandling: 'wis-b',
    stealth: 'dex-b',
    sleightOfHand: 'dex-b',
    insight: 'wis-b',
    medicine: 'wis-b',
    history: 'int-b',
    perception: 'wis-b',
    survival: 'wis-b',
    religion: 'int-b',
    investigation: 'int-b',
    nature: 'int-b',
    arcana: 'int-b',
    deception: 'cha-b',
    persuasion: 'cha-b',
    performance: 'cha-b',
    intimidation: 'cha-b'
  };
  
  let stats = {
    str: 10,
    dex: 10,
    con: 10,
    int: 10,
    wis: 10,
    cha: 10
  };
  
  let statBonuses = {
    'str-b': 0,
    'dex-b': 0,
    'con-b': 0,
    'int-b': 0,
    'wis-b': 0,
    'cha-b': 0
  };
  
  let skillBonuses = {
    athletics: 0,
    acrobatics: 0,
    animalHandling: 0,
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
    } else if (race === 'Yarı-Elf') {
        stats.int += 1;
        stats.cha += 2;
    } else if (race === 'Yarı-Orc') {
        stats.con += 1;
        stats.str += 2;
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
  
    if (selectedClass === 'Fighter') {
        stats.str += 5;
        stats.con += 4;
        stats.wis += 3;
        stats.cha += 2;
        stats.dex += 0;
        stats.int += -2;
    } else if (selectedClass === 'Wizard') {
        stats.int += 5;
        stats.wis += 4;
        stats.dex += 3;
        stats.con += 2;
        stats.cha += 0;
        stats.str += -2;
    } else if (selectedClass === 'Rogue') {
        stats.dex += 5;
        stats.int += 4;
        stats.wis += 3;
        stats.cha += 2;
        stats.str += 0;
        stats.con += -2;
    }
  
    statBonuses = {
        'str-b': hesaplanmisBonus(stats.str),
        'dex-b': hesaplanmisBonus(stats.dex),
        'con-b': hesaplanmisBonus(stats.con),
        'int-b': hesaplanmisBonus(stats.int),
        'wis-b': hesaplanmisBonus(stats.wis),
        'cha-b': hesaplanmisBonus(stats.cha)
    };
  
    document.getElementById('str').innerText = `${stats.str} (${statBonuses['str-b']})`;
    document.getElementById('dex').innerText = `${stats.dex} (${statBonuses['dex-b']})`;
    document.getElementById('con').innerText = `${stats.con} (${statBonuses['con-b']})`;
    document.getElementById('int').innerText = `${stats.int} (${statBonuses['int-b']})`;
    document.getElementById('wis').innerText = `${stats.wis} (${statBonuses['wis-b']})`;
    document.getElementById('cha').innerText = `${stats.cha} (${statBonuses['cha-b']})`;
  
  
    Object.keys(skillBonuses).forEach(skill => {
        const dependency = skillDependencies[skill];
        skillBonuses[skill] = statBonuses[dependency];
    });
  
    if (selectedClass !== "select") {
        const classPriority = classPriorities[selectedClass];
  
        stats[classPriority[0]] += 2;
        stats[classPriority[1]] += 1;
  
        statBonuses = {
            'str-b': hesaplanmisBonus(stats.str),
            'dex-b': hesaplanmisBonus(stats.dex),
            'con-b': hesaplanmisBonus(stats.con),
            'int-b': hesaplanmisBonus(stats.int),
            'wis-b': hesaplanmisBonus(stats.wis),
            'cha-b': hesaplanmisBonus(stats.cha)
        };
  
        Object.keys(skillBonuses).forEach(skill => {
            const dependency = skillDependencies[skill];
            skillBonuses[skill] = statBonuses[dependency];
        });
    }
  
    updateSkillBonuses();
  };
  
  const updateSkillBonuses = () => {
    Object.keys(skillBonuses).forEach(skill => {
        const skillValueElement = document.getElementById(`${skill}-value`);
        if (skillValueElement) {
            skillValueElement.innerText = skillBonuses[skill];
        }
    });
  };
  
  const toggleMenu = () => {
    const menu = document.getElementById('hamburger-menu');
    if (menu.classList.contains('hidden')) {
        menu.classList.remove('hidden');
        menu.classList.add('visible');
    } else {
        menu.classList.remove('visible');
        menu.classList.add('hidden');
    }
};

document.addEventListener('click', (event) => {
    const menu = document.getElementById('hamburger-menu');
    const menuIcon = document.querySelector('.menu-icon');

    if (menu.contains(event.target) || menuIcon.contains(event.target)) {
        return;
    }

    if (menu.classList.contains('visible')) {
        menu.classList.remove('visible');
        menu.classList.add('hidden');
    }
});  
