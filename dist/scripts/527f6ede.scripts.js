"use strict";angular.module("iGemPlates2015App",["ui.utils"]),angular.module("iGemPlates2015App").controller("MainCtrl",["$scope","$http",function(a,b){b.get("AllPlates2016.json").success(function(b,c,d,e){console.log(b),a.entries=b})}]),angular.module("iGemPlates2015App").filter("unsafe",["$sce",function(a){return function(b){return a.trustAsHtml(b)}}]);