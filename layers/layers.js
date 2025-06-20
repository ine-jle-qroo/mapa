var wms_layers = [];


        var lyr_Mapa_0 = new ol.layer.Tile({
            'title': 'Mapa',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_LazaroCardenas_1 = new ol.format.GeoJSON();
var features_LazaroCardenas_1 = format_LazaroCardenas_1.readFeatures(json_LazaroCardenas_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LazaroCardenas_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LazaroCardenas_1.addFeatures(features_LazaroCardenas_1);
var lyr_LazaroCardenas_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LazaroCardenas_1, 
                style: style_LazaroCardenas_1,
                popuplayertitle: 'Lazaro Cardenas',
                interactive: true,
                title: '<img src="styles/legend/LazaroCardenas_1.png" /> Lazaro Cardenas'
            });
var format_JosMaraMorelos_2 = new ol.format.GeoJSON();
var features_JosMaraMorelos_2 = format_JosMaraMorelos_2.readFeatures(json_JosMaraMorelos_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JosMaraMorelos_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JosMaraMorelos_2.addFeatures(features_JosMaraMorelos_2);
var lyr_JosMaraMorelos_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JosMaraMorelos_2, 
                style: style_JosMaraMorelos_2,
                popuplayertitle: 'José María Morelos',
                interactive: true,
                title: '<img src="styles/legend/JosMaraMorelos_2.png" /> José María Morelos'
            });
var format_OthonPBlanco_3 = new ol.format.GeoJSON();
var features_OthonPBlanco_3 = format_OthonPBlanco_3.readFeatures(json_OthonPBlanco_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OthonPBlanco_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OthonPBlanco_3.addFeatures(features_OthonPBlanco_3);
var lyr_OthonPBlanco_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OthonPBlanco_3, 
                style: style_OthonPBlanco_3,
                popuplayertitle: 'Othon P. Blanco',
                interactive: true,
                title: '<img src="styles/legend/OthonPBlanco_3.png" /> Othon P. Blanco'
            });
var format_FelipeCarrilloPuerto_4 = new ol.format.GeoJSON();
var features_FelipeCarrilloPuerto_4 = format_FelipeCarrilloPuerto_4.readFeatures(json_FelipeCarrilloPuerto_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FelipeCarrilloPuerto_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FelipeCarrilloPuerto_4.addFeatures(features_FelipeCarrilloPuerto_4);
var lyr_FelipeCarrilloPuerto_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FelipeCarrilloPuerto_4, 
                style: style_FelipeCarrilloPuerto_4,
                popuplayertitle: 'Felipe Carrillo Puerto',
                interactive: true,
                title: '<img src="styles/legend/FelipeCarrilloPuerto_4.png" /> Felipe Carrillo Puerto'
            });
var format_Bacalar_5 = new ol.format.GeoJSON();
var features_Bacalar_5 = format_Bacalar_5.readFeatures(json_Bacalar_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bacalar_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bacalar_5.addFeatures(features_Bacalar_5);
var lyr_Bacalar_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bacalar_5, 
                style: style_Bacalar_5,
                popuplayertitle: 'Bacalar',
                interactive: true,
                title: '<img src="styles/legend/Bacalar_5.png" /> Bacalar'
            });
var format_BenitoJurez_6 = new ol.format.GeoJSON();
var features_BenitoJurez_6 = format_BenitoJurez_6.readFeatures(json_BenitoJurez_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BenitoJurez_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BenitoJurez_6.addFeatures(features_BenitoJurez_6);
var lyr_BenitoJurez_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BenitoJurez_6, 
                style: style_BenitoJurez_6,
                popuplayertitle: 'Benito Juárez',
                interactive: true,
                title: '<img src="styles/legend/BenitoJurez_6.png" /> Benito Juárez'
            });
var format_IslaMujeres_7 = new ol.format.GeoJSON();
var features_IslaMujeres_7 = format_IslaMujeres_7.readFeatures(json_IslaMujeres_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IslaMujeres_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IslaMujeres_7.addFeatures(features_IslaMujeres_7);
var lyr_IslaMujeres_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IslaMujeres_7, 
                style: style_IslaMujeres_7,
                popuplayertitle: 'Isla Mujeres',
                interactive: true,
                title: '<img src="styles/legend/IslaMujeres_7.png" /> Isla Mujeres'
            });
var format_PuertoMorelos_8 = new ol.format.GeoJSON();
var features_PuertoMorelos_8 = format_PuertoMorelos_8.readFeatures(json_PuertoMorelos_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PuertoMorelos_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PuertoMorelos_8.addFeatures(features_PuertoMorelos_8);
var lyr_PuertoMorelos_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PuertoMorelos_8, 
                style: style_PuertoMorelos_8,
                popuplayertitle: 'Puerto Morelos',
                interactive: true,
                title: '<img src="styles/legend/PuertoMorelos_8.png" /> Puerto Morelos'
            });

lyr_Mapa_0.setVisible(true);lyr_LazaroCardenas_1.setVisible(true);lyr_JosMaraMorelos_2.setVisible(true);lyr_OthonPBlanco_3.setVisible(true);lyr_FelipeCarrilloPuerto_4.setVisible(true);lyr_Bacalar_5.setVisible(true);lyr_BenitoJurez_6.setVisible(true);lyr_IslaMujeres_7.setVisible(true);lyr_PuertoMorelos_8.setVisible(true);
var layersList = [lyr_Mapa_0,lyr_LazaroCardenas_1,lyr_JosMaraMorelos_2,lyr_OthonPBlanco_3,lyr_FelipeCarrilloPuerto_4,lyr_Bacalar_5,lyr_BenitoJurez_6,lyr_IslaMujeres_7,lyr_PuertoMorelos_8];
lyr_LazaroCardenas_1.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'Localidad': 'Localidad', 'Ubicación': 'Ubicación', 'Estancia': 'Estancia', 'RM': 'RM', 'Enlace': 'Enlace', 'Imagen': 'Imagen', });
lyr_JosMaraMorelos_2.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'Localidad': 'Localidad', 'Ubicación': 'Ubicación', 'Estancia': 'Estancia', 'RM': 'RM', 'Enlace': 'Enlace', 'Imagen': 'Imagen', });
lyr_OthonPBlanco_3.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'Localidad': 'Localidad', 'Ubicación': 'Ubicación', 'Estancia': 'Estancia', 'RM': 'RM', 'Enlace': 'Enlace', 'Imagen': 'Imagen', });
lyr_FelipeCarrilloPuerto_4.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'Localidad': 'Localidad', 'Ubicación': 'Ubicación', 'Estancia': 'Estancia', 'RM': 'RM', 'Enlace': 'Enlace', 'Imagen': 'Imagen', });
lyr_Bacalar_5.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'Localidad': 'Localidad', 'Ubicación': 'Ubicación', 'Estancia': 'Estancia', 'RM': 'RM', 'Enlace': 'Enlace', 'Imagen': 'Imagen', });
lyr_BenitoJurez_6.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'Localidad': 'Localidad', 'Ubicación': 'Ubicación', 'Estancia': 'Estancia', 'RM': 'RM', 'Enlace': 'Enlace', 'Imagen': 'Imagen', });
lyr_IslaMujeres_7.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'Localidad': 'Localidad', 'Ubicación': 'Ubicación', 'Estancia': 'Estancia', 'RM': 'RM', 'Enlace': 'Enlace', 'Imagen': 'Imagen', });
lyr_PuertoMorelos_8.set('fieldAliases', {'latitude': 'latitude', 'longitude': 'longitude', 'Localidad': 'Localidad', 'Ubicación': 'Ubicación', 'Estancia': 'Estancia', 'RM': 'RM', 'Enlace': 'Enlace', 'Imagen': 'Imagen', });
lyr_LazaroCardenas_1.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Localidad': 'TextEdit', 'Ubicación': 'TextEdit', 'Estancia': 'TextEdit', 'RM': 'TextEdit', 'Enlace': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_JosMaraMorelos_2.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Localidad': 'TextEdit', 'Ubicación': 'TextEdit', 'Estancia': 'TextEdit', 'RM': 'TextEdit', 'Enlace': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_OthonPBlanco_3.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Localidad': 'TextEdit', 'Ubicación': 'TextEdit', 'Estancia': 'TextEdit', 'RM': 'TextEdit', 'Enlace': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_FelipeCarrilloPuerto_4.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Localidad': 'TextEdit', 'Ubicación': 'TextEdit', 'Estancia': 'TextEdit', 'RM': 'TextEdit', 'Enlace': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_Bacalar_5.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Localidad': 'TextEdit', 'Ubicación': 'TextEdit', 'Estancia': 'TextEdit', 'RM': 'TextEdit', 'Enlace': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_BenitoJurez_6.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Localidad': 'TextEdit', 'Ubicación': 'TextEdit', 'Estancia': 'TextEdit', 'RM': 'TextEdit', 'Enlace': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_IslaMujeres_7.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Localidad': 'TextEdit', 'Ubicación': 'TextEdit', 'Estancia': 'TextEdit', 'RM': 'TextEdit', 'Enlace': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_PuertoMorelos_8.set('fieldImages', {'latitude': 'TextEdit', 'longitude': 'TextEdit', 'Localidad': 'TextEdit', 'Ubicación': 'TextEdit', 'Estancia': 'TextEdit', 'RM': 'TextEdit', 'Enlace': 'TextEdit', 'Imagen': 'ExternalResource', });
lyr_LazaroCardenas_1.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'Localidad': 'header label - always visible', 'Ubicación': 'header label - always visible', 'Estancia': 'header label - always visible', 'RM': 'header label - always visible', 'Enlace': 'header label - always visible', 'Imagen': 'no label', });
lyr_JosMaraMorelos_2.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'Localidad': 'header label - always visible', 'Ubicación': 'header label - always visible', 'Estancia': 'header label - always visible', 'RM': 'header label - always visible', 'Enlace': 'header label - always visible', 'Imagen': 'no label', });
lyr_OthonPBlanco_3.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'Localidad': 'header label - always visible', 'Ubicación': 'header label - always visible', 'Estancia': 'header label - always visible', 'RM': 'header label - always visible', 'Enlace': 'header label - always visible', 'Imagen': 'no label', });
lyr_FelipeCarrilloPuerto_4.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'Localidad': 'header label - always visible', 'Ubicación': 'header label - always visible', 'Estancia': 'header label - always visible', 'RM': 'header label - always visible', 'Enlace': 'header label - always visible', 'Imagen': 'no label', });
lyr_Bacalar_5.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'Localidad': 'header label - always visible', 'Ubicación': 'header label - always visible', 'Estancia': 'header label - always visible', 'RM': 'header label - always visible', 'Enlace': 'header label - always visible', 'Imagen': 'no label', });
lyr_BenitoJurez_6.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'Localidad': 'header label - always visible', 'Ubicación': 'header label - always visible', 'Estancia': 'header label - always visible', 'RM': 'header label - always visible', 'Enlace': 'header label - always visible', 'Imagen': 'no label', });
lyr_IslaMujeres_7.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'Localidad': 'header label - always visible', 'Ubicación': 'header label - always visible', 'Estancia': 'header label - always visible', 'RM': 'header label - always visible', 'Enlace': 'header label - always visible', 'Imagen': 'no label', });
lyr_PuertoMorelos_8.set('fieldLabels', {'latitude': 'hidden field', 'longitude': 'hidden field', 'Localidad': 'header label - always visible', 'Ubicación': 'header label - always visible', 'Estancia': 'header label - always visible', 'RM': 'header label - always visible', 'Enlace': 'header label - always visible', 'Imagen': 'no label', });
lyr_PuertoMorelos_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});