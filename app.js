// ============================================================
// FIREBASE
// ============================================================

import {
  initializeApp
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";


// ============================================================
// MASUKKAN CONFIG FIREBASE LU DI SINI
// ============================================================

const firebaseConfig = {

  apiKey: "MASUKKAN_API_KEY",

  authDomain: "PROJECT-ID.firebaseapp.com",

  projectId: "PROJECT-ID",

  storageBucket: "PROJECT-ID.firebasestorage.app",

  messagingSenderId: "MESSAGING-SENDER-ID",

  appId: "APP-ID"

};


// ============================================================
// INITIALIZE
// ============================================================

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const provider = new GoogleAuthProvider();


// ============================================================
// STATE
// ============================================================

let currentUser = null;

let currentExam = null;

let currentQuestion = 0;

let userAnswers = [];

let examTimer = null;

let remainingSeconds = 1800;

let currentExamId = null;


// ============================================================
// SOAL
// ============================================================

const examData = {

  math: {

    title:"Try Out Matematika",

    subject:"Matematika",

    duration:1800,

    questions:[

      {
        question:"Hasil dari 24 + 18 × 2 adalah ...",
        options:["48","60","84","42"],
        answer:1,
        topic:"Operasi Bilangan"
      },

      {
        question:"FPB dari 24 dan 36 adalah ...",
        options:["6","8","12","18"],
        answer:2,
        topic:"FPB dan KPK"
      },

      {
        question:"KPK dari 8 dan 12 adalah ...",
        options:["16","20","24","48"],
        answer:2,
        topic:"FPB dan KPK"
      },

      {
        question:"Jika x + 7 = 15, maka nilai x adalah ...",
        options:["6","7","8","9"],
        answer:2,
        topic:"Aljabar"
      },

      {
        question:"Sisi siku-siku segitiga adalah 6 cm dan 8 cm. Sisi miringnya adalah ...",
        options:["9 cm","10 cm","12 cm","14 cm"],
        answer:1,
        topic:"Pythagoras"
      }

    ]

  },


  indo: {

    title:"Try Out Bahasa Indonesia",

    subject:"Bahasa Indonesia",

    duration:1800,

    questions:[

      {
        question:"Gagasan utama dalam sebuah paragraf disebut ...",
        options:["Kalimat penjelas","Ide pokok","Kesimpulan","Kata kunci"],
        answer:1,
        topic:"Teks"
      },

      {
        question:"Kalimat yang digunakan untuk memberikan informasi disebut kalimat ...",
        options:["Imperatif","Interogatif","Deklaratif","Eksklamatif"],
        answer:2,
        topic:"Kalimat"
      },

      {
        question:"Lawan kata 'optimis' adalah ...",
        options:["Semangat","Pesimis","Aktif","Percaya"],
        answer:1,
        topic:"Kosakata"
      }

    ]

  },


  english: {

    title:"Try Out Bahasa Inggris",

    subject:"Bahasa Inggris",

    duration:1800,

    questions:[

      {
        question:"She ___ a student.",
        options:["am","is","are","be"],
        answer:1,
        topic:"Grammar"
      },

      {
        question:"The opposite of 'big' is ...",
        options:["large","small","long","high"],
        answer:1,
        topic:"Vocabulary"
      },

      {
        question:"Yesterday, I ___ to school.",
        options:["go","goes","went","going"],
        answer:2,
        topic:"Simple Past"
      }

    ]

  },


  science: {

    title:"Try Out IPA",

    subject:"IPA",

    duration:1800,

    questions:[

      {
        question:"Organ yang berfungsi memompa darah adalah ...",
        options:["Paru-paru","Jantung","Ginjal","Hati"],
        answer:1,
        topic:"Sistem Organ"
      },

      {
        question:"Satuan SI untuk gaya adalah ...",
        options:["Joule","Watt","Newton","Pascal"],
        answer:2,
        topic:"Fisika"
      },

      {
        question:"Proses tumbuhan membuat makanan sendiri disebut ...",
        options:["Respirasi","Fotosintesis","Transpirasi","Ekskresi"],
        answer:1,
        topic:"Biologi"
      }

    ]

  },


  social: {

    title:"Try Out IPS",

    subject:"IPS",

    duration:1800,

    questions:[

      {
        question:"Indonesia terletak di antara dua benua, yaitu ...",
        options:[
          "Asia dan Australia",
          "Eropa dan Asia",
          "Afrika dan Australia",
          "Amerika dan Asia"
        ],
        answer:0,
        topic:"Geografi"
      },

      {
        question:"Kegiatan menghasilkan barang atau jasa disebut ...",
        options:["Konsumsi","Produksi","Distribusi","Investasi"],
        answer:1,
        topic:"Ekonomi"
      }

    ]

  },


  civics: {

    title:"Try Out PPKn",

    subject:"PPKn",

    duration:1800,

    questions:[

      {
        question:"Dasar negara Indonesia adalah ...",
        options:["UUD 1945","Pancasila","Bhinneka Tunggal Ika","Proklamasi"],
        answer:1,
        topic:"Pancasila"
      },

      {
        question:"Semboyan bangsa Indonesia adalah ...",
        options:[
          "Tut Wuri Handayani",
          "Bhinneka Tunggal Ika",
          "Merdeka Belajar",
          "Indonesia Raya"
        ],
        answer:1,
        topic:"Kebangsaan"
      }

    ]

  },


  informatics: {

    title:"Try Out Informatika",

    subject:"Informatika",

    duration:1800,

    questions:[

      {
        question:"Memecah masalah besar menjadi masalah kecil disebut ...",
        options:[
          "Abstraksi",
          "Dekomposisi",
          "Algoritma",
          "Debugging"
        ],
        answer:1,
        topic:"Computational Thinking"
      },

      {
        question:"Urutan langkah sistematis untuk menyelesaikan masalah disebut ...",
        options:[
          "Algoritma",
          "Hardware",
          "Folder",
          "Browser"
        ],
        answer:0,
        topic:"Algoritma"
      }

    ]

  }

};


// ============================================================
// LOGIN GOOGLE
// ============================================================

document
  .getElementById("googleLoginBtn")
  .addEventListener("click", async () => {

    try{

      await signInWithPopup(auth,provider);

    }catch(error){

      console.error(error);

      alert("Login gagal: " + error.message);

    }

  });


// ============================================================
// AUTH STATE
// ============================================================

onAuthStateChanged(auth, async user => {

  if(user){

    currentUser = user;

    document
      .getElementById("loginPage")
      .classList.add("hidden");

    document
      .getElementById("appPage")
      .classList.remove("hidden");

    document
      .getElementById("userName")
      .textContent = user.displayName || "Dapii";

    document
      .getElementById("dashboardName")
      .textContent = user.displayName || "Dapii";

    document
      .getElementById("userEmail")
      .textContent = user.email;

    document
      .getElementById("userPhoto")
      .src = user.photoURL || "";

    await loadDashboard();

  }else{

    document
      .getElementById("loginPage")
      .classList.remove("hidden");

    document
      .getElementById("appPage")
      .classList.add("hidden");

  }

});


// ============================================================
// LOGOUT
// ============================================================

document
  .getElementById("logoutBtn")
  .addEventListener("click", async () => {

    await signOut(auth);

  });


// ============================================================
// NAVIGATION
// ============================================================

function hideAllPages(){

  [
    "dashboardPage",
    "examListPage",
    "examPage",
    "resultPage",
    "historyPage",
    "certificatePage",
    "olympiadPage"

  ].forEach(id => {

    document
      .getElementById(id)
      .classList.add("hidden");

  });

}


window.showDashboard = function(){

  hideAllPages();

  document
    .getElementById("dashboardPage")
    .classList.remove("hidden");

  loadDashboard();

};


window.backDashboard = function(){

  showDashboard();

};


window.openExamList = function(){

  hideAllPages();

  document
    .getElementById("examListPage")
    .classList.remove("hidden");

};


window.openOlympiad = function(){

  hideAllPages();

  document
    .getElementById("olympiadPage")
    .classList.remove("hidden");

};


window.openHistory = async function(){

  hideAllPages();

  document
    .getElementById("historyPage")
    .classList.remove("hidden");

  await loadHistory();

};


window.openCertificates = async function(){

  hideAllPages();

  document
    .getElementById("certificatePage")
    .classList.remove("hidden");

  await loadCertificates();

};


// ============================================================
// START EXAM
// ============================================================

window.startExam = async function(type){

  if(!currentUser){

    alert("Silakan login terlebih dahulu.");

    return;

  }

  const data = examData[type];

  currentExamId =
    `${type}_${Date.now()}`;

  currentExam = {

    id:currentExamId,

    type:type,

    title:data.title,

    subject:data.subject,

    questions:data.questions,

    duration:data.duration

  };

  currentQuestion = 0;

  userAnswers =
    new Array(data.questions.length).fill(null);

  remainingSeconds = data.duration;

  // cek apakah ada progress lama

  const progressRef = doc(
    db,
    "users",
    currentUser.uid,
    "progress",
    type
  );

  const progressSnap =
    await getDoc(progressRef);

  if(progressSnap.exists()){

    const old = progressSnap.data();

    const resume =
      confirm(
        `Kamu punya progress ${old.title} yang belum selesai.\n\n` +
        `Soal terakhir: ${old.currentQuestion + 1}\n\n` +
        `Lanjutkan?`
      );

    if(resume){

      currentExamId = old.examId;

      currentQuestion =
        old.currentQuestion || 0;

      userAnswers =
        old.answers || userAnswers;

      remainingSeconds =
        old.remainingSeconds || data.duration;

    }else{

      await setDoc(progressRef,{});

    }

  }

  hideAllPages();

  document
    .getElementById("examPage")
    .classList.remove("hidden");

  document
    .getElementById("examSubject")
    .textContent = data.subject;

  document
    .getElementById("examTitle")
    .textContent = data.title;

  renderQuestionNumbers();

  renderQuestion();

  startTimer();

};


// ============================================================
// RENDER SOAL
// ============================================================

function renderQuestion(){

  const q =
    currentExam.questions[currentQuestion];

  const container =
    document.getElementById("questionContainer");

  container.innerHTML = `

    <div class="question-title">

      ${currentQuestion + 1}.
      ${q.question}

    </div>

    <div class="answers">

      ${q.options.map((option,index) => `

        <button
          class="answer
          ${userAnswers[currentQuestion] === index ? "selected":""}"
          onclick="selectAnswer(${index})">

          <b>${String.fromCharCode(65 + index)}.</b>

          ${option}

        </button>

      `).join("")}

    </div>

  `;

  const percentage =
    ((currentQuestion + 1) /
    currentExam.questions.length) * 100;

  document
    .getElementById("progressBar")
    .style.width = percentage + "%";

  document
    .getElementById("nextQuestionBtn")
    .textContent =
      currentQuestion ===
      currentExam.questions.length - 1

      ? "Kumpulkan ✓"

      : "Selanjutnya →";

  renderQuestionNumbers();

}


// ============================================================
// PILIH JAWABAN
// ============================================================

window.selectAnswer = async function(index){

  userAnswers[currentQuestion] = index;

  renderQuestion();

  await saveProgress();

};


// ============================================================
// NOMOR SOAL
// ============================================================

function renderQuestionNumbers(){

  const container =
    document.getElementById("questionNumbers");

  container.innerHTML =
    currentExam.questions.map((q,index)=>`

      <button
        class="question-number
        ${userAnswers[index] !== null ? "answered":""}"
        onclick="jumpQuestion(${index})">

        ${index + 1}

      </button>

    `).join("");

}


window.jumpQuestion = function(index){

  currentQuestion = index;

  renderQuestion();

};


// ============================================================
// NEXT
// ============================================================

window.nextQuestion = async function(){

  if(
    currentQuestion <
    currentExam.questions.length - 1
  ){

    currentQuestion++;

    await saveProgress();

    renderQuestion();

  }else{

    finishExam();

  }

};


// ============================================================
// PREVIOUS
// ============================================================

window.previousQuestion = async function(){

  if(currentQuestion > 0){

    currentQuestion--;

    await saveProgress();

    renderQuestion();

  }

};


// ============================================================
// TIMER
// ============================================================

function startTimer(){

  clearInterval(examTimer);

  updateTimer();

  examTimer =
    setInterval(async ()=>{

      remainingSeconds--;

      updateTimer();

      if(
        remainingSeconds <= 0
      ){

        clearInterval(examTimer);

        await finishExam();

      }

      // autosave setiap detik tertentu

      if(
        remainingSeconds % 10 === 0
      ){

        await saveProgress();

      }

    },1000);

}


function updateTimer(){

  const minutes =
    Math.floor(
      remainingSeconds / 60
    );

  const seconds =
    remainingSeconds % 60;

  document
    .getElementById("timer")
    .textContent =
      `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;

}


// ============================================================
// SIMPAN PROGRESS
// ============================================================

async function saveProgress(){

  if(!currentUser || !currentExam)
    return;

  const progressRef =
    doc(
      db,
      "users",
      currentUser.uid,
      "progress",
      currentExam.type
    );

  await setDoc(
    progressRef,
    {

      examId:currentExamId,

      type:currentExam.type,

      title:currentExam.title,

      subject:currentExam.subject,

      currentQuestion,

      answers:userAnswers,

      remainingSeconds,

      updatedAt:Date.now(),

      completed:false

    },
    {merge:true}
  );

}


// ============================================================
// SELESAIKAN UJIAN
// ============================================================

async function finishExam(){

  clearInterval(examTimer);

  let correct = 0;

  const topicStats = {};

  currentExam.questions.forEach((q,index)=>{

    if(!topicStats[q.topic]){

      topicStats[q.topic] = {

        correct:0,

        total:0

      };

    }

    topicStats[q.topic].total++;

    if(
      userAnswers[index] ===
      q.answer
    ){

      correct++;

      topicStats[q.topic].correct++;

    }

  });

  const total =
    currentExam.questions.length;

  const score =
    Math.round(
      (correct / total) * 100
    );


  // simpan hasil

  await addDoc(

    collection(
      db,
      "users",
      currentUser.uid,
      "history"
    ),

    {

      examId:currentExamId,

      title:currentExam.title,

      subject:currentExam.subject,

      score,

      correct,

      total,

      topicStats,

      completedAt:Date.now()

    }

  );


  // hapus progress

  const progressRef =
    doc(
      db,
      "users",
      currentUser.uid,
      "progress",
      currentExam.type
    );

  await setDoc(
    progressRef,
    {
      completed:false
    }
  );


  // buat sertifikat

  const certificateNumber =
    "TOD-" +
    new Date().getFullYear() +
    "-" +
    Math.floor(
      100000 + Math.random()*900000
    );


  await addDoc(

    collection(
      db,
      "users",
      currentUser.uid,
      "certificates"
    ),

    {

      certificateNumber,

      title:currentExam.title,

      subject:currentExam.subject,

      score,

      issuedAt:Date.now(),

      studentName:
        currentUser.displayName

    }

  );


  document
    .getElementById("resultExamName")
    .textContent =
      currentExam.title;

  document
    .getElementById("resultScore")
    .textContent =
      score;

  document
    .getElementById("resultDescription")
    .textContent =
      `Kamu menjawab ${correct} dari ${total} soal dengan benar.`;

  hideAllPages();

  document
    .getElementById("resultPage")
    .classList.remove("hidden");

}


// ============================================================
// DASHBOARD
// ============================================================

async function loadDashboard(){

  if(!currentUser)
    return;

  const historyRef =
    collection(
      db,
      "users",
      currentUser.uid,
      "history"
    );

  const snapshot =
    await getDocs(historyRef);

  const results =
    snapshot.docs.map(
      doc => doc.data()
    );

  const completed =
    results.length;

  const scores =
    results.map(x => x.score);

  const average =
    scores.length
    ? Math.round(
        scores.reduce(
          (a,b)=>a+b,
          0
        ) / scores.length
      )
    : 0;

  const best =
    scores.length
    ? Math.max(...scores)
    : 0;

  document
    .getElementById("completedCount")
    .textContent =
      completed;

  document
    .getElementById("averageScore")
    .textContent =
      average;

  document
    .getElementById("bestScore")
    .textContent =
      best;


  // sertifikat

  const certSnapshot =
    await getDocs(
      collection(
        db,
        "users",
        currentUser.uid,
        "certificates"
      )
    );

  document
    .getElementById("certificateCount")
    .textContent =
      certSnapshot.size;


  // progress belum selesai

  const progressSnapshot =
    await getDocs(
      collection(
        db,
        "users",
        currentUser.uid,
        "progress"
      )
    );

  const list =
    document
      .getElementById("unfinishedList");

  list.innerHTML = "";

  progressSnapshot.docs.forEach(docSnap=>{

    const data =
      docSnap.data();

    if(
      data.completed === false &&
      data.answers
    ){

      list.innerHTML += `

        <div class="history-card">

          <div>

            <strong>${data.title}</strong>

            <p>
              Soal
              ${(data.currentQuestion || 0)+1}
              dari
              ${data.answers.length}
            </p>

          </div>

          <button
            class="back-btn"
            onclick="resumeExam('${data.type}')">

            LANJUTKAN →

          </button>

        </div>

      `;

    }

  });


  generateRecommendation(results);

}


// ============================================================
// RESUME
// ============================================================

window.resumeExam = function(type){

  startExam(type);

};


// ============================================================
// REKOMENDASI
// ============================================================

function generateRecommendation(results){

  const topicMap = {};

  results.forEach(result=>{

    if(!result.topicStats)
      return;

    Object.entries(
      result.topicStats
    ).forEach(([topic,data])=>{

      if(!topicMap[topic]){

        topicMap[topic] = {

          correct:0,

          total:0

        };

      }

      topicMap[topic].correct +=
        data.correct;

      topicMap[topic].total +=
        data.total;

    });

  });


  let weakest = null;

  let weakestScore = 101;

  Object.entries(topicMap)
    .forEach(([topic,data])=>{

      const percentage =
        (data.correct /
        data.total) * 100;

      if(
        percentage < weakestScore
      ){

        weakestScore =
          percentage;

        weakest = topic;

      }

    });


  const box =
    document
      .getElementById(
        "recommendationBox"
      );


  if(weakest){

    box.innerHTML = `

      <strong>
        ⚠️ Materi yang perlu kamu perdalam:
      </strong>

      <h3>${weakest}</h3>

      <p>
        Akurasi kamu pada materi ini sekitar
        <strong>
          ${Math.round(weakestScore)}%
        </strong>.
        Coba kerjakan latihan tambahan
        pada materi ini.
      </p>

    `;

  }

}


// ============================================================
// HISTORY
// ============================================================

async function loadHistory(){

  const container =
    document
      .getElementById("historyList");

  container.innerHTML =
    "Memuat riwayat...";


  const snapshot =
    await getDocs(
      collection(
        db,
        "users",
        currentUser.uid,
        "history"
      )
    );


  container.innerHTML = "";


  if(snapshot.empty){

    container.innerHTML =
      "<p>Belum ada riwayat ujian.</p>";

    return;

  }


  snapshot.docs
    .sort(
      (a,b)=>
        b.data().completedAt -
        a.data().completedAt
    )
    .forEach(docSnap=>{

      const data =
        docSnap.data();

      const date =
        new Date(
          data.completedAt
        ).toLocaleDateString(
          "id-ID"
        );

      container.innerHTML += `

        <div class="history-card">

          <div>

            <strong>
              ${data.title}
            </strong>

            <p>
              ${date} •
              ${data.correct}/${data.total}
              benar
            </p>

          </div>

          <div class="score-small">
            ${data.score}
          </div>

        </div>

      `;

    });

}


// ============================================================
// CERTIFICATES
// ============================================================

async function loadCertificates(){

  const container =
    document
      .getElementById(
        "certificateList"
      );

  container.innerHTML =
    "Memuat sertifikat...";


  const snapshot =
    await getDocs(
      collection(
        db,
        "users",
        currentUser.uid,
        "certificates"
      )
    );


  container.innerHTML = "";


  snapshot.docs
    .sort(
      (a,b)=>
        b.data().issuedAt -
        a.data().issuedAt
    )
    .forEach(docSnap=>{

      const data =
        docSnap.data();

      const date =
        new Date(
          data.issuedAt
        ).toLocaleDateString(
          "id-ID"
        );


      container.innerHTML += `

        <div class="certificate-card">

          <div>

            <strong>
              🎓 ${data.title}
            </strong>

            <p>
              ${date}
            </p>

            <small>
              No. ${data.certificateNumber}
            </small>

          </div>

          <div class="score-small">
            ${data.score}
          </div>

        </div>

      `;

    });

}


// ============================================================
// CERTIFICATE TERAKHIR
// ============================================================

window.showCertificate = async function(){

  await openCertificates();

};
