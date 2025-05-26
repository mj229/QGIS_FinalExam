ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([119.451523, 10.797360, 119.536308, 10.876770]);
var wms_layers = [];

var format_poblacion_0 = new ol.format.GeoJSON();
var features_poblacion_0 = format_poblacion_0.readFeatures(json_poblacion_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_poblacion_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poblacion_0.addFeatures(features_poblacion_0);
var lyr_poblacion_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poblacion_0, 
                style: style_poblacion_0,
                popuplayertitle: 'poblacion',
                interactive: true,
                title: '<img src="styles/legend/poblacion_0.png" /> poblacion'
            });
var format_poblacion_building_1 = new ol.format.GeoJSON();
var features_poblacion_building_1 = format_poblacion_building_1.readFeatures(json_poblacion_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_poblacion_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_poblacion_building_1.addFeatures(features_poblacion_building_1);
var lyr_poblacion_building_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_poblacion_building_1, 
                style: style_poblacion_building_1,
                popuplayertitle: 'poblacion_building',
                interactive: true,
                title: '<img src="styles/legend/poblacion_building_1.png" /> poblacion_building'
            });
var format_Poblacion_water_2 = new ol.format.GeoJSON();
var features_Poblacion_water_2 = format_Poblacion_water_2.readFeatures(json_Poblacion_water_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Poblacion_water_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poblacion_water_2.addFeatures(features_Poblacion_water_2);
var lyr_Poblacion_water_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poblacion_water_2, 
                style: style_Poblacion_water_2,
                popuplayertitle: 'Poblacion_water',
                interactive: true,
                title: '<img src="styles/legend/Poblacion_water_2.png" /> Poblacion_water'
            });
var format_Poblacion_waterways_3 = new ol.format.GeoJSON();
var features_Poblacion_waterways_3 = format_Poblacion_waterways_3.readFeatures(json_Poblacion_waterways_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Poblacion_waterways_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poblacion_waterways_3.addFeatures(features_Poblacion_waterways_3);
var lyr_Poblacion_waterways_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poblacion_waterways_3, 
                style: style_Poblacion_waterways_3,
                popuplayertitle: 'Poblacion_waterways',
                interactive: true,
                title: '<img src="styles/legend/Poblacion_waterways_3.png" /> Poblacion_waterways'
            });
var format_Poblacion_transport_4 = new ol.format.GeoJSON();
var features_Poblacion_transport_4 = format_Poblacion_transport_4.readFeatures(json_Poblacion_transport_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Poblacion_transport_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poblacion_transport_4.addFeatures(features_Poblacion_transport_4);
var lyr_Poblacion_transport_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poblacion_transport_4, 
                style: style_Poblacion_transport_4,
                popuplayertitle: 'Poblacion_transport',
                interactive: true,
                title: '<img src="styles/legend/Poblacion_transport_4.png" /> Poblacion_transport'
            });
var format_Poblacion_Place_5 = new ol.format.GeoJSON();
var features_Poblacion_Place_5 = format_Poblacion_Place_5.readFeatures(json_Poblacion_Place_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Poblacion_Place_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poblacion_Place_5.addFeatures(features_Poblacion_Place_5);
var lyr_Poblacion_Place_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poblacion_Place_5, 
                style: style_Poblacion_Place_5,
                popuplayertitle: 'Poblacion_Place',
                interactive: true,
                title: '<img src="styles/legend/Poblacion_Place_5.png" /> Poblacion_Place'
            });
var format_Poblacion_roads_6 = new ol.format.GeoJSON();
var features_Poblacion_roads_6 = format_Poblacion_roads_6.readFeatures(json_Poblacion_roads_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Poblacion_roads_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Poblacion_roads_6.addFeatures(features_Poblacion_roads_6);
var lyr_Poblacion_roads_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Poblacion_roads_6, 
                style: style_Poblacion_roads_6,
                popuplayertitle: 'Poblacion_roads',
                interactive: true,
                title: '<img src="styles/legend/Poblacion_roads_6.png" /> Poblacion_roads'
            });

lyr_poblacion_0.setVisible(true);lyr_poblacion_building_1.setVisible(true);lyr_Poblacion_water_2.setVisible(true);lyr_Poblacion_waterways_3.setVisible(true);lyr_Poblacion_transport_4.setVisible(true);lyr_Poblacion_Place_5.setVisible(true);lyr_Poblacion_roads_6.setVisible(true);
var layersList = [lyr_poblacion_0,lyr_poblacion_building_1,lyr_Poblacion_water_2,lyr_Poblacion_waterways_3,lyr_Poblacion_transport_4,lyr_Poblacion_Place_5,lyr_Poblacion_roads_6];
lyr_poblacion_0.set('fieldAliases', {'GID_3': 'GID_3', 'GID_0': 'GID_0', 'COUNTRY': 'COUNTRY', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_poblacion_building_1.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'type': 'type', });
lyr_Poblacion_water_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_Poblacion_waterways_3.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'width': 'width', 'name': 'name', });
lyr_Poblacion_transport_4.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_Poblacion_Place_5.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'population': 'population', 'name': 'name', });
lyr_Poblacion_roads_6.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_poblacion_0.set('fieldImages', {'GID_3': 'TextEdit', 'GID_0': 'TextEdit', 'COUNTRY': 'TextEdit', 'GID_1': 'TextEdit', 'NAME_1': 'TextEdit', 'NL_NAME_1': 'TextEdit', 'GID_2': 'TextEdit', 'NAME_2': 'TextEdit', 'NL_NAME_2': 'TextEdit', 'NAME_3': 'TextEdit', 'VARNAME_3': 'TextEdit', 'NL_NAME_3': 'TextEdit', 'TYPE_3': 'TextEdit', 'ENGTYPE_3': 'TextEdit', 'CC_3': 'TextEdit', 'HASC_3': 'TextEdit', });
lyr_poblacion_building_1.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'type': '', });
lyr_Poblacion_water_2.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_Poblacion_waterways_3.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'width': '', 'name': '', });
lyr_Poblacion_transport_4.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', });
lyr_Poblacion_Place_5.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'population': '', 'name': '', });
lyr_Poblacion_roads_6.set('fieldImages', {'osm_id': '', 'code': '', 'fclass': '', 'name': '', 'ref': '', 'oneway': '', 'maxspeed': '', 'layer': '', 'bridge': '', 'tunnel': '', });
lyr_poblacion_0.set('fieldLabels', {'GID_3': 'no label', 'GID_0': 'no label', 'COUNTRY': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_poblacion_building_1.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'inline label - visible with data', 'name': 'inline label - visible with data', 'type': 'no label', });
lyr_Poblacion_water_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'inline label - visible with data', 'name': 'header label - visible with data', });
lyr_Poblacion_waterways_3.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'inline label - visible with data', 'width': 'no label', 'name': 'inline label - visible with data', });
lyr_Poblacion_transport_4.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'inline label - visible with data', 'name': 'inline label - visible with data', });
lyr_Poblacion_Place_5.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'inline label - visible with data', 'population': 'no label', 'name': 'header label - visible with data', });
lyr_Poblacion_roads_6.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'inline label - visible with data', 'name': 'inline label - visible with data', 'ref': 'no label', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_Poblacion_roads_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});