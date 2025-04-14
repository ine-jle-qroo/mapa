var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_230354_1 = new ol.format.GeoJSON();
var features_230354_1 = format_230354_1.readFeatures(json_230354_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_230354_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_230354_1.addFeatures(features_230354_1);
var lyr_230354_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_230354_1, 
                style: style_230354_1,
                popuplayertitle: '230354',
                interactive: true,
                title: '<img src="styles/legend/230354_1.png" /> 230354'
            });
var format_230254_2 = new ol.format.GeoJSON();
var features_230254_2 = format_230254_2.readFeatures(json_230254_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_230254_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_230254_2.addFeatures(features_230254_2);
var lyr_230254_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_230254_2, 
                style: style_230254_2,
                popuplayertitle: '230254',
                interactive: true,
                title: '<img src="styles/legend/230254_2.png" /> 230254'
            });
var format_230253_3 = new ol.format.GeoJSON();
var features_230253_3 = format_230253_3.readFeatures(json_230253_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_230253_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_230253_3.addFeatures(features_230253_3);
var lyr_230253_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_230253_3, 
                style: style_230253_3,
                popuplayertitle: '230253',
                interactive: true,
                title: '<img src="styles/legend/230253_3.png" /> 230253'
            });
var format_230252_4 = new ol.format.GeoJSON();
var features_230252_4 = format_230252_4.readFeatures(json_230252_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_230252_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_230252_4.addFeatures(features_230252_4);
var lyr_230252_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_230252_4, 
                style: style_230252_4,
                popuplayertitle: '230252',
                interactive: true,
                title: '<img src="styles/legend/230252_4.png" /> 230252'
            });
var format_230156_5 = new ol.format.GeoJSON();
var features_230156_5 = format_230156_5.readFeatures(json_230156_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_230156_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_230156_5.addFeatures(features_230156_5);
var lyr_230156_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_230156_5, 
                style: style_230156_5,
                popuplayertitle: '230156',
                interactive: true,
                title: '<img src="styles/legend/230156_5.png" /> 230156'
            });
var format_230155_6 = new ol.format.GeoJSON();
var features_230155_6 = format_230155_6.readFeatures(json_230155_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_230155_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_230155_6.addFeatures(features_230155_6);
var lyr_230155_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_230155_6, 
                style: style_230155_6,
                popuplayertitle: '230155',
                interactive: true,
                title: '<img src="styles/legend/230155_6.png" /> 230155'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_230354_1.setVisible(true);lyr_230254_2.setVisible(true);lyr_230253_3.setVisible(true);lyr_230252_4.setVisible(true);lyr_230156_5.setVisible(true);lyr_230155_6.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_230354_1,lyr_230254_2,lyr_230253_3,lyr_230252_4,lyr_230156_5,lyr_230155_6];
lyr_230354_1.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'Fecha': 'Fecha', 'Imagen': 'Imagen', });
lyr_230254_2.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'Fecha': 'Fecha', 'Imagen': 'Imagen', });
lyr_230253_3.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'Fecha': 'Fecha', 'Imagen': 'Imagen', });
lyr_230252_4.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'Fecha': 'Fecha', 'Imagen': 'Imagen', });
lyr_230156_5.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'Fecha': 'Fecha', 'Imagen': 'Imagen', });
lyr_230155_6.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'Fecha': 'Fecha', 'Imagen': 'Imagen', });
lyr_230354_1.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Fecha': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_230254_2.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Fecha': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_230253_3.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Fecha': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_230252_4.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Fecha': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_230156_5.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Fecha': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_230155_6.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Fecha': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_230354_1.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'Fecha': 'inline label - always visible', 'Imagen': 'no label', });
lyr_230254_2.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'Fecha': 'inline label - always visible', 'Imagen': 'no label', });
lyr_230253_3.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'Fecha': 'inline label - always visible', 'Imagen': 'no label', });
lyr_230252_4.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'Fecha': 'inline label - always visible', 'Imagen': 'no label', });
lyr_230156_5.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'Fecha': 'inline label - always visible', 'Imagen': 'no label', });
lyr_230155_6.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'Fecha': 'inline label - always visible', 'Imagen': 'no label', });
lyr_230155_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});