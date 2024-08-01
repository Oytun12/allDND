document.addEventListener("DOMContentLoaded", function() {
    guncelle();
    document.getElementById('race').addEventListener('change', guncelle);
    document.getElementById('background').addEventListener('change', guncelle);
    document.getElementById('class').addEventListener('change', guncelle);

    document.getElementById('race').addEventListener('change', calculateSkillSlots);
    document.getElementById('background').addEventListener('change', calculateSkillSlots);
    document.getElementById('class').addEventListener('change', calculateSkillSlots);
// ------------------------------RACE İNFO-----------------------------------

const raceInfo = {
    Human: {
        title: "İnsan",
        description: "<hr><strong class='bold'>Yetenek Skorları:</strong> <span class='ciz'> Kuv +1; Çev +1; Day +1; Zek +1; Akı +1; Kar +1</span><br>Geri kalan özellikleri Irklar sayfasından bakınız."
    },
    "Elf(Ulu)": {
        title: "Elf(Ulu)",
        description: "<hr><strong class='bold'>Yetenek Skorları:</strong> <span class='ciz'> Çev +2; Zek +1</span><br>Geri kalan özellikleri Irklar sayfasından bakınız."
    },
    "Elf(Or)": {
        title: "Elf(Orman)",
        description: "<hr><strong class='bold'>Yetenek Skorları:</strong> <span class='ciz'> Çev +2; Akı +1</span><br>Geri kalan özellikleri Irklar sayfasından bakınız."
    },
    "Elf(Drow)": {
        title: "Elf(Drow)",
        description: "<hr><strong class='bold'>Yetenek Skorları:</strong> <span class='ciz'> Çev +2; Kar +1</span><br>Geri kalan özellikleri Irklar sayfasından bakınız."
    },
    "Dwarf(Dağ)": {
        title: "Cüce(Dağ)",
        description: "<hr><strong class='bold'>Yetenek Skorları:</strong> <span class='ciz'> Kuv +2; Day +2</span><br>Geri kalan özellikleri Irklar sayfasından bakınız."
    },
    "Dwarf(Tepe)": {
        title: "Cüce(Tepe)",
        description: "<hr><strong class='bold'>Yetenek Skorları:</strong> <span class='ciz'> Day +2; Akı +1</span><br>Geri kalan özellikleri Irklar sayfasından bakınız."
    },
    "Halfling(Tez)": {
        title: "Buçukluk (Tez Ayak)",
        description: "<hr><strong class='bold'>Yetenek Skorları:</strong> <span class='ciz'> Çev +2; Kar +1</span><br>Geri kalan özellikleri Irklar sayfasından bakınız."
    },
    "Halfling(Tık)": {
        title: "Buçukluk (Tıknaz)",
        description: "<hr><strong class='bold'>Yetenek Skorları:</strong> <span class='ciz'> Çev +2; Day +1</span><br>Geri kalan özellikleri Irklar sayfasından bakınız."
    },
    Dragonborn: {
        title: "Ejderdoğan",
        description: "<hr><strong class='bold'>Yetenek Skorları:</strong> <span class='ciz'> Kuv +2; Kar +1</span><br>Geri kalan özellikleri Irklar sayfasından bakınız."
    },
    "Gnome(Kaya)": {
        title: "Gnome(Kaya)",
        description: "<hr><strong class='bold'>Yetenek Skorları:</strong> <span class='ciz'> Day +1; Zek +2</span><br>Geri kalan özellikleri Irklar sayfasından bakınız."
    },
    "Gnome(Or)": {
        title: "Gnome(Orman)",
        description: "<hr><strong class='bold'>Yetenek Skorları:</strong> <span class='ciz'> Çev +1; Zek +2</span><br>Geri kalan özellikleri Irklar sayfasından bakınız."
    },
    Tiefling: {
        title: "Tiefling",
        description: "<hr><strong class='bold'>Yetenek Skorları:</strong> <span class='ciz'> Zek +1; Kar +2</span><br>Geri kalan özellikleri Irklar sayfasından bakınız."
    },
    "Yarı-Ef": {
        title: "Yarı-Elf",
        description: "<hr><strong class='bold'>Yetenek Skorları:</strong> <span class='ciz'> Kar +2; harici herhangi iki +1 seç</span><br>Geri kalan özellikleri Irklar sayfasından bakınız."
    },
    "Yarı-Orc": {
        title: "Yarı-Orc",
        description: "<hr><strong class='bold'>Yetenek Skorları:</strong> <span class='ciz'> Kuv +2; Day +1</span><br>Geri kalan özellikleri Irklar sayfasından bakınız."
    }
    // Diğer ırklar ve bilgileri buraya ekleyin
};

const updateRaceInfo = () => {
    const selectedRace = document.getElementById('race').value;
    const raceInfoDiv = document.getElementById('race-info');
    
    if (selectedRace === "") {
        raceInfoDiv.classList.add('hidden');
        raceInfoDiv.classList.remove('visible');
        raceInfoDiv.innerHTML = '';
    } else {
        const info = raceInfo[selectedRace];
        if (info) {
            raceInfoDiv.classList.remove('hidden');
            raceInfoDiv.classList.add('visible');
            raceInfoDiv.innerHTML = `<h3>${info.title}</h3><p>${info.description}</p>`;
        } else {
            raceInfoDiv.classList.add('hidden');
            raceInfoDiv.classList.remove('visible');
            raceInfoDiv.innerHTML = '';
        }
    }
};

document.getElementById('race').addEventListener('change', updateRaceInfo);

// -------------------------------BACKGROUND İNFO-----------------------------------

const backgroundInfoDiv = document.getElementById("background-info");
    
const backgroundInfo = {
    Soldier: {
        title: "Asker",
        description: "<hr><strong class='bold'>Beceri Uzmanlıkları:</strong> <span class='ciz'>Atletizim</span> ve <span class='ciz'>Gözdağı</span> seçilmelidir.<br>Geri kalan özellikleri Karakter Geçmişleri sayfasından bakınız."
    },
    Sage: {
        title: "Bilge",
        description: "<hr><strong class='bold'>Beceri Uzmanlıkları:</strong> <span class='ciz'>Arcana</span> ve <span class='ciz'>Tarih</span> seçilmelidir. <br> Geri kalan özellikleri Karakter Geçmişleri sayfasından bakınız."
    },
    Denizci: {
        title: "Denizci",
        description: "<hr><strong class='bold'>Beceri Uzmanlıkları:</strong> <span class='ciz'>Atletizim</span> ve <span class='ciz'>Algı</span> seçilmelidir. <br> Geri kalan özellikleri Karakter Geçmişleri sayfasından bakınız."
    },
    DenizciKorsan: {
        title: "Alternatif Denizci (Korsan)",
        description: "<hr><strong class='bold'>Beceri Uzmanlıkları:</strong> <span class='ciz'>Atletizim</span> ve <span class='ciz'>Algı</span> seçilmelidir. <br> Geri kalan özellikleri Karakter Geçmişleri sayfasından bakınız."
    },
    GosteriAdamı: {
        title: "Gösteri Adamı",
        description: "<hr><strong class='bold'>Beceri Uzmanlıkları:</strong> <span class='ciz'>Akrobasi</span> ve <span class='ciz'>Performance</span> seçilmelidir. <br> Geri kalan özellikleri Karakter Geçmişleri sayfasından bakınız."
    },
    GosteriAdamiGladyator: {
        title: "Alternatif Gösteri Adamı (Gladyatör)",
        description: "<hr><strong class='bold'>Beceri Uzmanlıkları:</strong> <span class='ciz'>Akrobasi</span> ve <span class='ciz'>Performance</span> seçilmelidir. <br> Geri kalan özellikleri Karakter Geçmişleri sayfasından bakınız."
    },
    FolkHero: {
        title: "Halk Kahramanı",
        description: "<hr><strong class='bold'>Beceri Uzmanlıkları:</strong><span class='ciz'>Hayvan İdaresi</span> ve <span class='ciz'>Hayatta Kalma</span> seçilmelidir. <brGeri kalan özellikleri Karakter Geçmişleri sayfasından bakınız."
    },
    LocaZanaatkari: {
        title: "Loca Zanaatkarı",
        description: "<hr><strong class='bold'>Beceri Uzmanlıkları:</strong><span class='ciz'>Sezgi</span> ve <span class='ciz'>İkna Etme</span> seçilmelidir. <brGeri kalan özellikleri Karakter Geçmişleri sayfasından bakınız."
    },
    LocaZanaatkariTuccar: {
        title: "Alternatif Loca Zanaatkarı (Loca Tüccarı)t",
        description: "<hr><strong class='bold'>Beceri Uzmanlıkları:</strong><span class='ciz'>Sezgi</span> ve <span class='ciz'>İkna</span> seçilmelidir. <brGeri kalan özellikleri Karakter Geçmişleri sayfasından bakınız."
    },
    Munzevi: {
        title: "Münzevi (İnzivaya çekilmiş kimse)",
        description: "<hr><strong class='bold'>Beceri Uzmanlıkları:</strong><span class='ciz'>Tıp</span> ve <span class='ciz'>Din</span> seçilmelidir. <brGeri kalan özellikleri Karakter Geçmişleri sayfasından bakınız."
    },
    Murit: {
        title: "Mürit",
        description: "<hr><strong class='bold'>Beceri Uzmanlıkları:</strong><span class='ciz'>Sezgi</span> ve <span class='ciz'>Din</span> seçilmelidir. <brGeri kalan özellikleri Karakter Geçmişleri sayfasından bakınız."
    },
    SokakCocugu: {
        title: "Sokak Çocuğu",
        description: "<hr><strong class='bold'>Beceri Uzmanlıkları:</strong><span class='ciz'>El Çubukluğu</span> ve <span class='ciz'>Gizlenme</span> seçilmelidir. <brGeri kalan özellikleri Karakter Geçmişleri sayfasından bakınız."
    },
    Soylu: {
        title: "Soylu",
        description: "<hr><strong class='bold'>Beceri Uzmanlıkları:</strong><span class='ciz'>Tarih</span> ve <span class='ciz'>İkna</span> seçilmelidir. <brGeri kalan özellikleri Karakter Geçmişleri sayfasından bakınız."
    },
    SoyluSovalye: {
        title: "Alternatif Soylu (Şövalye)",
        description: "<hr><strong class='bold'>Beceri Uzmanlıkları:</strong><span class='ciz'>Tarih</span> ve <span class='ciz'>İkna</span> seçilmelidir. <brGeri kalan özellikleri Karakter Geçmişleri sayfasından bakınız."
    },
    Suclu: {
        title: "Suçlu",
        description: "<hr><strong class='bold'>Beceri Uzmanlıkları:</strong><span class='ciz'>Aldatma</span> ve <span class='ciz'>Gizlenme</span> seçilmelidir. <brGeri kalan özellikleri Karakter Geçmişleri sayfasından bakınız."
    },
    SucluAjan: {
        title: "Alternatif Suçlu (Ajan)",
        description: "<hr><strong class='bold'>Beceri Uzmanlıkları:</strong><span class='ciz'>Aldatma</span> ve <span class='ciz'>Gizlenme</span> seçilmelidir. <brGeri kalan özellikleri Karakter Geçmişleri sayfasından bakınız."
    },
    Yabanci: {
        title: "Yabancı",
        description: "<hr><strong class='bold'>Beceri Uzmanlıkları:</strong><span class='ciz'>Atletizim</span> ve <span class='ciz'>Hayatta Kalma</span> seçilmelidir. <brGeri kalan özellikleri Karakter Geçmişleri sayfasından bakınız."
    },
    Sarlatan: {
        title: "Şarlatan",
        description: "<hr><strong class='bold'>Beceri Uzmanlıkları:</strong><span class='ciz'>Aldatma</span> ve <span class='ciz'>El Çabukluğu</span> seçilmelidir. <brGeri kalan özellikleri Karakter Geçmişleri sayfasından bakınız."
    },
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
    const backgroundsWithBonus = [
        'Criminal', 'FolkHero', 'Sage', 'Soldier', 
        'Denizci', 'DenizciKorsan', 'GosteriAdamı', 'GosteriAdamiGladyator', 
        'LocaZanaatkari', 'LocaZanaatkariTuccar', 'Munzevi', 'Murit', 
        'SokakCocugu', 'Soylu', 'SoyluSovalye', 'Suclu', 'SucluAjan', 
        'Yabanci', 'Sarlatan'
    ];

    if (backgroundsWithBonus.includes(selectedBackground)) {
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
    document.getElementById('StatStr').innerHTML = "<div class='containerStat'><div class='strTxt'>Güç (STR): </div><div id='stricon'><div class='strB'>" + stats.str + "(" + statBonuses.strB + ")</div></div></div>";
    document.getElementById('StatDex').innerHTML = "<div class='containerStat'><div class='dexTxt'>Çeviklik (DEX): </div><div id='dexicon'><div class='dexB'>" + stats.dex + "(" + statBonuses.dexB + ")</div></div></div>";
    document.getElementById('StatCon').innerHTML = "<div class='containerStat'><div class='conTxt'>Dayanıklılık (CON): </div><div id='conicon'><div class='conB'>" + stats.con + "(" + statBonuses.conB + ")</div></div></div>";
    document.getElementById('StatInt').innerHTML = "<div class='containerStat'><div class='intTxt'>Zeka (INT): </div><div id='inticon'><div class='intB'>" + stats.int + "(" + statBonuses.intB + ")</div></div></div>";
    document.getElementById('StatWis').innerHTML = "<div class='containerStat'><div class='wisTxt'>Bilgelik (WIS): </div><div id='wisicon'><div class='wisB'>" + stats.wis + "(" + statBonuses.wisB + ")</div></div></div>";
    document.getElementById('StatCha').innerHTML = "<div class='containerStat'><div class='chaTxt'>Karizma (CHA): </div><div id='chaicon'><div class='chaB'>" + stats.cha + "(" + statBonuses.chaB + ")</div></div></div>";

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

    // if (background === 'Soldier') {
    //     stats.str += 1;
    //     stats.con += 1;
    // } else if (background === 'Criminal') {
    //     stats.dex += 1;
    // } else if (background === 'FolkHero') {
    //     stats.str += 1;
    // } else if (background === 'Noble') {
    //     stats.cha += 1;
    // } else if (background === 'Sage') {
    //     stats.int += 1;
    // } else if (background === 'Sarlatan') {
    //     stats.str += 1;
    //     stats.con += 1;
    // }
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
