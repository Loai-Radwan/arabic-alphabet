const base = import.meta.env.BASE_URL;

const quiz = [
  {
    audio: `${base}/assets/Audio/alif.mp3`,
    options: ["باء", "تاء", "ألف", "جيم"],
    answer: "ألف"
  },
  {
    audio: `${base}/assets/Audio/ba.mp3`,
    options: ["راء", "صاد", "باء", "تاء"],
    answer: "باء"
  },
  {
    audio: `${base}/assets/Audio/ta.mp3`,
    options: ["ثاء", "تاء", "جيم", "حاء"],
    answer: "تاء"
  },
  {
    audio: `${base}/assets/Audio/tha.mp3`,
    options: ["خاء", "ذال", "ثاء", "دال"],
    answer: "ثاء"
  },
  {
    audio: `${base}/assets/Audio/jiim.mp3`,
    options: ["جيم", "حاء", "خاء", "راء"],
    answer: "جيم"
  },
  {
    audio: `${base}/assets/Audio/hha.mp3`,
    options: ["حاء", "جيم", "خاء", "عين"],
    answer: "حاء"
  },
  {
    audio: `${base}/assets/Audio/kha.mp3`,
    options: ["خاء", "حاء", "ذال", "راء"],
    answer: "خاء"
  },
  {
    audio: `${base}/assets/Audio/daal.mp3`,
    options: ["ذال", "دال", "راء", "زاي"],
    answer: "دال"
  },
  {
    audio: `${base}/assets/Audio/thaal.mp3`,
    options: ["ذال", "زاي", "سين", "صاد"],
    answer: "ذال"
  },
  {
    audio: `${base}/assets/Audio/ra.mp3`,
    options: ["راء", "زاي", "لام", "نون"],
    answer: "راء"
  },
  {
    audio: `${base}/assets/Audio/zay.mp3`,
    options: ["راء", "زاي", "سين", "شين"],
    answer: "زاي"
  },
  {
    audio: `${base}/assets/Audio/siin.mp3`,
    options: ["شين", "سين", "صاد", "ضاد"],
    answer: "سين"
  },
  {
    audio: `${base}/assets/Audio/shiin.mp3`,
    options: ["سين", "شين", "صاد", "طاء"],
    answer: "شين"
  },
  {
    audio: `${base}/assets/Audio/saad.mp3`,
    options: ["صاد", "ضاد", "طاء", "ظاء"],
    answer: "صاد"
  },
  {
    audio: `${base}/assets/Audio/daad.mp3`,
    options: ["صاد", "ضاد", "طاء", "عين"],
    answer: "ضاد"
  },
  {
    audio: `${base}/assets/Audio/taa.mp3`,
    options: ["طاء", "ظاء", "عين", "غين"],
    answer: "طاء"
  },
  {
    audio: `${base}/assets/Audio/thaa.mp3`,
    options: ["ظاء", "طاء", "عين", "غين"],
    answer: "ظاء"
  },
  {
    audio: `${base}/assets/Audio/ayn.mp3`,
    options: ["عين", "غين", "فاء", "قاف"],
    answer: "عين"
  },
  {
    audio: `${base}/assets/Audio/ghayn.mp3`,
    options: ["غين", "عين", "فاء", "كاف"],
    answer: "غين"
  },
  {
    audio: `${base}/assets/Audio/fa.mp3`,
    options: ["فاء", "قاف", "كاف", "لام"],
    answer: "فاء"
  },
  {
    audio: `${base}/assets/Audio/qaf.mp3`,
    options: ["قاف", "كاف", "لام", "ميم"],
    answer: "قاف"
  },
  {
    audio: `${base}/assets/Audio/kaf.mp3`,
    options: ["كاف", "قاف", "لام", "ميم"],
    answer: "كاف"
  },
  {
    audio: `${base}/assets/Audio/lam.mp3`,
    options: ["لام", "كاف", "ميم", "نون"],
    answer: "لام"
  },
  {
    audio: `${base}/assets/Audio/miim.mp3`,
    options: ["ميم", "نون", "هاء", "واو"],
    answer: "ميم"
  },
  {
    audio: `${base}/assets/Audio/nuun.mp3`,
    options: ["نون", "ميم", "هاء", "ياء"],
    answer: "نون"
  },
  {
    audio: `${base}/assets/Audio/ha.mp3`,
    options: ["هاء", "نون", "واو", "ياء"],
    answer: "هاء"
  },
  {
    audio: `${base}/assets/Audio/waw.mp3`,
    options: ["واو", "هاء", "ياء", "ألف"],
    answer: "واو"
  },
  {
    audio: `${base}/assets/Audio/ya.mp3`,
    options: ["ياء", "واو", "هاء", "باء"],
    answer: "ياء"
  }
];



export default quiz