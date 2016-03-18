'use strict';

var async = require("async");
var Promise = require("bluebird");
var request = Promise.promisifyAll(require("request"), {multiArgs: true});

var eveMarketCrestEndpoint = 'https://public-crest.eveonline.com/market/10000002/orders/buy/?type=https://public-crest.eveonline.com/types/';


//Exposed Functions//
exports.getMarketData = getMarketData;

//End Exposed Functions//


function getMarketData(req, res) {
    var allItems = [];
    var itemIds = ['34', '35', '36', '37', '38', '39', '40','11399'];
    var allItemPromises = retrieveItemPrices(itemIds);

    Promise.all(allItemPromises).then(function (response) {
        for(var item in response){
            allItems.push(response[item]);
        }
        res.type('application/json');
        res.json(allItems);
    });
}

function retrieveItemPrices(itemIds){
    var itemPrices = [];
    for(var itemId in itemIds) {
        var response = request.getAsync(eveMarketCrestEndpoint + itemIds[itemId] +'/').spread(function (response, body) {
            if (response.statusCode === 200) {
                var content = JSON.parse(body);
                return findMaxPrice(content);
            } else {
                throw new Error("response.statusCode was: " + response.statusCode)
            }
        });
        itemPrices.push(response);
    }
    return itemPrices;
}

function findMaxPrice(content){
    var topBuy;
    var maxBuy = 0;
    for (var item in content.items) {
        var currentItem = content.items[item];
        if (currentItem.location.id == 60003760) {
            var buyPrice = currentItem.price;
            if (buyPrice > maxBuy) {
                maxBuy = buyPrice;
                topBuy = currentItem;
            }
        }
    }
    return topBuy;
}