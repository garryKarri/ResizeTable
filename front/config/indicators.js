import { indicatorsObj } from "./indicatorsObj";

// @todo проверить на дублирование
export const groups = {
  gfh: { type: "static" },
  reserves: { type: "static", advanced: ["category"] },
  system: { type: "static", advanced: ["option"] },
  prediction: { type: "dynamic", advanced: ["category", "option"] },
  proof: { type: "dynamic", advanced: ["discount"] },
};

// export const indicatorsTypes = {
//   gfh: "static",
//   tep: "static",
//   reserves: "static",
//   sostoyanieZap: "static",
//   system: "static",
//   planoviepokazateli: "plan",
// };

export const options = [
  // ГФХ
  {
    value: "gfh",
    label: "ГФХ",
    children: [
      {
        value: "uuid",
        label: "uuid",
        hideInChart: true,
        hideInTable: true,
      },
      {
        value: "count_object_id",
        label: "count_object_id",
        hideInChart: true,
        hideInTable: true,
      },
      {
        value: "data6gr",
        label: "data6gr",
        hideInChart: true,
        hideInTable: true,
      },
      {
        value: "depositType",
        label: "Тип залежи",
        hideInChart: true,
        measure: "б/р",
      },
      {
        value: "collectorType",
        label: "Тип коллектора",
        hideInChart: true,
        measure: "б/р",
        textMeasure: "",
      },
      {
        value: "absGNKMark",
        label: "Абсолютная отметка ГНК",
        measure: "м",
        textMeasure: "м",
      },
      {
        value: "absGVKMark",
        label: "Абсолютная отметка ГВК",
        measure: "м",
        textMeasure: "м",
      },
      {
        value: "absTopMark",
        label: "Абсолютная отметка кровли",
        measure: "м",
        textMeasure: "м",
      },
      {
        value: "absVNKMark",
        label: "Абсолютная отметка ВНК",
        measure: "м",
        textMeasure: "м",
      },
      {
        value: "initialReservoirTemp",
        label: "Начальная пластовая температура",
        measure: "°C",
        textMeasure: "°C",
      },
      {
        value: "initialReservoirPressure",
        label: "Начальное пластовое давление",
        measure: "МПа",
        textMeasure: "МПа",
      },
      {
        value: "reservoirGasViscosity",
        label: "Вязкость газа в пластовых условиях",
        measure: "мПа*с",
        textMeasure: "МПа*с",
      },
      {
        value: "reservoirWaterViscosity",
        label: "Вязкость воды в пластовых условиях",
        measure: "мПа*с",
        textMeasure: "МПа*с",
      },
      {
        value: "reservoirOilViscosity",
        label: "Вязкость нефти в пластовых условиях",
        measure: "мПа*с",
        textMeasure: "МПа*с",
      },
      {
        value: "reservoirGasDensity",
        label: "Плотность газа в пластовых условиях",
        measure: "кг/м³",
        textMeasure: "кг/м³",
      },
      {
        value: "reservoirWaterDensity",
        label: "Плотность воды в пластовых условиях",
        measure: "мПа*с",
        textMeasure: "МПа*с",
      },
      {
        value: "reservoirOilDensity",
        label: "Плотность нефти в пластовых условиях",
        measure: "г/см³",
        textMeasure: "г/см³",
      },
      {
        value: "surfaceWaterDensity",
        label: "Плотность воды в поверхностных условиях",
        measure: "г/см³",
        textMeasure: "г/см³",
      },
      {
        value: "surfaceOilDensity",
        label: "Плотность нефти в поверхностных условиях",
        measure: "г/см³",
        textMeasure: "г/см³",
      },
      {
        value: "standartCondensateViscosity",
        label: "Вязкость конденсата в стандартных условиях",
        measure: "МПа*с",
        textMeasure: "МПа*с",
      },
      {
        value: "standartCondensateDensity",
        label: "Плотность конденсата в стандартных  условиях",
        measure: "кг/м³*10⁻³",
        textMeasure: "кг/м³*10⁻³",
      },
      {
        value: "relativeGasDensity",
        label: "Относительная плотность газа по воздуху",
        measure: "б/р",
        textMeasure: "",
      },
      {
        value: "avgGasSaturatedThickness",
        label: "Средняя эффективная газонасыщенная толщина",
        measure: "м",
        textMeasure: "м",
      },
      {
        value: "avgWaterSaturatedThickness",
        label: "Средняя  эффективная водонасыщенная толщина",
        measure: "м",
        textMeasure: "м",
      },
      {
        value: "avgOilSaturatedThickness",
        label: "Средняя  эффективная нефтенасыщенная толщина",
        measure: "м",
        textMeasure: "м",
      },
      {
        value: "displacementCoef",
        label: "Коэффициент вытесненения водой",
        measure: "доли ед.",
        textMeasure: "доли ед.",
      },
      {
        value: "gasDisplacementCoef",
        label: "Коэффициент вытесненения нефти (газом)",
        measure: "доли ед.",
        textMeasure: "доли ед.",
      },
      {
        value: "gasSaturationCoef",
        label: "Коэффициент газонасыщенности пласта",
        measure: "доли ед.",
        textMeasure: "доли ед.",
      },
      {
        value: "gritCoef",
        label: "Коэффициент песчанистости",
        measure: "доли ед.",
        textMeasure: "доли ед.",
      },
      {
        value: "oilSaturationCoef",
        label: "Коэффициент нефтенасыщенности пласта",
        measure: "доли ед.",
        textMeasure: "доли ед.",
      },
      {
        value: "porosityCoef",
        label: "Коэффициент пористости",
        measure: "доли ед.",
        textMeasure: "доли ед.",
      },
      {
        value: "productivityCoef",
        label: "Удельный коэффициент продуктивности",
        measure: "доли ед.",
      },
      {
        value: "volumeOilCoef",
        label: "Объемный коэффициент нефти",
        measure: "доли ед.",
        textMeasure: "доли ед.",
      },
      {
        value: "hydrogenSulfideContent",
        label: "Содержание сероводорода",
        measure: "%",
        textMeasure: "%",
      },
      {
        value: "paraffinContentInOil",
        label: "Содержание парафина в нефти",
        measure: "%",
        textMeasure: "%",
      },
      {
        value: "sulfurContentInOil",
        label: "Содержание серы в нефти",
        measure: "%",
        textMeasure: "%",
      },
      {
        value: "condensationStartPressure",
        label: "Давление начала конденсации",
        measure: "МПа",
        textMeasure: "МПа",
      },
      {
        value: "oilSaturationPressure",
        label: "Давление насыщения нефти газом",
        measure: "МПа",
        textMeasure: "МПа",
      },
      {
        value: "fragmentation",
        label: "Коэффициент расчлененности",
        measure: "доли ед.",
        textMeasure: "доли ед.",
      },
      {
        value: "gasContent",
        label: "Газосодержание",
        measure: "м³/т",
        textMeasure: "м³/т",
      },
      {
        value: "oilGasArea",
        label: "Площадь нефтегазоносности", // Площадь нефтеносности
        measure: "тыс.м²",
        textMeasure: "тыс.м²",
      },
      {
        value: "permeability",
        label: "Проницаемость",
        measure: "мкм²",
        textMeasure: "мкм²",
      },
    ],
  },
  // Технико-экономические показатели
  {
    value: "tep",
    label: "Технико-экономические показатели",
    children: [
      {
        value: "impactType",
        label: "Вид воздействия",
        hideInChart: true,
        measure: "",
      },
      {
        value: "wellGridDensity",
        label: "Плотность сетки скважин",
        measure: "га/скв",
      },
      {
        value: "projLevOilExtraction",
        label: "Проектные уровни добычи нефти",
        measure: "тыс.т",
      },
      {
        value: "projLevDissolvedGasExtraction",
        label: "Проектные уровни добычи растворенного газа",
        measure: "млн.м³",
      },
      {
        value: "projLevLiquidExtraction",
        label: "Проектные уровни добычи жидкости",
        measure: "тыс.т",
      },
      {
        value: "projLevGasCapsExtraction",
        label: "Проектные уровни добычи газа газовых шапок",
        measure: "млн.м³",
      },
      {
        value: "projLevFreeGasExtraction",
        label: "Проектные уровни добычи свободного газа",
        measure: "млн.м³",
      },
      {
        value: "projLevFreeCondensateExtraction",
        label: "Проектные уровни добычи свободного конденсата",
        measure: "тыс.т",
      },
      {
        value: "projLevWaterPumping",
        label: "Проектные уровни закачки воды",
        measure: "млн.м³",
      },
      {
        value: "projLevGasPumping",
        label: "Проектные уровни закачки газа",
        measure: "млн.м³",
      },
      {
        value: "projDevelopmentTime",
        label: "Проектный срок разработки",
        measure: "годы",
      },
      {
        value: "profitDevelopmentPeriod",
        label: "Рентабельный период разработки",
        measure: "годы",
      },
      {
        value: "accumulatedProjectOilExtraction",
        label: "Накопленная добыча нефти за проектный период",
        measure: "тыс.т",
      },
      {
        value: "accumulatedProfitOilExtraction",
        label: "Накопленная добыча нефти за рентабельный период",
        measure: "годы",
      },
      {
        value: "accumulatedOilExtraction",
        label: "Накопленная добыча нефти с начала разработки",
        measure: "тыс.т",
      },
      {
        value: "enhancedOilRecovery",
        label: "Коэффициент извлечения нефти",
        measure: "доли. ед.",
      },
      {
        value: "enhancedOilRecoveryProfitPeriod",
        label: "Коэффициент извлечения нефти за рентабельный период",
        measure: "доли. ед.",
      },
      {
        value: "accumulatedWaterPumping",
        label: "Накопленная закачка воды с начала разработки",
        measure: "тыс.м³",
      },
      {
        value: "accumulatedGasPumping",
        label: "Накопленная закачка газа с начала разработки",
        measure: "млн.м³",
      },
      {
        value: "accumulatedLiquidExtraction",
        label: "Накопленная добыча жидкости с начала разработки",
        measure: "тыс.м³",
      },
      {
        value: "avgWaterCut",
        label: "Средняя обводненность продукции к концу разработки",
        measure: "%",
      },
      {
        value: "avgWaterCutProfitPeriod",
        label: "Средняя обводненность продукции на конец рентабельного периода",
        measure: "%",
      },
      {
        value: "accumulatedFreeGasExtractionProjectPeriod",
        label: "Накопленная добыча свободного газа за проектный период",
        measure: "млн.м³",
      },
      {
        value: "accumulatedFreeGasExtractionProfitPeriod",
        label: "Накопленная добыча свободного газа за рентабельный период",
        measure: "млн.м³",
      },
      {
        value: "accumulatedFreeGasExtraction",
        label: "Накопленная добыча свободного газа с начала разработки",
        measure: "млн.м³",
      },
      {
        value: "enhancedGasRecovery",
        label: "Коэффициент извлечения газа",
        measure: "доли.ед",
      },
      {
        value: "enhancedGasRecoveryProfitPeriod",
        label: "Коэффициент извлечения газа за рентабельный период",
        measure: "доли.ед",
      },
      {
        value: "accumulatedGasCapsExtractionProjectPeriod",
        label: "Накопленная добыча газа газовых шапок за проектный период",
        measure: "млн.м³",
      },
      {
        value: "accumulatedGasCapsExtractionProfitPeriod",
        label: "Накопленная добыча газа газовых шапок за рентабельный период",
        measure: "млн.м³",
      },
      {
        value: "accumulatedGasCapsExtraction",
        label: "Накопленная добыча газа газовых шапок с начала разработки",
        measure: "млн.м³",
      },
      {
        value: "accumulatedLayerGasPumping",
        label: "Накопленная закачка газа в пласт",
        measure: "млн.м³",
      },
      {
        value: "accumulatedCondensateExtractionProjectPeriod",
        label: "Накопленная добыча конденсата за проектный период",
        measure: "тыс.т",
      },
      {
        value: "accumulatedCondensateExtractionProfitPeriod",
        label: "Накопленная добыча конденсата за рентабельный период",
        measure: "тыс.т",
      },
      {
        value: "accumulatedCondensateExtraction",
        label: "Накопленная добыча конденсата с начала разработки",
        measure: "тыс.т",
      },
      {
        value: "enhancedCondensateRecovery",
        label: "Коэффициент извлечения конденсата",
        measure: "доли.ед",
      },
      {
        value: "enhancedCondensateRecoveryProjectPeriod",
        label: "Коэффициент извлечения конденсата за рентабельный период",
        measure: "доли.ед",
      },
      {
        value: "totalWells",
        label: "Всего скважин",
        measure: "шт",
      },
      {
        value: "totalExtractingOilWells",
        label: "Всего добывающих нефтяных скважин",
        measure: "шт",
      },
      {
        value: "totalExtractingHorizontalOilWells",
        label: "Всего добывающих нефтяных горизонтальных скважин",
        measure: "шт",
      },
      {
        value: "totalPressureWells",
        label: "Всего нагнетательных скважин",
        measure: "шт",
      },
      {
        value: "totalHorizontalPressureWells",
        label: "Всего нагнетательных горизонтальных скважин",
        measure: "шт",
      },
      {
        value: "totalExtractingGasWells",
        label: "Всего добывающих газовых скважин",
        measure: "шт",
      },
      {
        value: "totalExtractingHorizontalGasWells",
        label: "Всего добывающих газовых горизонтальных скважин",
        measure: "шт",
      },
      {
        value: "totalControlWells",
        label: "Всего контрольных скважин",
        measure: "шт",
      },
      {
        value: "totalWaterIntakeWells",
        label: "Всего водозаборных скважин",
        measure: "шт",
      },
      {
        value: "totalAbsorbingWells",
        label: "Всего поглощающих скважин",
        measure: "шт",
      },
      {
        value: "totalRemovedWells",
        label: "Всего ликвидированных скважин",
        measure: "шт",
      },
      {
        value: "drillWells",
        label: "Скважин для бурения",
        measure: "шт",
      },
      {
        value: "drillOilWells",
        label: "Добывающих нефтяных скважин для бурения",
        measure: "шт",
      },
      {
        value: "drillHorizontalOilWells",
        label: "Добывающих нефтяных горизонтальных скважин для бурения",
        measure: "шт",
      },
      {
        value: "drillPressureWells",
        label: "Нагнетательных скважин для бурения",
        measure: "шт",
      },
      {
        value: "drillHorizontalPressureWells",
        label: "Нагнетательных горизонтальных скважин для бурения",
        measure: "шт",
      },
      {
        value: "drillExtractingGasWells",
        label: "Добывающих газовых скважин для бурения",
        measure: "шт",
      },
      {
        value: "drillExtractingHorizontalGasWells",
        label: "Добывающих газовых горизонтальных скважин для бурения",
        measure: "шт",
      },
      {
        value: "drillControlWells",
        label: "Контрольных скважин для бурения",
        measure: "шт",
      },
      {
        value: "drillWaterIntakeWells",
        label: "Водозаборных скважин для бурения",
        measure: "шт",
      },
      {
        value: "drillAbsorbingWells",
        label: "Поглощающих скважин для бурения",
        measure: "шт",
      },
      {
        value: "drillSidetrackWells",
        label: "Скважин бурения бокового ствола",
        measure: "шт",
      },
      {
        value: "drillHorizontalSidetrackWells",
        label: "Горизонтальных скважин бурения бокового ствола",
        measure: "шт",
      },
      {
        value: "transExtractingWells",
        label: "Добывающих скважин, переведенных с другого объекта",
        measure: "шт",
      },
      {
        value: "transPressureWells",
        label: "Нагнетательных скважин, переведенных с другого объекта",
        measure: "шт",
      },
      {
        value: "techWells",
        label: "Скважин с технологией ОРЭ, ОРЗ",
        measure: "шт",
      },
      {
        value: "techExtractingWells",
        label: "Добывающих скважин с технологией ОРЭ, ОРЗ",
        measure: "шт",
      },
      {
        value: "techPressureWells",
        label: "Нагнетательных скважин с технологией ОРЭ, ОРЗ",
        measure: "шт",
      },
      {
        value: "transWells",
        label: "Скважин, переведённых с другого объекта",
        measure: "шт",
      },
      {
        value: "NPV",
        label: "Чистая приведённая стоимость",
        measure: "тыс.руб",
      },
      {
        value: "field_id",
        label: "id месторождения",
        measure: "тыс.руб",
        hideInTable: true,
      },
    ],
  },
  // Состояние запасов (для лок бэка)
  {
    value: "sostoyanieZap",
    label: "Состояние запасов",
    children: [
      // {
      //   value: 'reserveCategory',
      //   label: 'Категория запасов',
      // },
      {
        value: "initOilReservesApprovedGeo",
        label: "Начальные запасы нефти утвержденные Роснедра геологические",
      },
      {
        value: "initOilReservesApprovedExt",
        label: "Начальные запасы нефти утвержденные Роснедра извлекаемые",
      },
      {
        value: "initOilReservesApprovedEOR",
        label: "Начальные запасы нефти утвержденные Роснедра КИН",
      },
      {
        value: "initOilReservesGovBalanceGeo",
        label:
          "Начальные запасы нефти на государственном балансе геологические",
      },
      {
        value: "initOilReservesGovBalanceExt",
        label: "Начальные запасы нефти на государственном балансе извлекаемые",
      },
      {
        value: "initOilReservesGovBalanceEOR",
        label: "Начальные запасы нефти на государственном балансе КИН",
      },
      {
        value: "currentOilReservesGeo",
        label: "Текущие запасы нефти геологические",
      },
      {
        value: "currentOilReservesExt",
        label: "Текущие запасы нефти извлекаемые",
      },
      {
        value: "currentOilReservesEOR",
        label: "Текущие запасы нефти КИН",
      },
      {
        value: "accumulatedOilExtraction",
        label: "Накопленная добыча нефти",
      },
      {
        value: "licenceSite",
        label: "Лицензионный участок",
      },
    ],
  },
  // Запасы (для бэка)
  {
    value: "reserves",
    label: "Запасы",
    children: [
      // {
      //   value: 'reserveCategory',
      //   label: 'Категория запасов',
      // },
      {
        value: "initOilReservesApprovedGeo",
        label: "Начальные запасы нефти утвержденные Роснедра геологические",
        textMeasure: "тыс.т.",
      },
      {
        value: "initOilReservesApprovedExt",
        label: "Начальные запасы нефти утвержденные Роснедра извлекаемые",
        textMeasure: "тыс.т.",
      },
      {
        value: "initOilReservesApprovedEOR",
        label: "Начальные запасы нефти утвержденные Роснедра КИН",
        textMeasure: "доли ед.",
      },
      {
        value: "initOilReservesGovBalanceGeo",
        label:
          "Начальные запасы нефти на государственном балансе геологические",
        textMeasure: "тыс.т.",
      },
      {
        value: "initOilReservesGovBalanceExt",
        label: "Начальные запасы нефти на государственном балансе извлекаемые",
        textMeasure: "тыс.т.",
      },
      {
        value: "initOilReservesGovBalanceEOR",
        label: "Начальные запасы нефти на государственном балансе КИН",
        textMeasure: "доли ед.",
      },
      {
        value: "currentOilReservesGeo",
        label: "Текущие запасы нефти геологические",
        textMeasure: "тыс.т.",
      },
      {
        value: "currentOilReservesExt",
        label: "Текущие запасы нефти извлекаемые",
        textMeasure: "тыс.т.",
      },
      {
        value: "currentOilReservesEOR",
        label: "Текущие запасы нефти КИН",
        textMeasure: "доли ед.",
      },
      {
        value: "accumulatedOilExtraction",
        label: "Накопленная добыча нефти",
        textMeasure: "тыс.т.",
      },
    ],
  },
  // Плановые показатели
  {
    value: "planoviepokazateli",
    label: "Плановые показатели",
    children: [
      {
        value: "oilExtraction",
        label: "Добыча нефти (общая)",
        measure: "тыс.т",
      },
      {
        value: "oilExtractionTrans",
        label: "Добыча нефти из переходящих скважин",
        measure: "тыс.т",
      },
      {
        value: "oilExtractionNew",
        label: "Добыча нефти из новых скважин",
        measure: "тыс.т",
      },
      {
        value: "oilExtractionMech",
        label: "Добыча нефти механизированным способом",
        measure: "тыс.т",
      },
      {
        value: "newWells",
        label: "Ввод новых добывающих скважин",
        measure: "шт",
      },
      {
        value: "newWellsExploit",
        label: "Ввод новых добывающих скважин из эксплуатационного бурения",
        measure: "шт",
      },
      {
        value: "newWellsReckon",
        label: "Ввод новых добывающих скважин из разведочного бурения",
        measure: "шт",
      },
      {
        value: "transWellsCategory",
        label: "Перевод скважин из других категорий",
        measure: "шт",
      },
      {
        value: "transWellsObject",
        label: "Перевод скважин с других объектов",
        measure: "шт",
      },
      {
        value: "horizontalSidetracks",
        label: "Ввод боковых стволов",
        measure: "шт",
      },
      {
        value: "avgDebitNewOil",
        label: "Средний дебит новой скважины по нефти",
        measure: "т/сут",
      },
      {
        value: "avgDaysNew",
        label: "Cреднее число дней работы новой скважины",
        measure: "дни",
      },
      {
        value: "avgDeepNew",
        label: "Cредняя глубина новой скважины",
        measure: "м",
      },
      {
        value: "exploitDrill",
        label: "Эксплуатационное бурение",
        measure: "тыс.м",
      },
      {
        value: "exploitDrillExtract",
        label: "Эксплуатационное бурение добывающие скважины",
        measure: "тыс.м",
      },
      {
        value: "exploitDrillHelpSpecial",
        label:
          "Эксплуатационное бурение вспомогательные и специальные скважины",
        measure: "тыс.м",
      },
      {
        value: "calcWorkTimeNewPrev",
        label: "Расчетное время работы новых скважин предыдущего года",
        measure: "дни",
      },
      {
        value: "calcOilExtractNewPrev",
        label: "Расчетная добыча нефти из новых скважин предыдущего года",
        measure: "тыс.т",
      },
      {
        value: "OilExtractTransPrev",
        label: "Добыча нефти из переходящих скважин предыдущего года",
        measure: "тыс.т",
      },
      {
        value: "calcOilExtractTransPrev",
        label: "Расчетная добыча нефти из переходящих скважин данного года",
        measure: "тыс.т",
      },
      {
        value: "expectOilExtractTransPrev",
        label: "Ожидаемая добыча нефти из переходящих скважин данного года",
        measure: "тыс.т",
      },
      {
        value: "diffOilExtractTrans",
        label: "Изменение добычи нефти из переходящих скважин",
        measure: "тыс.т",
      },
      {
        value: "percentDiffOilExtractTrans",
        label: "Процент изменения добычи нефти из переходящих скважин",
        measure: "%",
      },
      {
        value: "NewWellsPower",
        label: "Мощность новых скважин",
        measure: "тыс.т",
      },
      {
        value: "removeExtractWells",
        label: "Выбытие добывающих скважин",
        measure: "шт",
      },
      {
        value: "removeExtractWellsForPump",
        label: "Выбытие добывающих скважин под закачку",
        measure: "шт",
      },
      {
        value: "extractOilWellsEOY",
        label: "Фонд добывающих нефтяных скважин на конец года",
        measure: "шт",
      },
      {
        value: "extractOilWellsFromPumpEOY",
        label:
          "Фонд добывающих нефтяных скважин на конец года нагнетательных в отработке на нефть",
        measure: "шт",
      },
      {
        value: "extractOilWellsCurrentEOY",
        label: "Действующий фонд добывающих нефтяных скважин на конец года",
        measure: "шт",
      },
      {
        value: "wellsToMechExtraction",
        label: "Перевод скважин на механизированную добычу",
        measure: "шт",
      },
      {
        value: "wellsMech",
        label: "Фонд механизированных скважин",
        measure: "шт",
      },
      {
        value: "addPumpWells",
        label: "Ввод нагнетательных скважин",
        measure: "шт",
      },
      {
        value: "removePumpWells",
        label: "Выбытие нагнетательных скважин",
        measure: "шт",
      },
      {
        value: "pumpingWellsEOY",
        label: "Фонд нагнетательных скважин на конец года",
        measure: "шт",
      },
      {
        value: "pumpingWellsCurrentEOY",
        label: "Действующий фонд нагнетательных скважин на конец года",
        measure: "шт",
      },
      {
        value: "avgDebitLiquid",
        label: "Cредний дебит действующих скважин по жидкости",
        measure: "т/сут",
      },
      {
        value: "avgDebitLiquidTrans",
        label: "Средний дебит переходящих скважин по жидкости",
        measure: "т/сут",
      },
      {
        value: "avgDebitLiquidNew",
        label: "Средний дебит новых скважин по жидкости",
        measure: "т/сут",
      },
      {
        value: "avgDebitOil",
        label: "Средний дебит действующих скважин по нефти",
        measure: "т/сут",
      },
      {
        value: "avgDebitOilTrans",
        label: "Средний дебит действующих скважин по нефти переходящих",
        measure: "т/сут",
      },
      {
        value: "avgImpurityPumping",
        label: "Средняя приемистость нагнетательных скважин",
        measure: "м³/сут",
      },
      {
        value: "avgWaterLevelCurrent",
        label: "Средняя обводненность продукции действующего фонда скважин",
        measure: "%",
      },
      {
        value: "avgWaterLevelTrans",
        label: "Средняя обводненность продукции переходящих скважин",
        measure: "%",
      },
      {
        value: "avgWaterLevelNew",
        label: "Средняя обводненность продукции новых скважин",
        measure: "%",
      },
      {
        value: "liquidExtraction",
        label: "Добыча жидкости",
        measure: "т/сут",
      },
      {
        value: "liquidExtractionTrans",
        label: "Добыча жидкости из переходящих скважин",
        measure: "т/сут",
      },
      {
        value: "liquidExtractionNew",
        label: "Добыча жидкости из новых скважин",
        measure: "т/сут",
      },
      {
        value: "liquidExtractionMech",
        label: "Добыча жидкости механизиpованным способом",
        measure: "т/сут",
      },
      {
        value: "liquidExtractionTotal",
        label: "Добыча жидкости с начала разработки",
        measure: "т/сут",
      },
      {
        value: "oilExtractionTotal",
        label: "Добыча нефти с начала разработки",
        measure: "т/сут",
      },
      {
        value: "enhancedOilRecovery",
        label: "Коэффициент извлечения нефти",
        measure: "доли ед.",
      },
      {
        value: "aprovedExtractSelection",
        label: "Отбор от утвержденных извлекаемых запасов",
        measure: "%",
      },
      {
        value: "selectRateTotal",
        label: "Темп отбора от начальных извлекаемых запасов",
        measure: "%",
      },
      {
        value: "selectRateCurrent",
        label: "Темп отбора от текущих извлекаемых запасов",
        measure: "%",
      },
      {
        value: "workAgentPumping",
        label: "Закачка рабочего агента",
        measure: "тыс.м³",
      },
      {
        value: "workAgentPumpingTotal",
        label: "Закачка рабочего агента с начала разработки",
        measure: "тыс.м³",
      },
      {
        value: "selectCompensationCurrent",
        label: "Компенсация отбора текущая",
        measure: "%",
      },
      {
        value: "selectCompensationTotal",
        label: "Компенсация отбора с начала разработки",
        measure: "%",
      },
      {
        value: "dissolvedGasExtraction",
        label: "Добыча растворенного газа",
        measure: "млн.м³",
      },
      {
        value: "dissolvedGasExtractionTotal",
        label: "Добыча растворенного газа с начала разработки",
        measure: "млн.м³",
      },
      {
        value: "dissolvedGasUsage",
        label: "Использование растворенного газа",
        measure: "млн.м³",
      },
      {
        value: "percentDissolvedGasUsage",
        label: "Процентное использование растворенного газа",
        measure: "%",
      },
    ],
  },
];

const intD = {};
for (const text in indicatorsObj) {
  intD[indicatorsObj[text]] = text;
}

export const getIndicatorName = (indicator) => intD[indicator];

const dInticatorOptions = {};
for (const option of options) {
  dInticatorOptions[option.value] = option;
  if (option.children?.length) {
    for (const childOption of option.children) {
      dInticatorOptions[childOption.value] = childOption;
    }
  }
}

export const getIndicatorTextMeasure = (indicator) =>
  dInticatorOptions[indicator]?.textMeasure;

// Для страницы Пласты(залежи)
export const getIndicatorGroupDictionary = (indicatorGroupName) => {
  // indicatorGroupName - "gfh"
  const indicatorGroup = options.find((el) => el.value === indicatorGroupName); // в массиве options вернётся объект с полем value и значением gfh
  const d = {};
  for (const child of indicatorGroup.children) {
    d[child.value] = child; // пушим в словарь d   "depositType": {value: "depositType",label: "Тип залежи", hideInChart: true,}
  }
  return d;
};
