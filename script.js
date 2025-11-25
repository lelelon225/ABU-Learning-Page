// === Quizdaten ===
// Basierend auf: Kapitel 1 - Berufliche Grundbildung
const quizData = [
    // === 1.1 Organisation der Berufsbildung ===
    {
        question: "Nennen Sie die drei Lernorte des dualen Berufsbildungssystems in der Schweiz.",
        answer: "Lehrbetrieb, Berufsfachschule und überbetriebliche Kurse"
    },
    {
        question: "Was ist die Hauptaufgabe des Lehrbetriebs im dualen Berufsbildungssystem?",
        answer: "Ausbildungsort für die praktische Bildung"
    },
    {
        question: "Welche Grundlage regelt die praktische Ausbildung im Betrieb und in den überbetrieblichen Kursen?",
        answer: "Die berufsspezifischen Bildungsverordnungen (BiVo)"
    },
    {
        question: "Wozu dienen die überbetrieblichen Kurse (üK)?",
        answer: "Sie dienen der Vermittlung und dem Erwerb grundlegender Fertigkeiten und ergänzen die berufliche Praxis"
    },
    {
        question: "Aus welchen zwei Teilen besteht die schulische Bildung an der Berufsfachschule?",
        answer: "Aus beruflichem und allgemeinbildendem Unterricht"
    },

    // === 1.2 Gesetzliche Grundlagen und Vollzugsorgane ===
    {
        question: "Nennen Sie drei eidgenössische Gesetzeswerke, welche Bestimmungen über die Berufsbildung enthalten.",
        answer: "Bundesverfassung, Bundesgesetz über die Berufsbildung (BBG) und Obligationenrecht (OR)"
    },
    {
        question: "Wer ist für die grundsätzliche Regelung der Berufsbildung zuständig?",
        answer: "Der Bund"
    },
    {
        question: "Welche Aufgabe haben die Kantone in der Berufsbildung?",
        answer: "Sie sorgen für die Umsetzung der eidgenössischen Vorgaben und sind für die Aufsicht verantwortlich"
    },
    {
        question: "Welche Rolle spielen die Berufsverbände in der Berufsbildung?",
        answer: "Sie erstellen die Bildungspläne und regeln die überbetrieblichen Kurse"
    },
    {
        question: "Welche gesetzlichen Grundlagen kommen vom Lehrbetrieb selbst?",
        answer: "Lehrvertrag und Betriebsordnung"
    },

    // === 1.3 Der Lehrvertrag - Allgemeines ===
    {
        question: "Welche Formvorschrift gilt für den Abschluss eines Lehrvertrages?",
        answer: "Der Lehrvertrag muss schriftlich sein"
    },
    {
        question: "Wer unterschreibt den Lehrvertrag?",
        answer: "Berufsbildnerin bzw. Berufsbildner, Lernende bzw. Lernender und bei Minderjährigen die gesetzlichen Vertreter"
    },
    {
        question: "Welche Aufgaben hat das Kantonale Amt für Berufsbildung (KAB/MBA) bezüglich des Lehrvertrages?",
        answer: "Kontrolle und Genehmigung des Lehrvertrages"
    },
    {
        question: "Zählen Sie vier Punkte auf, die im Lehrvertrag geregelt sein müssen.",
        answer: "Art und Dauer der Ausbildung, Probezeit, Arbeitszeit, Lohn und Ferien"
    },

    // === 1.3 Der Lehrvertrag - Probezeit ===
    {
        question: "Wie lange dauert die Probezeit?",
        answer: "Mindestens einen Monat und höchstens drei Monate"
    },
    {
        question: "Wozu dient die Probezeit?",
        answer: "Zur Überprüfung der getroffenen Wahl für beide Vertragsparteien"
    },
    {
        question: "Auf wie lange kann die Probezeit maximal verlängert werden?",
        answer: "Auf höchstens sechs Monate"
    },
    {
        question: "Mit welcher Kündigungsfrist kann das Lehrverhältnis während der Probezeit aufgelöst werden?",
        answer: "Mit einer Kündigungsfrist von sieben Tagen"
    },

    // === 1.3 Der Lehrvertrag - Beendigung ===
    {
        question: "Welche Regelung gilt für die Beendigung eines Lehrverhältnisses?",
        answer: "Der Lehrvertrag endet automatisch nach Ablauf der vereinbarten Zeit, eine Kündigung ist nicht nötig"
    },
    {
        question: "Unter welcher Voraussetzung kann ein Lehrverhältnis nach Ablauf der Probezeit aufgelöst werden?",
        answer: "Nur aus wichtigen Gründen, wenn die Fortsetzung nicht mehr zumutbar ist"
    },
    {
        question: "Nennen Sie vier Gründe, welche nach Ablauf der Probezeit eine Auflösung des Lehrvertrages rechtfertigen.",
        answer: "Ungenügende Leistungen, Diebstahl, mangelhafte Ausbildung oder sexuelle Belästigung"
    },
    {
        question: "Wegen Krankheit kann ein Lernender mehrere Wochen nicht arbeiten. Die Berufsbildnerin will nun den Lernenden zwingen, die Lehrzeit zu verlängern. Wie regelt das Gesetz diesen Sachverhalt?",
        answer: "Lernende dürfen nicht zur Verlängerung gezwungen werden. Eine Verlängerung ist nur möglich, wenn das Ausbildungsziel nicht erreicht wird und das KAB zustimmt"
    },

    // === 1.3 Pflichten der Lernenden ===
    {
        question: "Was ist die gesetzliche Hauptpflicht der Lernenden?",
        answer: "Alles zu tun, um das Lehrziel zu erreichen"
    },
    {
        question: "Was versteht das Gesetz unter Sorgfalts- und Treuepflicht der Lernenden?",
        answer: "Sorgsamer Umgang mit Arbeitsgeräten und Materialien sowie Wahrung von Geschäftsgeheimnissen und Unterlassung von Schwarzarbeit"
    },
    {
        question: "Für welche Schäden haften Lernende?",
        answer: "Für Schäden, die sie dem Lehrbetrieb fahrlässig oder absichtlich zufügen"
    },
    {
        question: "Wann können sich Lernende weigern, Überstunden zu leisten?",
        answer: "Wenn die Überstunden nicht betrieblich notwendig oder nicht zumutbar sind"
    },
    {
        question: "Was schreiben die meisten Bildungsverordnungen bezüglich Dokumentation vor?",
        answer: "Das Führen einer Lerndokumentation"
    },

    // === 1.3 Rechte der Lernenden - Lohn ===
    {
        question: "Welche Regelung gilt für den 13. Monatslohn bei Lernenden?",
        answer: "Es gibt keine gesetzliche Pflicht, ein 13. Monatslohn muss im Lehrvertrag geregelt sein"
    },
    {
        question: "Welche Lohnabzüge sind bei Lernenden gestattet?",
        answer: "Die üblichen Abzüge wie AHV, IV, EO, ALV und NBU sowie Schadenersatz bei selbst verursachten Schäden"
    },
    {
        question: "Wie werden Überstunden bei Lernenden verrechnet?",
        answer: "Durch Freizeit von gleicher Dauer oder durch einen Lohnzuschlag von 25 Prozent"
    },
    {
        question: "Wie lange ist die Lohnfortzahlungspflicht im ersten Lehrjahr bei Krankheit oder Unfall?",
        answer: "Drei Wochen pro Jahr"
    },

    // === 1.3 Rechte der Lernenden - Arbeitszeit & Ferien ===
    {
        question: "Wie lange dauert die tägliche Arbeitszeit für Jugendliche bis 18 Jahre?",
        answer: "Maximal 9 Stunden pro Tag (höchstens 45 Stunden pro Woche)"
    },
    {
        question: "Gilt der obligatorische Unterricht an der Berufsfachschule als Arbeitszeit?",
        answer: "Ja"
    },
    {
        question: "Welche Arbeiten dürfen einem Lernenden übertragen werden?",
        answer: "Grundsätzlich nur Arbeiten, die etwas mit dem Beruf zu tun haben"
    },
    {
        question: "Wie viele Wochen Ferien hat eine Lernende jährlich zugute?",
        answer: "Mindestens fünf Wochen bis zum vollendeten 20. Altersjahr"
    },
    {
        question: "Wer bestimmt den Zeitpunkt der Ferien?",
        answer: "Die Berufsbildnerin bzw. der Berufsbildner unter Rücksichtnahme auf die Wünsche der Lernenden"
    },
    {
        question: "Wann sollen Ferien bezogen werden?",
        answer: "Während der schulfreien Zeit"
    },
    {
        question: "Wie viel bezahlten Urlaub haben Lernende für ausserschulische Jugendarbeit?",
        answer: "Eine Woche, allerdings unbezahlt"
    },

    // === 1.3 Rechte der Lernenden - Kurse & QV ===
    {
        question: "Dürfen Lernende Berufsmatura-, Stütz- oder Freikurse besuchen?",
        answer: "Ja, ohne Lohnabzug"
    },
    {
        question: "Wer muss den Lernenden zum Qualifikationsverfahren (QV) anmelden?",
        answer: "Die Berufsbildenden"
    },
    {
        question: "Was kostet den Lernenden das QV?",
        answer: "Nichts, sie müssen ohne Lohnabzug freigestellt werden"
    },
    {
        question: "Wann kann das QV wiederholt werden?",
        answer: "Höchstens zweimal, in der Regel im Rahmen des nächsten QV"
    },
    {
        question: "Welche Fächer werden bei der Wiederholung des QV geprüft?",
        answer: "Nur die Fächer, in denen die lernende Person beim vorhergehenden Versuch ungenügend war"
    },

    // === 1.3 Pflichten der Berufsbildenden ===
    {
        question: "Wer trägt die Verantwortung für die Ausbildung der Lernenden?",
        answer: "Die Berufsbildenden"
    },
    {
        question: "Was ist die gesetzliche Hauptpflicht der Ausbildenden?",
        answer: "Die Lernenden fachgemäss, systematisch und verständnisvoll auszubilden"
    },
    {
        question: "Welche Versicherung muss die Berufsbildnerin für die Lernenden abschliessen?",
        answer: "Die Unfallversicherung (Berufsunfall und Nichtberufsunfall)"
    },
    {
        question: "Wer bezahlt die Prämie für die Berufsunfallversicherung?",
        answer: "Der Lehrbetrieb"
    },
    {
        question: "Wie viele Ferienwochen müssen zusammenhängend gewährt werden?",
        answer: "Mindestens zwei Wochen"
    },
    {
        question: "Welche Angaben stehen in einem Lehrzeugnis?",
        answer: "Erlernter Beruf und Dauer der Lehre, auf Verlangen auch Fähigkeiten, Leistungen und Verhalten"
    },
    {
        question: "Gibt es eine gesetzliche Pflicht zur Weiterbeschäftigung nach der Lehre?",
        answer: "Nein"
    },
    {
        question: "Was passiert, wenn eine Lernende nach der Lehre im Betrieb weiterbeschäftigt wird?",
        answer: "Die Lehrzeit wird an das neue Arbeitsverhältnis angerechnet"
    },

    // === 1.3 Konflikte im Lehrbetrieb ===
    {
        question: "Wie kann ein Konflikt zwischen einer Berufsbildnerin und einem Lernenden gelöst werden?",
        answer: "Durch Selbstkritik, Gespräch mit Vertrauensperson, sachliches Gespräch mit der Gegenseite und bei Bedarf Einschaltung der Lehraufsichtskommission"
    },
    {
        question: "Nennen Sie drei häufige Konfliktursachen im Lehrbetrieb.",
        answer: "Einengung von Freiheitsrechten, gestörtes Selbstvertrauen und unkontrollierte Stimmungsschwankungen"
    },
    {
        question: "Wer muss bei der Vertragsauflösung im gegenseitigen Einverständnis bei nicht volljährigen Lernenden zustimmen?",
        answer: "Die Eltern"
    },
    {
        question: "Welche Stelle muss vor einer Vertragsauflösung informiert werden?",
        answer: "Das Kantonale Berufsbildungsamt"
    },

    // === Einleitung - Lernziele ===
    {
        question: "Was ist das Ziel der beruflichen Grundbildung bezüglich persönlicher Entwicklung?",
        answer: "Dass Jugendliche lernen, sich in der Arbeitswelt zu behaupten, Selbstbewusstsein zu entwickeln und Verantwortung zu übernehmen"
    },
    {
        question: "Welche persönliche Einstellung ist die beste Voraussetzung für eine erfolgreiche Lehrzeit?",
        answer: "Eine positive, motivierte und neugierige Haltung"
    },
    {
        question: "Wie viele Jugendliche beginnen nach der obligatorischen Schulzeit eine berufliche Grundbildung?",
        answer: "Zwei Drittel"
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
        .replace(/\s+/g, ' ')
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ''); // Satzzeichen entfernen
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

    // Antworten vergleichen (nicht case-sensitive, ohne Satzzeichen)
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