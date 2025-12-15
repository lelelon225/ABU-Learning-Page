// === Quizdaten ===
// Basierend auf: Organisation der Berufsbildung - Zuständigkeiten
const quizData = [
  {
    question:
      "Welche gesetzlichen Grundlagen erlässt der Bund für die Berufsbildung?",
    answer:
      "Bundesverfassung BV 63, Bundesgesetz über die Berufsbildung BBG, Bildungsverordnung BiVo, Obligationenrecht OR (Arbeitsvertrag/Lehrvertrag), Arbeitsgesetz ArG (Arbeitnehmerschutz), Rahmenlehrplan ABU",
  },
  {
    question:
      "Welche gesetzlichen Grundlagen erlassen die Kantone für die Berufsbildung?",
    answer:
      "Kantonales BBG, Vollzugsverordnung, Reglement (z.B. Absenzen- und Disziplinarreglement)",
  },
  {
    question:
      "Welche Aufgaben und Zuständigkeiten haben die Berufsverbände in der Berufsbildung?",
    answer:
      "Die Berufsverbände erstellen die Bildungspläne und regeln die überbetrieblichen Kurse (üK).",
  },
  {
    question:
      "Welche Dokumente erstellen die Berufsverbände für die Berufsbildung?",
    answer: "Bildungsplan, Reglement zu üK",
  },
  {
    question:
      "Welche Dokumente erstellt der Lehrbetrieb für die Berufsbildung?",
    answer: "Lehrvertrag, Betriebsordnung",
  },
  {
    question:
      "Welche Dokumente erstellt die Berufsfachschule für die Berufsbildung?",
    answer:
      "Schullehrplan, Stundenplan, Schul- und Hausordnung mit verschiedenen Weisungen",
  },
];

// === Variablen ===
let currentCardIndex = 0;
let skippedCards = [];
let totalAttempts = 0;
let wrongAttempts = 0;

// === DOM-Elemente ===
const questionEl = document.getElementById("question");
const answerInput = document.getElementById("answerInput");
const feedbackEl = document.getElementById("feedback");
const checkBtn = document.getElementById("checkBtn");
const skipBtn = document.getElementById("skipBtn");
const cardNumberEl = document.getElementById("cardNumber");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const quizCard = document.getElementById("quizCard");
const completionScreen = document.getElementById("completionScreen");
const restartBtn = document.getElementById("restartBtn");
const statsEl = document.getElementById("stats");
const correctAnswerDisplay = document.getElementById("correctAnswerDisplay");
const correctAnswerText = document.getElementById("correctAnswerText");

// === Initialisierung ===
function init() {
  currentCardIndex = 0;
  skippedCards = [];
  totalAttempts = 0;
  wrongAttempts = 0;

  quizCard.classList.remove("hidden");
  completionScreen.classList.add("hidden");

  loadCard();
  updateProgress();
}

// === Karte laden ===
function loadCard() {
  if (currentCardIndex >= quizData.length) {
    showCompletion();
    return;
  }

  const currentCard = quizData[currentCardIndex];
  questionEl.textContent = currentCard.question;
  answerInput.value = "";
  answerInput.className = "answer-input";
  feedbackEl.className = "feedback";
  feedbackEl.textContent = "";

  // Korrekte Antwort ausblenden beim Laden einer neuen Karte
  correctAnswerDisplay.classList.remove("show");
  correctAnswerText.textContent = "";

  cardNumberEl.textContent = `Karte ${currentCardIndex + 1}`;

  answerInput.focus();
  updateProgress();
}

// === Fortschritt aktualisieren ===
function updateProgress() {
  const progress = (currentCardIndex / quizData.length) * 100;
  progressBar.style.width = `${progress}%`;
  progressText.textContent = `Frage ${currentCardIndex + 1} von ${quizData.length}`;
}

// === Antwort normalisieren (für besseren Vergleich) ===
function normalizeAnswer(answer) {
  return answer
    .toLowerCase()
    .trim()
    .replace(/\s+/g, " ")
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""); // Satzzeichen entfernen
}

// === Antwort prüfen ===
function checkAnswer() {
  const userAnswer = answerInput.value.trim();

  // Wenn Eingabefeld leer ist, überspringe die Frage
  if (userAnswer === "") {
    skipCard();
    return;
  }

  const currentCard = quizData[currentCardIndex];
  const correctAnswer = currentCard.answer;

  totalAttempts++;

  // Antworten vergleichen (nicht case-sensitive, ohne Satzzeichen)
  if (normalizeAnswer(userAnswer) === normalizeAnswer(correctAnswer)) {
    showFeedback("✅ Richtig! Super gemacht!", true);
    answerInput.className = "answer-input correct";
    correctAnswerDisplay.classList.remove("show");

    setTimeout(() => {
      currentCardIndex++;
      loadCard();
    }, 1200);
  } else {
    wrongAttempts++;
    showFeedback(
      "❌ Falsch! Bitte gib die richtige Antwort ein, die oben angezeigt wird.",
      false,
    );
    answerInput.className = "answer-input incorrect";

    // Korrekte Antwort anzeigen
    correctAnswerText.textContent = correctAnswer;
    correctAnswerDisplay.classList.add("show");
  }
}

// === Feedback anzeigen ===
function showFeedback(message, isCorrect) {
  feedbackEl.textContent = message;
  feedbackEl.className = `feedback ${isCorrect ? "correct" : "incorrect"} show`;
}

// === Karte überspringen ===
function skipCard() {
  const currentCard = quizData[currentCardIndex];

  skippedCards.push(currentCard);
  wrongAttempts++;

  showFeedback(
    "⏭️ Übersprungen! Bitte gib die richtige Antwort ein, die oben angezeigt wird.",
    false,
  );
  answerInput.className = "answer-input incorrect";

  // Korrekte Antwort anzeigen
  correctAnswerText.textContent = currentCard.answer;
  correctAnswerDisplay.classList.add("show");
}

// === Abschluss-Bildschirm anzeigen ===
function showCompletion() {
  quizCard.classList.add("hidden");
  completionScreen.classList.remove("hidden");

  const accuracy =
    totalAttempts > 0
      ? Math.round(((totalAttempts - wrongAttempts) / totalAttempts) * 100)
      : 100;

  statsEl.innerHTML = `
        <strong>Deine Statistik:</strong><br><br>
        📊 Gesamtversuche: ${totalAttempts}<br>
        ❌ Fehler: ${wrongAttempts}<br>
        ✅ Genauigkeit: ${accuracy}%
    `;
}

// === Event Listeners ===
checkBtn.addEventListener("click", checkAnswer);

skipBtn.addEventListener("click", skipCard);

// Enter-Taste: Prüfen oder Überspringen (wenn leer)
answerInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkAnswer(); // checkAnswer() behandelt jetzt automatisch leere Eingaben
  }
});

restartBtn.addEventListener("click", init);

// === Start ===
init();
