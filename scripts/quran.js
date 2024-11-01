let container = document.querySelector(".container");
let loader = document.querySelector("#loader");



//building Doms
const buildDom = (surahEng, surahArb, surahNumb) => {
  container.innerHTML += `<div class="surah-info">
            <div class="surah-names">
                <a href="http://127.0.0.1:5500/tafsir.html?id=${surahNumb}" id="surah-eng">${surahEng}</a>
                <a href="http://127.0.0.1:5500/tafsir.html?id=${surahNumb}" id="surah-arb">${surahArb}</a>
            </div>
            <span id="ayah-number">${surahNumb}</span>
        </div>`;
};

const searchSurah = (e) => {
  let surahInfo = document.querySelectorAll(".surah-info");
  let term = e.target.value.toUpperCase();

  surahInfo.forEach((surah) => {
    let surahEn = surah.querySelector("#surah-eng").innerText.toUpperCase();
    let surahAr = surah.querySelector("#surah-arb").innerText.toUpperCase();

    if (surahEn.indexOf(term) > -1 || surahAr.indexOf(term) > -1) {
      surah.style.display = "flex";
    } else {
      surah.style.display = "none";
    }
  });
  console.log(term);
};

// Getting All 114 surah
const getAllSurah = async () => {
  loader.style.display = 'block'
  let response = await fetch("http://api.alquran.cloud/v1/quran/quran-uthmani");
  let surah = await response.json();
  loader.style.display = 'none'

  surah.data.surahs.forEach((sura) => {
    //console.log(sura);
    buildDom(sura.englishName, sura.name, sura.number);
  });
};

getAllSurah();
document.addEventListener("input", searchSurah);
