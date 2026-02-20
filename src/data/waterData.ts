// JalRakshak AI - Dummy Water Data Generator
// Simulates realistic groundwater monitoring data

export interface WaterReading {
  timestamp: string;
  waterLevel: number;
  tds: number;
  temperature: number;
  extractionRate: number;
  rainfall: number;
}

export interface VillageData {
  id: string;
  name: string;
  state: string;
  district: string;
  currentLevel: number;
  maxLevel: number;
  minLevel: number;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  predictedDryDate: Date;
  waterScore: number;
  readings: WaterReading[];
}

// Generate realistic groundwater depletion pattern
export function generateWaterReadings(days: number = 30): WaterReading[] {
  const readings: WaterReading[] = [];
  const now = new Date();
  
  // Starting water level (in meters below ground)
  let currentLevel = 15.5;
  const baseTds = 450;
  const baseTemp = 26;
  
  for (let i = days; i >= 0; i--) {
    const timestamp = new Date(now.getTime() - i * 24 * 60 * 60 * 1000);
    
    // Simulate seasonal rainfall pattern (monsoon effect)
    const month = timestamp.getMonth();
    let rainfall = 0;
    
    // Monsoon months: June-September (months 5-8)
    if (month >= 5 && month <= 8) {
      rainfall = Math.random() > 0.6 ? Math.random() * 25 : 0;
    } else if (month >= 3 && month <= 4) {
      // Pre-monsoon
      rainfall = Math.random() > 0.8 ? Math.random() * 8 : 0;
    }
    
    // Water level depletion (gradual with seasonal recovery)
    const dailyDepletion = 0.03 + Math.random() * 0.02; // 3-5 cm per day
    const recharge = rainfall * 0.15; // 15% of rainfall recharges groundwater
    
    currentLevel = Math.max(8, Math.min(35, currentLevel + dailyDepletion - recharge));
    
    // TDS increases as water level drops
    const tdsIncrease = (currentLevel - 15) * 2;
    const tds = Math.round(baseTds + tdsIncrease + Math.random() * 20 - 10);
    
    // Temperature varies seasonally
    const seasonalTemp = baseTemp + Math.sin((month / 12) * 2 * Math.PI) * 4;
    const temperature = Math.round((seasonalTemp + Math.random() * 2) * 10) / 10;
    
    // Extraction rate (higher in summer, lower in monsoon)
    let baseExtraction = 1200; // liters per day
    if (month >= 5 && month <= 8) baseExtraction *= 0.6; // Less extraction in monsoon
    if (month >= 2 && month <= 4) baseExtraction *= 1.3; // More in summer
    const extractionRate = Math.round(baseExtraction + Math.random() * 200);
    
    readings.push({
      timestamp: timestamp.toISOString(),
      waterLevel: Math.round(currentLevel * 100) / 100,
      tds: Math.max(200, Math.min(1500, tds)),
      temperature,
      extractionRate,
      rainfall: Math.round(rainfall * 10) / 10
    });
  }
  
  return readings;
}

// Generate village data
export function generateVillageData(): VillageData {
  const readings = generateWaterReadings(90);
  const currentReading = readings[readings.length - 1];
  
  // Calculate risk level
  const levelPercent = ((currentReading.waterLevel - 8) / (35 - 8)) * 100;
  let riskLevel: 'low' | 'medium' | 'high' | 'critical' = 'low';
  
  if (levelPercent > 80) riskLevel = 'critical';
  else if (levelPercent > 60) riskLevel = 'high';
  else if (levelPercent > 40) riskLevel = 'medium';
  
  // Predict dry date based on depletion rate
  const recentReadings = readings.slice(-14);
  const depletionRate = (recentReadings[recentReadings.length - 1].waterLevel - recentReadings[0].waterLevel) / 14;
  const daysUntilCritical = depletionRate > 0 
    ? Math.floor((28 - currentReading.waterLevel) / depletionRate)
    : 365;
  
  const predictedDryDate = new Date();
  predictedDryDate.setDate(predictedDryDate.getDate() + Math.max(30, daysUntilCritical));
  
  // Calculate water score (0-100)
  const tdsScore = Math.max(0, 100 - (currentReading.tds - 300) / 10);
  const levelScore = Math.max(0, 100 - levelPercent);
  const extractionScore = Math.max(0, 100 - (currentReading.extractionRate - 800) / 10);
  const waterScore = Math.round((tdsScore + levelScore + extractionScore) / 3);
  
  return {
    id: 'village-001',
    name: 'Grama Panchayat Kolar',
    state: 'Karnataka',
    district: 'Kolar',
    currentLevel: currentReading.waterLevel,
    maxLevel: 35,
    minLevel: 8,
    riskLevel,
    predictedDryDate,
    waterScore,
    readings
  };
}

// Generate multiple villages for comparison
export function generateMultipleVillages(count: number = 5): VillageData[] {
  const villages = [
    { name: 'Grama Panchayat Kolar', state: 'Karnataka', district: 'Kolar' },
    { name: 'Village Malur', state: 'Karnataka', district: 'Kolar' },
    { name: 'Panchayat Chintamani', state: 'Karnataka', district: 'Chikkaballapur' },
    { name: 'Village Gauribidanur', state: 'Karnataka', district: 'Chikkaballapur' },
    { name: 'Panchayat Devanahalli', state: 'Karnataka', district: 'Bangalore Rural' }
  ];
  
  return villages.slice(0, count).map((v, i) => {
    const data = generateVillageData();
    return {
      ...data,
      id: `village-00${i + 1}`,
      name: v.name,
      state: v.state,
      district: v.district,
      waterScore: Math.max(30, Math.min(95, data.waterScore + (Math.random() * 20 - 10)))
    };
  });
}

// AI Insights generator
export interface AIInsight {
  id: string;
  type: 'warning' | 'info' | 'recommendation' | 'alert';
  title: string;
  description: string;
  timestamp: string;
  priority: 'high' | 'medium' | 'low';
}

export function generateAIInsights(village: VillageData): AIInsight[] {
  const insights: AIInsight[] = [];
  const now = new Date().toISOString();
  
  const recentReadings = village.readings.slice(-7);
  const avgExtraction = recentReadings.reduce((sum, r) => sum + r.extractionRate, 0) / recentReadings.length;
  const prevWeekAvg = village.readings.slice(-14, -7).reduce((sum, r) => sum + r.extractionRate, 0) / 7;
  
  const extractionChange = ((avgExtraction - prevWeekAvg) / prevWeekAvg) * 100;
  
  if (extractionChange > 10) {
    insights.push({
      id: 'ins-001',
      type: 'warning',
      title: 'Extraction Rate Increasing',
      description: `Water extraction has increased by ${extractionChange.toFixed(1)}% compared to last week. Consider implementing conservation measures.`,
      timestamp: now,
      priority: 'high'
    });
  }
  
  if (village.currentLevel > 25) {
    insights.push({
      id: 'ins-002',
      type: 'alert',
      title: 'Critical Water Level',
      description: `Current water level (${village.currentLevel.toFixed(1)}m) is approaching critical threshold. Immediate action recommended.`,
      timestamp: now,
      priority: 'high'
    });
  }
  
  if (village.readings[village.readings.length - 1].tds > 800) {
    insights.push({
      id: 'ins-003',
      type: 'warning',
      title: 'TDS Level Elevated',
      description: 'Total Dissolved Solids have exceeded 800 ppm. Water quality monitoring recommended.',
      timestamp: now,
      priority: 'medium'
    });
  }
  
  insights.push({
    id: 'ins-004',
    type: 'recommendation',
    title: 'Irrigation Optimization',
    description: 'Based on current depletion rate, recommended irrigation reduction: 15-20% during peak hours (12PM-4PM).',
    timestamp: now,
    priority: 'medium'
  });
  
  insights.push({
    id: 'ins-005',
    type: 'info',
    title: 'Monsoon Outlook',
    description: 'IMD forecasts normal monsoon this year. Expected groundwater recharge: 2-3 meters by September.',
    timestamp: now,
    priority: 'low'
  });
  
  return insights;
}

// Statistics for display
export const waterStatistics = {
  groundwaterExtracted: 60.63, // percentage
  villagesAffected: 164000,
  agricultureDependency: 87,
  borewellFailureRate: 70,
  annualDepletion: 1.2, // meters per year
  populationDependent: 600000000
};
