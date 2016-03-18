'use strict';

var async = require("async");
var Promise = require("bluebird");
var request = Promise.promisifyAll(require("request"), {multiArgs: true});

var crestMarketHistoryTritanium = 'https://public-crest.eveonline.com/market/10000002/orders/buy/?type=https://public-crest.eveonline.com/types/34/';
var crestMarketHistoryPyerite = 'https://public-crest.eveonline.com/market/10000002/orders/buy/?type=https://public-crest.eveonline.com/types/35/';
var crestMarketHistoryMexallon = 'https://public-crest.eveonline.com/market/10000002/orders/buy/?type=https://public-crest.eveonline.com/types/36/';
var crestMarketHistoryIsogen = 'https://public-crest.eveonline.com/market/10000002/orders/buy/?type=https://public-crest.eveonline.com/types/37/';
var crestMarketHistoryNocxium = 'https://public-crest.eveonline.com/market/10000002/orders/buy/?type=https://public-crest.eveonline.com/types/38/';
var crestMarketHistoryZydrine = 'https://public-crest.eveonline.com/market/10000002/orders/buy/?type=https://public-crest.eveonline.com/types/39/';
var crestMarketHistoryMegactye = 'https://public-crest.eveonline.com/market/10000002/orders/buy/?type=https://public-crest.eveonline.com/types/40/';
var crestMarketHistoryMorphite = 'https://public-crest.eveonline.com/market/10000002/orders/buy/?type=https://public-crest.eveonline.com/types/11399/';

function getTritanium(){
    return request.getAsync(crestMarketHistoryTritanium).spread(function (response, body){
        if (response.statusCode === 200) {
            var content = JSON.parse(body);
            return findMaxPrice(content);
        } else {
            throw new Error("response.statusCode was: " + response.statusCode)
        }
    });
}
function getPyrite(){
    return request.getAsync(crestMarketHistoryPyerite).spread(function (response, body){
        if (response.statusCode === 200) {
            var content = JSON.parse(body);
            return findMaxPrice(content);
        } else {
            throw new Error("response.statusCode was: " + response.statusCode)
        }
    });
}
function getMexallon(){
    return request.getAsync(crestMarketHistoryMexallon).spread(function (response, body){
        if (response.statusCode === 200) {
            var content = JSON.parse(body);
            return findMaxPrice(content);
        } else {
            throw new Error("response.statusCode was: " + response.statusCode)
        }
    });
}
function getIsogen(){
    return request.getAsync(crestMarketHistoryIsogen).spread(function (response, body){
        if (response.statusCode === 200) {
            var content = JSON.parse(body);
            return findMaxPrice(content);
        } else {
            throw new Error("response.statusCode was: " + response.statusCode)
        }
    });
}
function getNocxium(){
    return request.getAsync(crestMarketHistoryNocxium).spread(function (response, body){
        if (response.statusCode === 200) {
            var content = JSON.parse(body);
            return findMaxPrice(content);
        } else {
            throw new Error("response.statusCode was: " + response.statusCode)
        }
    });
}

function getZydrine(){
    return request.getAsync(crestMarketHistoryZydrine).spread(function (response, body){
        if (response.statusCode === 200) {
            var content = JSON.parse(body);
            return findMaxPrice(content);
        } else {
            throw new Error("response.statusCode was: " + response.statusCode)
        }
    });
}

function getMegactye(){
    return request.getAsync(crestMarketHistoryMegactye).spread(function (response, body){
        if (response.statusCode === 200) {
            var content = JSON.parse(body);
            return findMaxPrice(content);
        } else {
            throw new Error("response.statusCode was: " + response.statusCode)
        }
    });
}

function getMorphite() {
    return request.getAsync(crestMarketHistoryMorphite).spread(function (response, body){
        if (response.statusCode === 200) {
            var content = JSON.parse(body);
            return findMaxPrice(content);
        } else {
            throw new Error("response.statusCode was: " + response.statusCode)
        }
    });
}

function findMaxPrice(content){
    var topBuy;
    var maxBuy = 0;
    for (var i = 0; i < content.items.length; i++) {
        var item = content.items[i];
        if (item.location.id == 60003760) {
            var buyPrice = item.price;
            if (buyPrice > maxBuy) {
                maxBuy = buyPrice;
                topBuy = item;
            }
        }
    }
    return topBuy;
}

exports.getSearchResults = function (req, res) {
    var allItems = [];
    Promise.all([getTritanium(), getPyrite(), getMexallon(), getIsogen(), getNocxium(), getZydrine(), getMegactye(), getMorphite()]).then(function (response) {
        var item;
        for(item in response){
            allItems.push(response[item]);
        }
        res.type('application/json');
        res.json(allItems);
    });
};
