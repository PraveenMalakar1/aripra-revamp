// Audiofy (client spelling; the docs say "Audify"): copy AW-CS-01 | CarPlanet: Audiofy (generated from the Word doc, text as supplied).
// Sharing permission: Open
// TODO (from the doc, not published): Still needed: Tasleem quote. All stats are monthly averages, approximate - confirm before publishing.
const audiofy = {
  "slug": "audiofy",
  "name": "Audiofy",
  "badge": "Client Story - Audiofy",
  "title": "Every call. Scored. Every agent. Accountable.",
  "subtitle": "AI listens to every call. Management finally knows what’s happening on the floor.",
  "description": "AI listens to every call. Management finally knows what’s happening on the floor.",
  "stats": [
    {
      "value": 40000,
      "label": "calls processed per month"
    },
    {
      "value": 130,
      "label": "agents monitored automatically"
    },
    {
      "value": 50,
      "label": "of calls flagging compliance failures",
      "suffix": "%+"
    },
    {
      "value": 40,
      "label": "of customer switches recovered by agents",
      "suffix": "%"
    },
    {
      "value": 0,
      "label": "hours of manual call monitoring"
    }
  ],
  "client": [
    "CarPlanet is one of the UK’s leading used car marketplaces. A large sales floor. Agents on the phones all day across sales, after-sales, and service. At the scale they operate, what happens on those calls is the difference between a good month and a bad one."
  ],
  "problem": [
    "Management was completely blind to what was happening on the sales floor. Calls went unmonitored. UK compliance disclosures were assumed, not checked. There was no way to know if an agent had handled an objection, missed a conversion, or let a customer walk to a different car without a counter. Performance reviews ran on gut feel. The only way to hear a call was to sit next to someone."
  ],
  "builtIntro": "Audiofy processes every call automatically from the moment it ends.",
  "features": [
    {
      "title": "Ingestion and transcription",
      "body": [
        "Calls arrive via Wildix webhook from CarPlanet’s telephony system. Anything over 15 seconds is transcribed using NVIDIA Parakeet TDT v3. Missed calls, voicemails, and short calls are filtered out. Where Parakeet returns empty segments, Faster-Whisper steps in as the fallback."
      ]
    },
    {
      "title": "Speaker diarisation",
      "body": [
        "NVIDIA NeMo SortFormer identifies who said what, caller versus agent, at the segment level as speaker turns change. For calls with more than four speakers, Pyannote Audio handles diarisation. No conversation gets through unattributed."
      ]
    },
    {
      "title": "Speaker embeddings and voice identification",
      "body": [
        "Every agent has a voiceprint built from eight enrolled voice samples using WeSpeaker CAM++. The system matches live call audio against those prints to confirm which agent is on the call. SpeechBrain ECAPA-TDNN serves as the fallback embedding model. Similarity thresholds are set per agent."
      ]
    },
    {
      "title": "Call classification",
      "body": [
        "Gemini classifies each call by type: sales, after-sales, service, HR. The classification sets which scoring rules apply."
      ]
    },
    {
      "title": "Four automated checks per call",
      "body": [
        "Compliance: did the agent cover required UK legal disclosures? Conversion: was an appointment booked or a car sold? Switch detection: did the customer move to a different model or brand, and did the agent respond? Agent rating: 0 to 5 across greeting, engagement, qualification, and objection handling."
      ]
    },
    {
      "title": "Desk recording layer",
      "body": [
        "Desk Streamer runs silently on each agent’s laptop, capturing desktop activity in 30-minute chunks. Each recording passes through DeepFilterNet3 for neural noise suppression, then through the same diarisation and voiceprint pipeline as phone calls. Voice detection is trained per agent. Accuracy: 90 to 95%."
      ]
    },
    {
      "title": "Summaries and insights",
      "body": [
        "Every call produces a structured summary: customer intent, key moments, agent performance, areas to improve. Managers get the picture without listening to a single recording."
      ]
    }
  ],
  "outcome": [
    "Audiofy processes 40,000 calls a month across 130 agents. Every one of them scored, classified, and checked automatically.",
    "The compliance picture was the first real shock. Over 20,000 calls a month were returning a compliance failure. Half the call volume. Before Audiofy, that was invisible.",
    "On sales calls, Audiofy tracks 4,000 conversions a month. Roughly 10% of total volume. Switch check catches around 1,000 cases a month where a customer moved to a different model or brand. Agents recover 400 of those. 40% of switches that would have walked, didn’t.",
    "Managers can review a full day’s performance in minutes. The agents converting, and those who aren’t, are visible by name, by call type, and by the exact moment it went wrong."
  ],
  "facts": [
    [
      "Product",
      "Audiofy - AI Call Intelligence Platform"
    ],
    [
      "Status",
      "Live"
    ],
    [
      "Frontend",
      "React.js"
    ],
    [
      "Backend",
      "Node.js · Express.js"
    ],
    [
      "Database",
      "MongoDB"
    ],
    [
      "AI/ML",
      "Python"
    ],
    [
      "Transcription",
      "NVIDIA Parakeet TDT v3 (primary) · Faster-Whisper whisper-large-v3-turbo (fallback)"
    ],
    [
      "Diarisation",
      "NVIDIA NeMo SortFormer offline 4spk-v1 + streaming 4spk-v2 (primary) · Pyannote Audio (fallback, >4 speakers)"
    ],
    [
      "Speaker embeddings",
      "WeSpeaker CAM++ 512-dim (primary) · SpeechBrain ECAPA-TDNN 192-dim (fallback) · Custom per-agent voiceprints"
    ],
    [
      "Audio processing",
      "FFmpeg · FFprobe · DeepFilterNet3 · PyTorch · TorchAudio · SoundFile · Librosa"
    ],
    [
      "ML",
      "Scikit-learn (K-Means + silhouette scoring)"
    ],
    [
      "Custom components",
      "Role post-processor · Real-world timestamp synchronisation engine"
    ],
    [
      "Integrations",
      "Gemini · Wildix"
    ]
  ]
};

export default audiofy;
