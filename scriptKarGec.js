@font-face {
    font-family: 'Convergence';
    font-style: normal;
    font-weight: 400;
    src: local('Convergence-Regular'), url('fonts/Convergence-Regular.ttf') format('truetype');
}

@font-face {
    font-family: 'Glyphicons Halflings';
    font-style: normal;
    font-weight: 400;
    src: local('glyphicons-halflings-regular'), url('fonts/glyphicons-halflings-regular.ttf') format('truetype');
}

.indented {
    padding-left: 20px;
} 

body {
    font-family: Arial, sans-serif;
    background-color: #f9f5e3;
    color: #333;
    margin: 0;
    padding: 20px;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #ddddacc3;
    border: 2px solid rgb(186, 184, 184);
    border-radius: 10px;
    color: #8b4513;
    font-family: 'Georgia', serif;
    padding: 1rem 0;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;
    padding: 15px;
    margin-bottom: 15px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    position: relative;
    /* background-color: #f5deb3;  Krem tonunda arka plan 
    border: 2px solid #d2b48c; Daha yumuşak krem tonunda kenarlık */
}

.menu-icon {
    cursor: pointer;
    font-size: 2.2em;
}

.title {
    font-family: 'Georgia', serif;
    font-size: 2em;
}

.logo-img {
    width: 60px; /* Logonun genişliği */
    height: auto; /* Oranını koruyarak yüksekliği otomatik ayarlar */
}

nav {
    position: absolute;
    top: 121%; /* Menü ikonunun hemen altında başlar */
    left: -4px;
    width: 200px;
    /* background-color: #cabe80; */
    border: 2px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    padding: 10px;
    display: none;
    z-index: 1000; /* Menü ikonunun üstünde görünmesi için */
    background-color: #f5deb3;
    /* background-color: #f5deb3;  Krem tonunda arka plan
    border: 2px solid #d2b48c; Daha yumuşak krem tonunda kenarlık */
}

nav ul {
    margin-left: 20px;
    list-style: disc;
    padding: 0;
}

nav ul li {
    text-align: left;
    margin-left: 13px; 
    margin-bottom: 13px;
}

nav ul li a {
    color: #8b4513;
    font-size: 1.2em;
    font-family: 'Georgia', serif;
    text-decoration: none;
}

.hidden {
    display: none;
}

.visible {
    display: block;
}

.collapsible{
    cursor: pointer;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border: 2px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    background-image: url('https://www.transparenttextures.com/patterns/paper-fibers.png');
    background-size: cover;
}

.bucuklukTez, .bucuklukTik, .cuceDa, .cuceTe, .ejder, .elfD, .elfO, .elfU, .gnomeO, .insan, .insanAl, .tiefling, .yarıElf, .yarıOrc{
    padding-right: 20px;
    padding-left: 20px;
    /* padding-top: 10px;
    padding-bottom: 10px; */
    background-color: #FBF1DE;
    border: 2px solid #DB9D43;
    border-radius: 7px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
    font-family: 'Convergence', sans-serif;
}
.gnomeK{
    padding-right: 20px;
    padding-left: 20px;
    /* padding-top: 10px;
    padding-bottom: 10px; */
    background-color: #FBF1DE;
    border: 2px solid #DB9D43;
    border-radius: 7px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
    font-family: 'Convergence', sans-serif;
}
.collapsibleGnome{
    text-decoration: underline;
    cursor: pointer;
    border: #000;
    margin-top: -20px;
    padding-bottom: 20px;
}
.collapsibleKarGec{
    text-decoration: underline;
    cursor: pointer;
    border: #000;
}

.draconicSoy{
    margin-top: 10px;
    background-color: #fefaf0;
    border: 2px solid #862F1B;
    border-radius: 5px;
}

.koyu{
    padding-left: 10px;
    /* border: solid 1px #f3e9d7; */
    background-color: #faf0e0c3;
}

.acık, .acık1{
    padding-left: 10px;
    /* border:solid 1px #FBF1DE; */
    background-color: #fcf9f2;
}
.hr1{
    padding-left: 10px;
    margin-left: -10px;
}



h3, h4{
    width: 100%;
    font-size: 1.5em;
    font-family: 'Andada', serif;
    font-variant: small-caps;
    font-weight: 500;
    padding-left: 0.25em;
    cursor: pointer;
    color: #8b4513;
}

.altbaslık{
    margin-top: -15px;
    margin-bottom: -15px;
}

hr {
    border: 1.4px solid #862F1B;
    width: 100%;
    margin: 20px 0;
}

.bold {
    font-weight: bold;
    font-style: italic;
    font-family: 'Convergence', sans-serif;
    color: #000;
}

.siyah{
    color: #000;
}
.mavi{
    color: #00008B;
}
.pirinc{
    color: #8B4513 ;
}
.bronz{
    color: #8B3E2F;
}
.altin{
    color: #B8860B;
}
.yesil{
    color: #006400 ;
}
.kirmizi{
    color: #8B0000 ;
}
.gumus{
    color: #708090
}
.beyaz{
    color: #000000;
}

h1 {
    font-family: 'Georgia', serif;
    margin-bottom: 20px;
    color: #8b4513;
}
h2 {
    margin-top: 5px;
    font-size: 2em;
    font-family: 'Georgia', serif;
    margin-bottom: 20px;
    color: #8b4513;
}
.ciz {
    text-decoration: underline;
}

@media (max-width: 600px) {
    #skillsyazı {
        font-size: 0.85em;
    }
}
