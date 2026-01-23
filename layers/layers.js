var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Bacalar_1 = new ol.format.GeoJSON();
var features_Bacalar_1 = format_Bacalar_1.readFeatures(json_Bacalar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bacalar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bacalar_1.addFeatures(features_Bacalar_1);
var lyr_Bacalar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bacalar_1, 
                style: style_Bacalar_1,
                popuplayertitle: 'Bacalar',
                interactive: true,
                title: '<img src="styles/legend/Bacalar_1.png" /> Bacalar'
            });
var format_BenitoJurez_2 = new ol.format.GeoJSON();
var features_BenitoJurez_2 = format_BenitoJurez_2.readFeatures(json_BenitoJurez_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BenitoJurez_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BenitoJurez_2.addFeatures(features_BenitoJurez_2);
var lyr_BenitoJurez_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BenitoJurez_2, 
                style: style_BenitoJurez_2,
                popuplayertitle: 'Benito Juárez',
                interactive: true,
                title: '<img src="styles/legend/BenitoJurez_2.png" /> Benito Juárez'
            });
var format_JosMaraMorelos_3 = new ol.format.GeoJSON();
var features_JosMaraMorelos_3 = format_JosMaraMorelos_3.readFeatures(json_JosMaraMorelos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JosMaraMorelos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JosMaraMorelos_3.addFeatures(features_JosMaraMorelos_3);
var lyr_JosMaraMorelos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JosMaraMorelos_3, 
                style: style_JosMaraMorelos_3,
                popuplayertitle: 'José María Morelos',
                interactive: true,
                title: '<img src="styles/legend/JosMaraMorelos_3.png" /> José María Morelos'
            });
var format_LzaroCrdenas_4 = new ol.format.GeoJSON();
var features_LzaroCrdenas_4 = format_LzaroCrdenas_4.readFeatures(json_LzaroCrdenas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LzaroCrdenas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LzaroCrdenas_4.addFeatures(features_LzaroCrdenas_4);
var lyr_LzaroCrdenas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LzaroCrdenas_4, 
                style: style_LzaroCrdenas_4,
                popuplayertitle: 'Lázaro Cárdenas',
                interactive: true,
                title: '<img src="styles/legend/LzaroCrdenas_4.png" /> Lázaro Cárdenas'
            });
var format_OthnPBlanco_5 = new ol.format.GeoJSON();
var features_OthnPBlanco_5 = format_OthnPBlanco_5.readFeatures(json_OthnPBlanco_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OthnPBlanco_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OthnPBlanco_5.addFeatures(features_OthnPBlanco_5);
var lyr_OthnPBlanco_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OthnPBlanco_5, 
                style: style_OthnPBlanco_5,
                popuplayertitle: 'Othón P Blanco',
                interactive: true,
                title: '<img src="styles/legend/OthnPBlanco_5.png" /> Othón P Blanco'
            });
var format_Solidaridad_6 = new ol.format.GeoJSON();
var features_Solidaridad_6 = format_Solidaridad_6.readFeatures(json_Solidaridad_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Solidaridad_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Solidaridad_6.addFeatures(features_Solidaridad_6);
var lyr_Solidaridad_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Solidaridad_6, 
                style: style_Solidaridad_6,
                popuplayertitle: 'Solidaridad',
                interactive: true,
                title: '<img src="styles/legend/Solidaridad_6.png" /> Solidaridad'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_Bacalar_1.setVisible(true);lyr_BenitoJurez_2.setVisible(true);lyr_JosMaraMorelos_3.setVisible(true);lyr_LzaroCrdenas_4.setVisible(true);lyr_OthnPBlanco_5.setVisible(true);lyr_Solidaridad_6.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Bacalar_1,lyr_BenitoJurez_2,lyr_JosMaraMorelos_3,lyr_LzaroCrdenas_4,lyr_OthnPBlanco_5,lyr_Solidaridad_6];
lyr_Bacalar_1.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'MAC': 'MAC', 'Municipio': 'Municipio', 'Localidad': 'Localidad', 'Ubicación': 'Ubicación', 'Estancia': 'Estancia', 'fin': 'fin', 'Horario': 'Horario', 'RM': 'RM', 'Enlace': 'Enlace', 'Imagen': 'Imagen', });
lyr_BenitoJurez_2.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'MAC': 'MAC', 'Municipio': 'Municipio', 'Localidad': 'Localidad', 'Ubicación': 'Ubicación', 'Estancia': 'Estancia', 'fin': 'fin', 'Horario': 'Horario', 'RM': 'RM', 'Enlace': 'Enlace', 'Imagen': 'Imagen', });
lyr_JosMaraMorelos_3.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'MAC': 'MAC', 'Municipio': 'Municipio', 'Localidad': 'Localidad', 'Ubicación': 'Ubicación', 'Estancia': 'Estancia', 'Fin': 'Fin', 'Horario': 'Horario', 'RM': 'RM', 'Enlace': 'Enlace', 'Imagen': 'Imagen', });
lyr_LzaroCrdenas_4.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'MAC': 'MAC', 'Municipio': 'Municipio', 'Localidad': 'Localidad', 'Ubicación': 'Ubicación', 'Estancia': 'Estancia', 'día fin': 'día fin', 'Horario': 'Horario', 'RM': 'RM', 'Enlace': 'Enlace', 'Imagen': 'Imagen', });
lyr_OthnPBlanco_5.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'MAC': 'MAC', 'Municipio': 'Municipio', 'Localidad': 'Localidad', 'Ubicación': 'Ubicación', 'Estancia': 'Estancia', 'fin': 'fin', 'Horario': 'Horario', 'RM': 'RM', 'Enlace': 'Enlace', 'Imagen': 'Imagen', });
lyr_Solidaridad_6.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'MAC': 'MAC', 'Municipio': 'Municipio', 'Localidad': 'Localidad', 'Ubicación': 'Ubicación', 'Estancia': 'Estancia', 'fin': 'fin', 'Horario': 'Horario', 'RM': 'RM', 'Enlace': 'Enlace', 'Imagen': 'Imagen', });
lyr_Bacalar_1.set('fieldImages', {'X': 'Hidden', 'Y': 'Hidden', 'MAC': 'Hidden', 'Municipio': 'Hidden', 'Localidad': 'TextEdit', 'Ubicación': 'TextEdit', 'Estancia': 'TextEdit', 'fin': 'Hidden', 'Horario': 'TextEdit', 'RM': 'TextEdit', 'Enlace': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_BenitoJurez_2.set('fieldImages', {'X': 'Hidden', 'Y': 'Hidden', 'MAC': 'Hidden', 'Municipio': 'Hidden', 'Localidad': 'TextEdit', 'Ubicación': 'TextEdit', 'Estancia': 'TextEdit', 'fin': 'Hidden', 'Horario': 'TextEdit', 'RM': 'TextEdit', 'Enlace': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_JosMaraMorelos_3.set('fieldImages', {'X': 'Hidden', 'Y': 'Hidden', 'MAC': 'Hidden', 'Municipio': 'Hidden', 'Localidad': 'TextEdit', 'Ubicación': 'TextEdit', 'Estancia': 'TextEdit', 'Fin': 'Hidden', 'Horario': 'TextEdit', 'RM': 'TextEdit', 'Enlace': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_LzaroCrdenas_4.set('fieldImages', {'X': 'Hidden', 'Y': 'Hidden', 'MAC': 'Hidden', 'Municipio': 'Hidden', 'Localidad': 'TextEdit', 'Ubicación': 'TextEdit', 'Estancia': 'TextEdit', 'día fin': 'Hidden', 'Horario': 'TextEdit', 'RM': 'TextEdit', 'Enlace': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_OthnPBlanco_5.set('fieldImages', {'X': 'Hidden', 'Y': 'Hidden', 'MAC': 'Hidden', 'Municipio': 'Hidden', 'Localidad': 'TextEdit', 'Ubicación': 'TextEdit', 'Estancia': 'TextEdit', 'fin': 'Hidden', 'Horario': 'TextEdit', 'RM': 'TextEdit', 'Enlace': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_Solidaridad_6.set('fieldImages', {'X': 'Hidden', 'Y': 'Hidden', 'MAC': 'Hidden', 'Municipio': 'Hidden', 'Localidad': 'TextEdit', 'Ubicación': 'TextEdit', 'Estancia': 'TextEdit', 'fin': 'Hidden', 'Horario': 'TextEdit', 'RM': 'TextEdit', 'Enlace': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_Bacalar_1.set('fieldLabels', {'Localidad': 'header label - always visible', 'Ubicación': 'header label - always visible', 'Estancia': 'header label - always visible', 'Horario': 'header label - always visible', 'RM': 'header label - always visible', 'Enlace': 'header label - always visible', 'Imagen': 'no label', });
lyr_BenitoJurez_2.set('fieldLabels', {'Localidad': 'header label - always visible', 'Ubicación': 'header label - always visible', 'Estancia': 'header label - always visible', 'Horario': 'header label - always visible', 'RM': 'header label - always visible', 'Enlace': 'header label - always visible', 'Imagen': 'no label', });
lyr_JosMaraMorelos_3.set('fieldLabels', {'Localidad': 'header label - always visible', 'Ubicación': 'header label - always visible', 'Estancia': 'header label - always visible', 'Horario': 'header label - always visible', 'RM': 'header label - always visible', 'Enlace': 'header label - always visible', 'Imagen': 'no label', });
lyr_LzaroCrdenas_4.set('fieldLabels', {'Localidad': 'header label - always visible', 'Ubicación': 'header label - always visible', 'Estancia': 'header label - always visible', 'Horario': 'header label - always visible', 'RM': 'header label - always visible', 'Enlace': 'header label - always visible', 'Imagen': 'no label', });
lyr_OthnPBlanco_5.set('fieldLabels', {'Localidad': 'header label - always visible', 'Ubicación': 'header label - always visible', 'Estancia': 'header label - always visible', 'Horario': 'header label - always visible', 'RM': 'header label - always visible', 'Enlace': 'header label - always visible', 'Imagen': 'no label', });
lyr_Solidaridad_6.set('fieldLabels', {'Localidad': 'header label - always visible', 'Ubicación': 'header label - always visible', 'Estancia': 'header label - always visible', 'Horario': 'header label - always visible', 'RM': 'header label - always visible', 'Enlace': 'header label - always visible', 'Imagen': 'no label', });
lyr_Solidaridad_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});