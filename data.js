const diseases = [
  {
    name: "Systemic Lupus Erythematosus",
    overview: "Chronic autoimmune disease affecting multiple organ systems.",
    symptoms: [
      "Fatigue",
      "Joint pain",
      "Butterfly rash",
      "Photosensitivity",
      "Kidney involvement"
    ],
    treatments: [
      {
        name: "Hydroxychloroquine",
        purpose: "Reduces flare frequency",
        sideEffects: ["Retinal toxicity (rare)", "GI upset"]
      },
      {
        name: "Corticosteroids",
        purpose: "Reduce inflammation during flares",
        sideEffects: ["Weight gain", "Mood changes", "Bone loss"]
      }
    ],
    naturalSupport: [
      "Vitamin D optimization",
      "Anti-inflammatory diet",
      "Sun protection"
    ],
    prognosis: "Varies widely; improved survival with modern treatment."
  },

  {
    name: "Rheumatoid Arthritis",
    overview: "Autoimmune disease causing chronic joint inflammation.",
    symptoms: [
      "Morning stiffness",
      "Symmetrical joint pain",
      "Swelling",
      "Fatigue"
    ],
    treatments: [
      {
        name: "Methotrexate",
        purpose: "First-line DMARD",
        sideEffects: ["Liver toxicity", "Nausea", "Bone marrow suppression"]
      },
      {
        name: "TNF inhibitors",
        purpose: "Biologic immune suppression",
        sideEffects: ["Infection risk", "Injection site reactions"]
      }
    ],
    naturalSupport: [
      "Omega-3 fatty acids",
      "Physical therapy",
      "Weight management"
    ],
    prognosis: "Improved outcomes with early aggressive treatment."
  }
];
