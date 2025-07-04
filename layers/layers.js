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
var format_BenitoJuarez_2 = new ol.format.GeoJSON();
var features_BenitoJuarez_2 = format_BenitoJuarez_2.readFeatures(json_BenitoJuarez_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BenitoJuarez_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BenitoJuarez_2.addFeatures(features_BenitoJuarez_2);
var lyr_BenitoJuarez_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BenitoJuarez_2, 
                style: style_BenitoJuarez_2,
                popuplayertitle: 'Benito Juarez',
                interactive: true,
                title: '<img src="styles/legend/BenitoJuarez_2.png" /> Benito Juarez'
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
var format_OthonPBlanco_5 = new ol.format.GeoJSON();
var features_OthonPBlanco_5 = format_OthonPBlanco_5.readFeatures(json_OthonPBlanco_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OthonPBlanco_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OthonPBlanco_5.addFeatures(features_OthonPBlanco_5);
var lyr_OthonPBlanco_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OthonPBlanco_5, 
                style: style_OthonPBlanco_5,
                popuplayertitle: 'Othon P Blanco',
                interactive: true,
                title: '<img src="styles/legend/OthonPBlanco_5.png" /> Othon P Blanco'
            });
var format_PuertoMorelos_6 = new ol.format.GeoJSON();
var features_PuertoMorelos_6 = format_PuertoMorelos_6.readFeatures(json_PuertoMorelos_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuertoMorelos_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuertoMorelos_6.addFeatures(features_PuertoMorelos_6);
var lyr_PuertoMorelos_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuertoMorelos_6, 
                style: style_PuertoMorelos_6,
                popuplayertitle: 'Puerto Morelos',
                interactive: true,
                title: '<img src="styles/legend/PuertoMorelos_6.png" /> Puerto Morelos'
            });
var format_LazaroCardenas_7 = new ol.format.GeoJSON();
var features_LazaroCardenas_7 = format_LazaroCardenas_7.readFeatures(json_LazaroCardenas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LazaroCardenas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LazaroCardenas_7.addFeatures(features_LazaroCardenas_7);
var lyr_LazaroCardenas_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LazaroCardenas_7, 
                style: style_LazaroCardenas_7,
                popuplayertitle: 'Lazaro Cardenas',
                interactive: true,
                title: '<img src="styles/legend/LazaroCardenas_7.png" /> Lazaro Cardenas'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_Bacalar_1.setVisible(true);lyr_BenitoJuarez_2.setVisible(true);lyr_FelipeCarrilloPuerto_3.setVisible(true);lyr_IslaMujeres_4.setVisible(true);lyr_OthonPBlanco_5.setVisible(true);lyr_PuertoMorelos_6.setVisible(true);lyr_LazaroCardenas_7.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_Bacalar_1,lyr_BenitoJuarez_2,lyr_FelipeCarrilloPuerto_3,lyr_IslaMujeres_4,lyr_OthonPBlanco_5,lyr_PuertoMorelos_6,lyr_LazaroCardenas_7];
lyr_Bacalar_1.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'MAC': 'MAC', 'Municipio': 'Municipio', 'Localidad': 'Localidad', 'Ubicación': 'Ubicación', 'Estancia': 'Estancia', 'Horario': 'Horario', 'RM': 'RM', 'Enlace': 'Enlace', 'Imagen': 'Imagen', });
lyr_BenitoJuarez_2.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'MAC': 'MAC', 'Municipio': 'Municipio', 'Localidad': 'Localidad', 'Ubicación': 'Ubicación', 'Estancia': 'Estancia', 'Horario': 'Horario', 'RM': 'RM', 'Enlace': 'Enlace', 'Imagen': 'Imagen', });
lyr_FelipeCarrilloPuerto_3.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'MAC': 'MAC', 'Municipio': 'Municipio', 'Localidad': 'Localidad', 'Ubicación': 'Ubicación', 'Estancia': 'Estancia', 'Horario': 'Horario', 'RM': 'RM', 'Enlace': 'Enlace', 'Imagen': 'Imagen', });
lyr_IslaMujeres_4.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'MAC': 'MAC', 'Municipio': 'Municipio', 'Localidad': 'Localidad', 'Ubicación': 'Ubicación', 'Estancia': 'Estancia', 'Horario': 'Horario', 'RM': 'RM', 'Enlace': 'Enlace', 'Imagen': 'Imagen', });
lyr_OthonPBlanco_5.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'MAC': 'MAC', 'Municipio': 'Municipio', 'Localidad': 'Localidad', 'Ubicación': 'Ubicación', 'Estancia': 'Estancia', 'Horario': 'Horario', 'RM': 'RM', 'Enlace': 'Enlace', 'Imagen': 'Imagen', });
lyr_PuertoMorelos_6.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'MAC': 'MAC', 'Municipio': 'Municipio', 'Localidad': 'Localidad', 'Ubicación': 'Ubicación', 'Estancia': 'Estancia', 'Horario': 'Horario', 'RM': 'RM', 'Enlace': 'Enlace', 'Imagen': 'Imagen', });
lyr_LazaroCardenas_7.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'MAC': 'MAC', 'Municipio': 'Municipio', 'Localidad': 'Localidad', 'Ubicación': 'Ubicación', 'Estancia': 'Estancia', 'Horario': 'Horario', 'RM': 'RM', 'Enlace': 'Enlace', 'Imagen': 'Imagen', });
lyr_Bacalar_1.set('fieldImages', {'X': 'Hidden', 'Y': 'Hidden', 'MAC': 'Hidden', 'Municipio': 'Hidden', 'Localidad': 'TextEdit', 'Ubicación': 'TextEdit', 'Estancia': 'TextEdit', 'Horario': 'TextEdit', 'RM': 'TextEdit', 'Enlace': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_BenitoJuarez_2.set('fieldImages', {'X': 'Hidden', 'Y': 'Hidden', 'MAC': 'Hidden', 'Municipio': 'Hidden', 'Localidad': 'TextEdit', 'Ubicación': 'TextEdit', 'Estancia': 'TextEdit', 'Horario': 'TextEdit', 'RM': 'TextEdit', 'Enlace': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_FelipeCarrilloPuerto_3.set('fieldImages', {'X': 'Hidden', 'Y': 'Hidden', 'MAC': 'Hidden', 'Municipio': 'Hidden', 'Localidad': 'TextEdit', 'Ubicación': 'TextEdit', 'Estancia': 'TextEdit', 'Horario': 'TextEdit', 'RM': 'TextEdit', 'Enlace': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_IslaMujeres_4.set('fieldImages', {'X': 'Hidden', 'Y': 'Hidden', 'MAC': 'Hidden', 'Municipio': 'Hidden', 'Localidad': 'TextEdit', 'Ubicación': 'TextEdit', 'Estancia': 'TextEdit', 'Horario': 'TextEdit', 'RM': 'TextEdit', 'Enlace': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_OthonPBlanco_5.set('fieldImages', {'X': 'Hidden', 'Y': 'Hidden', 'MAC': 'Hidden', 'Municipio': 'Hidden', 'Localidad': 'TextEdit', 'Ubicación': 'TextEdit', 'Estancia': 'TextEdit', 'Horario': 'TextEdit', 'RM': 'TextEdit', 'Enlace': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_PuertoMorelos_6.set('fieldImages', {'X': 'Hidden', 'Y': 'Hidden', 'MAC': 'Hidden', 'Municipio': 'Hidden', 'Localidad': 'TextEdit', 'Ubicación': 'TextEdit', 'Estancia': 'TextEdit', 'Horario': 'TextEdit', 'RM': 'TextEdit', 'Enlace': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_LazaroCardenas_7.set('fieldImages', {'X': 'Hidden', 'Y': 'Hidden', 'MAC': 'Hidden', 'Municipio': 'Hidden', 'Localidad': 'TextEdit', 'Ubicación': 'TextEdit', 'Estancia': 'TextEdit', 'Horario': 'TextEdit', 'RM': 'TextEdit', 'Enlace': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_Bacalar_1.set('fieldLabels', {'Localidad': 'header label - always visible', 'Ubicación': 'header label - always visible', 'Estancia': 'header label - always visible', 'Horario': 'header label - always visible', 'RM': 'header label - always visible', 'Enlace': 'header label - always visible', 'Imagen': 'no label', });
lyr_BenitoJuarez_2.set('fieldLabels', {'Localidad': 'header label - always visible', 'Ubicación': 'header label - always visible', 'Estancia': 'header label - always visible', 'Horario': 'header label - always visible', 'RM': 'header label - always visible', 'Enlace': 'header label - always visible', 'Imagen': 'no label', });
lyr_FelipeCarrilloPuerto_3.set('fieldLabels', {'Localidad': 'header label - always visible', 'Ubicación': 'header label - always visible', 'Estancia': 'header label - always visible', 'Horario': 'header label - always visible', 'RM': 'header label - always visible', 'Enlace': 'header label - always visible', 'Imagen': 'no label', });
lyr_IslaMujeres_4.set('fieldLabels', {'Localidad': 'header label - always visible', 'Ubicación': 'header label - always visible', 'Estancia': 'header label - always visible', 'Horario': 'header label - always visible', 'RM': 'header label - always visible', 'Enlace': 'header label - always visible', 'Imagen': 'no label', });
lyr_OthonPBlanco_5.set('fieldLabels', {'Localidad': 'header label - always visible', 'Ubicación': 'header label - always visible', 'Estancia': 'header label - always visible', 'Horario': 'header label - always visible', 'RM': 'header label - always visible', 'Enlace': 'header label - always visible', 'Imagen': 'no label', });
lyr_PuertoMorelos_6.set('fieldLabels', {'Localidad': 'header label - always visible', 'Ubicación': 'header label - always visible', 'Estancia': 'header label - always visible', 'Horario': 'header label - always visible', 'RM': 'header label - always visible', 'Enlace': 'header label - always visible', 'Imagen': 'no label', });
lyr_LazaroCardenas_7.set('fieldLabels', {'Localidad': 'header label - always visible', 'Ubicación': 'header label - always visible', 'Estancia': 'header label - always visible', 'Horario': 'header label - always visible', 'RM': 'header label - always visible', 'Enlace': 'header label - always visible', 'Imagen': 'no label', });
lyr_LazaroCardenas_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});