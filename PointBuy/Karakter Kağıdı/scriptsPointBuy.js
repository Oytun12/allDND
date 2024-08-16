document.getElementById('submit-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Formun otomatik olarak submit edilmesini engelle

    // Mevcut statları ve verileri al
    const stats = {
        str: {
            score: document.getElementById('str').value,
            racial: document.getElementById('str-racial').innerText,
            total: document.getElementById('str-total').innerText,
            modifier: document.getElementById('str-modifier').innerText,
            cost: document.getElementById('str-cost').innerText
        },
        dex: {
            score: document.getElementById('dex').value,
            racial: document.getElementById('dex-racial').innerText,
            total: document.getElementById('dex-total').innerText,
            modifier: document.getElementById('dex-modifier').innerText,
            cost: document.getElementById('dex-cost').innerText
        },
        con: {
            score: document.getElementById('con').value,
            racial: document.getElementById('con-racial').innerText,
            total: document.getElementById('con-total').innerText,
            modifier: document.getElementById('con-modifier').innerText,
            cost: document.getElementById('con-cost').innerText
        },
        int: {
            score: document.getElementById('int').value,
            racial: document.getElementById('int-racial').innerText,
            total: document.getElementById('int-total').innerText,
            modifier: document.getElementById('int-modifier').innerText,
            cost: document.getElementById('int-cost').innerText
        },
        wis: {
            score: document.getElementById('wis').value,
            racial: document.getElementById('wis-racial').innerText,
            total: document.getElementById('wis-total').innerText,
            modifier: document.getElementById('wis-modifier').innerText,
            cost: document.getElementById('wis-cost').innerText
        },
        cha: {
            score: document.getElementById('cha').value,
            racial: document.getElementById('cha-racial').innerText,
            total: document.getElementById('cha-total').innerText,
            modifier: document.getElementById('cha-modifier').innerText,
            cost: document.getElementById('cha-cost').innerText
        }
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
    
    // Mevcut statları ve verileri al
const skills = {
    athletics: {
        score: document.getElementById('athletics').innerText,
    },
    acrobatics: {
        score: document.getElementById('acrobatics').innerText,
    },
    sleightOfHand: {
        score: document.getElementById('sleightOfHand').innerText,
    },
    stealth: {
        score: document.getElementById('stealth').innerText,
    },
    history: {
        score: document.getElementById('history').innerText,
    },
    religion: {
        score: document.getElementById('religion').innerText,
    },
    investigation: {
        score: document.getElementById('investigation').innerText,
    },
    nature: {
        score: document.getElementById('nature').innerText,
    },
    arcana: {
        score: document.getElementById('arcana').innerText,
    },
    animalHandling: {
        score: document.getElementById('animalHandling').innerText,
    },
    insight: {
        score: document.getElementById('insight').innerText,
    },
    medicine: {
        score: document.getElementById('medicine').innerText,
    },
    perception: {
        score: document.getElementById('perception').innerText,
    },
    survival: {
        score: document.getElementById('survival').innerText,
    },
    deception: {
        score: document.getElementById('deception').innerText,
    },
    persuasion: {
        score: document.getElementById('persuasion').innerText,
    },
    performance: {
        score: document.getElementById('performance').innerText,
    },
    intimidation: {
        score: document.getElementById('intimidation').innerText,
    }
};


    // Yeni bir sekme aç ve HTML içeriğini oluştur
    const newTab = window.open();
    newTab.document.write(`
        <html>
        <head>
            <title>Karakter Kağıdı</title>
            <style>
                body { font-family: Arial, sans-serif; }
                table { border-collapse: collapse; width: 100%; }
                th, td { border: 1px solid black; padding: 8px; text-align: left; }
                th { background-color: #f2f2f2; }
            </style>
        </head>
        <body>
            <h1>Oluşturulan Karakter</h1>
            <table>
                <tr>
                    <th>Özellik</th>
                    <th>Skor</th>
                    <th>Irksal Bonus</th>
                    <th>Toplam Skor</th>
                    <th>Yetenek Modifiyatörü</th>
                    <th>Puan Maliyeti</th>
                </tr>
                <tr>
                    <td>Strength</td>
                    <td>${stats.str.score}</td>
                    <td>${stats.str.racial}</td>
                    <td>${stats.str.total}</td>
                    <td>${stats.str.modifier}</td>
                    <td>${stats.str.cost}</td>
                </tr>
                <tr>
                    <td>Dexterity</td>
                    <td>${stats.dex.score}</td>
                    <td>${stats.dex.racial}</td>
                    <td>${stats.dex.total}</td>
                    <td>${stats.dex.modifier}</td>
                    <td>${stats.dex.cost}</td>
                </tr>
                <tr>
                    <td>Constitution</td>
                    <td>${stats.con.score}</td>
                    <td>${stats.con.racial}</td>
                    <td>${stats.con.total}</td>
                    <td>${stats.con.modifier}</td>
                    <td>${stats.con.cost}</td>
                </tr>
                <tr>
                    <td>Intelligence</td>
                    <td>${stats.int.score}</td>
                    <td>${stats.int.racial}</td>
                    <td>${stats.int.total}</td>
                    <td>${stats.int.modifier}</td>
                    <td>${stats.int.cost}</td>
                </tr>
                <tr>
                    <td>Wisdom</td>
                    <td>${stats.wis.score}</td>
                    <td>${stats.wis.racial}</td>
                    <td>${stats.wis.total}</td>
                    <td>${stats.wis.modifier}</td>
                    <td>${stats.wis.cost}</td>
                </tr>
                <tr>
                    <td>Charisma</td>
                    <td>${stats.cha.score}</td>
                    <td>${stats.cha.racial}</td>
                    <td>${stats.cha.total}</td>
                    <td>${stats.cha.modifier}</td>
                    <td>${stats.cha.cost}</td>
                </tr>
            </table>
            <table>
            <tr>
                <th>Özellik</th>
                <th>Skor</th>
            </tr>
            <tr>
                <td>Athletics</td>
                <td>${skills.athletics.score}</td>
            </tr>
            <tr>
                <td>Acrobatics</td>
                <td>${skills.acrobatics.score}</td>
            </tr>
            <tr>
                <td>Sleight of Hand</td>
                <td>${skills.sleightOfHand.score}</td>
            </tr>
            <tr>
                <td>Stealth</td>
                <td>${skills.stealth.score}</td>
            </tr>
            <tr>
                <td>History</td>
                <td>${skills.history.score}</td>
            </tr>
            <tr>
                <td>Religion</td>
                <td>${skills.religion.score}</td>
            </tr>
            <tr>
                <td>Investigation</td>
                <td>${skills.investigation.score}</td>
            </tr>
            <tr>
                <td>Nature</td>
                <td>${skills.nature.score}</td>
            </tr>
            <tr>
                <td>Arcana</td>
                <td>${skills.arcana.score}</td>
            </tr>
            <tr>
                <td>Animal Handling</td>
                <td>${skills.animalHandling.score}</td>
            </tr>
            <tr>
                <td>Insight</td>
                <td>${skills.insight.score}</td>
            </tr>
            <tr>
                <td>Medicine</td>
                <td>${skills.medicine.score}</td>
            </tr>
            <tr>
                <td>Perception</td>
                <td>${skills.perception.score}</td>
            </tr>
            <tr>
                <td>Survival</td>
                <td>${skills.survival.score}</td>
            </tr>
            <tr>
                <td>Deception</td>
                <td>${skills.deception.score}</td>
            </tr>
            <tr>
                <td>Persuasion</td>
                <td>${skills.persuasion.score}</td>
            </tr>
            <tr>
                <td>Performance</td>
                <td>${skills.performance.score}</td>
            </tr>
            <tr>
                <td>Intimidation</td>
                <td>${skills.intimidation.score}</td>
            </tr>
        </table>
        </body>
        </html>
    `);
    newTab.document.close();
});
