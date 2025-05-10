// lang.js
const translations = {
  it: {
    ripetizioni_link: "Ripetizioni",
    libro: "Il mio libro",
    descrizione: "Benvenuto nel mio sito personale! Qui troverai i miei progetti e attività!",
    titolo: "Ciao, sono Luca Brocco",
    achievement1: "Laureato con lode in Informatica",
    achievement2: "3 pubblicazioni accademiche sull'intelligenza artificiale",
    attività_presente: "Attività (presente)",
    attività_sub: "Clicca su un attività per avere maggiori informazioni",
    ripetizioni: "(2019 - ) Ripetizioni di matematica e fisica",
    ripetizioni_info: "Dal 2019 ho dato ripetizioni di matematica e fisica a più di 40 ragazzi e ragazze di scuole superiori e università",
    pod: "(2024 - ) Physics of Data",
    pod_info: "Sono iscritto al corso LM-17 Physics of Data presso UniPd",
    volontariato: "(2022 - ) Volontariato",
    volontariato_info: "Sono impegnato in attività di volontariato con VIDES Veneto e Collaborazione Pastorale Altinate",
    libro_a: "(2025 - ) Promozione del mio libro",
    libro_info: "Ho scritto 'La sottile differenza tra la spremuta e il succo d'arancia' e lo promuovo dal 2025",
    past_act_title: "Attività (passate)",
    laurea_fisica: "(2021 - 2024) Laurea in Fisica (LT-30 Fisica)",
    laurea_fisica_info: "Mi sono laureato in Fisica presso UniPd nel dicembre 2024",
    insegnamento: "(2025) Professore al Liceo Levi",
    insegnamento_info: "Sono stato supplente al Liceo Levi per il mese di febbraio 2025",
    links: "Link utili",
    rep_tt: "Ripetizioni",
    rep_body: "Dal 2019 dò ripetizioni a ragazze e ragazzi di Scuole Superiori e Università, sia online (videochiamata) che di persona (presenza). Le materie in cui posso dare ripetizioni sono:",
    matematica: "Matematica",
    fisica: "Fisica",
    informatica: "Informatica",
    chimica: "Chimica",
    analisi: "Analisi 1",
    fisica1: "Fisica 1 - 2",
    algebra: "Algebra lineare e geometria",
    recensioni: "Recensioni",
    recensioni_body: "Clicca qui per leggere che cosa pensano gli studenti di me!",
    contacts_tt: "Contatti",
    contacts_body: "Puoi contattarmi per informazioni su disponibilità e orari:"
  },
  en: {
    ripetizioni_link: "Tutoring",
    libro: "My Book",
    descrizione: "Welcome to my personal website! Here you’ll find my projects and activities!",
    titolo: "Hi, I'm Luca Brocco",
    achievement1: "Graduated with honors in Computer Science",
    achievement2: "3 academic publications in Artificial Intelligence",
    attività_presente: "Activities (present)",
    attività_sub:"Click on an activity to get more information",
    ripetizioni: "(2019 - ) Tutor in Maths and Physics",
    ripetizioni_info: "From 2019 I am a Tutor in Maths and Physics. I have teached to more than 40 students",
    pod:"(2024 - ) Physics of Data",
    pod_info: "I am getting a Master Degree in LM-17 Physics of Data, UniPd",
    volontariato: "(2022 - ) Volunteering",
    volontariato_info: "I am currently volunteering for VIDES Veneto and Collaborazione Pastorale Altinate",
    libro_a: "(2025 - ) Promotion of my book",
    libro_info: "I wrote 'La sottile differenza tra la spremuta e il succo d'arancia' and I promote it since 2025",
    past_act_title: "Activities (past)",
    laurea_fisica: "(2021 - 2024) Bachelor Degree in Physics (LT-30 Fisica)",
    laurea_fisica_info: "I graduated in Physics (UniPd) in December 2024",
    insegnamento: "(2025) Professor at Liceo Levi",
    insegnamento_info: "I was a Substitute Professor at Liceo Levi in February 2025",
    links: "Useful links",
    rep_tt: "Tutoring",
    rep_body: "Since 2019, I am a Tutor for Secondary Schools and University students, both online and in presence teaching. Subjects I can tutor for are:",
    matematica: "Mathematics",
    fisica: "Physics",
    informatica: "Computer science",
    chimica: "Chemistry",
    analisi: "Calculus 1",
    fisica1: "Physics 1 - 2",
    algebra: "Linear algebra",
    recensioni: "Reviews",
    recensioni_body: "Click here to read what other students think about me!",
    contacts_tt: "Contacts",
    contacts_body: "You can contact me for availability and time informations:"
  }
};

function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

