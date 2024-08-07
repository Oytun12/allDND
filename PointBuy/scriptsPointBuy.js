document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('character-form');
    const statInputs = form.querySelectorAll('input[type="number"]');
    const totalPointsElement = document.getElementById('total-points');
    const submitBtn = document.getElementById('submit-btn');
    const resetBtn = document.getElementById('reset-btn');

    let totalPoints = 0;

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

    statInputs.forEach(input => {
        input.addEventListener('change', () => {
            if (input.value < 8) input.value = 8;
            if (input.value > 15) input.value = 15;
            calculatePointsRemaining();
            updateTotalsAndModifiers();
        });
    });

    resetBtn.addEventListener('click', () => {
        statInputs.forEach(input => input.value = 8);
        calculatePointsRemaining();
        updateTotalsAndModifiers();
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        // Karakter oluşturma işlemleri burada yapılabilir
        alert('Character created successfully!');
        form.reset();
        calculatePointsRemaining();
        updateTotalsAndModifiers();
    });

    calculatePointsRemaining();
    updateTotalsAndModifiers();
});
