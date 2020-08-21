sap.ui.define([
	"sap/ui/core/mvc/Controller", 
	"sap/suite/ui/commons/ChartContainer",
	"sap/suite/ui/commons/ChartContainerContent"], function(Controller, ChartContainer, ChartContainerContent) {
	"use strict";

	return Controller.extend("zchartaZCHART_APP.controller.Main", {

		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf zchartaZCHART_APP.view.Main
		 */
		  onInit: function() {
		    var oView = this.getView();
		    
		    this.adjustMyChartBox(oView, "idVizFrame1", "Cell1");
		    this.adjustMyChartBox(oView, "idVizFrame2", "Cell2");
		    this.adjustMyChartBox(oView, "idVizFrame3", "Cell3");
		    this.adjustMyChartBox(oView, "idVizFrame4", "Cell4");
		  },
          adjustMyChartBox: function(oView, sChartId, sBlockId){
          	 var oVizFrame = oView.byId(sChartId);
          	 
          	 var oChartContainerContent = new ChartContainerContent({
          	 	  content: [oVizFrame]
          	 });
          	 
          	 var oChartContainer = new ChartContainer({
          	 	 content: [oChartContainerContent]
          	 });
          	 
          	 oChartContainer.setShowFullScreen(true);
          	 oChartContainer.setAutoAdjustHeight(true);
          	 
          	 oView.byId(sBlockId).addContent(oChartContainer);
          }
		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf zchartaZCHART_APP.view.Main
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf zchartaZCHART_APP.view.Main
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf zchartaZCHART_APP.view.Main
		 */
		//	onExit: function() {
		//
		//	}

	});

});