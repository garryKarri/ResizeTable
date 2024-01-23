// Валидация положительного числа
const validatePositive = (value) => {
  if (value <= 0 || value == "-" ) {
    return [false, "Значение должно быть больше 0"];
  }
  return [true];
};
// Валидация числа от 0 до 1
const validatePartsOfUnits = (value) => {
  if (value < 0 || value > 1 || value == "-") {
    return [false, "Значение должно быть от 0 до 1"];
  }
  return [true];
};

// Валидация числа от 0 до 100
const validateZeroToHundred = (value) => {
  if (value < 0 || value > 100 || value !== -0 || value == "-" ) {
    return [false, "Значение должно быть от 0 до 100"];
  }
  return [true];
};

// Валидация значения на число
const validateNumber = (value) => {
  if (typeof value !== "number") {
    return [false, "Значение должно быть числом"];
  }
  return [true];
};

// Валидация значения на целое число:
const validateInteger = (value) => {
  if (!Number.isInteger(value)) {
    return [false, "Значение должно быть целым числом"];
  }
  return [true];
};

export const valid = {
  // ГФХ
  depositType: ["нет"],
  collectorType: ["нет"],
  absGNKMark: [validatePositive],
  absGVKMark: [validatePositive],
  absTopMark: [validatePositive],
  absVNKMark: [validatePositive],
  initialReservoirTemp: [validatePositive],
  initialReservoirPressure: [validatePositive],
  reservoirGasViscosity: [validatePositive],
  reservoirWaterViscosity: [validatePositive],
  reservoirOilViscosity: [validatePositive],
  reservoirGasDensity: [validatePositive],
  reservoirWaterDensity: [validatePositive],
  reservoirOilDensity: [validatePositive],
  surfaceWaterDensity: [validatePositive],
  surfaceOilDensity: [validatePositive],
  standartCondensateViscosity: [validatePositive],
  standartCondensateDensity: [validatePositive],
  relativeGasDensity: [validatePositive],
  avgGasSaturatedThickness: [validatePositive],
  avgWaterSaturatedThickness: [validatePositive],
  avgOilSaturatedThickness: [validatePositive],
  displacementCoef: [validatePartsOfUnits],
  gasDisplacementCoef: [validatePartsOfUnits],
  gasSaturationCoef: [validatePartsOfUnits],
  gritCoef: [validatePartsOfUnits],
  oilSaturationCoef: [validatePartsOfUnits],
  porosityCoef: [validatePartsOfUnits],
  productivityCoef: [validatePositive],
  volumeOilCoef: [validatePositive],
  hydrogenSulfideContent: [validatePositive],
  paraffinContentInOil: [validatePositive],
  sulfurContentInOil: [validatePositive],
  condensationStartPressure: [validatePositive],
  oilSaturationPressure: [validatePositive],
  fragmentation: [validatePositive],
  gasContent: [validatePositive],
  oilGasArea: [validatePositive],
  permeability: [validatePositive],

  // ЭКОНОМИЧЕСКИЕ ПОКАЗАТЕЛИ
  discount: [validateZeroToHundred],
  option: ["Нет"],
  NPV: [validateNumber, validatePositive],
  NPVProfitPeriod: [validatePositive],
  IRR: [validatePositive],
  expensesProfitIndex: [validatePositive],
  investmentProfitIndex: [validatePositive],
  paybackPeriod: [validateInteger, validatePositive],
  developmentInvestment: [validatePositive],
  developmentInvestmentWellDrill: [validatePositive],
  operatingСosts: [validatePositive],
  stateRevenue: [validatePositive],

  // ПРОГНОЗНЫЕ ПОКАЗАТЕЛИ
  reserveCategory: [], // латинские буквы А, B1, B2, C1, C2 и их сочетания
  option: [], // текстовое поле
  year: [], // год
  oilExtraction: [validatePositive], // Число больше 0
  oilExtractionTrans: [validatePositive], // Число больше 0
  oilExtractionNew: [validatePositive], // Число больше 0
  oilExtractionMech: [validatePositive], // Число больше 0

  newWells: [validateInteger, validatePositive], // Целое число больше 0
  newWellsExploit: [validateInteger, validatePositive], // Целое число больше 0
  newWellsReckon: [validateInteger, validatePositive], // Целое число больше 0
  transWellsCategory: [validateInteger, validatePositive], // Целое число больше 0
  transWellsObject: [validateInteger, validatePositive], // Целое число больше 0
  horizontalSidetracks: [validateInteger, validatePositive], // Целое число больше 0
  avgDebitNewOil:[validatePositive],  // Число больше 0
  avgDaysNew: [validateInteger, validatePositive], // Целое число больше 0
  avgDeepNew:[validatePositive], // Число больше 0
  exploitDrill:[validatePositive],  // Число больше 0
  exploitDrillExtract:[validatePositive], // Число больше 0
  exploitDrillHelpSpecial:[validatePositive], // Число больше 0

  calcWorkTimeNewPrev:[validateInteger, validatePositive], // Целое число больше 0

  calcOilExtractNewPrev:[validatePositive], // Число больше 0
  OilExtractTransPrev:[validatePositive], // Число больше 0
  calcOilExtractTransPrev:[validatePositive], // Число больше 0
  expectOilExtractTransPrev:[validatePositive], // Число больше 0

  diffOilExtractTrans: [validateNumber], // Число
  percentDiffOilExtractTrans:[validateNumber], // Число


  NewWellsPower: [validatePositive], // Число больше 0

  removeExtractWells:[validateInteger, validatePositive], // Целое число больше 0
  removeExtractWellsForPump:[validateInteger, validatePositive], // Целое число больше 0
  extractOilWellsEOY:[validateInteger, validatePositive], // Целое число больше 0
  extractOilWellsFromPumpEOY:[validateInteger, validatePositive], // Целое число больше 0
  extractOilWellsCurrentEOY:[validateInteger, validatePositive], // Целое число больше 0
  wellsToMechExtraction:[validateInteger, validatePositive], // Целое число больше 0
  wellsMech:[validateInteger, validatePositive], // Целое число больше 0
  addPumpWells:[validateInteger, validatePositive], // Целое число больше 0
  removePumpWells:[validateInteger, validatePositive], // Целое число больше 0
  pumpingWellsEOY:[validateInteger, validatePositive], // Целое число больше 0
  pumpingWellsCurrentEOY:[validateInteger, validatePositive], // Целое число больше 0



  avgDebitLiquid: [validatePositive],  // Число больше 0
  avgDebitLiquidTrans: [validatePositive], // Число больше 0
  avgDebitLiquidNew: [validatePositive], // Число больше 0
  avgDebitOil: [validatePositive],// Число больше 0 
  avgDebitOilTrans: [validatePositive],// Число больше 0
  avgImpurityPumping: [validatePositive],// Число больше 0
  avgWaterLevelCurrent: [validatePositive],// Число больше 0
  avgWaterLevelTrans: [validatePositive],// Число больше 0
  avgWaterLevelNew: [validatePositive],// Число больше 0
  liquidExtraction: [validatePositive],// Число больше 0
  liquidExtractionTrans: [validatePositive],// Число больше 0
  liquidExtractionNew: [validatePositive],// Число больше 0
  liquidExtractionMech: [validatePositive],// Число больше 0
  liquidExtractionTotal: [validatePositive],// Число больше 0
  oilExtractionTotal: [validatePositive],// Число больше 0


  enhancedOilRecovery: [validatePartsOfUnits],   // Число от 0 до 1

  aprovedExtractSelection: [validateZeroToHundred],  // Число от 0 до 100

  selectRateTotal: [validatePositive], // Число больше 0
  selectRateCurrent: [validatePositive], // Число больше 0
  workAgentPumping: [validatePositive], // Число больше 0
  workAgentPumpingTotal: [validatePositive], // Число больше 0
  selectCompensationCurrent: [validatePositive], // Число больше 0
  selectCompensationTotal: [validatePositive], // Число больше 0
  dissolvedGasExtraction: [validatePositive], // Число больше 0
  dissolvedGasExtractionTotal: [validatePositive], // Число больше 0
  dissolvedGasUsage: [validatePositive], // Число больше 0

  percentDissolvedGasUsage:[validateZeroToHundred], // Число от 0 до 100

  ////////////////// СИСТЕМА РАЗРАБОТКИ///////////
  impactType: ["текстовое поле"], // Может быть сделать селект с типами воздействия и галочками? (всего встречается 10 категорий)
  wellGridDensity:[validatePositive], // Число больше 0
  projLevOilExtraction:[validatePositive], // Число больше 0
  projLevDissolvedGasExtraction:[validatePositive], // Число больше 0
  projLevLiquidExtraction:[validatePositive], // Число больше 0
  projLevGasCapsExtraction:[validatePositive], // Число больше 0
  projLevFreeGasExtraction:[validatePositive], // Число больше 0
  projLevFreeCondensateExtraction:[validatePositive], // Число больше 0
  projLevWaterPumping:[validatePositive], // Число больше 0
  projLevGasPumping:[validatePositive], // Число больше 0


  projDevelopmentTime:[validateInteger, validatePositive], // Целое число больше 0
  profitDevelopmentPeriod:[validateInteger, validatePositive], // Целое число больше 0

  accumulatedProjectOilExtraction:[validatePositive], // Число больше 0
  accumulatedProfitOilExtraction:[validatePositive], // Число больше 0
  accumulatedOilExtraction:[validatePositive], // Число больше 0

  enhancedOilRecovery:[validatePartsOfUnits], // Число от 0 до 1
  enhancedOilRecoveryProfitPeriod:[validatePartsOfUnits],// Число от 0 до 1

  accumulatedWaterPumping:[validatePositive], // Число больше 0
  accumulatedGasPumping:[validatePositive], // Число больше 0
  accumulatedLiquidExtraction:[validatePositive], // Число больше 0
  
  avgWaterCut:[validateZeroToHundred], // Число от 0 до 100
  avgWaterCutProfitPeriod:[validateZeroToHundred], // Число от 0 до 100
  
  
  accumulatedFreeGasExtractionProjectPeriod:[validatePositive], // Число больше 0
  accumulatedFreeGasExtractionProfitPeriod:[validatePositive], // Число больше 0
  accumulatedFreeGasExtraction:[validatePositive], // Число больше 0

  enhancedGasRecovery:[validatePartsOfUnits], // Число от 0 до 1
  enhancedGasRecoveryProfitPeriod:[validatePartsOfUnits], // Число от 0 до 1

  accumulatedGasCapsExtractionProjectPeriod:[validatePositive], // Число больше 0
  accumulatedGasCapsExtractionProfitPeriod:[validatePositive], // Число больше 0
  accumulatedGasCapsExtraction:[validatePositive], // Число больше 0
  accumulatedLayerGasPumping:[validatePositive], // Число больше 0
  accumulatedCondensateExtractionProjectPeriod:[validatePositive], // Число больше 0
  accumulatedCondensateExtractionProfitPeriod:[validatePositive], // Число больше 0
  accumulatedCondensateExtraction:[validatePositive], // Число больше 0

  enhancedCondensateRecovery:[validatePartsOfUnits], // Число от 0 до 1
  enhancedCondensateRecoveryProjectPeriod:[validatePartsOfUnits], // Число от 0 до 1
  
  totalWells:[validateInteger, validatePositive],//Целое число больше 0
  totalExtractingOilWells:[validateInteger, validatePositive],//Целое число больше 0
  totalExtractingHorizontalOilWells:[validateInteger, validatePositive],//Целое число больше 0
  totalPressureWells:[validateInteger, validatePositive],//Целое число больше 0
  totalHorizontalPressureWells:[validateInteger, validatePositive],//Целое число больше 0
  totalExtractingGasWells:[validateInteger, validatePositive],//Целое число больше 0
  totalExtractingHorizontalGasWells:[validateInteger, validatePositive],//Целое число больше 0
  totalControlWells:[validateInteger, validatePositive],//Целое число больше 0
  totalWaterIntakeWells:[validateInteger, validatePositive],//Целое число больше 0
  totalAbsorbingWells:[validateInteger, validatePositive],//Целое число больше 0
  totalRemovedWells:[validateInteger, validatePositive],//Целое число больше 0
  drillWells:[validateInteger, validatePositive],//Целое число больше 0
  drillOilWells:[validateInteger, validatePositive],//Целое число больше 0
  drillHorizontalOilWells:[validateInteger, validatePositive],//Целое число больше 0
  drillPressureWells:[validateInteger, validatePositive],//Целое число больше 0
  drillHorizontalPressureWells:[validateInteger, validatePositive],//Целое число больше 0
  drillExtractingGasWells:[validateInteger, validatePositive],//Целое число больше 0
  drillExtractingHorizontalGasWells:[validateInteger, validatePositive],//Целое число больше 0
  drillControlWells:[validateInteger, validatePositive],//Целое число больше 0
  drillWaterIntakeWells:[validateInteger, validatePositive],//Целое число больше 0
  drillAbsorbingWells:[validateInteger, validatePositive],//Целое число больше 0
  drillSidetrackWells:[validateInteger, validatePositive],//Целое число больше 0
  drillHorizontalSidetrackWells:[validateInteger, validatePositive],//Целое число больше 0
  transWells:[validateInteger, validatePositive],//Целое число больше 0
  transExtractingWells:[validateInteger, validatePositive],//Целое число больше 0
  transPressureWells:[validateInteger, validatePositive],//Целое число больше 0
  techWells:[validateInteger, validatePositive],//Целое число больше 0
  techExtractingWells:[validateInteger, validatePositive],//Целое число больше 0
  techPressureWells:[validateInteger, validatePositive],//Целое число больше 0

  ////////////// ЗАПАСЫ //////////
  // reserveCategory:[], // уже было в ПРОГНОЗНЫХ ПОКАЗАТЕЛЯХ --> латинские буквы А, B1, B2, C1, C2 и их сочетания  
  initOilReservesApprovedGeo:[validatePositive],  // Число больше 0
  initOilReservesApprovedExt:[validatePositive],  // Число больше 0
  initOilReservesApprovedEOR: [validatePartsOfUnits],  // Число от 0 до 1
  initOilReservesGovBalanceGeo: [validatePositive], // Число больше 0
  initOilReservesGovBalanceExt:[validatePositive], // Число больше 0
  initOilReservesGovBalanceEOR:[validatePartsOfUnits], // Число от 0 до 1
  currentOilReservesGeo:[validatePositive],  // Число больше 0
  currentOilReservesExt:[validatePositive],  // Число больше 0
  currentOilReservesEOR:[validatePartsOfUnits],  // Число от 0 до 1
  // accumulatedOilExtraction:[validatePositive],  // уже было в СИСТЕМЕ РАЗРАБОТКИ  ---> Число больше 0

};
