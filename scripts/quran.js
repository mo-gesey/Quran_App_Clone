let container = document.querySelector(".container");

//building Doms
const buildDom = (surahEng, surahArb, surahNumb) => {
  container.innerHTML += `<div class="surah-info">
            <div class="surah-names">
                <a href="" id="surah-eng">${surahEng}</a>
                <a href="" id="surah-arb">${surahArb}</a>
            </div>
            <span id="ayah-number">${surahNumb}</span>
        </div>`;
};

// Getting All 114 surah
const getAllSurah = async () => {
  let response = await fetch("http://api.alquran.cloud/v1/quran/quran-uthmani");
  let surah = await response.json();
  surah.data.surahs.forEach((sura) => {
    console.log(sura);
    buildDom(sura.englishName, sura.name, sura.number);
  });
};

getAllSurah();
