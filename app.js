/* =========================================================
   TRY OUT UNTUK DAPII
   ========================================================= */

const STORAGE_KEY = "TRY_OUT_DAPII_DATA_V1";


/* =========================================================
   DATABASE SOAL
   ========================================================= */

const subjects = {

  matematika: {

    name: "Matematika",
    icon: "📐",

    questions: [

      {
        q: "Hasil dari 24 + 18 × 2 adalah ...",
        a: ["48", "60", "84", "42"],
        correct: 1,
        topic: "Operasi Bilangan"
      },

      {
        q: "FPB dari 24 dan 36 adalah ...",
        a: ["6", "8", "12", "18"],
        correct: 2,
        topic: "FPB & KPK"
      },

      {
        q: "KPK dari 8 dan 12 adalah ...",
        a: ["16", "20", "24", "48"],
        correct: 2,
        topic: "FPB & KPK"
      },

      {
        q: "Jika 3x + 4 = 19, maka nilai x adalah ...",
        a: ["3", "4", "5", "6"],
        correct: 2,
        topic: "Aljabar"
      },

      {
        q: "Sisi siku-siku sebuah segitiga adalah 6 cm dan 8 cm. Sisi miringnya ...",
        a: ["9 cm", "10 cm", "12 cm", "14 cm"],
        correct: 1,
        topic: "Pythagoras"
      },

      {
        q: "2³ × 2² = ...",
        a: ["16", "24", "32", "64"],
        correct: 2,
        topic: "Pangkat"
      },

      {
        q: "0,75 dalam bentuk pecahan sederhana adalah ...",
        a: ["1/2", "2/3", "3/4", "4/5"],
        correct: 2,
        topic: "Pecahan"
      },

      {
        q: "Jika y = 2x + 1 dan x = 4, maka y = ...",
        a: ["7", "8", "9", "10"],
        correct: 2,
        topic: "Aljabar"
      }

    ]

  },


  bahasaIndonesia: {

    name: "Bahasa Indonesia",
    icon: "🇮🇩",

    questions: [

      {
        q: "Gagasan utama dalam sebuah paragraf disebut ...",
        a: [
          "kalimat penjelas",
          "ide pokok",
          "judul",
          "kata keterangan"
        ],
        correct: 1,
        topic: "Teks"
      },

      {
        q: "Kalimat yang menyatakan suatu informasi disebut ...",
        a: [
          "imperatif",
          "interogatif",
          "deklaratif",
          "eksklamatif"
        ],
        correct: 2,
        topic: "Kalimat"
      },

      {
        q: "Lawan kata 'optimis' adalah ...",
        a: [
          "aktif",
          "pesimis",
          "semangat",
          "yakin"
        ],
        correct: 1,
        topic: "Kosakata"
      },

      {
        q: "Tujuan utama teks eksplanasi adalah ...",
        a: [
          "menghibur pembaca",
          "menjelaskan proses suatu fenomena",
          "menjual barang",
          "mengajak membeli"
        ],
        correct: 1,
        topic: "Teks Eksplanasi"
      },

      {
        q: "Kata 'karena' biasanya menunjukkan hubungan ...",
        a: [
          "perbandingan",
          "sebab",
          "tujuan",
          "pilihan"
        ],
        correct: 1,
        topic: "Konjungsi"
      }

    ]

  },


  bahasaInggris: {

    name: "Bahasa Inggris",
    icon: "🇬🇧",

    questions: [

      {
        q: "She ___ a student.",
        a: ["am", "is", "are", "be"],
        correct: 1,
        topic: "Grammar"
      },

      {
        q: "The opposite of 'big' is ...",
        a: ["large", "small", "long", "high"],
        correct: 1,
        topic: "Vocabulary"
      },

      {
        q: "Yesterday, I ___ to school.",
        a: ["go", "goes", "went", "going"],
        correct: 2,
        topic: "Simple Past"
      },

      {
        q: "They ___ playing football now.",
        a: ["is", "are", "was", "be"],
        correct: 1,
        topic: "Present Continuous"
      },

      {
        q: "'Beautiful' is closest in meaning to ...",
        a: ["ugly", "pretty", "angry", "slow"],
        correct: 1,
        topic: "Vocabulary"
      }

    ]

  },


  ipa: {

    name: "IPA",
    icon: "🔬",

    questions: [

      {
        q: "Organ yang berfungsi memompa darah adalah ...",
        a: [
          "paru-paru",
          "jantung",
          "ginjal",
          "hati"
        ],
        correct: 1,
        topic: "Sistem Organ"
      },

      {
        q: "Satuan SI untuk gaya adalah ...",
        a: [
          "joule",
          "watt",
          "newton",
          "pascal"
        ],
        correct: 2,
        topic: "Gaya"
      },

      {
        q: "Tumbuhan membuat makanan melalui proses ...",
        a: [
          "respirasi",
          "fotosintesis",
          "ekskresi",
          "difusi"
        ],
        correct: 1,
        topic: "Biologi"
      },

      {
        q: "Perubahan wujud cair menjadi gas disebut ...",
        a: [
          "membeku",
          "menguap",
          "mengembun",
          "menyublim"
        ],
        correct: 1,
        topic: "Zat"
      },

      {
        q: "Planet yang dikenal sebagai Planet Merah adalah ...",
        a: [
          "Venus",
          "Mars",
          "Jupiter",
          "Merkurius"
        ],
        correct: 1,
        topic: "Tata Surya"
      }

    ]

  },


  ips: {

    name: "IPS",
    icon: "🌏",

    questions: [

      {
        q: "Indonesia terletak di antara Benua ...",
        a: [
          "Asia dan Australia",
          "Eropa dan Asia",
          "Afrika dan Australia",
          "Amerika dan Asia"
        ],
        correct: 0,
        topic: "Geografi"
      },

      {
        q: "Kegiatan menghasilkan barang atau jasa disebut ...",
        a: [
          "konsumsi",
          "produksi",
          "distribusi",
          "investasi"
        ],
        correct: 1,
        topic: "Ekonomi"
      },

      {
        q: "Kegiatan menyalurkan barang dari produsen kepada konsumen disebut ...",
        a: [
          "produksi",
          "konsumsi",
          "distribusi",
          "promosi"
        ],
        correct: 2,
        topic: "Ekonomi"
      },

      {
        q: "Garis khatulistiwa melewati wilayah ...",
        a: [
          "Indonesia",
          "Jepang",
          "Mesir",
          "Kanada"
        ],
        correct: 0,
        topic: "Geografi"
      }

    ]

  },


  ppkn: {

    name: "PPKn",
    icon: "🏛️",

    questions: [

      {
        q: "Dasar negara Indonesia adalah ...",
        a: [
          "UUD 1945",
          "Pancasila",
          "Proklamasi",
          "Bhinneka Tunggal Ika"
        ],
        correct: 1,
        topic: "Pancasila"
      },

      {
        q: "Semboyan bangsa Indonesia adalah ...",
        a: [
          "Tut Wuri Handayani",
          "Bhinneka Tunggal Ika",
          "Indonesia Raya",
          "Merdeka Belajar"
        ],
        correct: 1,
        topic: "Kebangsaan"
      },

      {
        q: "UUD 1945 merupakan ...",
        a: [
          "dasar hukum tertulis",
          "lagu nasional",
          "lambang negara",
          "organisasi"
        ],
        correct: 0,
        topic: "Konstitusi"
      },

      {
        q: "Sikap menghargai perbedaan disebut ...",
        a: [
          "toleransi",
          "egoisme",
          "diskriminasi",
          "fanatisme"
        ],
        correct: 0,
        topic: "Keberagaman"
      }

    ]

  },


  informatika: {

    name: "Informatika",
    icon: "💻",

    questions: [

      {
        q: "Memecah masalah besar menjadi bagian-bagian kecil disebut ...",
        a: [
          "abstraksi",
          "dekomposisi",
          "algoritma",
          "debugging"
        ],
        correct: 1,
        topic: "Computational Thinking"
      },

      {
        q: "Urutan langkah sistematis untuk menyelesaikan masalah disebut ...",
        a: [
          "algoritma",
          "hardware",
          "folder",
          "browser"
        ],
        correct: 0,
        topic: "Algoritma"
      },

      {
        q: "CPU merupakan bagian komputer yang berfungsi sebagai ...",
        a: [
          "penyimpan permanen",
          "pemroses",
          "monitor",
          "printer"
        ],
        correct: 1,
        topic: "Sistem Komputer"
      },

      {
        q: "Contoh media penyimpanan sekunder adalah ...",
        a: [
          "RAM",
          "CPU",
          "SSD",
          "cache"
        ],
        correct: 2,
        topic: "Penyimpanan"
      }

    ]

  }

};


/* =========================================================
   OLIMPIADE
   ========================================================= */

const olympiads = {

  matematika: {

    name: "Olimpiade Matematika",
    icon: "🧮",

    questions: [

      {
        q: "Jika a + b = 12 dan ab = 35, maka a² + b² = ...",
        a: ["49", "74", "84", "109"],
        correct: 1,
        topic: "Aljabar"
      },

      {
        q: "Bilangan prima terkecil yang lebih besar dari 20 adalah ...",
        a: ["21", "22", "23", "25"],
        correct: 2,
        topic: "Bilangan"
      },

      {
        q: "Pola 2, 5, 10, 17, ... memiliki suku berikutnya ...",
        a: ["24", "25", "26", "27"],
        correct: 2,
        topic: "Pola"
      },

      {
        q: "Jumlah sudut dalam segitiga adalah ...",
        a: ["90°", "180°", "270°", "360°"],
        correct: 1,
        topic: "Geometri"
      }

    ]

  },


  biologi: {

    name: "Olimpiade Biologi",
    icon: "🧬",

    questions: [

      {
        q: "Organel tempat respirasi sel berlangsung adalah ...",
        a: [
          "ribosom",
          "mitokondria",
          "nukleus",
          "vakuola"
        ],
        correct: 1,
        topic: "Sel"
      },

      {
        q: "Unit terkecil penyusun makhluk hidup adalah ...",
        a: [
          "organ",
          "jaringan",
          "sel",
          "sistem"
        ],
        correct: 2,
        topic: "Sel"
      }

    ]

  },


  fisika: {

    name: "Olimpiade Fisika",
    icon: "⚛️",

    questions: [

      {
        q: "Jika v = 20 m/s selama 5 detik, jarak yang ditempuh adalah ...",
        a: [
          "25 m",
          "50 m",
          "100 m",
          "200 m"
        ],
        correct: 2,
        topic: "Gerak"
      },

      {
        q: "Gaya 10 N bekerja pada massa 2 kg. Percepatannya adalah ...",
        a: ["2 m/s²", "5 m/s²", "10 m/s²", "20 m/s²"],
        correct: 1,
        topic: "Gaya"
      }

    ]

  },


  informatika: {

    name: "Olimpiade Informatika",
    icon: "💻",

    questions: [

      {
        q: "Dalam algoritma, perulangan digunakan untuk ...",
        a: [
          "mengulang langkah",
          "menghapus data",
          "mematikan komputer",
          "menggambar"
        ],
        correct: 0,
        topic: "Algoritma"
      },

      {
        q: "Bilangan biner 1010 dalam desimal adalah ...",
        a: ["8", "9", "10", "12"],
        correct: 2,
        topic: "Bilangan Biner"
      }

    ]

  }

};


/* =========================================================
   STATE
   ========================================================= */

let state = loadState();

let currentExam = null;

let timerInterval = null;


function defaultState() {

  return {

    user: null,

    history: [],

    certificates: [],

    medals: [],

    progress: {}

  };

}


function loadState() {

  try {

    const saved =
      localStorage.getItem(STORAGE_KEY);

    return saved
      ? JSON.parse(saved)
      : defaultState();

  } catch {

    return defaultState();

  }

}


function saveState() {

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(state)
  );

}


/* =========================================================
   HELPERS
   ========================================================= */

function $(id) {

  return document.getElementById(id);

}


function escapeHTML(text) {

  return String(text)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");

}


function showToast(message) {

  const toast = $("toast");

  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {

    toast.classList.remove("show");

  }, 2200);

}


function generateID(prefix="TOD") {

  return (
    prefix +
    "-" +
    Date.now().toString(36).toUpperCase() +
    "-" +
    Math.random()
      .toString(36)
      .substring(2,7)
      .toUpperCase()
  );

}


function formatDate(time) {

  return new Date(time)
    .toLocaleDateString(
      "id-ID",
      {
        day:"numeric",
        month:"long",
        year:"numeric"
      }
    );

}


/* =========================================================
   LOGIN DEMO
   ========================================================= */

$("demoLoginBtn").onclick = function() {

  state.user = {

    name: "Dapii",

    email: "dapii@demo.local"

  };

  saveState();

  openApp();

};


$("googleLoginBtn").onclick = function() {

  showFirebaseInfo();

};


function openApp() {

  $("loginPage")
    .classList
    .add("hidden");

  $("app")
    .classList
    .remove("hidden");

  updateUser();

  navigate("dashboard");

}


function updateUser() {

  const user = state.user;

  if(!user) return;

  $("userName")
    .textContent = user.name;

  $("userEmail")
    .textContent = user.email;

  $("userAvatar")
    .textContent =
      user.name
        .charAt(0)
        .toUpperCase();

}


function logout() {

  state.user = null;

  saveState();

  location.reload();

}


/* =========================================================
   NAVIGATION
   ========================================================= */

function navigate(page) {

  document
    .querySelectorAll(".nav-item")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.page === page
      );

    });


  if(page === "dashboard")
    renderDashboard();

  if(page === "tryout")
    renderTryouts();

  if(page === "olympiad")
    renderOlympiads();

  if(page === "history")
    renderHistory();

  if(page === "certificates")
    renderCertificates();

  if(page === "medals")
    renderMedals();

  if(page === "profile")
    renderProfile();

}


/* =========================================================
   DASHBOARD
   ========================================================= */

function renderDashboard() {

  const history =
    state.history;

  const average =
    history.length
      ? Math.round(
          history.reduce(
            (sum,item) =>
              sum + item.score,
            0
          ) / history.length
        )
      : 0;


  const best =
    history.length
      ? Math.max(
          ...history.map(
            item => item.score
          )
        )
      : 0;


  const unfinished =
    Object.values(
      state.progress
    );


  $("mainContent").innerHTML = `

    <section class="hero">

      <div class="hero-content">

        <div class="eyebrow">
          TRY OUT UNTUK DAPII
        </div>

        <h1>
          Selamat datang,
          ${escapeHTML(state.user.name)} 👋
        </h1>

        <p>
          terus latihan dan lihat perkembangan
          kemampuanmu dari waktu ke waktu.
        </p>

        <button
          class="hero-button"
          onclick="navigate('tryout')">

          Mulai Try Out →

        </button>

      </div>

      <div class="hero-ring"></div>

    </section>


    <div class="stats-grid">

      <div class="stat-card">
        <small>Try Out Selesai</small>
        <strong>${history.length}</strong>
      </div>

      <div class="stat-card">
        <small>Rata-rata Nilai</small>
        <strong>${average}</strong>
      </div>

      <div class="stat-card">
        <small>Nilai Tertinggi</small>
        <strong>${best}</strong>
      </div>

      <div class="stat-card">
        <small>Medali</small>
        <strong>${state.medals.length}</strong>
      </div>

    </div>


    ${
      unfinished.length
      ? `

      <section>

        <div class="page-header">

          <div class="eyebrow">
            PROGRESS TERSIMPAN
          </div>

          <h2>
            Lanjutkan ujian
          </h2>

        </div>

        ${unfinished.map(
          exam => `

          <div class="list-item">

            <div>

              <span class="badge">
                BELUM SELESAI
              </span>

              <h3>
                ${escapeHTML(exam.title)}
              </h3>

              <p class="muted">
                Soal ${exam.index + 1}
                dari
                ${exam.questions.length}
              </p>

            </div>

            <button
              class="primary-button"
              onclick="resumeExam('${exam.id}')">

              Lanjutkan →

            </button>

          </div>

          `
        ).join("")}

      </section>

      `
      : ""
    }


    <section style="margin-top:30px">

      <div class="page-header">

        <div class="eyebrow">
          REKOMENDASI
        </div>

        <h2>
          Mau latihan apa hari ini?
        </h2>

      </div>


      <div class="cards">

        <div class="card">

          <div class="card-icon">
            📝
          </div>

          <h3>
            Try Out Kelas 8
          </h3>

          <p>
            Latihan semester 1 berbagai
            mata pelajaran.
          </p>

          <button
            class="primary-button"
            onclick="navigate('tryout')">

            Lihat Try Out

          </button>

        </div>


        <div class="card">

          <div class="card-icon">
            🏆
          </div>

          <h3>
            Simulasi Olimpiade
          </h3>

          <p>
            Uji kemampuan dengan soal
            yang lebih menantang.
          </p>

          <button
            class="primary-button"
            onclick="navigate('olympiad')">

            Mulai Olimpiade

          </button>

        </div>


        <div class="card">

          <div class="card-icon">
            🧠
          </div>

          <h3>
            Analisis Belajar
          </h3>

          <p>
            ${
              getRecommendation()
            }
          </p>

        </div>

      </div>

    </section>

  `;

}


/* =========================================================
   REKOMENDASI
   ========================================================= */

function getRecommendation() {

  if(!state.history.length) {

    return `
      Kerjakan satu try out dulu.
      Setelah itu sistem akan
      menganalisis materi yang
      perlu kamu pelajari.
    `;

  }


  const topics = {};


  state.history.forEach(
    result => {

      Object.entries(
        result.topics
      ).forEach(
        ([topic,data]) => {

          if(!topics[topic]) {

            topics[topic] = {
              correct:0,
              total:0
            };

          }

          topics[topic].correct +=
            data.correct;

          topics[topic].total +=
            data.total;

        }
      );

    }
  );


  const sorted =
    Object.entries(topics)
      .map(
        ([topic,data]) => ({

          topic,

          accuracy:
            data.correct /
            data.total

        })
      )
      .sort(
        (a,b) =>
          a.accuracy -
          b.accuracy
      );


  if(!sorted.length)
    return "Belum cukup data.";


  const weakest =
    sorted[0];


  return `
    Materi yang paling perlu
    kamu dalami:
    <b>${escapeHTML(
      weakest.topic
    )}</b>
    (${Math.round(
      weakest.accuracy * 100
    )}% akurasi).
  `;

}


/* =========================================================
   TRYOUT LIST
   ========================================================= */

function renderTryouts() {

  $("mainContent").innerHTML = `

    <div class="page-header">

      <div class="eyebrow">
        KELAS 8 SMP • SEMESTER 1
      </div>

      <h1>
        Try Out SMP
      </h1>

      <p class="muted">
        Pilih mata pelajaran yang ingin
        kamu kerjakan.
      </p>

    </div>


    <div class="cards">

      ${Object.entries(subjects)
        .map(
          ([id,subject]) => `

          <div class="card">

            <div class="card-icon">
              ${subject.icon}
            </div>

            <h3>
              ${subject.name}
            </h3>

            <p>
              ${subject.questions.length}
              soal • semester 1
            </p>

            <button
              class="primary-button"
              onclick="startExam(
                '${id}',
                'tryout'
              )">

              Mulai Try Out

            </button>

          </div>

          `
        ).join("")}

    </div>

  `;

}


/* =========================================================
   OLIMPIADE
   ========================================================= */

function renderOlympiads() {

  $("mainContent").innerHTML = `

    <div class="page-header">

      <div class="eyebrow">
        COMPETITION MODE
      </div>

      <h1>
        Simulasi Olimpiade 🏆
      </h1>

      <p class="muted">
        Tantang kemampuanmu dengan
        soal olimpiade berbagai bidang.
      </p>

    </div>


    <div class="cards">

      ${Object.entries(olympiads)
        .map(
          ([id,olympiad]) => `

          <div class="card">

            <div class="card-icon">
              ${olympiad.icon}
            </div>

            <h3>
              ${olympiad.name}
            </h3>

            <p>
              ${olympiad.questions.length}
              soal kompetisi
            </p>

            <button
              class="primary-button"
              onclick="startExam(
                '${id}',
                'olympiad'
              )">

              Ikuti Simulasi

            </button>

          </div>

          `
        ).join("")}

    </div>

  `;

}


/* =========================================================
   START EXAM
   ========================================================= */

function startExam(
  subjectID,
  type,
  resume = false
) {

  const bank =
    type === "olympiad"
      ? olympiads[subjectID]
      : subjects[subjectID];


  const id =
    `${type}_${subjectID}`;


  let saved =
    state.progress[id];


  if(resume && saved) {

    currentExam = {
      ...saved
    };

  } else {

    currentExam = {

      id,

      type,

      subjectID,

      title: bank.name,

      questions: bank.questions,

      index: 0,

      answers:
        new Array(
          bank.questions.length
        ).fill(null),

      seconds:
        type === "olympiad"
          ? 3600
          : 1800

    };

  }


  saveProgress();


  renderExam();


  clearInterval(timerInterval);


  timerInterval =
    setInterval(
      tickTimer,
      1000
    );

}


function resumeExam(id) {

  const saved =
    state.progress[id];

  if(!saved) return;


  const [type,subjectID] =
    id.split("_");


  startExam(
    subjectID,
    type,
    true
  );

}


window.resumeExam = resumeExam;


/* =========================================================
   EXAM UI
   ========================================================= */

function renderExam() {

  $("mainContent").innerHTML = `

    <div class="exam-container">

      <div class="exam-header">

        <div>

          <div class="eyebrow">
            ${
              currentExam.type ===
              "olympiad"
              ? "SIMULASI OLIMPIADE"
              : "TRY OUT SMP"
            }
          </div>

          <h1>
            ${escapeHTML(
              currentExam.title
            )}
          </h1>

        </div>


        <div
          id="timer"
          class="timer">

        </div>

      </div>


      <div class="exam-grid">


        <aside class="question-numbers">

          <strong>
            Nomor Soal
          </strong>

          <div
            id="numberGrid"
            class="number-grid">

          </div>

        </aside>


        <section
          class="question-card">

          <div class="progress">

            <span
              id="examProgress">
            </span>

          </div>


          <div id="questionArea">

          </div>


          <div class="exam-navigation">

            <button
              class="secondary-button"
              onclick="previousQuestion()">

              ← Sebelumnya

            </button>


            <button
              id="nextQuestionButton"
              class="primary-button"
              onclick="nextQuestion()">

              Selanjutnya →

            </button>

          </div>

        </section>


      </div>

    </div>

  `;


  renderQuestion();

  updateTimer();

}


/* =========================================================
   QUESTION
   ========================================================= */

function renderQuestion() {

  const q =
    currentExam.questions[
      currentExam.index
    ];


  const letters =
    ["A","B","C","D"];


  $("questionArea").innerHTML = `

    <div class="question">

      ${currentExam.index + 1}.
      ${escapeHTML(q.q)}

    </div>


    <div class="answers">

      ${q.a.map(
        (answer,index) => `

        <button
          class="answer
          ${
            currentExam.answers[
              currentExam.index
            ] === index
              ? "selected"
              : ""
          }"

          onclick="selectAnswer(
            ${index}
          )">

          <span class="answer-letter">

            ${letters[index]}

          </span>

          ${escapeHTML(answer)}

        </button>

        `
      ).join("")}

    </div>

  `;


  const progress =
    (
      (currentExam.index + 1) /
      currentExam.questions.length
    ) * 100;


  $("examProgress")
    .style.width =
      progress + "%";


  $("numberGrid").innerHTML =

    currentExam.questions
      .map(
        (_,index) => `

        <button
          class="
            number-button

            ${
              currentExam.answers[index] !== null
                ? "answered"
                : ""
            }

            ${
              currentExam.index === index
                ? "current"
                : ""
            }
          "

          onclick="
            jumpQuestion(${index})
          ">

          ${index + 1}

        </button>

        `
      ).join("");


  $("nextQuestionButton")
    .textContent =
      currentExam.index ===
      currentExam.questions.length - 1
        ? "Kumpulkan ✓"
        : "Selanjutnya →";

}


function selectAnswer(index) {

  currentExam.answers[
    currentExam.index
  ] = index;


  saveProgress();

  renderQuestion();

  showToast(
    "Jawaban tersimpan ✓"
  );

}


window.selectAnswer = selectAnswer;


function jumpQuestion(index) {

  currentExam.index =
    index;

  saveProgress();

  renderQuestion();

}


window.jumpQuestion =
  jumpQuestion;


function nextQuestion() {

  if(
    currentExam.index <
    currentExam.questions.length - 1
  ) {

    currentExam.index++;

    saveProgress();

    renderQuestion();

  } else {

    finishExam();

  }

}


window.nextQuestion =
  nextQuestion;


function previousQuestion() {

  if(currentExam.index > 0) {

    currentExam.index--;

    saveProgress();

    renderQuestion();

  }

}


window.previousQuestion =
  previousQuestion;


/* =========================================================
   AUTOSAVE
   ========================================================= */

function saveProgress() {

  if(!currentExam)
    return;


  state.progress[
    currentExam.id
  ] = {

    ...currentExam

  };


  saveState();

}


/* =========================================================
   TIMER
   ========================================================= */

function tickTimer() {

  if(!currentExam)
    return;


  currentExam.seconds--;


  saveProgress();

  updateTimer();


  if(
    currentExam.seconds <= 0
  ) {

    finishExam();

  }

}


function updateTimer() {

  const timer =
    $("timer");


  if(!timer)
    return;


  const minutes =
    Math.floor(
      currentExam.seconds / 60
    );


  const seconds =
    currentExam.seconds % 60;


  timer.textContent =
    String(minutes).padStart(2,"0")
    + ":"
    +
    String(seconds).padStart(2,"0");


  timer.classList.toggle(
    "warning",
    currentExam.seconds < 60
  );

}


/* =========================================================
   FINISH
   ========================================================= */

function finishExam() {

  if(!currentExam)
    return;


  clearInterval(
    timerInterval
  );


  let correct = 0;

  const topics = {};


  currentExam.questions
    .forEach(
      (q,index) => {

        if(!topics[q.topic]) {

          topics[q.topic] = {

            correct: 0,

            total: 0

          };

        }


        topics[q.topic].total++;


        if(
          currentExam.answers[index] ===
          q.correct
        ) {

          correct++;

          topics[q.topic]
            .correct++;

        }

      }
    );


  const total =
    currentExam.questions.length;


  const score =
    Math.round(
      correct / total * 100
    );


  const result = {

    id:
      generateID("RESULT"),

    title:
      currentExam.title,

    type:
      currentExam.type,

    score,

    correct,

    total,

    topics,

    date:
      Date.now()

  };


  state.history.unshift(
    result
  );


  delete state.progress[
    currentExam.id
  ];


  const certificate = {

    id:
      generateID("CERT"),

    number:
      generateID("CERT"),

    name:
      state.user.name,

    title:
      currentExam.title,

    score,

    date:
      Date.now()

  };


  state.certificates.unshift(
    certificate
  );


  const medal =
    getMedal(score);


  if(
    medal &&
    !state.medals.includes(medal)
  ) {

    state.medals.push(
      medal
    );

  }


  saveState();


  currentExam = null;


  renderResult(
    result,
    certificate,
    medal
  );

}


function getMedal(score) {

  if(score >= 95)
    return "diamond";

  if(score >= 85)
    return "gold";

  if(score >= 70)
    return "silver";

  if(score >= 50)
    return "bronze";

  return null;

}


/* =========================================================
   RESULT
   ========================================================= */

function renderResult(
  result,
  certificate,
  medal
) {

  const medalName = {

    bronze: "Bronze 🥉",

    silver: "Silver 🥈",

    gold: "Gold 🥇",

    diamond: "Diamond 💎"

  };


  $("mainContent").innerHTML = `

    <div style="
      max-width:800px;
      margin:auto;
      text-align:center;
    ">

      <div class="card">

        <div
          style="
            font-size:55px;
          ">

          🏆

        </div>


        <div class="eyebrow">
          HASIL UJIAN
        </div>


        <h1>
          ${escapeHTML(
            result.title
          )}
        </h1>


        <div class="certificate-score">

          ${result.score}

        </div>


        <p class="muted">

          ${result.correct}
          dari
          ${result.total}
          jawaban benar.

        </p>


        <p>

          Medali:
          <b>
            ${
              medal
                ? medalName[medal]
                : "Belum mendapatkan medali"
            }
          </b>

        </p>


        <hr>


        <h2>
          Analisis kemampuan
        </h2>


        <div class="cards">

          ${Object.entries(
            result.topics
          ).map(
            ([topic,data]) => {

              const accuracy =
                Math.round(
                  data.correct /
                  data.total *
                  100
                );


              return `

                <div class="card">

                  <b>
                    ${escapeHTML(
                      topic
                    )}
                  </b>

                  <p>

                    ${accuracy}%
                    akurasi

                  </p>

                  <div class="progress">

                    <span
                      style="
                        width:${accuracy}%
                      ">

                    </span>

                  </div>

                </div>

              `;

            }
          ).join("")}

        </div>


        <div style="
          margin-top:25px;
          display:flex;
          justify-content:center;
          gap:10px;
          flex-wrap:wrap;
        ">

          <button
            class="primary-button"
            onclick="
              openCertificate(
                '${certificate.id}'
              )
            ">

            🎓 Lihat Sertifikat

          </button>


          <button
            class="secondary-button"
            onclick="
              navigate('dashboard')
            ">

            Dashboard

          </button>

        </div>

      </div>

    </div>

  `;

}


/* =========================================================
   HISTORY
   ========================================================= */

function renderHistory() {

  $("mainContent").innerHTML = `

    <div class="page-header">

      <div class="eyebrow">
        PERFORMANCE
      </div>

      <h1>
        Riwayat Ujian
      </h1>

      <p class="muted">
        Semua hasil ujianmu tersimpan
        secara otomatis.
      </p>

    </div>


    ${
      state.history.length
      ?

      state.history.map(
        result => `

          <div class="list-item">

            <div>

              <span class="badge">
                SELESAI
              </span>

              <h3>
                ${escapeHTML(
                  result.title
                )}
              </h3>

              <p class="muted">
                ${formatDate(
                  result.date
                )}
                •
                ${result.correct}/${result.total}
                benar
              </p>

            </div>


            <div class="score">

              ${result.score}

            </div>

          </div>

        `
      ).join("")

      :

      `
        <div class="card">

          Belum ada riwayat ujian.

        </div>
      `

    }

  `;

}


/* =========================================================
   CERTIFICATES
   ========================================================= */

function renderCertificates() {

  $("mainContent").innerHTML = `

    <div class="page-header">

      <div class="eyebrow">
        ACHIEVEMENT
      </div>

      <h1>
        Sertifikat Saya 🎓
      </h1>

    </div>


    ${
      state.certificates.length

      ?

      state.certificates
        .map(
          certificate => `

          <div class="list-item">

            <div>

              <h3>
                ${escapeHTML(
                  certificate.title
                )}
              </h3>

              <p class="muted">

                ${formatDate(
                  certificate.date
                )}

                •

                No.
                ${certificate.number}

              </p>

            </div>


            <button
              class="primary-button"
              onclick="
                openCertificate(
                  '${certificate.id}'
                )
              ">

              Buka

            </button>

          </div>

          `
        ).join("")

      :

      `
        <div class="card">
          Belum ada sertifikat.
        </div>
      `

    }

  `;

}


/* =========================================================
   OPEN CERTIFICATE
   ========================================================= */

function openCertificate(id) {

  const certificate =
    state.certificates.find(
      item => item.id === id
    );


  if(!certificate)
    return;


  $("modal").classList.remove(
    "hidden"
  );


  $("modal").innerHTML = `

    <div class="modal-box">

      <div class="certificate">

        <div class="eyebrow">
          TRY OUT UNTUK DAPII
        </div>

        <h1>
          SERTIFIKAT
        </h1>

        <p>
          Diberikan kepada
        </p>

        <div class="certificate-name">

          ${escapeHTML(
            certificate.name
          )}

        </div>

        <p>
          telah berhasil menyelesaikan
        </p>

        <h2>
          ${escapeHTML(
            certificate.title
          )}
        </h2>

        <div class="certificate-score">

          ${certificate.score}/100

        </div>

        <p>
          ${formatDate(
            certificate.date
          )}
        </p>

        <small>
          No. Sertifikat:
          ${certificate.number}
        </small>

      </div>


      <div style="
        text-align:center;
        margin-top:15px;
      ">

        <button
          class="primary-button"
          onclick="closeModal()">

          Tutup

        </button>

      </div>

    </div>

  `;

}


function closeModal() {

  $("modal")
    .classList
    .add("hidden");

}


/* =========================================================
   MEDALS
   ========================================================= */

function renderMedals() {

  const medals = [

    {
      id:"bronze",
      name:"Bronze",
      requirement:"Nilai 50+",
      icon:"🥉"
    },

    {
      id:"silver",
      name:"Silver",
      requirement:"Nilai 70+",
      icon:"🥈"
    },

    {
      id:"gold",
      name:"Gold",
      requirement:"Nilai 85+",
      icon:"🥇"
    },

    {
      id:"diamond",
      name:"Diamond",
      requirement:"Nilai 95+",
      icon:"💎"
    }

  ];


  $("mainContent").innerHTML = `

    <div class="page-header">

      <div class="eyebrow">
        ACHIEVEMENT
      </div>

      <h1>
        Medali Pencapaian ✦
      </h1>

      <p class="muted">
        Kumpulkan semua medali dengan
        meningkatkan hasil belajarmu.
      </p>

    </div>


    <div class="medal-grid">

      ${medals.map(
        medal => `

        <div class="medal-card">

          <div
            class="
              medal
              ${medal.id}
              ${
                state.medals.includes(
                  medal.id
                )
                ? ""
                : "locked"
              }
            ">

            ${medal.icon}

          </div>


          <h3>
            ${medal.name}
          </h3>


          <p class="muted">
            ${medal.requirement}
          </p>


          <span class="badge">

            ${
              state.medals.includes(
                medal.id
              )
              ? "TERBUKA"
              : "TERKUNCI"
            }

          </span>

        </div>

        `
      ).join("")}

    </div>

  `;

}


/* =========================================================
   PROFILE
   ========================================================= */

function renderProfile() {

  $("mainContent").innerHTML = `

    <div class="page-header">

      <div class="eyebrow">
        ACCOUNT
      </div>

      <h1>
        Profil
      </h1>

    </div>


    <div class="card">

      <div style="
        display:flex;
        align-items:center;
        gap:15px;
      ">

        <div
          class="avatar"
          style="
            width:65px;
            height:65px;
            font-size:25px;
          ">

          ${state.user.name
            .charAt(0)
            .toUpperCase()}

        </div>


        <div>

          <h2>
            ${escapeHTML(
              state.user.name
            )}
          </h2>

          <p class="muted">

            ${escapeHTML(
              state.user.email
            )}

          </p>

        </div>

      </div>


      <hr style="
        border:0;
        border-top:1px solid #eee;
        margin:25px 0;
      ">


      <p class="muted">

        Data demo saat ini tersimpan
        menggunakan localStorage browser.
        Artinya progress tetap ada ketika
        lu membuka website lagi di browser
        yang sama.

      </p>


      <button
        class="danger-button"
        onclick="clearAllData()">

        Hapus seluruh data

      </button>

    </div>

  `;

}


/* =========================================================
   CLEAR DATA
   ========================================================= */

function clearAllData() {

  const confirmed =
    confirm(
      "Yakin mau menghapus semua riwayat, sertifikat, medali, dan progress?"
    );


  if(!confirmed)
    return;


  const user =
    state.user;


  state =
    defaultState();


  state.user =
    user;


  saveState();


  navigate(
    "dashboard"
  );


  showToast(
    "Data berhasil dihapus."
  );

}


/* =========================================================
   FIREBASE INFO
   ========================================================= */

function showFirebaseInfo() {

  $("modal")
    .classList
    .remove("hidden");


  $("modal").innerHTML = `

    <div class="modal-box">

      <h2>
        Google Login
      </h2>

      <p class="muted">

        Tombol Google akan benar-benar
        login dan menyimpan data lintas
        perangkat setelah website
        disambungkan ke Firebase.

      </p>


      <h3>
        Yang nanti kita aktifkan:
      </h3>


      <ul>

        <li>
          Google Authentication
        </li>

        <li>
          Firestore Database
        </li>

        <li>
          Progress tersimpan di akun
        </li>

        <li>
          Riwayat tersedia di perangkat lain
        </li>

        <li>
          Sertifikat tersimpan di akun
        </li>

        <li>
          Medali tersimpan di akun
        </li>

      </ul>


      <p class="muted">

        Untuk sekarang tekan
        <b>"Masuk sebagai Dapii"</b>
        untuk mengetes seluruh sistem.

      </p>


      <button
        class="primary-button"
        onclick="closeModal()">

        Mengerti

      </button>

    </div>

  `;

}


/* =========================================================
   INITIALIZE
   ========================================================= */

if(state.user) {

  openApp();

}
