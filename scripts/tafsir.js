let container = document.querySelector(".container");

let url = window.location.href;

let url_variables = url.split("?");

let exactSurah = url_variables[1].split("=");

let ayahCounter = 0;
const buildDom = (ayah, ayahNum) => {
  if (ayahCounter < 1) {

    let ayahSplit = ayah.split("بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ");

    container.innerHTML += `<div id = 'bisin'><a herf '#' dir ='rtl' lang 'ar'> بِسۡمِ ٱللَّهِ ٱلرَّحۡمَـٰنِ ٱلرَّحِیمِ
    </a></div>`;
    container.innerHTML += `<div style="padding-bottom: 450px" , id="aayah">
      <a href="" dir="rtl" lang="ar">${ayahSplit[1]}
      <img src="./images/ayah.png" id="ayah-sign"/>
      <span id="ayah-number">${ayahNum}</span>
      </a></div>`;
  }else{
    container.innerHTML += `<divid="aayah">
    <a href="" dir="rtl" lang="ar">${ayah}
    <img src="./images/ayah.png" id="ayah-sign"/>
    <span id="ayah-number">${ayahNum}</span>
    </a></div>`;
  }

  ayahCounter++;
};

const reading = async (num) => {
  let response = await fetch(`http://api.alquran.cloud/v1/surah/${num}`);
  let surah = await response.json();
  surah.data.ayahs.forEach((sura) => {
    buildDom(sura.text, sura.numberInSurah);
    // console.log(sura)
  });
};

reading(exactSurah[1]);
