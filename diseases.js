// diseases.js
const diseases = [
  {
    name: "Lupus (SLE)",
    simpleExplanation: "Lupus is when the immune system attacks healthy tissues, affecting skin, joints, kidneys, and more.",
    commonSymptoms: ["Fatigue", "Joint pain", "Butterfly rash", "Photosensitivity", "Fever"],
    lifestyleSupport: ["Sun protection", "Regular sleep", "Anti-inflammatory diet", "Stress reduction"],
    riskFactors: ["Female sex", "Ages 15-44", "Family history", "High stress"],
    flareLikelihood: "Moderate to High", // educational only
    flareTriggers: ["Sun exposure", "Stress", "Infections", "Certain medications"],
    treatments: ["NSAIDs", "Steroids", "Immunosuppressants", "Biologics"],
    medications: [
      { name: "Hydroxychloroquine", commonSideEffects: ["Nausea", "Rash"] },
      { name: "Prednisone", commonSideEffects: ["Weight gain", "Mood swings", "Insomnia"] }
    ]
  },
  {
    name: "Rheumatoid Arthritis (RA)",
    simpleExplanation: "Chronic inflammation of the joints caused by autoimmune reactions, can lead to deformity if untreated.",
    commonSymptoms: ["Morning stiffness", "Swollen joints", "Fatigue", "Low-grade fever"],
    lifestyleSupport: ["Regular exercise", "Physical therapy", "Anti-inflammatory diet", "Stress management"],
    riskFactors: ["Female sex", "Age 30-60", "Family history", "Smoking"],
    flareLikelihood: "High",
    flareTriggers: ["Stress", "Cold weather", "Infections", "Overexertion"],
    treatments: ["NSAIDs", "DMARDs", "Biologics", "Corticosteroids"],
    medications: [
      { name: "Methotrexate", commonSideEffects: ["Nausea", "Liver effects"] },
      { name: "Adalimumab", commonSideEffects: ["Injection site reactions", "Infection risk"] }
    ]
  },
  {
    name: "Multiple Sclerosis (MS)",
    simpleExplanation: "The immune system attacks nerves in the brain and spinal cord, causing neurological symptoms.",
    commonSymptoms: ["Fatigue", "Numbness/tingling", "Muscle weakness", "Vision problems", "Balance issues"],
    lifestyleSupport: ["Exercise", "Vitamin D supplementation", "Stress management", "Healthy diet"],
    riskFactors: ["Female sex", "Ages 20-50", "Low vitamin D", "Family history"],
    flareLikelihood: "Moderate",
    flareTriggers: ["Stress", "Infections", "Heat exposure", "Sleep deprivation"],
    treatments: ["Interferon therapy", "Monoclonal antibodies", "Corticosteroids"],
    medications: [
      { name: "Interferon beta", commonSideEffects: ["Flu-like symptoms", "Injection site reactions"] },
      { name: "Fingolimod", commonSideEffects: ["Headache", "Bradycardia"] }
    ]
  },
  {
    name: "Hashimoto’s Thyroiditis",
    simpleExplanation: "The immune system attacks the thyroid, often causing hypothyroidism.",
    commonSymptoms: ["Fatigue", "Weight gain", "Cold intolerance", "Hair loss", "Depression"],
    lifestyleSupport: ["Regular thyroid monitoring", "Balanced diet", "Stress reduction"],
    riskFactors: ["Female sex", "Age 30-50", "Family history", "Other autoimmune disorders"],
    flareLikelihood: "Low to Moderate",
    flareTriggers: ["Stress", "Iodine excess/deficiency"],
    treatments: ["Levothyroxine (hormone replacement)"],
    medications: [
      { name: "Levothyroxine", commonSideEffects: ["Heart palpitations if overdosed", "Insomnia"] }
    ]
  },
  {
    name: "Type 1 Diabetes",
    simpleExplanation: "Immune system destroys insulin-producing cells, causing high blood sugar.",
    commonSymptoms: ["Increased thirst", "Frequent urination", "Weight loss", "Fatigue", "Blurred vision"],
    lifestyleSupport: ["Blood sugar monitoring", "Healthy diet", "Regular exercise", "Insulin management"],
    riskFactors: ["Family history", "Childhood/early adulthood onset", "Other autoimmune disorders"],
    flareLikelihood: "Moderate",
    flareTriggers: ["Illness", "Stress", "Dietary changes"],
    treatments: ["Insulin therapy", "Blood sugar monitoring"],
    medications: [
      { name: "Insulin (various types)", commonSideEffects: ["Hypoglycemia", "Injection site reactions"] }
    ]
  },
  {
    name: "Celiac Disease",
    simpleExplanation: "Immune system reacts to gluten, damaging the small intestine.",
    commonSymptoms: ["Diarrhea", "Bloating", "Fatigue", "Weight loss", "Anemia"],
    lifestyleSupport: ["Strict gluten-free diet", "Vitamin supplementation", "Regular monitoring"],
    riskFactors: ["Family history", "Type 1 diabetes", "Female sex", "Other autoimmune disorders"],
    flareLikelihood: "High if gluten ingested",
    flareTriggers: ["Gluten consumption", "Stress", "Infections"],
    treatments: ["Gluten-free diet", "Nutritional support"],
    medications: []
  },
  {
    name: "Psoriasis",
    simpleExplanation: "Skin condition where immune system triggers rapid skin cell growth, causing plaques.",
    commonSymptoms: ["Redness", "Scaling", "Itchy patches", "Thick skin", "Pain in some areas"],
    lifestyleSupport: ["Moisturize skin", "Avoid triggers", "Stress reduction", "Sun exposure management"],
    riskFactors: ["Family history", "Stress", "Smoking", "Obesity"],
    flareLikelihood: "High",
    flareTriggers: ["Stress", "Skin injury", "Infections", "Alcohol"],
    treatments: ["Topical treatments", "Phototherapy", "Biologics"],
    medications: [
      { name: "Methotrexate", commonSideEffects: ["Liver effects", "Nausea"] },
      { name: "Adalimumab", commonSideEffects: ["Injection site reactions", "Infection risk"] }
    ]
  },
  {
    name: "Crohn’s Disease",
    simpleExplanation: "Chronic inflammation of the digestive tract caused by immune system attacks.",
    commonSymptoms: ["Abdominal pain", "Diarrhea", "Weight loss", "Fatigue", "Blood in stool"],
    lifestyleSupport: ["Low-inflammatory diet", "Hydration", "Stress reduction", "Regular check-ups"],
    riskFactors: ["Family history", "Smoking", "Age 15-35", "Other autoimmune disorders"],
    flareLikelihood: "High",
    flareTriggers: ["Stress", "Certain foods", "Infections", "Medication changes"],
    treatments: ["Anti-inflammatory meds", "Immunosuppressants", "Surgery"],
    medications: [
      { name: "Mesalamine", commonSideEffects: ["Nausea", "Headache"] },
      { name: "Infliximab", commonSideEffects: ["Infusion reactions", "Infection risk"] }
    ]
  },
  {
    name: "Ulcerative Colitis",
    simpleExplanation: "Chronic inflammation of the colon and rectum due to immune attacks.",
    commonSymptoms: ["Diarrhea with blood", "Abdominal pain", "Urgency", "Fatigue"],
    lifestyleSupport: ["Low-inflammatory diet", "Hydration", "Stress management"],
    riskFactors: ["Family history", "Age 15-35", "Other autoimmune disorders"],
    flareLikelihood: "High",
    flareTriggers: ["Stress", "Certain foods", "Infections"],
    treatments: ["5-ASA drugs", "Immunosuppressants", "Surgery"],
    medications: [
      { name: "Mesalamine", commonSideEffects: ["Nausea", "Headache"] }
    ]
  }
];
