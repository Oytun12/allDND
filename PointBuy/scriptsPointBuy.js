document.addEventListener('DOMContentLoaded', () => {
    guncelle();
    document.getElementById('race').addEventListener('change', guncelle);
    document.getElementById('background').addEventListener('change', guncelle);
    document.getElementById('class').addEventListener('change', guncelle);


    document.getElementById('race').addEventListener('change', calculateSkillSlots);
    document.getElementById('background').addEventListener('change', calculateSkillSlots);
    document.getElementById('class').addEventListener('change', calculateSkillSlots);



    const form = document.getElementById('character-form');
    const raceForm = document.getElementById('race-form');
    const statInputs = form.querySelectorAll('input[type="number"]');
    const totalPointsElement = document.getElementById('total-points');
    const submitBtn = document.getElementById('submit-btn');
    const resetBtn = document.getElementById('reset-btn');

    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('input', guncelle);
    });
    // if (window.innerWidth < 800) {
    //     // document.querySelector('meta[name="viewport"]').setAttribute('content', 'width=800, initial-scale=' + (window.innerWidth / 800));
    //     const cost = document.getElementById('race-info');
    //     cost.classList.add('hidden');
    // }
    let totalPoints = 0;

    let statBonuses = {
        strB: 0,
        dexB: 0,
        conB: 0,
        intB: 0,
        wisB: 0,
        chaB: 0
    };

    const statCostTable = {
        8: 0,
        9: 1,
        10: 2,
        11: 3,
        12: 4,
        13: 5,
        14: 7,
        15: 9
    };

    const raceBonuses = {
        Select: {strB: 0, dexB: 0, conB: 0, intB: 0, wisB: 0, chaB: 0},
        Human: {strB: 1, dexB: 1, conB: 1, intB: 1, wisB: 1, chaB: 1},
      
        "Elf(Ulu)": {strB: 0, dexB: 2, conB: 0, intB: 1, wisB: 0, chaB: 0},
        "Elf(Or)": {strB: 0, dexB: 2, conB: 0, intB: 0, wisB: 1, chaB: 0},
        "Elf(Drow)": {strB: 0, dexB: 2, conB: 0, intB: 0, wisB: 0, chaB: 1},
        "Dwarf(Dağ)": {strB: 2, dexB: 0, conB: 2, intB: 0, wisB: 0, chaB: 0},
        "Dwarf(Tepe)": {strB: 0, dexB: 0, conB: 2, intB: 0, wisB: 1, chaB: 0},
        "Halfling(Tez)": {strB: 0, dexB: 2, conB: 0, intB: 0, wisB: 0, chaB: 1},
        "Halfling(Tık)": {strB: 0, dexB: 2, conB: 1, intB: 0, wisB: 0, chaB: 0},
        Dragonborn: {strB: 2, dexB: 0, conB: 0, intB: 0, wisB: 0, chaB: 1},
        "Gnome(Kaya)": {strB: 0, dexB: 0, conB: 1, intB: 2, wisB: 0, chaB: 0},
        "Gnome(Or)": {strB: 0, dexB: 1, conB: 0, intB: 2, wisB: 0, chaB: 0},
        Tiefling: {strB: 0, dexB: 0, conB: 0, intB: 1, wisB: 0, chaB: 2},
      
        "Yarı-Orc": {strB: 2, dexB: 0, conB: 1, intB: 0, wisB: 0, chaB: 0},
    };


    const calculateStatCost = (stat) => {
        return statCostTable[stat] || 0;
    };

    const calculateModifier = (score) => {
        return Math.floor((score - 10) / 2);
    };

    const calculatePointsRemaining = () => {
        totalPoints = 0;
        statInputs.forEach(input => {
            const statValue = parseInt(input.value, 10);
            totalPoints += calculateStatCost(statValue);
        });
        totalPointsElement.textContent = `${totalPoints}/27`;
        submitBtn.disabled = totalPoints > 27;
    };

    const updateTotalsAndModifiers = () => {
        statInputs.forEach(input => {
            const statValue = parseInt(input.value, 10);
            const statName = input.name;
            const racialBonus = statBonuses[`${statName}B`] || 0;
            const total = statValue + racialBonus;
            const modifier = calculateModifier(total);

            document.getElementById(`${statName}-total`).textContent = total;
            document.getElementById(`${statName}-modifier`).textContent = modifier;
            document.getElementById(`${statName}-cost`).textContent = calculateStatCost(statValue);
        });
    };
    
    const updateRaceBonuses = (race) => {
        // Stat bonuslarını sıfırla
        statBonuses = {strB: 0, dexB: 0, conB: 0, intB: 0, wisB: 0, chaB: 0};
    
        // Seçilen ırkın bonuslarını uygula
        if (race === 'HumanVariant') {
            // Human Variant için custom bonusları al
            const bonus1 = document.getElementById('custom-bonus-1').value;
            const bonus2 = document.getElementById('custom-bonus-2') ? document.getElementById('custom-bonus-2').value : '';
    
            // Seçilen bonusları uygula
            if (bonus1) statBonuses[bonus1]++;
            if (bonus2) statBonuses[bonus2]++;
        } else if (race === 'Yarı-Elf') {
            // Yarı-Elf için custom bonusu al (customBonus3 kullanılıyor)
            const bonus3 = document.getElementById('custom-bonus-3') ? document.getElementById('custom-bonus-3').value : '';
    
            // Seçilen bonusları uygula
            if (bonus3) statBonuses[bonus3]++;
            statBonuses.chaB += 2; // Yarı-Elf için CHA bonusu her zaman +2
        } else {
            // Diğer ırklar için bonusları uygula
            statBonuses = {...raceBonuses[race]};
        }
    
        // Bonusları UI'ya yansıt
        Object.keys(statBonuses).forEach(key => {
            document.getElementById(`${key.split('B')[0]}-racial`).textContent = statBonuses[key];
        });
    
        // Toplamları ve modifikatorleri güncelle
        updateTotalsAndModifiers();
    };
    
    document.addEventListener('DOMContentLoaded', () => {
        const customBonus1 = document.getElementById('custom-bonus-1');
        const customBonus2 = document.getElementById('custom-bonus-2');
        const customBonus3 = document.getElementById('custom-bonus-3');
    
        if (customBonus1) {
            customBonus1.addEventListener('change', () => {
                updateRaceBonuses(document.getElementById('race').value);
            });
        }
    
        if (customBonus2) {
            customBonus2.addEventListener('change', () => {
                updateRaceBonuses(document.getElementById('race').value);
            });
        }
    
        if (customBonus3) {
            customBonus3.addEventListener('change', () => {
                updateRaceBonuses(document.getElementById('race').value);
            });
        }
    
        document.getElementById('race').addEventListener('change', (event) => {
            const selectedRace = event.target.value;
            updateRaceBonuses(selectedRace);
        });
    });
    
    
    const customBonus1 = document.getElementById('custom-bonus-1');
    const customBonus2 = document.getElementById('custom-bonus-2');
    const customBonus3 = document.getElementById('custom-bonus-3');

    if (customBonus1) {
        customBonus1.addEventListener('change', () => {
            updateRaceBonuses(document.getElementById('race').value);
            updateTotalsAndModifiers();
         });
    }

    if (customBonus2) {
        customBonus2.addEventListener('change', () => {
            updateRaceBonuses(document.getElementById('race').value);
            updateTotalsAndModifiers();
        });
    }
    if (customBonus3) {
        customBonus3.addEventListener('change', () => {
            updateRaceBonuses(document.getElementById('race').value);
            updateTotalsAndModifiers();
        });
    }
    
    
    
    raceForm.addEventListener('change', (event) => {
        const selectedRace = event.target.value;
        updateRaceBonuses(selectedRace);
    });

    statInputs.forEach(input => {
        input.addEventListener('change', () => {
            if (input.value < 8) input.value = 8;
            if (input.value > 15) input.value = 15;
            calculatePointsRemaining();
            updateTotalsAndModifiers();
        });
    });

    raceForm.addEventListener('change', (event) => {
        const selectedRace = event.target.value;
        // console.log(`Selected race: ${selectedRace}`); // Burada seçilen ırkı konsola yazdırın
        updateRaceBonuses(selectedRace);
    });

    resetBtn.addEventListener('click', () => {
        statInputs.forEach(input => input.value = 8);
        updateRaceBonuses('select'); // Default race olarak "human" seçebilirsiniz
        calculatePointsRemaining();
        updateTotalsAndModifiers();
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Character created successfully!');
        form.reset();
        updateRaceBonuses('select');
        calculatePointsRemaining();
        updateTotalsAndModifiers();
    });

    calculatePointsRemaining();
    updateTotalsAndModifiers();
    updateRaceBonuses('Select'); // Sayfa yüklendiğinde varsayılan ırkı ayarla


});    
// ------------------------------RACE İNFO-----------------------------------

const raceInfo = {
    Human: {
        title: "İnsan",
        description: "<hr><strong class='bold'>Yetenek Skorları:</strong> <span class='ciz'> Kuv +1; Çev +1; Day +1; Zek +1; Akı +1; Kar +1</span><br>Geri kalan özellikleri Irklar sayfasından bakınız."
    },
    // HumanVariant: {
    //     title: "Alternatif İnsan"
    // //     description: "<hr><strong class='bold'>Yetenek Skorları:</strong> <span class='ciz'> herhangi iki farklı stata +1 alır.</span><br><div id='custom-bonuses' name='HumanVariant1' required>    <label for='custom-bonus-1'>Birinci bonus:</label>    <select id='custom-bonus-1'>        <option value='strB'>Strength</option>        <option value='dexB'>Dexterity</option>        <option value='conB'>Constitution</option>        <option value='intB'>Intelligence</option>        <option value='wisB'>Wisdom</option>        <option value='chaB'>Charisma</option>    </select>    <label for='custom-bonus-2' id='custom-bonus-2-label'>İkinci bonus:</label>    <select id='custom-bonus-2'>        <option value='strB'>Strength</option>        <option value='dexB'>Dexterity</option>        <option value='conB'>Constitution</option>        <option value='intB'>Intelligence</option>        <option value='wisB'>Wisdom</option>        <option value='chaB'>Charisma</option>    </select></div><br><br><strong class='bold'>Beceriler:  </strong><span class='ciz'>Seçeceğin bir beceride uzmanlık kazanırsın.</span><br>Geri kalan özellikleri Irklar sayfasından bakınız."
    // },
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
    // "Yarı-Elf": {
    //     title: "Yarı-Elf",
    //     description: "<hr><strong class='bold'>Yetenek Skorları:</strong> <span class='ciz'> herhangi iki farklı stata +1 alır.</span><br><div id='custom-bonuses' name='HumanVariant1' required>    <label for='custom-bonus-1'>Birinci bonus:</label>    <select id='custom-bonus-1'>        <option value='strB'>Strength</option>        <option value='dexB'>Dexterity</option>        <option value='conB'>Constitution</option>        <option value='intB'>Intelligence</option>        <option value='wisB'>Wisdom</option>        <option value='chaB'>Charisma</option>    </select>    </div><br><strong class='bold'>Beceriler:  </strong><span class='ciz'>Seçeceğin bir beceride uzmanlık kazanırsın.</span><br>Geri kalan özellikleri Irklar sayfasından bakınız."
    // },
    "Yarı-Orc": {
        title: "Yarı-Orc",
        description: "<hr><strong class='bold'>Yetenek Skorları:</strong> <span class='ciz'> Kuv +2; Day +1</span><br>Geri kalan özellikleri Irklar sayfasından bakınız."
    }
    // Diğer ırklar ve bilgileri buraya ekleyin
};

const updateRaceInfo = () => {
    const selectedRace = document.getElementById('race').value;
    const raceInfoDiv = document.getElementById('race-info');

    if (selectedRace === "Select") {
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
    const raceInfoVariH = document.getElementById('race-variant-H');
        if (selectedRace === "HumanVariant") {
            raceInfoVariH.classList.remove('hidden');
            raceInfoVariH.classList.add('visible');
        } else {
            raceInfoVariH.classList.add('hidden');
            raceInfoVariH.classList.remove('visible');
        }
    const raceInfoVariE = document.getElementById('race-variant-E');
        if (selectedRace === "Yarı-Elf") {
            raceInfoVariE.classList.remove('hidden');
            raceInfoVariE.classList.add('visible');
        } else {
            raceInfoVariE.classList.add('hidden');
            raceInfoVariE.classList.remove('visible');
        }
    
};

// `updateRaceInfo` fonksiyonunu HTML öğelerine bağlayın
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

const classInfo = {
    Barbarian: {
        title: "Barbar",
        description: "<hr><strong class='bold'>Tavsiye edilen birincil öncelikli stat:  </strong> <span class='ciz'>Kuvvet</span> <br><strong class='bold'>Tavsiye edilen ikincil öncelikli stat:  </strong> <span class='ciz'>Dayanıklılık</span><br><strong class='bold'>1. seviyede Hit Puanı: </strong><span class='ciz'> 12 + Dayanıklılık bonusu</span><br><strong class='bold'>Beceriler:  </strong>Bunlardan 2 tanesini seç: <span class='ciz'>Hayvan İdaresi, Atletizm, Gözdağı, Doğa, Algı, ve Hayatta Kalma.</span><br> Geri kalan özellikleri Sınıflar sayfasından bakınız."
    },
    Bard: {
        title: "Bard",
        description: "<hr><strong class='bold'>Tavsiye edilen birincil öncelikli stat:</strong> <span class='ciz'>Karizma</span><br><strong class='bold'>Tavsiye edilen ikincil öncelikli stat:</strong> <span class='ciz'>Çeviklik</span><br><strong class='bold'>1. seviyede Hit Puanı: </strong><span class='ciz'> 8 + Dayanıklılık bonusu</span><br><strong class='bold'>Beceriler:  </strong><span class='ciz'>Tümü arasından 3 tane seç.</span><br>Geri kalan özellikleri Sınıflar sayfasından bakınız."
    },
    Cleric: {
        title: "Rahip",
        description: "<hr><strong class='bold'>Tavsiye edilen birincil öncelikli stat:</strong> <span class='ciz'>Akıl</span>   <br><strong class='bold'>Tavsiye edilen ikincil öncelikli stat:</strong> <span class='ciz'>Dayanıklılık</span><br><strong class='bold'>1. seviyede Hit Puanı: </strong><span class='ciz'> 8 + Dayanıklılık bonusu</span><br><strong class='bold'>Beceriler:  </strong>Bunlardan 2 tanesini seç: <span class='ciz'>Tarih, Sezgi, Tıp, İkna, ve Din.</span><br> Geri kalan özellikleri Sınıflar sayfasından bakınız."
    },
    Druid: {
        title: "Druid",
        description: "<hr><strong class='bold'>Tavsiye edilen birincil öncelikli stat:</strong> <span class='ciz'>Akıl</span>   <br><strong class='bold'>Tavsiye edilen ikincil öncelikli stat:</strong> <span class='ciz'>Dayanıklılık</span><br><strong class='bold'>1. seviyede Hit Puanı: </strong><span class='ciz'> 8 + Dayanıklılık bonusu</span><br><strong class='bold'>Beceriler:  </strong>Bunlardan 2 tanesini seç: <span class='ciz'> Arcana, Hayvan İdaresi, Sezgi, Tıp, Doğa, Algı, Din, ve Hayatta Kalma.</span><br> Geri kalan özellikleri Sınıflar sayfasından bakınız."
    },
    Fighter: {
        title: "Savaşçı",
        description: "<hr><strong class='bold'>Tavsiye edilen birincil öncelikli stat:</strong> <span class='ciz'>Kuvvet</span> <br><strong class='bold'>Tavsiye edilen ikincil öncelikli stat:</strong> <span class='ciz'>Dayanıklılık</span><br><strong class='bold'>1. seviyede Hit Puanı: </strong><span class='ciz'> 10 + Dayanıklılık bonus</span>u<br><strong class='bold'>Beceriler:  </strong>Bunlardan 2 tanesini seç: <span class='ciz'> Akrobasi, Hayvan İdaresi, Atletizm, Tarih, Sezgi, Gözdağı, Algı, ve Hayatta Kalma.</span><br> Geri kalan özellikleri Sınıflar sayfasından bakınız."
    },
    Monk: {
        title: "Keşiş",
        description: "<hr><strong class='bold'>Tavsiye edilen birincil öncelikli stat:</strong> <span class='ciz'>Çeviklik</span> <br><strong class='bold'>Tavsiye edilen ikincil öncelikli stat:</strong> <span class='ciz'>Akıl</span><br><strong class='bold'>1. seviyede Hit Puanı: </strong><span class='ciz'> 8 + Dayanıklılık bonusu</span><br><strong class='bold'>Beceriler:  </strong>Bunlardan 2 tanesini seç: <span class='ciz'>Akrobasi, Atletizm, Tarih, Sezgi, Din, ve Gizlenme.</span><br> Geri kalan özellikleri Sınıflar sayfasından bakınız."
    },
    Paladin: {
        title: "Paladin",
        description: "<hr><strong class='bold'>Tavsiye edilen birincil öncelikli stat:</strong> <span class='ciz'>Karizma</span> <br><strong class='bold'>Tavsiye edilen ikincil öncelikli stat:</strong> <span class='ciz'>Kuvvet</span><br><strong class='bold'>1. seviyede Hit Puanı: </strong><span class='ciz'> 10 + Dayanıklılık bonus</span>u<br><strong class='bold'>Beceriler:  </strong>Bunlardan 2 tanesini seç: <span class='ciz'> Atletizm, Sezgi, Gözdağı, Tıp, İkna, ve Din.</span><br> Geri kalan özellikleri Sınıflar sayfasından bakınız."
    },
    Ranger: {
        title: "Korucu",
        description: "<hr><strong class='bold'>Tavsiye edilen birincil öncelikli stat:</strong> <span class='ciz'>Çeviklik</span> <br><strong class='bold'>Tavsiye edilen ikincil öncelikli stat:</strong> <span class='ciz'>Akıl</span><br><strong class='bold'>1. seviyede Hit Puanı: </strong><span class='ciz'> 10 + Dayanıklılık bonus</span>u<br><strong class='bold'>Beceriler:  </strong>Bunlardan 3 tanesini seç: <span class='ciz'> Hayvan İdaresi, Atletizm, Sezgi, İnceleme, Doğa, Algı, Gizlenme, ve Hayatta Kalma.</span><br> Geri kalan özellikleri Sınıflar sayfasından bakınız."
    },
    Rogue: {
        title: "Düzenbaz",
        description: "<hr><strong class='bold'>Tavsiye edilen birincil öncelikli stat:</strong> <span class='ciz'>Çeviklik</span> <br><strong class='bold'>Tavsiye edilen ikincil öncelikli stat:</strong> <span class='ciz'>Karizma</span><br><strong class='bold'>1. seviyede Hit Puanı: </strong><span class='ciz'> 8 + Dayanıklılık bonusu</span><br><strong class='bold'>Beceriler:  </strong>Bunlardan 4 tanesini seç: <span class='ciz'> Akrobasi, Atletizm, Aldatma, Sezgi, Gözdağı, İnceleme, Algı, Performans, İkna, El Çabukluğu, ve Gizlenme.</span><br> Geri kalan özellikleri Sınıflar sayfasından bakınız."
    },
    Sorcerer: {
        title: "Sihirbaz (Sorcerer)",
        description: "<hr><strong class='bold'>Tavsiye edilen birincil öncelikli stat:</strong> <span class='ciz'>Karizma</span> <br><strong class='bold'>Tavsiye edilen ikincil öncelikli stat:</strong> <span class='ciz'>Dayanıklılık</span><br><strong class='bold'>1. seviyede Hit Puanı: </strong><span class='ciz'> 6 + Dayanıklılık bonusu</span><br><strong class='bold'>Beceriler:  </strong>Bunlardan 2 tanesini seç: <span class='ciz'> Arcana, Aldatma, Sezgi, Gözdağı, İkna, ve Din.</span><br> Geri kalan özellikleri Sınıflar sayfasından bakınız."
    },
    Warlock: {
        title: "Warlock",
        description: "<hr><strong class='bold'>Tavsiye edilen birincil öncelikli stat:</strong> <span class='ciz'>Karizma</span> <br><strong class='bold'>Tavsiye edilen ikincil öncelikli stat:</strong> <span class='ciz'>Akıl</span><br><strong class='bold'>1. seviyede Hit Puanı: </strong><span class='ciz'> 8 + Dayanıklılık bonusu</span><br><strong class='bold'>Beceriler:  </strong>Bunlardan 2 tanesini seç: <span class='ciz'> Arcana, Aldatma, Tarih, Gözdağı, İnceleme, Doğa, ve Din.</span><br> Geri kalan özellikleri Sınıflar sayfasından bakınız."
    },
    Wizard: {
        title: "Büyücü",
        description: "<hr><strong class='bold'>Tavsiye edilen birincil öncelikli stat:</strong> <span class='ciz'>Zeka</span> <br><strong class='bold'>Tavsiye edilen ikincil öncelikli stat:</strong> <span class='ciz'>Çeviklik</span><br><strong class='bold'>1. seviyede Hit Puanı: </strong><span class='ciz'> 6 + Dayanıklılık bonusu</span><br><strong class='bold'>Beceriler:  </strong>Bunlardan 2 tanesini seç: <span class='ciz'> Arcana, Tarih, Sezgi, İnceleme, Tıp, ve Din.</span><br> Geri kalan özellikleri Sınıflar sayfasından bakınız."
    }
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
    if (selectedClass === 'Barbarian') {
        skillSlots += 2;
    } else if (selectedClass === 'Bard') {
        skillSlots += 3;
    } else if (selectedClass === 'Cleric') {
        skillSlots += 2;
    }else if (selectedClass === 'Druid') {
        skillSlots += 2;
    }else if (selectedClass === 'Fighter') {
        skillSlots += 2;
    }else if (selectedClass === 'Monk') {
        skillSlots += 2;
    }else if (selectedClass === 'Paladin') {
        skillSlots += 2;
    }else if (selectedClass === 'Ranger') {
        skillSlots += 3;
    }else if (selectedClass === 'Rogue') {
        skillSlots += 4;
    }else if (selectedClass === 'Sorcerer') {
        skillSlots += 2;
    }else if (selectedClass === 'Warlock') {
        skillSlots += 2;
    }else if (selectedClass === 'Wizard') {
        skillSlots += 2;
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

let strMod = 0;
let dexMod = 0;
let conMod = 0;
let intMod = 0;
let wisMod = 0;
let chaMod = 0;

const hesaplanmisBonus = () => {
    strMod = parseInt(document.getElementById('str-modifier').textContent, 10) || 0;
    dexMod = parseInt(document.getElementById('dex-modifier').textContent, 10) || 0;
    conMod = parseInt(document.getElementById('con-modifier').textContent, 10) || 0;
    intMod = parseInt(document.getElementById('int-modifier').textContent, 10) || 0;
    wisMod = parseInt(document.getElementById('wis-modifier').textContent, 10) || 0;
    chaMod = parseInt(document.getElementById('cha-modifier').textContent, 10) || 0;
};

const skillBonuses = {
    athletics: 0,
    acrobatics: 0,
    sleightOfHand: 0,
    stealth: 0,
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
    intimidation: 0,
};

const skillBonuslariGuncelle = () => {
    skillBonuses.athletics = strMod;
    skillBonuses.acrobatics = dexMod;
    skillBonuses.stealth = dexMod;
    skillBonuses.sleightOfHand = dexMod;
    skillBonuses.history = intMod;
    skillBonuses.religion = intMod;
    skillBonuses.investigation = intMod;
    skillBonuses.nature = intMod;
    skillBonuses.arcana = intMod;
    skillBonuses.animalHandling = wisMod;
    skillBonuses.insight = wisMod;
    skillBonuses.medicine = wisMod;
    skillBonuses.perception = wisMod;
    skillBonuses.survival = wisMod;
    skillBonuses.deception = chaMod;
    skillBonuses.persuasion = chaMod;
    skillBonuses.performance = chaMod;
    skillBonuses.intimidation = chaMod;
};
const updateStatsAndSkills = () => {
    skillBonuslariGuncelle();
    hesaplanmisBonus(); 
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

const toggleBonus = (skillId, buttonId, skillBonusKey, statName) => {
    const button = document.getElementById(buttonId);
    const statModifier = parseInt(document.getElementById(`${statName}-modifier`).textContent, 10) || 0;
    let skillTotal = statModifier + (skillBonuses[skillBonusKey] || 0);
    skillTotal = statModifier
    if (button.classList.contains('active')) {
        button.classList.remove('active');
        skillTotal = statModifier;
        remainingSkillSlots += 1;
    } else {
        button.classList.add('active');
        skillTotal = statModifier + 2;  // Buton aktif olduğunda +2 bonus eklenir
        remainingSkillSlots -= 1;
    }

    document.getElementById(skillId).textContent = skillTotal;
    updateRemainingSkillSlots();
    skillBonuslariGuncelle();
};


const resetAllButtons = () => {
    const skillButtons = document.querySelectorAll('.skillButton');
    skillButtons.forEach(button => {
        button.classList.remove('active');
    });
};

// Fonksiyonları window nesnesine atama
window.toggleBonusAthletics = () => toggleBonus('athletics', 'But-athletics', 'athletics', 'str');
window.toggleBonusAcrobatics = () => toggleBonus('acrobatics', 'But-acrobatics', 'acrobatics', 'dex');
window.toggleBonusSleightOfHand = () => toggleBonus('sleightOfHand', 'But-sleightOfHand', 'sleightOfHand', 'dex');
window.toggleBonusStealth = () => toggleBonus('stealth', 'But-stealth', 'stealth', 'dex');
window.toggleBonusHistory = () => toggleBonus('history', 'But-history', 'history', 'int');
window.toggleBonusReligion = () => toggleBonus('religion', 'But-religion', 'religion', 'int');
window.toggleBonusInvestigation = () => toggleBonus('investigation', 'But-investigation', 'investigation', 'int');
window.toggleBonusNature = () => toggleBonus('nature', 'But-nature', 'nature', 'int');
window.toggleBonusArcana = () => toggleBonus('arcana', 'But-arcana', 'arcana', 'int');
window.toggleBonusAnimalHandling = () => toggleBonus('animalHandling', 'But-animalHandling', 'animalHandling', 'wis');
window.toggleBonusInsight = () => toggleBonus('insight', 'But-insight', 'insight', 'wis');
window.toggleBonusMedicine = () => toggleBonus('medicine', 'But-medicine', 'medicine', 'wis');
window.toggleBonusPerception = () => toggleBonus('perception', 'But-perception', 'perception', 'wis');
window.toggleBonusSurvival = () => toggleBonus('survival', 'But-survival', 'survival', 'wis');
window.toggleBonusDeception = () => toggleBonus('deception', 'But-deception', 'deception', 'cha');
window.toggleBonusPersuasion = () => toggleBonus('persuasion', 'But-persuasion', 'persuasion', 'cha');
window.toggleBonusPerformance = () => toggleBonus('performance', 'But-performance', 'performance', 'cha');
window.toggleBonusIntimidation = () => toggleBonus('intimidation', 'But-intimidation', 'intimidation', 'cha');

document.getElementById('class').addEventListener('change', () => {
    resetAllButtons();
    calculateSkillSlots();
});

document.getElementById('background').addEventListener('change', () => {
    resetAllButtons();
    calculateSkillSlots();
});

calculateSkillSlots(); // Başlangıçta çağrılır

// -------------------------------POİNT BUY-----------------------------------------------



const guncelle = () => {
    // updateRaceBonuses();
    hesaplanmisBonus();
    skillBonuslariGuncelle();
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