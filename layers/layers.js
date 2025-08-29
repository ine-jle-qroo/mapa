var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
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
var format_FelipeCarrilloPuerto_3 = new ol.format.GeoJSON();
var features_FelipeCarrilloPuerto_3 = format_FelipeCarrilloPuerto_3.readFeatures(json_FelipeCarrilloPuerto_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FelipeCarrilloPuerto_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FelipeCarrilloPuerto_3.addFeatures(features_FelipeCarrilloPuerto_3);
var lyr_FelipeCarrilloPuerto_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FelipeCarrilloPuerto_3, 
                style: style_FelipeCarrilloPuerto_3,
                popuplayertitle: 'Felipe Carrillo Puerto',
                interactive: true,
                title: '<img src="styles/legend/FelipeCarrilloPuerto_3.png" /> Felipe Carrillo Puerto'
            });
var format_IslaMujeres_4 = new ol.format.GeoJSON();
var features_IslaMujeres_4 = format_IslaMujeres_4.readFeatures(json_IslaMujeres_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IslaMujeres_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IslaMujeres_4.addFeatures(features_IslaMujeres_4);
var lyr_IslaMujeres_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IslaMujeres_4, 
                style: style_IslaMujeres_4,
                popuplayertitle: 'Isla Mujeres',
                interactive: true,
                title: '<img src="styles/legend/IslaMujeres_4.png" /> Isla Mujeres'
            });
var format_JosMaraMorelos_5 = new ol.format.GeoJSON();
var features_JosMaraMorelos_5 = format_JosMaraMorelos_5.readFeatures(json_JosMaraMorelos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JosMaraMorelos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JosMaraMorelos_5.addFeatures(features_JosMaraMorelos_5);
var lyr_JosMaraMorelos_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JosMaraMorelos_5, 
                style: style_JosMaraMorelos_5,
                popuplayertitle: 'José María Morelos',
                interactive: true,
                title: '<img src="styles/legend/JosMaraMorelos_5.png" /> José María Morelos'
            });
var format_LzaroCrdenas_6 = new ol.format.GeoJSON();
var features_LzaroCrdenas_6 = format_LzaroCrdenas_6.readFeatures(json_LzaroCrdenas_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LzaroCrdenas_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LzaroCrdenas_6.addFeatures(features_LzaroCrdenas_6);
var lyr_LzaroCrdenas_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LzaroCrdenas_6, 
                style: style_LzaroCrdenas_6,
                popuplayertitle: 'Lázaro Cárdenas',
                interactive: true,
                title: '<img src="styles/legend/LzaroCrdenas_6.png" /> Lázaro Cárdenas'
            });
var format_OthonPBlanco_7 = new ol.format.GeoJSON();
var features_OthonPBlanco_7 = format_OthonPBlanco_7.readFeatures(json_OthonPBlanco_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OthonPBlanco_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OthonPBlanco_7.addFeatures(features_OthonPBlanco_7);
var lyr_OthonPBlanco_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OthonPBlanco_7, 
                style: style_OthonPBlanco_7,
                popuplayertitle: 'Othon P Blanco',
                interactive: true,
                title: '<img src="styles/legend/OthonPBlanco_7.png" /> Othon P Blanco'
            });
var format_Solidaridad_8 = new ol.format.GeoJSON();
var features_Solidaridad_8 = format_Solidaridad_8.readFeatures(json_Solidaridad_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Solidaridad_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Solidaridad_8.addFeatures(features_Solidaridad_8);
var lyr_Solidaridad_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Solidaridad_8, 
                style: style_Solidaridad_8,
                popuplayertitle: 'Solidaridad',
                interactive: true,
                title: '<img src="styles/legend/Solidaridad_8.png" /> Solidaridad'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_Bacalar_1.setVisible(true);lyr_BenitoJurez_2.setVisible(true);lyr_FelipeCarrilloPuerto_3.setVisible(true);lyr_IslaMujeres_4.setVisible(true);lyr_JosMaraMorelos_5.setVisible(true);lyr_LzaroCrdenas_6.setVisible(true);lyr_OthonPBlanco_7.setVisible(true);lyr_Solidaridad_8.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Bacalar_1,lyr_BenitoJurez_2,lyr_FelipeCarrilloPuerto_3,lyr_IslaMujeres_4,lyr_JosMaraMorelos_5,lyr_LzaroCrdenas_6,lyr_OthonPBlanco_7,lyr_Solidaridad_8];
lyr_Bacalar_1.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'MAC': 'MAC', 'Municipio': 'Municipio', 'Localidad': 'Localidad', 'Ubicación': 'Ubicación', 'Estancia': 'Estancia', 'fin': 'fin', 'Horario': 'Horario', 'RM': 'RM', 'Enlace': 'Enlace', 'Imagen': 'Imagen', });
lyr_BenitoJurez_2.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'MAC': 'MAC', 'Municipio': 'Municipio', 'Localidad': 'Localidad', 'Ubicación': 'Ubicación', 'Estancia': 'Estancia', 'fin': 'fin', 'Horario': 'Horario', 'RM': 'RM', 'Enlace': 'Enlace', 'Imagen': 'Imagen', });
lyr_FelipeCarrilloPuerto_3.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'MAC': 'MAC', 'Municipio': 'Municipio', 'Localidad': 'Localidad', 'Ubicación': 'Ubicación', 'Estancia': 'Estancia', 'fin': 'fin', 'Horario': 'Horario', 'RM': 'RM', 'Enlace': 'Enlace', 'Imagen': 'Imagen', });
lyr_IslaMujeres_4.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'MAC': 'MAC', 'Municipio': 'Municipio', 'Localidad': 'Localidad', 'Ubicación': 'Ubicación', 'Estancia': 'Estancia', 'fin': 'fin', 'Horario': 'Horario', 'RM': 'RM', 'Enlace': 'Enlace', 'Imagen': 'Imagen', });
lyr_JosMaraMorelos_5.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'MAC': 'MAC', 'Municipio': 'Municipio', 'Localidad': 'Localidad', 'Ubicación': 'Ubicación', 'Estancia': 'Estancia', 'Fin': 'Fin', 'Horario': 'Horario', 'RM': 'RM', 'Enlace': 'Enlace', 'Imagen': 'Imagen', });
lyr_LzaroCrdenas_6.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'MAC': 'MAC', 'Municipio': 'Municipio', 'Localidad': 'Localidad', 'Ubicación': 'Ubicación', 'Estancia': 'Estancia', 'día fin': 'día fin', 'Horario': 'Horario', 'RM': 'RM', 'Enlace': 'Enlace', 'Imagen': 'Imagen', });
lyr_OthonPBlanco_7.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'MAC': 'MAC', 'Municipio': 'Municipio', 'Localidad': 'Localidad', 'Ubicación': 'Ubicación', 'Estancia': 'Estancia', 'fin': 'fin', 'Horario': 'Horario', 'RM': 'RM', 'Enlace': 'Enlace', 'Imagen': 'Imagen', });
lyr_Solidaridad_8.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'MAC': 'MAC', 'Municipio': 'Municipio', 'Localidad': 'Localidad', 'Ubicación': 'Ubicación', 'Estancia': 'Estancia', 'fin': 'fin', 'Horario': 'Horario', 'RM': 'RM', 'Enlace': 'Enlace', 'Imagen': 'Imagen', });
lyr_Bacalar_1.set('fieldImages', {'X': 'Hidden', 'Y': 'Hidden', 'MAC': 'Hidden', 'Municipio': 'Hidden', 'Localidad': 'TextEdit', 'Ubicación': 'TextEdit', 'Estancia': 'TextEdit', 'fin': 'Hidden', 'Horario': 'TextEdit', 'RM': 'TextEdit', 'Enlace': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_BenitoJurez_2.set('fieldImages', {'X': 'Hidden', 'Y': 'Hidden', 'MAC': 'Hidden', 'Municipio': 'Hidden', 'Localidad': 'TextEdit', 'Ubicación': 'TextEdit', 'Estancia': 'TextEdit', 'fin': 'Hidden', 'Horario': 'TextEdit', 'RM': 'TextEdit', 'Enlace': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_FelipeCarrilloPuerto_3.set('fieldImages', {'X': 'Hidden', 'Y': 'Hidden', 'MAC': 'Hidden', 'Municipio': 'Hidden', 'Localidad': 'TextEdit', 'Ubicación': 'TextEdit', 'Estancia': 'TextEdit', 'fin': 'Hidden', 'Horario': 'TextEdit', 'RM': 'TextEdit', 'Enlace': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_IslaMujeres_4.set('fieldImages', {'X': 'Hidden', 'Y': 'Hidden', 'MAC': 'Hidden', 'Municipio': 'Hidden', 'Localidad': 'TextEdit', 'Ubicación': 'TextEdit', 'Estancia': 'TextEdit', 'fin': 'Hidden', 'Horario': 'TextEdit', 'RM': 'TextEdit', 'Enlace': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_JosMaraMorelos_5.set('fieldImages', {'X': 'Hidden', 'Y': 'Hidden', 'MAC': 'Hidden', 'Municipio': 'Hidden', 'Localidad': 'TextEdit', 'Ubicación': 'TextEdit', 'Estancia': 'TextEdit', 'Fin': 'Hidden', 'Horario': 'TextEdit', 'RM': 'TextEdit', 'Enlace': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_LzaroCrdenas_6.set('fieldImages', {'X': 'Hidden', 'Y': 'Hidden', 'MAC': 'Hidden', 'Municipio': 'Hidden', 'Localidad': 'TextEdit', 'Ubicación': 'TextEdit', 'Estancia': 'TextEdit', 'día fin': 'Hidden', 'Horario': 'TextEdit', 'RM': 'TextEdit', 'Enlace': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_OthonPBlanco_7.set('fieldImages', {'X': 'Hidden', 'Y': 'Hidden', 'MAC': 'Hidden', 'Municipio': 'Hidden', 'Localidad': 'TextEdit', 'Ubicación': 'TextEdit', 'Estancia': 'TextEdit', 'fin': 'Hidden', 'Horario': 'TextEdit', 'RM': 'TextEdit', 'Enlace': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_Solidaridad_8.set('fieldImages', {'X': 'Hidden', 'Y': 'Hidden', 'MAC': 'Hidden', 'Municipio': 'Hidden', 'Localidad': 'TextEdit', 'Ubicación': 'TextEdit', 'Estancia': 'TextEdit', 'fin': 'Hidden', 'Horario': 'TextEdit', 'RM': 'TextEdit', 'Enlace': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_Bacalar_1.set('fieldLabels', {'Localidad': 'header label - always visible', 'Ubicación': 'header label - always visible', 'Estancia': 'header label - always visible', 'Horario': 'header label - always visible', 'RM': 'header label - always visible', 'Enlace': 'header label - always visible', 'Imagen': 'no label', });
lyr_BenitoJurez_2.set('fieldLabels', {'Localidad': 'header label - always visible', 'Ubicación': 'header label - always visible', 'Estancia': 'header label - always visible', 'Horario': 'header label - always visible', 'RM': 'header label - always visible', 'Enlace': 'header label - always visible', 'Imagen': 'no label', });
lyr_FelipeCarrilloPuerto_3.set('fieldLabels', {'Localidad': 'header label - always visible', 'Ubicación': 'header label - always visible', 'Estancia': 'header label - always visible', 'Horario': 'header label - always visible', 'RM': 'header label - always visible', 'Enlace': 'header label - always visible', 'Imagen': 'no label', });
lyr_IslaMujeres_4.set('fieldLabels', {'Localidad': 'header label - always visible', 'Ubicación': 'header label - always visible', 'Estancia': 'header label - always visible', 'Horario': 'header label - always visible', 'RM': 'header label - always visible', 'Enlace': 'header label - always visible', 'Imagen': 'no label', });
lyr_JosMaraMorelos_5.set('fieldLabels', {'Localidad': 'header label - always visible', 'Ubicación': 'header label - always visible', 'Estancia': 'header label - always visible', 'Horario': 'header label - always visible', 'RM': 'header label - always visible', 'Enlace': 'header label - always visible', 'Imagen': 'no label', });
lyr_LzaroCrdenas_6.set('fieldLabels', {'Localidad': 'header label - always visible', 'Ubicación': 'header label - always visible', 'Estancia': 'header label - always visible', 'Horario': 'header label - always visible', 'RM': 'header label - always visible', 'Enlace': 'header label - always visible', 'Imagen': 'no label', });
lyr_OthonPBlanco_7.set('fieldLabels', {'Localidad': 'no label', 'Ubicación': 'header label - always visible', 'Estancia': 'header label - always visible', 'Horario': 'header label - always visible', 'RM': 'header label - always visible', 'Enlace': 'header label - always visible', 'Imagen': 'no label', });
lyr_Solidaridad_8.set('fieldLabels', {'Localidad': 'header label - always visible', 'Ubicación': 'header label - always visible', 'Estancia': 'header label - always visible', 'Horario': 'header label - always visible', 'RM': 'header label - always visible', 'Enlace': 'header label - always visible', 'Imagen': 'no label', });
lyr_Solidaridad_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});