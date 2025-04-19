ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([3.243533, 6.576594, 3.416449, 6.671063]);
var wms_layers = [];

var format_IKEJA_0 = new ol.format.GeoJSON();
var features_IKEJA_0 = format_IKEJA_0.readFeatures(json_IKEJA_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IKEJA_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IKEJA_0.addFeatures(features_IKEJA_0);
var lyr_IKEJA_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IKEJA_0, 
                style: style_IKEJA_0,
                popuplayertitle: 'IKEJA',
                interactive: false,
                title: '<img src="styles/legend/IKEJA_0.png" /> IKEJA'
            });
var format_IKEJAOSMLINES_1 = new ol.format.GeoJSON();
var features_IKEJAOSMLINES_1 = format_IKEJAOSMLINES_1.readFeatures(json_IKEJAOSMLINES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IKEJAOSMLINES_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IKEJAOSMLINES_1.addFeatures(features_IKEJAOSMLINES_1);
var lyr_IKEJAOSMLINES_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IKEJAOSMLINES_1, 
                style: style_IKEJAOSMLINES_1,
                popuplayertitle: 'IKEJA OSM LINES',
                interactive: true,
                title: '<img src="styles/legend/IKEJAOSMLINES_1.png" /> IKEJA OSM LINES'
            });
var format_IKEJAOSMMULTILINES_2 = new ol.format.GeoJSON();
var features_IKEJAOSMMULTILINES_2 = format_IKEJAOSMMULTILINES_2.readFeatures(json_IKEJAOSMMULTILINES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IKEJAOSMMULTILINES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IKEJAOSMMULTILINES_2.addFeatures(features_IKEJAOSMMULTILINES_2);
var lyr_IKEJAOSMMULTILINES_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IKEJAOSMMULTILINES_2, 
                style: style_IKEJAOSMMULTILINES_2,
                popuplayertitle: 'IKEJA OSM MULTILINES',
                interactive: true,
                title: '<img src="styles/legend/IKEJAOSMMULTILINES_2.png" /> IKEJA OSM MULTILINES'
            });
var format_IKEJAOSMPOINTS_3 = new ol.format.GeoJSON();
var features_IKEJAOSMPOINTS_3 = format_IKEJAOSMPOINTS_3.readFeatures(json_IKEJAOSMPOINTS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IKEJAOSMPOINTS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IKEJAOSMPOINTS_3.addFeatures(features_IKEJAOSMPOINTS_3);
var lyr_IKEJAOSMPOINTS_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_IKEJAOSMPOINTS_3, 
                style: style_IKEJAOSMPOINTS_3,
                popuplayertitle: 'IKEJA OSM POINTS',
                interactive: true,
                title: '<img src="styles/legend/IKEJAOSMPOINTS_3.png" /> IKEJA OSM POINTS'
            });

lyr_IKEJA_0.setVisible(true);lyr_IKEJAOSMLINES_1.setVisible(true);lyr_IKEJAOSMMULTILINES_2.setVisible(true);lyr_IKEJAOSMPOINTS_3.setVisible(true);
var layersList = [lyr_IKEJA_0,lyr_IKEJAOSMLINES_1,lyr_IKEJAOSMMULTILINES_2,lyr_IKEJAOSMPOINTS_3];
lyr_IKEJA_0.set('fieldAliases', {'ID_0': 'ID_0', 'ISO': 'ISO', 'NAME_0': 'NAME_0', 'ID_1': 'ID_1', 'NAME_1': 'NAME_1', 'ID_2': 'ID_2', 'NAME_2': 'NAME_2', 'TYPE_2': 'TYPE_2', 'ENGTYPE_2': 'ENGTYPE_2', 'NL_NAME_2': 'NL_NAME_2', 'VARNAME_2': 'VARNAME_2', });
lyr_IKEJAOSMLINES_1.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_IKEJAOSMMULTILINES_2.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'type': 'type', 'other_tags': 'other_tags', });
lyr_IKEJAOSMPOINTS_3.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'barrier': 'barrier', 'highway': 'highway', 'ref': 'ref', 'address': 'address', 'is_in': 'is_in', 'place': 'place', 'man_made': 'man_made', 'other_tags': 'other_tags', });
lyr_IKEJA_0.set('fieldImages', {'ID_0': 'TextEdit', 'ISO': 'TextEdit', 'NAME_0': 'TextEdit', 'ID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'ID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'TYPE_2': 'TextEdit', 'ENGTYPE_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'VARNAME_2': 'TextEdit', });
lyr_IKEJAOSMLINES_1.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'railway': 'TextEdit', 'z_order': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_IKEJAOSMMULTILINES_2.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_IKEJAOSMPOINTS_3.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'barrier': 'TextEdit', 'highway': 'TextEdit', 'ref': 'TextEdit', 'address': 'TextEdit', 'is_in': 'TextEdit', 'place': 'TextEdit', 'man_made': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_IKEJA_0.set('fieldLabels', {'ID_0': 'no label', 'ISO': 'no label', 'NAME_0': 'no label', 'ID_1': 'no label', 'NAME_1': 'no label', 'ID_2': 'no label', 'NAME_2': 'no label', 'TYPE_2': 'no label', 'ENGTYPE_2': 'no label', 'NL_NAME_2': 'no label', 'VARNAME_2': 'no label', });
lyr_IKEJAOSMLINES_1.set('fieldLabels', {'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'highway': 'inline label - always visible', 'waterway': 'inline label - always visible', 'aerialway': 'inline label - always visible', 'barrier': 'inline label - always visible', 'man_made': 'inline label - always visible', 'railway': 'inline label - always visible', 'z_order': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_IKEJAOSMMULTILINES_2.set('fieldLabels', {'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'type': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_IKEJAOSMPOINTS_3.set('fieldLabels', {'osm_id': 'inline label - always visible', 'name': 'inline label - always visible', 'barrier': 'inline label - always visible', 'highway': 'inline label - always visible', 'ref': 'inline label - always visible', 'address': 'inline label - always visible', 'is_in': 'inline label - always visible', 'place': 'inline label - always visible', 'man_made': 'inline label - always visible', 'other_tags': 'inline label - always visible', });
lyr_IKEJAOSMPOINTS_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});