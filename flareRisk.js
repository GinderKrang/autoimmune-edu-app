export function calculateFlareRisk(log, trigger=0){
  // log: {pain, sleep, stress}
  const stressScore = log.stress;          // 1-10
  const sleepScore = 10 - log.sleep;       // inverted so less sleep = higher risk
  const painScore = log.pain;              // 1-10
  const triggerScore = trigger;            // 1 or 0

  let risk = 0.3*stressScore + 0.2*sleepScore + 0.3*painScore + 0.2*triggerScore*10;

  return Math.min(10, Math.round(risk*10)/10); // round to 1 decimal
}
