document.addEventListener("DOMContentLoaded", function() {
    guncelle();
    document.getElementById('race').addEventListener('change', guncelle);
    document.getElementById('background').addEventListener('change', guncelle);
    document.getElementById('class').addEventListener('change', guncelle);

    document.getElementById('race').addEventListener('change', calculateSkillSlots);
    document.getElementById('background').addEventListener('change', calculateSkillSlots);
    document.getElementById('class').addEventListener('change', calculateSkillSlots);

// ------------------------------CLASS İNFO-----------------------------------

    const classInfoDiv = document.getElementById("class-info");
    document.getElementById('skills').classList.add('hidden');


    const classInfo = {
        Fighter: {
            title: "Savaşçı",
            description: "<hr><strong class='bold'>Beceri Uzmanlıkları.</strong>Bunlardan 2 tanesi seçilmelidir. <span class='ciz' >Akrobasi, Hayvan İdaresi, Atletizm, Tarih, Sezgi, Gözdağı, Algı, ve Hayatta Kalma.</span><br>Savaşçılar, güçlü ve taktiksel yetenekleriyle silahlı çatışmalara girebilen savaşçılardır."
        },
        Wizard: {
            title: "Büyücü",
            description: "<hr>Büyücüler, güçlü büyüler yapmak için bilgi ve zekalarını kullanan büyücülerdir."
        },
        Rogue: {
            title: "Hırsız",
            description: "<hr>Hırsızlar, gizlilik, kilit açma ve tuzak bulma ve etkisiz hale getirme konusunda yeteneklidir."
        }
        // Diğer sınıflar ve bilgileri buraya ekleyin
    };
  
    const updateClassInfo = () => {
        const selectedClass = document.getElementById('class').value;
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
    document.getElementById('class').addEventListener('change', updateClassInfo);

// -------------------------------BACKGROUND İNFO-----------------------------------

const backgroundInfoDiv = document.getElementById("background-info");
    
const backgroundInfo = {
    Acolyte: {
        title: "Rahip",
        description: "<hr>Rahipler, dini hizmetlerde bulunmuş kişilerdir. Tanrılarıyla güçlü bir bağları vardır."
    },
    Criminal: {
        title: "Suçlu",
        description: "<hr>Suçlular, kanun dışı işlerle uğraşmış kişilerdir. Gizlilik ve kurnazlık konusunda uzmandırlar."
    },
    FolkHero: {
        title: "Halk Kahramanı",
        description: "<hr>Halk Kahramanları, halk arasında destansı hikayeleriyle tanınan kişilerdir."
    },
    Noble: {
        title: "Asilzade",
        description: "<hr>Asilzadeler, soylu bir aileden gelen kişilerdir. Diplomasi ve liderlik yetenekleri gelişmiştir."
    },
    Sage: {
        title: "Bilge",
        description: "<hr>Bilgeler, bilgiye ve öğrenmeye adanmış kişilerdir. Tarih ve araştırma konularında uzmandırlar."
    },
    Soldier: {
        title: "Asker",
        description: "<hr><strong class='bold'>Beceri Uzmanlıkları:</strong> <span class='ciz'>Atletizim</span> ve <span class='ciz'>Gözdağı</span> seçilmelidir.<br>Geri kalan özellikleri Karakter Geçmişleri sayfasından bakınız."
    }
    // Diğer backgroundlar ve bilgileri buraya ekleyin
};

const updateBackgroundInfo = () => {
    const selectedBackground = document.getElementById('background').value;
    if (selectedBackground === "select") {
        backgroundInfoDiv.classList.add('hidden');

        backgroundInfoDiv.innerHTML = '';
    } else {
        const info = backgroundInfo[selectedBackground];
        if (info) {
            backgroundInfoDiv.classList.remove('hidden');
            backgroundInfoDiv.innerHTML = `<h3>${info.title}</h3><p>${info.description}</p>`;
        } else {
            backgroundInfoDiv.classList.add('hidden');
            backgroundInfoDiv.innerHTML = '';
        }
    }
};

document.getElementById('background').addEventListener('change', updateBackgroundInfo);


// -------------------------------SKİLL SLOT-----------------------------------------------

let remainingSkillSlots = 0; 
const skillSlotEksi = () => {
    if (remainingSkillSlots < 0) {
        document.getElementById('skill-slot-eksi').classList.remove('hidden');
    } else {
        document.getElementById('skill-slot-eksi').classList.add('hidden');
    }
}
function calculateSkillSlots() {
    let skillSlots = 0; // Yerel skillSlots değişkeni

    const selectedClass = document.getElementById('class').value;
    if (selectedClass === 'Fighter') {
        skillSlots += 2;
    } else if (selectedClass === 'Wizard') {
        skillSlots += 3;
    } else if (selectedClass === 'Rogue') {
        skillSlots += 4;
    }

    const selectedBackground = document.getElementById('background').value;
    if (selectedBackground === 'Acolyte') {
        skillSlots += 2;
    } else if (selectedBackground === 'Criminal') {
        skillSlots += 2;
    } else if (selectedBackground === 'FolkHero') {
        skillSlots += 2;
    } else if (selectedBackground === 'Noble') {
        skillSlots += 2;
    } else if (selectedBackground === 'Sage') {
        skillSlots += 2;
    } else if (selectedBackground === 'Soldier') {
        skillSlots += 2;
    }

    remainingSkillSlots = skillSlots; // remainingSkillSlots güncelle
    updateRemainingSkillSlots(); // remainingSkillSlots metnini güncelle
};
const updateRemainingSkillSlots = () => {
    document.getElementById('skill-slots').innerText = `Kalan Skill Yuvası: ${remainingSkillSlots}`; // Hesaplanan skillSlots değerini güncelle
    skillSlotEksi();
};

const toggleBonus = (skillId, buttonId, skillBonusKey) => {
    const button = document.getElementById(buttonId);
    if (button.classList.contains('active')) {
        button.classList.remove('active');
        document.getElementById(skillId).innerHTML = skillBonuses[skillBonusKey];
        remainingSkillSlots += 1;
    } else {
        button.classList.add('active');
        document.getElementById(skillId).innerHTML = skillBonuses[skillBonusKey] + 2;
        remainingSkillSlots -= 1;
    }
    updateRemainingSkillSlots();
};


const resetAllButtons = () => {
    const skillButtons = document.querySelectorAll('.skillButton');
    skillButtons.forEach(button => {
        button.classList.remove('active');
    });
};

// Fonksiyonları window nesnesine atama
window.toggleBonusAthletics = () => toggleBonus('athletics', 'But-athletics', 'athletics');
window.toggleBonusAcrobatics = () => toggleBonus('acrobatics', 'But-acrobatics', 'acrobatics');
window.toggleBonusSleightOfHand = () => toggleBonus('sleightOfHand', 'But-sleightOfHand', 'sleightOfHand');
window.toggleBonusStealth = () => toggleBonus('stealth', 'But-stealth', 'stealth');
window.toggleBonusHistory = () => toggleBonus('history', 'But-history', 'history');
window.toggleBonusReligion = () => toggleBonus('religion', 'But-religion', 'religion');
window.toggleBonusInvestigation = () => toggleBonus('investigation', 'But-investigation', 'investigation');
window.toggleBonusNature = () => toggleBonus('nature', 'But-nature', 'nature');
window.toggleBonusArcana = () => toggleBonus('arcana', 'But-arcana', 'arcana');
window.toggleBonusAnimalHandling = () => toggleBonus('animalHandling', 'But-animalHandling', 'animalHandling');
window.toggleBonusInsight = () => toggleBonus('insight', 'But-insight', 'insight');
window.toggleBonusMedicine = () => toggleBonus('medicine', 'But-medicine', 'medicine');
window.toggleBonusPerception = () => toggleBonus('perception', 'But-perception', 'perception');
window.toggleBonusSurvival = () => toggleBonus('survival', 'But-survival', 'survival');
window.toggleBonusDeception = () => toggleBonus('deception', 'But-deception', 'deception');
window.toggleBonusPersuasion = () => toggleBonus('persuasion', 'But-persuasion', 'persuasion');
window.toggleBonusPerformance = () => toggleBonus('performance', 'But-performance', 'performance');
window.toggleBonusIntimidation = () => toggleBonus('intimidation', 'But-intimidation', 'intimidation');

document.getElementById('class').addEventListener('change', () => {
    resetAllButtons();
    calculateSkillSlots();
});

document.getElementById('background').addEventListener('change', () => {
    resetAllButtons();
    calculateSkillSlots();
});

calculateSkillSlots(); // Başlangıçta çağrılır


  });

  // -----------------------STAT AND SKİLL------------------------------------------

let stats = {
    str: 10,
    dex: 10,
    con: 10,
    int: 10,
    wis: 10,
    cha: 10
};

const statBonuses = {
    strB: 0,
    dexB: 0,
    conB: 0,
    intB: 0,
    wisB: 0,
    chaB: 0
};

// -------------------------------Stat-Skill----------------------------------

const hesaplanmisBonus = () => {
    statBonuses.strB = Math.floor((stats.str - 10) / 2);
    statBonuses.dexB = Math.floor((stats.dex - 10) / 2);
    statBonuses.conB = Math.floor((stats.con - 10) / 2);
    statBonuses.intB = Math.floor((stats.int - 10) / 2);
    statBonuses.wisB = Math.floor((stats.wis - 10) / 2);
    statBonuses.chaB = Math.floor((stats.cha - 10) / 2);
};
let skillBonuses = {
    athletics: 0,
    acrobatics: 0,
    stealth: 0,
    sleightOfHand: 0,
    history: 0,
    religion: 0,
    investigation: 0,
    nature: 0,
    arcana: 0,
    animalHandling: 0,
    insight: 0,
    medicine: 0,
    perception: 0,
    survival: 0,
    deception: 0,
    persuasion: 0,
    performance: 0,
    intimidation: 0
};

const skillBonuslariGuncelle = () => {
    skillBonuses.athletics = statBonuses.strB;
    skillBonuses.acrobatics = statBonuses.dexB;
    skillBonuses.stealth = statBonuses.dexB;
    skillBonuses.sleightOfHand = statBonuses.dexB;
    skillBonuses.history = statBonuses.intB;
    skillBonuses.religion = statBonuses.intB;
    skillBonuses.investigation = statBonuses.intB;
    skillBonuses.nature = statBonuses.intB;
    skillBonuses.arcana = statBonuses.intB;
    skillBonuses.animalHandling = statBonuses.wisB;
    skillBonuses.insight = statBonuses.wisB;
    skillBonuses.medicine = statBonuses.wisB;
    skillBonuses.perception = statBonuses.wisB;
    skillBonuses.survival = statBonuses.wisB;
    skillBonuses.deception = statBonuses.chaB;
    skillBonuses.persuasion = statBonuses.chaB;
    skillBonuses.performance = statBonuses.chaB;
    skillBonuses.intimidation = statBonuses.chaB;
};

const updateStatsAndSkills = () => {
    skillBonuslariGuncelle();
    hesaplanmisBonus(); 

    document.getElementById('StatStr').innerHTML = "Güç (STR): <span id='str'>" + stats.str + " (" + statBonuses.strB + ")</span>";
    document.getElementById('StatDex').innerHTML = "Çeviklik (DEX): <span id='dex'>" + stats.dex + " (" + statBonuses.dexB + ")</span>";
    document.getElementById('StatCon').innerHTML = "Dayanıklılık (CON): <span id='con'>" + stats.con + " (" + statBonuses.conB + ")</span>";
    document.getElementById('StatInt').innerHTML = "Zeka (INT): <span id='int'>" + stats.int + " (" + statBonuses.intB + ")</span>";
    document.getElementById('StatWis').innerHTML = "Bilgelik (WIS): <span id='wis'>" + stats.wis + " (" + statBonuses.wisB + ")</span>";
    document.getElementById('StatCha').innerHTML = "Karizma (CHA): <span id='cha'>" + stats.cha + " (" + statBonuses.chaB + ")</span>";

    document.getElementById('athletics').innerHTML = skillBonuses.athletics;
    document.getElementById('acrobatics').innerHTML = skillBonuses.acrobatics;
    document.getElementById('stealth').innerHTML = skillBonuses.stealth;
    document.getElementById('sleightOfHand').innerHTML = skillBonuses.sleightOfHand;
    document.getElementById('history').innerHTML = skillBonuses.history;
    document.getElementById('religion').innerHTML = skillBonuses.religion;
    document.getElementById('investigation').innerHTML = skillBonuses.investigation;
    document.getElementById('nature').innerHTML = skillBonuses.nature;
    document.getElementById('arcana').innerHTML = skillBonuses.arcana;
    document.getElementById('animalHandling').innerHTML = skillBonuses.animalHandling;
    document.getElementById('insight').innerHTML = skillBonuses.insight;
    document.getElementById('medicine').innerHTML = skillBonuses.medicine;
    document.getElementById('perception').innerHTML = skillBonuses.perception;
    document.getElementById('survival').innerHTML = skillBonuses.survival;
    document.getElementById('deception').innerHTML = skillBonuses.deception;
    document.getElementById('persuasion').innerHTML = skillBonuses.persuasion;
    document.getElementById('performance').innerHTML = skillBonuses.performance;
    document.getElementById('intimidation').innerHTML = skillBonuses.intimidation;
    };

// ------------------------------------------------
const applyRaceBonuses = () => {
    const race = document.getElementById('race').value;

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
};

const applyBackgroundBonuses = () => {
    const background = document.getElementById('background').value;

    if (background === 'Acolyte') {
        stats.wis += 1;
    } else if (background === 'Criminal') {
        stats.dex += 1;
    } else if (background === 'FolkHero') {
        stats.str += 1;
    } else if (background === 'Noble') {
        stats.cha += 1;
    } else if (background === 'Sage') {
        stats.int += 1;
    } else if (background === 'Soldier') {
        stats.str += 1;
        stats.con += 1;
    }
};

const applyClassBonuses = () => {
    const selectedClass = document.getElementById('class').value;

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
};

// ---------------------------GÜNCELLE--------------------------------------

const guncelle = () => {
    applyRaceBonuses();
    applyBackgroundBonuses();
    applyClassBonuses();
    hesaplanmisBonus();
    updateStatsAndSkills();
};

// -------------------------------MENÜ----------------------------------

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