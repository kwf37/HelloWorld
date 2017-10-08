window.CESIUM_BASE_URL = '../dist';
require('../node_modules/cesium/Build/Cesium/Cesium.js');
require('../node_modules/cesium/Build/Cesium/Widgets/widgets.css');
var Cesium = window.Cesium;

var viewer = new Cesium.Viewer('cesiumContainer');