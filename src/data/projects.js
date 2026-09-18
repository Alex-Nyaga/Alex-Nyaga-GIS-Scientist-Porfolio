// Project data consumed by Projects.jsx and ProjectDetail.jsx.
// `art` picks a MapArt gradient variant (0-7) for the thumbnail/hero.

export const categories = ["All Projects", "GIS & RS", "Machine Learning", "Web GIS", "Python"];

export const projects = [
  {
    slug: "lower-tana-river-morphodynamics",
    title: "Lower Tana River Morphodynamics (1995 \u2013 2025)",
    shortTitle: "Lower Tana River Morphodynamics",
    category: "GIS & RS",
    art: 0,
    description: "Spatio-temporal analysis of river channel changes using RS & GIS.",
    overview:
      "This project analyses morphological changes of the Guyo-Funi stretch of the Lower Tana River over 30 years using satellite imagery, DEMs and hydrological models.",
    problemStatement:
      "River channels along the Lower Tana Basin have shifted significantly over the past three decades, threatening riparian farmland, infrastructure and settlements, yet there was no up-to-date spatial record of how the channel had moved.",
    objectives: [
      "Map channel centreline and bank-line change from 1995 to 2025",
      "Quantify erosion and deposition zones along the study reach",
      "Relate morphological change to discharge and rainfall records",
      "Produce a decision-support layer for riparian land-use planning",
    ],
    studyAreaText:
      "The Guyo-Funi stretch of the Lower Tana River Basin, Kenya \u2014 roughly 42 km of active channel and floodplain.",
    methodology:
      "Landsat and Sentinel-2 time-series imagery was classified to extract historical water extents, combined with SRTM/ALOS DEMs and DSAS transect analysis to compute rates of bank movement.",
    workflow: [
      "Image acquisition & pre-processing (atmospheric correction, mosaicking)",
      "Water-extent classification per epoch (1995, 2005, 2015, 2025)",
      "Channel centreline & bank-line digitisation",
      "DSAS transect-based erosion/deposition rate calculation",
      "Validation against field GPS survey points",
    ],
    technologiesUsed: ["ArcGIS Pro", "Google Earth Engine", "HEC-HMS", "HEC-RAS", "Python"],
    results:
      "The analysis identified three high-erosion meander bends losing more than 8 m/year of bank line, and produced a hazard-zonation map now used by the county spatial planning office.",
    duration: "3 Months",
    studyArea: "Lower Tana River Basin, Kenya",
    tools: "ArcGIS Pro, GEE, HEC-HMS, HEC-RAS, Python",
    year: "2025",
    liveDemo: "#",
    code: "#",
  },
  {
    slug: "flood-prediction-system",
    title: "Flood Prediction System",
    shortTitle: "Flood Prediction System",
    category: "Machine Learning",
    art: 1,
    description: "ML model for river flow prediction using hydrological & climate data.",
    overview:
      "A machine-learning pipeline that forecasts river discharge 72 hours ahead by combining rainfall forecasts, upstream gauge readings and historical flow records.",
    problemStatement:
      "Communities downstream of the Tana River receive little advance warning before flood peaks arrive, leading to preventable loss of property and livestock.",
    objectives: [
      "Build a short-term (72 hr) discharge forecasting model",
      "Benchmark ML approaches against a traditional HEC-HMS hydrological model",
      "Package the model behind a simple early-warning dashboard",
    ],
    studyAreaText: "Lower Tana River Basin, Kenya, using data from 6 upstream gauging stations.",
    methodology:
      "Gradient-boosted and LSTM models were trained on 15 years of gauge, rainfall and reanalysis climate data, with hyperparameters tuned via time-series cross-validation.",
    workflow: [
      "Historical gauge & rainfall data cleaning",
      "Feature engineering (lagged rainfall, upstream flow, soil moisture)",
      "Model training: XGBoost, LSTM, and ensemble blend",
      "Backtesting against 2018 and 2023 flood events",
      "Deployment as a lightweight forecasting API",
    ],
    technologiesUsed: ["Python", "TensorFlow", "XGBoost", "Scikit-learn", "HEC-HMS"],
    results:
      "The ensemble model reduced 72-hour discharge forecast error by 34% relative to the baseline HEC-HMS run, correctly flagging both major flood events in the test period.",
    duration: "4 Months",
    studyArea: "Lower Tana River Basin, Kenya",
    tools: "Python, TensorFlow, XGBoost, HEC-HMS",
    year: "2024",
    liveDemo: "#",
    code: "#",
  },
  {
    slug: "urban-heat-island-analysis",
    title: "Urban Heat Island Analysis",
    shortTitle: "Urban Heat Island Analysis",
    category: "GIS & RS",
    art: 2,
    description: "Analysis of land surface temperature patterns in urban areas.",
    overview:
      "A remote-sensing study mapping land surface temperature across Nairobi to identify urban heat island hotspots and their relationship to land cover.",
    problemStatement:
      "Rapid urban densification has been linked anecdotally to rising local temperatures, but there was no city-wide spatial dataset quantifying the effect.",
    objectives: [
      "Derive land surface temperature (LST) from Landsat thermal bands",
      "Correlate LST with land cover / impervious surface fraction",
      "Identify priority wards for green-infrastructure intervention",
    ],
    studyAreaText: "Nairobi City County, Kenya.",
    methodology:
      "Landsat 8/9 thermal imagery across three seasons was converted to LST using the mono-window algorithm, then overlaid with a supervised land-cover classification.",
    workflow: [
      "Thermal band retrieval & atmospheric correction",
      "LST derivation (mono-window algorithm)",
      "Land-cover classification (random forest)",
      "Zonal statistics per ward",
      "Hotspot identification (Getis-Ord Gi*)",
    ],
    technologiesUsed: ["Google Earth Engine", "QGIS", "Python", "ArcGIS Pro"],
    results:
      "Informal settlements with low tree canopy showed LST up to 6.4\u00b0C higher than green suburban wards, directly informing a county tree-planting priority list.",
    duration: "2 Months",
    studyArea: "Nairobi, Kenya",
    tools: "Google Earth Engine, QGIS, Python",
    year: "2024",
    liveDemo: "#",
    code: "#",
  },
  {
    slug: "land-use-change-detection",
    title: "Land Use Change Detection",
    shortTitle: "Land Use Change Detection",
    category: "GIS & RS",
    art: 3,
    description: "Detection of land cover changes and human impacts over time.",
    overview:
      "A multi-decade land-use/land-cover change assessment tracking agricultural expansion, deforestation and settlement growth.",
    problemStatement:
      "Policy makers lacked a consistent, quantified record of how land use had shifted across the basin over the last 25 years.",
    objectives: [
      "Classify land cover for 2000, 2010, 2020 and 2025",
      "Quantify change matrices between classes",
      "Flag zones of rapid deforestation or unplanned settlement growth",
    ],
    studyAreaText: "Tana River catchment, Kenya.",
    methodology:
      "Supervised classification of Landsat time-series imagery, validated with historical aerial photography and field points, followed by post-classification change detection.",
    workflow: [
      "Multi-date image acquisition & compositing",
      "Supervised classification (random forest)",
      "Accuracy assessment against ground-truth points",
      "Post-classification change matrix",
      "Change hotspot mapping",
    ],
    technologiesUsed: ["ArcGIS Pro", "Google Earth Engine", "Python"],
    results:
      "Cropland expanded by 18% at the direct expense of riparian forest between 2000 and 2025, concentrated in three sub-catchments now flagged for restoration.",
    duration: "3 Months",
    studyArea: "Tana River Catchment, Kenya",
    tools: "ArcGIS Pro, Google Earth Engine, Python",
    year: "2023",
    liveDemo: "#",
    code: "#",
  },
  {
    slug: "drought-monitoring-dashboard",
    title: "Drought Monitoring Dashboard",
    shortTitle: "Drought Monitoring Dashboard",
    category: "Web GIS",
    art: 4,
    description: "Interactive dashboard for drought monitoring and visualization.",
    overview:
      "A web-based dashboard that visualises vegetation and rainfall anomalies in near-real time to support early drought response.",
    problemStatement:
      "Drought early-warning bulletins were published as static PDFs, making it hard for field officers to explore data for their specific sub-county.",
    objectives: [
      "Serve up-to-date NDVI and rainfall anomaly layers on a web map",
      "Let users drill down to ward-level summary statistics",
      "Provide a simple traffic-light drought severity indicator",
    ],
    studyAreaText: "Arid and semi-arid counties of Kenya.",
    methodology:
      "Automated Earth Engine tasks pull and process MODIS NDVI and CHIRPS rainfall data on a schedule, publishing tiles and statistics consumed by a Leaflet front end.",
    workflow: [
      "Automated NDVI / rainfall data pipeline (GEE)",
      "Backend API for zonal statistics",
      "Leaflet-based front-end dashboard",
      "Severity classification logic",
      "User testing with county drought officers",
    ],
    technologiesUsed: ["Google Earth Engine", "React", "Leaflet", "Node.js"],
    results:
      "Adopted as a pilot tool by two county drought management offices, cutting the time to produce a ward-level drought brief from days to minutes.",
    duration: "5 Months",
    studyArea: "ASAL Counties, Kenya",
    tools: "Google Earth Engine, React, Leaflet, Node.js",
    year: "2023",
    liveDemo: "#",
    code: "#",
  },
  {
    slug: "soil-erosion-risk-mapping",
    title: "Soil Erosion Risk Mapping",
    shortTitle: "Soil Erosion Risk Mapping",
    category: "GIS & RS",
    art: 5,
    description: "Mapping erosion risk using RUSLE and GIS techniques.",
    overview:
      "A basin-wide soil erosion risk assessment using the Revised Universal Soil Loss Equation (RUSLE) within a GIS framework.",
    problemStatement:
      "Siltation was degrading downstream reservoirs, but the specific upstream sub-catchments contributing the most sediment were unknown.",
    objectives: [
      "Model average annual soil loss across the basin",
      "Rank sub-catchments by erosion severity",
      "Recommend priority areas for soil-conservation works",
    ],
    studyAreaText: "Upper and Middle Tana River Basin, Kenya.",
    methodology:
      "RUSLE factors (rainfall erosivity, soil erodibility, slope length, cover management, support practice) were each derived as raster layers and combined in raster algebra.",
    workflow: [
      "Rainfall erosivity (R) factor from CHIRPS data",
      "Soil erodibility (K) factor from soil survey data",
      "Slope length-steepness (LS) from DEM",
      "Cover-management (C) factor from NDVI",
      "RUSLE raster overlay & risk classification",
    ],
    technologiesUsed: ["ArcGIS Pro", "QGIS", "Python"],
    results:
      "Identified 6 priority micro-catchments responsible for an estimated 60% of basin sediment yield, now targeted for terracing and afforestation programmes.",
    duration: "2 Months",
    studyArea: "Upper & Middle Tana Basin, Kenya",
    tools: "ArcGIS Pro, QGIS, Python",
    year: "2022",
    liveDemo: "#",
    code: "#",
  },
  {
    slug: "streamflow-simulation-hec-hms",
    title: "Streamflow Simulation (HEC-HMS)",
    shortTitle: "Streamflow Simulation (HEC-HMS)",
    category: "Python",
    art: 6,
    description: "Hydrological modelling of the Lower Tana River Basin.",
    overview:
      "A calibrated HEC-HMS hydrological model of the basin used to simulate streamflow response under different rainfall and land-use scenarios.",
    problemStatement:
      "There was no calibrated hydrological model available to test how planned land-use change or extreme rainfall would affect downstream flows.",
    objectives: [
      "Build and calibrate a semi-distributed HEC-HMS model",
      "Validate against 10 years of observed discharge",
      "Run scenario simulations for land-use and rainfall change",
    ],
    studyAreaText: "Lower Tana River Basin, Kenya.",
    methodology:
      "Sub-basins were delineated from a DEM, parameterised with soil and land-cover data, and the model was calibrated using PEST-based automated optimisation against gauge records.",
    workflow: [
      "Watershed delineation & sub-basin parameterisation",
      "Loss/transform method selection (SCS-CN, Clark UH)",
      "Model calibration (PEST) against observed discharge",
      "Validation on an independent record period",
      "Scenario simulation runs",
    ],
    technologiesUsed: ["HEC-HMS", "Python", "ArcGIS Pro", "PEST"],
    results:
      "Achieved a Nash-Sutcliffe efficiency of 0.81 on the validation period; scenario runs showed a 22% increase in peak flow under a projected 2050 land-use scenario.",
    duration: "3 Months",
    studyArea: "Lower Tana River Basin, Kenya",
    tools: "HEC-HMS, Python, ArcGIS Pro",
    year: "2022",
    liveDemo: "#",
    code: "#",
  },
  {
    slug: "ndvi-trend-analysis",
    title: "NDVI Trend Analysis (1995 \u2013 2025)",
    shortTitle: "NDVI Trend Analysis",
    category: "GIS & RS",
    art: 7,
    description: "Vegetation trend analysis using multi-temporal NDVI.",
    overview:
      "A 30-year vegetation greenness trend analysis using multi-temporal NDVI composites to track land degradation and recovery.",
    problemStatement:
      "Long-term vegetation trends were poorly understood at basin scale, making it difficult to evaluate whether restoration programmes were working.",
    objectives: [
      "Build a cloud-free annual NDVI composite series (1995\u20132025)",
      "Run pixel-wise trend analysis (Mann-Kendall / Theil-Sen)",
      "Separate climate-driven from human-driven greening/browning",
    ],
    studyAreaText: "Tana River Basin, Kenya.",
    methodology:
      "Landsat and MODIS NDVI archives were harmonised into an annual composite series in Google Earth Engine, then analysed pixel-by-pixel for significant monotonic trends.",
    workflow: [
      "Cloud masking & annual compositing (GEE)",
      "Harmonisation of Landsat/MODIS NDVI",
      "Pixel-wise Mann-Kendall trend test",
      "Theil-Sen slope magnitude mapping",
      "Residual trend analysis vs. rainfall",
    ],
    technologiesUsed: ["Google Earth Engine", "Python", "R"],
    results:
      "Detected significant greening across 28% of the basin (largely restoration areas) and browning across 11%, concentrated around expanding settlements.",
    duration: "4 Months",
    studyArea: "Tana River Basin, Kenya",
    tools: "Google Earth Engine, Python, R",
    year: "2025",
    liveDemo: "#",
    code: "#",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
