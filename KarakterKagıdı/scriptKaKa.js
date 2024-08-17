body {
    font-family: Arial, sans-serif;
    background-color: #f9f5e3;
    color: #333;
    margin: 0;
    padding: 20px;
}

.container {
    max-width: 900px;
    height: 100%;
    margin: 0 auto;
    padding: 20px;
    background-color: #fff;
    border: 2px solid #ccc;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    background-image: url('https://www.transparenttextures.com/patterns/paper-fibers.png');
    background-size: cover;
}

/* div{
    border: solid 3px #333;
    padding: 10px;
} */
/* hr {
    border: 2px solid #862F1B;
    width: 100%;
} */
.checkbox {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
    vertical-align: middle;
}

.checkbox.checked {
    background-color: #333; /* İçi dolu olduğunda yeşil renkte olacak */
}
#noteArea {
    margin: 5px;
    width: calc(100% - 45px);
    height: calc(100% - 70px); /* Yüksekliği istediğiniz gibi ayarlayın */
    font-size: 0.8em;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize:vertical; /* Kullanıcı boyutunu değiştirebilir */
    overflow: auto; /* İçerik kutudan taşarsa kaydırma çubuğu göster */
}
th{
    border: solid 1px #333;
}
td{
    border: solid 1px #3333335f;
}
table{
    font-size: 0.8em;
}
/* ----------------------------------------------------------------------------------------------------- */
#ust{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: solid 3px #333;
}
#ust-isim{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
#isim{
    text-align: center;
    padding: 10px 0 0 0;
    width: 100%;
    height: 100%;
}
#noteArea-isim {
    margin: 5px 0 5px 0;
    width: calc(100% - 55px);
    height: calc(100% - 70px); /* Yüksekliği istediğiniz gibi ayarlayın */
    font-size: 0.8em;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize:vertical; /* Kullanıcı boyutunu değiştirebilir */
    overflow: auto; /* İçerik kutudan taşarsa kaydırma çubuğu göster */
}
#noteArea-ust {
    margin: 5px 0 5px 0;
    width: calc(100% - 35px);
    height: 10px; /* Yüksekliği istediğiniz gibi ayarlayın */
    font-size: 0.8em;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize:vertical; /* Kullanıcı boyutunu değiştirebilir */
    overflow: auto; /* İçerik kutudan taşarsa kaydırma çubuğu göster */
}
#noteArea-alt {
    margin: 5px 0 5px 0;
    width: calc(100% - 35px);
    height: 10px; /* Yüksekliği istediğiniz gibi ayarlayın */
    font-size: 0.8em;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize:vertical; /* Kullanıcı boyutunu değiştirebilir */
    overflow: auto; /* İçerik kutudan taşarsa kaydırma çubuğu göster */
}
#ozellikler{
    padding-left: 5px;
    padding: 5px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-left: solid 3px #333;
}
#ozellikler-ust{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: solid 1px #333;
    margin-bottom: 3px;
}
#ozellikler-alt{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: -5px;
}
/* ----------------------------------------------------------------------------------------------------- */
#alt{
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
@media (max-width: 695px) {
    #alt{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        /* justify-content: space-between; */
    }
    #sol{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
}
/* ----------------------------------------------------------------------------------------------------- */

#sol{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
#sol-ust{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: -5px;
}
#sol-ust-sol{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
#stats{
    margin-left: 3px;
    max-width: 80px;
    padding: 25px 15px 15px 10px;
    margin-bottom: 15px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #dfdede;
    border-radius: 10px;
    border: solid 3px #333; 
}

#str{
    text-align: center;
    padding:20px 5px 20px 5px;
    border-radius: 10px;
    border: solid 3px #333;
    background-color: #fff;
}
#dex{
    text-align: center;
    padding:20px 5px 20px 5px;
    border-radius: 10px;
    border: solid 3px #333;    
    background-color: #fff;
}
#con{
    text-align: center;
    padding:20px 5px 20px 5px;
    border-radius: 10px;
    border: solid 3px #333;    
    background-color: #fff;
}
#int{
    text-align: center;
    padding:20px 5px 20px 5px;
    border-radius: 10px;
    border: solid 3px #333;    
    background-color: #fff;
}
#wis{
    text-align: center;
    padding:20px 5px 20px 5px;
    border-radius: 10px;
    border: solid 3px #333;    
    background-color: #fff;
}
#cha{
    text-align: center;
    padding:20px 5px 20px 5px;
    margin-bottom: 20px;
    border-radius: 10px;
    border: solid 3px #333;    
    background-color: #fff;
}
#sol-alt{
    height: 100%;
}
#PP{
    padding: 5px;
    text-align: center;
    border-radius: 10px 10px 0 0;
    border: solid 3px #333;  
    margin-right: 15px;
    margin-bottom: 5px;
}
#ozelliklerDiller{
    padding: 5px 0 5px 0;
    text-align: center;
    height: calc(100% - 55px);
    border-radius: 0 0 10px 10px;
    border: solid 3px #333; 
    margin-right: 15px; 
}
/* -------------------------------------------- */
#sol-ust-sag{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
#yetenekler{
    margin-left: 3px;
    padding: 0 15px 0 10px;
    margin-bottom: 15px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* background-color: #dfdede;
    border-radius: 10px;
    border: solid 3px #333;  */
}
    #inspration{
        padding: 5px;
        border-radius: 10px;
        border: solid 3px #333; 
        margin-bottom: 5px;
    }
    #Proficiency{
        height: 35px;
        padding: 5px;
        text-align: center;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        border: solid 3px #333; 
        margin-bottom: 5px;
    }
    #kurtarma{
        text-align: center;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        border: solid 3px #333; 
        padding: 5px;
        margin-bottom: 5px;
    }    
    #skills{
        text-align: center;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        border: solid 3px #333; 
        padding: 5px;
    }
/* -------------------------------------------- */


/* ----------------------------------------------------------------------------------------------------- */
#orta{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
#orta-ust{
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;   
    background-color: #dfdede;
    padding: 10px;
    margin-bottom: 10px;
}
    #orta-ust-ust{
        height: 100%; 
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 10px;
    }
        #ac{
            padding: 5px;
            height: 60px;
            text-align: center;
            width: 100%;
            margin: 0 5px 0 0px;
            border-radius: 10px;
            border: solid 3px #333;
        }
        #iniativ{
            padding: 5px;
            height: 60px;
            text-align: center;
            width: 100%;
            margin: 0 5px 0 5px;
            border-radius: 10px;
            border: solid 3px #333;
        }
        #speed{
            padding: 5px;
            height: 60px;
            text-align: center;
            width: 100%;
            margin: 0 0px 0 5px;
            border-radius: 10px;
            border: solid 3px #333;
        }
    #orta-ust-orta{
        height: 100%; 
        margin-bottom: 10px;
    }
        #CHitPoint{
            text-align: center;
            border-radius: 5px;
            border-radius: 5px 5px 0 0;
            border: solid 2px #333;
            margin-bottom: 5px;
            padding: 5px;
        }
        #THitPoint{
            text-align: center;
            padding: 5px;
            border-radius: 5px;
            border-radius: 0 0 5px 5px;
            border: solid 2px #333;
        }
    #orta-ust-alt{
        height: 100%; 
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
        #HitDice{
            text-align: center;
            padding: 5px;
            width: 100%;
            border-radius: 5px;
            border: solid 3px #333;
            margin-right: 5px;
        }
        #DeathSaves{
            padding: 5px;
            text-align: center;
            width: 100%;
            border-radius: 5px;
            border: solid 3px #333;
            margin-left: 5px;
        }
#orta-orta{
    display: flex; 
    justify-content: center; 
    align-items: flex-start;
    border-radius: 10px;
    border: solid 3px #333;
    height: 100%;
}
#saldırı{
    text-align: center;
    align-items: center;
    padding: 5px 0 0 0 ;
}

#orta-alt{
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 10px;
    border: solid 3px #333;
    padding: 5px;
}
    #para{
        text-align: center;
        padding: 5px;
        border-radius: 5px;
        /* border: solid 3px #333; */
        background-color: #dfdede;
        height: 110px;
    }
    #ekipman{
        width: 100%;
        text-align: center;
        border-radius: 10px;
        border: solid 2px #333;
    }


/* ----------------------------------------------------------------------------------------------------- */

#sag{
    width: 100%; 
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
#sag-ust{
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-radius: 10px;   
    background-color: #dfdede;
    margin-left: 10px;
}
#kisilik{
    text-align: center;
    height: 100%;
    border-radius: 10px;
    border: solid 2px #333;
    margin: 0 10px 10px 10px;
}
#ideals{
    text-align: center;
    height: 100%;
    border-radius: 10px;
    border: solid 2px #333;
    margin: 0 10px 10px 10px;
}
#bonds{
    text-align: center;
    height: 100%;
    border-radius: 10px;
    border: solid 2px #333;
    margin: 0 10px 10px 10px;
}
#flaws{
    text-align: center;
    height: 100%;
    border-radius: 10px;
    border: solid 2px #333;
    margin: 0 10px 10px 10px;
}


#sag-alt{
    text-align: center;
    height: 100%;
    border-radius: 10px;
    border: solid 2px #333;
    margin: 10px 0 0 10px;
}
