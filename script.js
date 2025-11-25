// === Quizdaten ===
// Lernziele: Berufsbildung Schweiz
const quizData = [
    // === 1. Organisation der Berufsbildung ===
    {
        question: "Welche drei Lernorte bilden das duale Berufsbildungssystem in der Schweiz?",
        answer: "Lehrbetrieb, Berufsfachschule und überbetriebliche Kurse"
    },
    {
        question: "Was ist der Hauptunterschied zwischen der beruflichen Grundbildung (EFZ) und der Attestausbildung (EBA)?",
        answer: "EFZ dauert 3-4 Jahre und führt zum Fähigkeitszeugnis, EBA dauert 2 Jahre und führt zum Berufsattest"
    },
    {
        question: "Welche Möglichkeit haben Lernende nach Abschluss der beruflichen Grundbildung mit EFZ?",
        answer: "Berufsmaturität, höhere Fachschule, höhere Fachprüfung oder Fachhochschule"
    },
    {
        question: "Was versteht man unter dem Begriff 'Durchlässigkeit' im schweizerischen Berufsbildungssystem?",
        answer: "Die Möglichkeit, zwischen verschiedenen Bildungswegen zu wechseln und sich weiterzuentwickeln"
    },
    {
        question: "Welche Rolle spielen die Organisationen der Arbeitswelt (OdA) in der Berufsbildung?",
        answer: "Sie definieren die Bildungsinhalte und sind für die Qualität der Ausbildung mitverantwortlich"
    },

    // === 2. Gesetzliche Grundlagen und Vollzugsorgane ===
    {
        question: "Welches Gesetz regelt die Berufsbildung in der Schweiz?",
        answer: "Das Berufsbildungsgesetz (BBG)"
    },
    {
        question: "Welche Behörde ist auf Bundesebene für die Berufsbildung zuständig?",
        answer: "Das Staatssekretariat für Bildung, Forschung und Innovation (SBFI)"
    },
    {
        question: "Wer überwacht die Berufsbildung auf kantonaler Ebene?",
        answer: "Die kantonalen Berufsbildungsämter"
    },
    {
        question: "Welche Aufgabe hat die Aufsichtskommission für die Berufsbildung?",
        answer: "Sie überwacht die Qualität der Ausbildung in den Lehrbetrieben"
    },
    {
        question: "Welche zusätzlichen Gesetze spielen neben dem BBG in die Berufsbildung hinein?",
        answer: "Arbeitsgesetz, Jugendarbeitsschutzverordnung und Obligationenrecht"
    },

    // === 3. Der Lehrvertrag ===
    {
        question: "Wer muss den Lehrvertrag unterschreiben?",
        answer: "Der Lehrbetrieb, die lernende Person und die gesetzliche Vertretung (bei Minderjährigen)"
    },
    {
        question: "Welche Hauptpflicht haben Lernende gemäss Lehrvertrag?",
        answer: "Sich zu bemühen, die beruflichen Fähigkeiten zu erwerben und die Anweisungen zu befolgen"
    },
    {
        question: "Was ist die Hauptpflicht des Lehrbetriebs im Lehrvertrag?",
        answer: "Die Lernenden fachgerecht auszubilden und zu betreuen"
    },
    {
        question: "Welche Behörde genehmigt den Lehrvertrag?",
        answer: "Das kantonale Berufsbildungsamt"
    },
    {
        question: "Haben Lernende Anspruch auf bezahlte Ferien?",
        answer: "Ja, mindestens 5 Wochen pro Jahr bis zum 20. Lebensjahr"
    },

    // === 4. Nützliche Lerntipps ===
    {
        question: "Was ist die wichtigste Voraussetzung für erfolgreiches Lernen?",
        answer: "Regelmässigkeit und kontinuierliches Üben"
    },
    {
        question: "Welche Lernmethode hilft dabei, Informationen besser zu behalten?",
        answer: "Aktives Wiederholen und Anwenden des Gelernten"
    },
    {
        question: "Warum sollte man beim Lernen Pausen einplanen?",
        answer: "Damit das Gehirn die Informationen verarbeiten und abspeichern kann"
    },
    {
        question: "Was versteht man unter der Pomodoro-Technik?",
        answer: "Eine Lernmethode mit 25-minütigen Lernphasen und 5-minütigen Pausen"
    },
    {
        question: "Welche Rolle spielt die Lernumgebung für den Lernerfolg?",
        answer: "Eine ruhige und aufgeräumte Umgebung fördert die Konzentration und Effizienz"
    },

    // === 5. Miteinander reden ===
    {
        question: "Was ist die Grundregel für ein erfolgreiches Gespräch?",
        answer: "Aktiv zuhören und ausreden lassen"
    },
    {
        question: "Was versteht man unter 'Ich-Botschaften' in der Kommunikation?",
        answer: "Aussagen, die eigene Gefühle und Wahrnehmungen ausdrücken, ohne anzuklagen"
    },
    {
        question: "Warum ist nonverbale Kommunikation wichtig in einem Gespräch?",
        answer: "Körpersprache und Mimik transportieren oft mehr als Worte und zeigen echtes Interesse"
    },
    {
        question: "Was sollte man vermeiden, wenn man konstruktives Feedback geben möchte?",
        answer: "Verallgemeinerungen und persönliche Angriffe"
    },
    {
        question: "Welche Fragetechnik hilft dabei, ein Gespräch zu vertiefen?",
        answer: "Offene Fragen, die nicht nur mit Ja oder Nein beantwortet werden können"
    },

    // === 6. Rolle von Mann und Frau in der Berufsbildung ===
    {
        question: "Welches Prinzip gilt in der schweizerischen Berufsbildung bezüglich Geschlechtergleichstellung?",
        answer: "Chancengleichheit für alle Geschlechter"
    },
    {
        question: "Warum ist Vielfalt in der Berufsbildung eine Chance?",
        answer: "Unterschiedliche Perspektiven und Fähigkeiten bereichern die Zusammenarbeit und Innovation"
    },
    {
        question: "Was bedeutet 'Geschlechterstereotypen' im Berufsleben?",
        answer: "Vorurteile darüber, welche Berufe für Männer oder Frauen geeignet sind"
    },
    {
        question: "Wie können Lehrbetriebe zur Gleichstellung beitragen?",
        answer: "Indem sie Berufe geschlechtsneutral präsentieren und alle gleich fördern"
    },
    {
        question: "Welche gesetzliche Grundlage garantiert die Gleichstellung von Mann und Frau in der Schweiz?",
        answer: "Das Gleichstellungsgesetz (GlG)"
    }
];

// === Variablen ===
let currentCardIndex = 0;
let skippedCards = [];
let totalAttempts = 0;
let wrongAttempts = 0;

// === DOM-Elemente ===
const questionEl = document.getElementById('question');
const answerInput = document.getElementById('answerInput');
const feedbackEl = document.getElementById('feedback');
const checkBtn = document.getElementById('checkBtn');
const skipBtn = document.getElementById('skipBtn');
const cardNumberEl = document.getElementById('cardNumber');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');
const quizCard = document.getElementById('quizCard');
const completionScreen = document.getElementById('completionScreen');
const restartBtn = document.getElementById('restartBtn');
const statsEl = document.getElementById('stats');

// === Initialisierung ===
function init() {
    currentCardIndex = 0;
    skippedCards = [];
    totalAttempts = 0;
    wrongAttempts = 0;
    
    quizCard.classList.remove('hidden');
    completionScreen.classList.add('hidden');
    
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
    answerInput.value = '';
    answerInput.className = 'answer-input';
    feedbackEl.className = 'feedback';
    feedbackEl.textContent = '';
    
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
        .replace(/\s+/g, ' '); // Mehrfache Leerzeichen entfernen
}

// === Antwort prüfen ===
function checkAnswer() {
    const userAnswer = answerInput.value.trim();
    
    if (userAnswer === '') {
        showFeedback('Bitte gib eine Antwort ein.', false);
        return;
    }

    const currentCard = quizData[currentCardIndex];
    const correctAnswer = currentCard.answer;
    
    totalAttempts++;

    // Antworten vergleichen (nicht case-sensitive)
    if (normalizeAnswer(userAnswer) === normalizeAnswer(correctAnswer)) {
        showFeedback('✅ Richtig!', true);
        answerInput.className = 'answer-input correct';
        
        setTimeout(() => {
            currentCardIndex++;
            loadCard();
        }, 1200);
    } else {
        wrongAttempts++;
        showFeedback(`❌ Falsch! Die richtige Antwort ist: "${correctAnswer}". Bitte gib sie korrekt ein.`, false);
        answerInput.className = 'answer-input incorrect';
    }
}

// === Feedback anzeigen ===
function showFeedback(message, isCorrect) {
    feedbackEl.textContent = message;
    feedbackEl.className = `feedback ${isCorrect ? 'correct' : 'incorrect'} show`;
}

// === Karte überspringen ===
function skipCard() {
    const currentCard = quizData[currentCardIndex];
    
    skippedCards.push(currentCard);
    wrongAttempts++;
    
    showFeedback(`⏭️ Übersprungen! Die richtige Antwort ist: "${currentCard.answer}". Bitte gib sie ein, um fortzufahren.`, false);
    answerInput.className = 'answer-input incorrect';
}

// === Abschluss-Bildschirm anzeigen ===
function showCompletion() {
    quizCard.classList.add('hidden');
    completionScreen.classList.remove('hidden');
    
    const accuracy = totalAttempts > 0 
        ? Math.round(((totalAttempts - wrongAttempts) / totalAttempts) * 100) 
        : 100;
    
    statsEl.innerHTML = `
        <strong>Deine Statistik:</strong><br>
        Gesamtversuche: ${totalAttempts}<br>
        Fehler: ${wrongAttempts}<br>
        Genauigkeit: ${accuracy}%
    `;
}

// === Event Listeners ===
checkBtn.addEventListener('click', checkAnswer);

skipBtn.addEventListener('click', skipCard);

answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkAnswer();
    }
});

restartBtn.addEventListener('click', init);

// === Start ===
init();