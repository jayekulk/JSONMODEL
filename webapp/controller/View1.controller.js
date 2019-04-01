sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"json/JSONMODEL/model/formatter"
], function (Controller,formatter) {
	"use strict";

	return Controller.extend("json.JSONMODEL.controller.View1", {
		formatter:formatter,
		onInit: function () {
        var productModel = new sap.ui.model.json.JSONModel("model/product.json");
        this.getView().setModel(productModel,"Product");
		}
	});
});