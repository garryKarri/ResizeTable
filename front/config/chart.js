export const CHART_COLUMN_GIST = "CHART_COLUMN_GIST";
export const CHART_SCATTER_DEFAULT = "CHART_SCATTER_DEFAULT";

export const PLOT_GIST = "gist";
export const PLOT_COLUMN = "column";
export const PLOT_SCATTER = "scatter";

export const DISPLAY_LOG_Y = "logY";
export const DISPLAY_LOG_X = "logX";

export const getPlotOptions = (enabledPlots) => [
  {
    name: "Гистограмма",
    value: PLOT_GIST,
    disabled: !enabledPlots.includes(PLOT_GIST),
    label: "Гистограмма",
  },
  {
    name: "Столбчатая диаграмма",
    value: PLOT_COLUMN,
    disabled: !enabledPlots.includes(PLOT_COLUMN),
    label: "Столбчатая диаграмма",
  },
  {
    name: "Scatter Plot",
    value: PLOT_SCATTER,
    disabled: !enabledPlots.includes(PLOT_SCATTER),
    label: "Диаграмма рассеяния",
  },
];

export const chartPlotRelations = {
  [CHART_COLUMN_GIST]: [PLOT_GIST, PLOT_COLUMN],
  [CHART_SCATTER_DEFAULT]: [PLOT_SCATTER],
};
