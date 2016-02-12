'use strict';

var request = require('request');
var async = require("async");
//require('request').debug = true;

//var baseURl = 'https://public-crest.eveonline.com';
//var crestMarketHistory = '/market/10000002/types/34/history/';


var crestMarketHistoryTritanium = 'https://public-crest.eveonline.com/market/10000002/orders/buy/?type=https://public-crest.eveonline.com/types/34/';
var crestMarketHistoryPyerite = 'https://public-crest.eveonline.com/market/10000002/orders/buy/?type=https://public-crest.eveonline.com/types/35/';
var crestMarketHistoryMexallon = 'https://public-crest.eveonline.com/market/10000002/orders/buy/?type=https://public-crest.eveonline.com/types/36/';
var crestMarketHistoryIsogen = 'https://public-crest.eveonline.com/market/10000002/orders/buy/?type=https://public-crest.eveonline.com/types/37/';
var crestMarketHistoryNocxium = 'https://public-crest.eveonline.com/market/10000002/orders/buy/?type=https://public-crest.eveonline.com/types/38/';
var crestMarketHistoryZydrine = 'https://public-crest.eveonline.com/market/10000002/orders/buy/?type=https://public-crest.eveonline.com/types/39/';
var crestMarketHistoryMegactye = 'https://public-crest.eveonline.com/market/10000002/orders/buy/?type=https://public-crest.eveonline.com/types/40/';
var crestMarketHitoryMorphite = 'https://public-crest.eveonline.com/market/10000002/orders/buy/?type=https://public-crest.eveonline.com/types/11399/';


exports.getSearchResults = function (req, res) {
    var allItems = [];
    var errors = [];
    request.get(crestMarketHistoryTritanium , function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.type('application/json');
            var content = JSON.parse(body);
            var topTritaniumBuy;
            var maxBuy = 0;
            for(var i = 0; i < content.items.length; i++){
                var item = content.items[i];
                if(item.location.id == 60003760){
                    var buyPrice = item.price;
                    if(buyPrice > maxBuy){
                        maxBuy = buyPrice;
                        topTritaniumBuy = item;
                    }
                }

            }
            console.log(topTritaniumBuy);
            allItems.push(topTritaniumBuy);
        } else {
            console.error(error);
            errors.push(error);
        }
    });
    request.get(crestMarketHistoryPyerite , function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.type('application/json');
            var content = JSON.parse(body);
            var topPyeriteBuy;
            var maxBuy = 0;
            for(var i = 0; i < content.items.length; i++){
                var item = content.items[i];
                if(item.location.id == 60003760){
                    var buyPrice = item.price;
                    if(buyPrice > maxBuy){
                        maxBuy = buyPrice;
                        topPyeriteBuy = item;
                    }
                }

            }
            console.log(topPyeriteBuy);
            allItems.push(topPyeriteBuy);
        } else {
            console.error(error);
            errors.push(error);
        }
    });
    request.get(crestMarketHistoryMexallon , function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.type('application/json');
            var content = JSON.parse(body);
            var topMexallonBuy;
            var maxBuy = 0;
            for(var i = 0; i < content.items.length; i++){
                var item = content.items[i];
                if(item.location.id == 60003760){
                    var buyPrice = item.price;
                    if(buyPrice > maxBuy){
                        maxBuy = buyPrice;
                        topMexallonBuy = item;
                    }
                }

            }
            console.log(topMexallonBuy);
            allItems.push(topMexallonBuy);
        } else {
            console.error(error);
            errors.push(error);
        }
    });
    request.get(crestMarketHistoryIsogen , function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.type('application/json');
            var content = JSON.parse(body);
            var topIsogenBuy;
            var maxBuy = 0;
            for(var i = 0; i < content.items.length; i++){
                var item = content.items[i];
                if(item.location.id == 60003760){
                    var buyPrice = item.price;
                    if(buyPrice > maxBuy){
                        maxBuy = buyPrice;
                        topIsogenBuy = item;
                    }
                }

            }
            console.log(topIsogenBuy);
            allItems.push(topIsogenBuy);
        } else {
            console.error(error);
            errors.push(error);
        }
    });
    request.get(crestMarketHistoryNocxium , function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.type('application/json');
            var content = JSON.parse(body);
            var topNocxiumBuy;
            var maxBuy = 0;
            for(var i = 0; i < content.items.length; i++){
                var item = content.items[i];
                if(item.location.id == 60003760){
                    var buyPrice = item.price;
                    if(buyPrice > maxBuy){
                        maxBuy = buyPrice;
                        topNocxiumBuy = item;
                    }
                }

            }
            console.log(topNocxiumBuy);
            allItems.push(topNocxiumBuy);
        } else {
            console.error(error);
            errors.push(error);
        }
    });
    request.get(crestMarketHistoryZydrine , function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.type('application/json');
            var content = JSON.parse(body);
            var topZydrineBuy;
            var maxBuy = 0;
            for(var i = 0; i < content.items.length; i++){
                var item = content.items[i];
                if(item.location.id == 60003760){
                    var buyPrice = item.price;
                    if(buyPrice > maxBuy){
                        maxBuy = buyPrice;
                        topZydrineBuy = item;
                    }
                }

            }
            console.log(topZydrineBuy);
            allItems.push(topZydrineBuy);
        } else {
            console.error(error);
            errors.push(error);
        }
    });
    request.get(crestMarketHistoryMegactye , function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.type('application/json');
            var content = JSON.parse(body);
            var topMegactyeBuy;
            var maxBuy = 0;
            for(var i = 0; i < content.items.length; i++){
                var item = content.items[i];
                if(item.location.id == 60003760){
                    var buyPrice = item.price;
                    if(buyPrice > maxBuy){
                        maxBuy = buyPrice;
                        topMegactyeBuy = item;
                    }
                }

            }
            console.log(topMegactyeBuy);
            allItems.push(topMegactyeBuy);
        } else {
            console.error(error);
            errors.push(error);
        }
    });
    request.get(crestMarketHitoryMorphite , function (error, response, body) {
        if (!error && response.statusCode === 200) {
            res.type('application/json');
            var content = JSON.parse(body);
            var topMorphiteBuy;
            var maxBuy = 0;
            for(var i = 0; i < content.items.length; i++){
                var item = content.items[i];
                if(item.location.id == 60003760){
                    var buyPrice = item.price;
                    if(buyPrice > maxBuy){
                        maxBuy = buyPrice;
                        topMorphiteBuy = item;
                    }
                }

            }
            console.log(topMorphiteBuy);
            allItems.push(topMorphiteBuy);
        } else {
            console.error(error);
            errors.push(error);
        }
    });
   // res.json(allItems);
};