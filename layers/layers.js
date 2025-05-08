var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Mdulo230354_1 = new ol.format.GeoJSON();
var features_Mdulo230354_1 = format_Mdulo230354_1.readFeatures(json_Mdulo230354_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mdulo230354_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mdulo230354_1.addFeatures(features_Mdulo230354_1);
var lyr_Mdulo230354_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mdulo230354_1, 
                style: style_Mdulo230354_1,
                popuplayertitle: 'Módulo 230354',
                interactive: true,
                title: '<img src="styles/legend/Mdulo230354_1.png" /> Módulo 230354'
            });
var format_Mdulo230254_2 = new ol.format.GeoJSON();
var features_Mdulo230254_2 = format_Mdulo230254_2.readFeatures(json_Mdulo230254_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mdulo230254_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mdulo230254_2.addFeatures(features_Mdulo230254_2);
var lyr_Mdulo230254_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mdulo230254_2, 
                style: style_Mdulo230254_2,
                popuplayertitle: 'Módulo 230254',
                interactive: true,
                title: '<img src="styles/legend/Mdulo230254_2.png" /> Módulo 230254'
            });
var format_Mdulo230253_3 = new ol.format.GeoJSON();
var features_Mdulo230253_3 = format_Mdulo230253_3.readFeatures(json_Mdulo230253_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mdulo230253_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mdulo230253_3.addFeatures(features_Mdulo230253_3);
var lyr_Mdulo230253_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mdulo230253_3, 
                style: style_Mdulo230253_3,
                popuplayertitle: 'Módulo 230253',
                interactive: true,
                title: '<img src="styles/legend/Mdulo230253_3.png" /> Módulo 230253'
            });
var format_Mdulo230252_4 = new ol.format.GeoJSON();
var features_Mdulo230252_4 = format_Mdulo230252_4.readFeatures(json_Mdulo230252_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mdulo230252_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mdulo230252_4.addFeatures(features_Mdulo230252_4);
var lyr_Mdulo230252_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mdulo230252_4, 
                style: style_Mdulo230252_4,
                popuplayertitle: 'Módulo 230252',
                interactive: true,
                title: '<img src="styles/legend/Mdulo230252_4.png" /> Módulo 230252'
            });
var format_Mdulo230156_5 = new ol.format.GeoJSON();
var features_Mdulo230156_5 = format_Mdulo230156_5.readFeatures(json_Mdulo230156_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mdulo230156_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mdulo230156_5.addFeatures(features_Mdulo230156_5);
var lyr_Mdulo230156_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mdulo230156_5, 
                style: style_Mdulo230156_5,
                popuplayertitle: 'Módulo 230156',
                interactive: true,
                title: '<img src="styles/legend/Mdulo230156_5.png" /> Módulo 230156'
            });
var format_Mdulo230155_6 = new ol.format.GeoJSON();
var features_Mdulo230155_6 = format_Mdulo230155_6.readFeatures(json_Mdulo230155_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mdulo230155_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mdulo230155_6.addFeatures(features_Mdulo230155_6);
var lyr_Mdulo230155_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mdulo230155_6, 
                style: style_Mdulo230155_6,
                popuplayertitle: 'Módulo 230155',
                interactive: true,
                title: '<img src="styles/legend/Mdulo230155_6.png" /> Módulo 230155'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_Mdulo230354_1.setVisible(true);lyr_Mdulo230254_2.setVisible(true);lyr_Mdulo230253_3.setVisible(true);lyr_Mdulo230252_4.setVisible(true);lyr_Mdulo230156_5.setVisible(true);lyr_Mdulo230155_6.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Mdulo230354_1,lyr_Mdulo230254_2,lyr_Mdulo230253_3,lyr_Mdulo230252_4,lyr_Mdulo230156_5,lyr_Mdulo230155_6];
lyr_Mdulo230354_1.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'Fecha de permanencia': 'Fecha de permanencia', 'Imagen': 'Imagen', 'Ubicación': 'Ubicación', });
lyr_Mdulo230254_2.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'Fecha de permanencia': 'Fecha de permanencia', 'Imagen': 'Imagen', 'Ubicación': 'Ubicación', });
lyr_Mdulo230253_3.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'Fecha de permanencia': 'Fecha de permanencia', 'Imagen': 'Imagen', 'Ubicación': 'Ubicación', });
lyr_Mdulo230252_4.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'Fecha de permanencia': 'Fecha de permanencia', 'Imagen': 'Imagen', 'Ubicación': 'Ubicación', });
lyr_Mdulo230156_5.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'Fecha de permanencia': 'Fecha de permanencia', 'Imagen': 'Imagen', 'Ubicación': 'Ubicación', });
lyr_Mdulo230155_6.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'Fecha de permanencia': 'Fecha de permanencia', 'Imagen': 'Imagen', 'Ubicación': 'Ubicación', });
lyr_Mdulo230354_1.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Fecha de permanencia': '', 'Imagen': 'ExternalResource', 'Ubicación': '', });
lyr_Mdulo230254_2.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Fecha de permanencia': '', 'Imagen': 'ExternalResource', 'Ubicación': '', });
lyr_Mdulo230253_3.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Fecha de permanencia': '', 'Imagen': 'ExternalResource', 'Ubicación': '', });
lyr_Mdulo230252_4.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Fecha de permanencia': '', 'Imagen': 'ExternalResource', 'Ubicación': '', });
lyr_Mdulo230156_5.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Fecha de permanencia': '', 'Imagen': 'ExternalResource', 'Ubicación': '', });
lyr_Mdulo230155_6.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Fecha de permanencia': '', 'Imagen': 'ExternalResource', 'Ubicación': '', });
lyr_Mdulo230354_1.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'Fecha de permanencia': 'header label - always visible', 'Imagen': 'no label', 'Ubicación': 'header label - always visible', });
lyr_Mdulo230254_2.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'Fecha de permanencia': 'header label - always visible', 'Imagen': 'no label', 'Ubicación': 'header label - always visible', });
lyr_Mdulo230253_3.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'Fecha de permanencia': 'header label - always visible', 'Imagen': 'no label', 'Ubicación': 'header label - always visible', });
lyr_Mdulo230252_4.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'Fecha de permanencia': 'header label - always visible', 'Imagen': 'no label', 'Ubicación': 'header label - always visible', });
lyr_Mdulo230156_5.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'Fecha de permanencia': 'header label - always visible', 'Imagen': 'no label', 'Ubicación': 'header label - always visible', });
lyr_Mdulo230155_6.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'Fecha de permanencia': 'header label - always visible', 'Imagen': 'no label', 'Ubicación': 'header label - always visible', });
lyr_Mdulo230155_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});