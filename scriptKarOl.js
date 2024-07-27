document.addEventListener("DOMContentLoaded", function() {
    const raceSelect = document.getElementById("race");
    const backgroundSelect = document.getElementById("background");
    const classSelect = document.getElementById("class");

    let stats = {
        str: 10,
        dex: 10,
        con: 10,
        int: 10,
        wis: 10,
        cha: 10
    };

    const hesaplanmisBonus = (value) => {
        return Math.floor((value - 10) / 2);
    };

    const updateStatsAndSkills = () => {
        const race = raceSelect.value;
        const background = backgroundSelect.value;
        const selectedClass = classSelect.value;

        // Statları ve bonusları başlangıç değerlerine sıfırla
        stats = {
            str: 10,
            dex: 10,
            con: 10,
            int: 10,
            wis: 10,
            cha: 10
        };

        // Irk bonuslarını uygula
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

        // Karakter geçmişi bonuslarını uygula
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

        // Sınıf bonuslarını uygula
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

        // Güncellenmiş stat bonuslarını hesapla
        const statBonuses = {
            'str-b': hesaplanmisBonus(stats.str),
            'dex-b': hesaplanmisBonus(stats.dex),
            'con-b': hesaplanmisBonus(stats.con),
            'int-b': hesaplanmisBonus(stats.int),
            'wis-b': hesaplanmisBonus(stats.wis),
            'cha-b': hesaplanmisBonus(stats.cha)
        };

        // Stat ve bonusları DOM'a yazdır
        document.getElementById('str').innerText = `${stats.str} (${statBonuses['str-b']})`;
        document.getElementById('dex').innerText = `${stats.dex} (${statBonuses['dex-b']})`;
        document.getElementById('con').innerText = `${stats.con} (${statBonuses['con-b']})`;
        document.getElementById('int').innerText = `${stats.int} (${statBonuses['int-b']})`;
        document.getElementById('wis').innerText = `${stats.wis} (${statBonuses['wis-b']})`;
        document.getElementById('cha').innerText = `${stats.cha} (${statBonuses['cha-b']})`;

        updateSkillBonuses();
    };

    const updateSkillBonuses = () => {
        // Placeholder, skillDependencies ve skillBonuses değişkenlerinin tanımlanması gerekiyor
    };

    const calculateSkillSlots = () => {
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

        document.getElementById('skill-slots').innerText = `Kalan Skill Yuvası: ${skillSlots}`; // Hesaplanan skillSlots değerini güncelle
    };

    raceSelect.addEventListener('change', updateStatsAndSkills);
    backgroundSelect.addEventListener('change', updateStatsAndSkills);
    classSelect.addEventListener('change', updateStatsAndSkills);

    raceSelect.addEventListener('change', calculateSkillSlots);
    backgroundSelect.addEventListener('change', calculateSkillSlots);
    classSelect.addEventListener('change', calculateSkillSlots);

    updateStatsAndSkills();
    formDegisim();
});

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
// Menü dışında bir yere tıklanınca menüyü gizle
document.addEventListener('click', (event) => {
    const menu = document.getElementById('hamburger-menu');
    const menuIcon = document.querySelector('.menu-icon');

    // Eğer tıklama menüde veya menü ikonu üzerindeyse bir şey yapma
    if (menu.contains(event.target) || menuIcon.contains(event.target)) {
        return;
    }

    // Aksi halde menüyü gizle
    if (menu.classList.contains('visible')) {
        menu.classList.remove('visible');
        menu.classList.add('hidden');
    }
});