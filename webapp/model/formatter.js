sap.ui.define([
], function () {
	"use strict";

	return {

		date: function (date) {
			var temp =date;
			var dd =temp.substring(6,8);
			var mm=temp.substring(4,6);
			var yyyy =temp.substring(0,4);
			var newDate =dd+"/"+mm+"/"+yyyy;
			return newDate;
		},
		status:function(status){
			if (status === "Good"){
				return "Success";
			}
			else if (status ==="Out of Stock"){
				return "Warning";
			}
			else {
				return "Error";
			}
		}

	};
});