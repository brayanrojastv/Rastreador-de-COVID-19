let btn = document.getElementById("btn");
        
        btn.addEventListener("click",()=>{
        let text = document.getElementById("getText").value;

            fetch('https://api.covid19api.com/summary')
            .then((covidData)=>{
                return covidData.json();
            })
            .then((getData)=>{
                console.log(getData);
                var content = document.querySelector(".data"); 

                var box = content.lastElementChild;  
                while (box) { 
                    content.removeChild(box); 
                    box = content.lastElementChild; 
                } 

                var index = 0;
                for(var i=0;i<185;i++){
                    if(getData.Countries[i].Country.toLowerCase() == text.toLowerCase()){
                        index = i;
                        break;
                    }
                }
                let data = document.querySelector(".data");
                data.innerHTML = `<div class="box">
                                <div class="head">
                                    <span>Casos de COVID-19 ${getData.Countries[index].Country}</span>
                                </div>
                                <div class="total">
                                    <div><p>Total de Confirmados</p> ${getData.Countries[index].TotalConfirmed}</div>
                                    <div><p>Total de Muertes</p> ${getData.Countries[index].TotalDeaths}</div>
                                    <div><p>Total de Recuperados</p> ${getData.Countries[index].TotalRecovered}</div>
                                </div>
                                <div class="new">
                                    <div><p>NewConfirmed</p> ${getData.Countries[index].NewConfirmed}</div>
                                    <div><p>NewDeaths</p> ${getData.Countries[index].NewDeaths}</div>
                                    <div><p>NewRecovered</p> ${getData.Countries[index].NewRecovered}</div>
                                    </div>
                                </div><br><p>Hecho por Brayan Rojas con ♥️</p>;
            })
        })
