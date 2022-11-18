ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3116").setExtent([1075778.444343, 1116893.873534, 1129228.142683, 1156513.929646]);
var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Ecosistemas_Otanche_1 = new ol.format.GeoJSON();
var features_Ecosistemas_Otanche_1 = format_Ecosistemas_Otanche_1.readFeatures(json_Ecosistemas_Otanche_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3116'});
var jsonSource_Ecosistemas_Otanche_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ecosistemas_Otanche_1.addFeatures(features_Ecosistemas_Otanche_1);
var lyr_Ecosistemas_Otanche_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ecosistemas_Otanche_1, 
                style: style_Ecosistemas_Otanche_1,
                interactive: true,
    title: 'Ecosistemas_Otanche<br />\
    <img src="styles/legend/Ecosistemas_Otanche_1_0.png" /> Agroecosistemas campesinos mixtos<br />\
    <img src="styles/legend/Ecosistemas_Otanche_1_1.png" /> Agroecosistemas Lecheros<br />\
    <img src="styles/legend/Ecosistemas_Otanche_1_2.png" /> Areas rurales intervenidas<br />\
    <img src="styles/legend/Ecosistemas_Otanche_1_3.png" /> BMD Andinos y Alto-andinos de Roble<br />\
    <img src="styles/legend/Ecosistemas_Otanche_1_4.png" /> BMD Húmedos Andinos<br />'
        });
var format_Vas_Otanche_2 = new ol.format.GeoJSON();
var features_Vas_Otanche_2 = format_Vas_Otanche_2.readFeatures(json_Vas_Otanche_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3116'});
var jsonSource_Vas_Otanche_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vas_Otanche_2.addFeatures(features_Vas_Otanche_2);
var lyr_Vas_Otanche_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vas_Otanche_2, 
                style: style_Vas_Otanche_2,
                interactive: true,
                title: '<img src="styles/legend/Vas_Otanche_2.png" /> Vías_Otanche'
            });

lyr_ESRIGraylight_0.setVisible(true);lyr_Ecosistemas_Otanche_1.setVisible(true);lyr_Vas_Otanche_2.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_Ecosistemas_Otanche_1,lyr_Vas_Otanche_2];
lyr_Ecosistemas_Otanche_1.set('fieldAliases', {'ID_ESPACIA': 'ID_ESPACIA', 'AREA_OFICI': 'AREA_OFICI', 'ENTIDAD_TE': 'ENTIDAD_TE', 'NOM_DEPART': 'NOM_DEPART', 'NOM_MUNICI': 'NOM_MUNICI', 'COD_DEPTO': 'COD_DEPTO', 'COD_DANE': 'COD_DANE', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'VEGETACION': 'VEGETACION', 'USOS_EXTRA': 'USOS_EXTRA', 'AGROECOSIS': 'AGROECOSIS', 'CODIGO': 'CODIGO', 'TIPO_BIOMA': 'TIPO_BIOMA', 'BIOMA': 'BIOMA', 'ECOSISTEMA': 'ECOSISTEMA', });
lyr_Vas_Otanche_2.set('fieldAliases', {'FID_VIA': 'FID_VIA', 'OBJECTID': 'OBJECTID', 'TIPO_VIA': 'TIPO_VIA', 'ESTADO_SUP': 'ESTADO_SUP', 'NUMERO_CAR': 'NUMERO_CAR', 'ACCESIBILI': 'ACCESIBILI', 'NOMBRE_GEO': 'NOMBRE_GEO', 'PROYECTO': 'PROYECTO', 'SYMBOL': 'SYMBOL', 'FECHA': 'FECHA', 'RULEID': 'RULEID', 'PK_CUE': 'PK_CUE', 'EJE_VIAL': 'EJE_VIAL', 'SHAPE_LENG': 'SHAPE_LENG', 'GLOBALID': 'GLOBALID', 'Shape_Le_1': 'Shape_Le_1', 'FID_OTANCH': 'FID_OTANCH', 'ID_ESPACIA': 'ID_ESPACIA', 'AREA_OFICI': 'AREA_OFICI', 'ENTIDAD_TE': 'ENTIDAD_TE', 'NOM_DEPART': 'NOM_DEPART', 'NOM_MUNICI': 'NOM_MUNICI', 'COD_DEPTO': 'COD_DEPTO', 'COD_DANE': 'COD_DANE', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_Ecosistemas_Otanche_1.set('fieldImages', {'ID_ESPACIA': 'Hidden', 'AREA_OFICI': 'Hidden', 'ENTIDAD_TE': 'Hidden', 'NOM_DEPART': 'TextEdit', 'NOM_MUNICI': 'TextEdit', 'COD_DEPTO': 'Hidden', 'COD_DANE': 'Hidden', 'SHAPE_AREA': 'Hidden', 'SHAPE_LEN': 'Hidden', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'VEGETACION': 'Hidden', 'USOS_EXTRA': 'Hidden', 'AGROECOSIS': 'Hidden', 'CODIGO': 'Hidden', 'TIPO_BIOMA': 'Hidden', 'BIOMA': 'Hidden', 'ECOSISTEMA': 'TextEdit', });
lyr_Vas_Otanche_2.set('fieldImages', {'FID_VIA': 'Hidden', 'OBJECTID': 'Hidden', 'TIPO_VIA': 'Hidden', 'ESTADO_SUP': 'Hidden', 'NUMERO_CAR': 'Hidden', 'ACCESIBILI': 'Hidden', 'NOMBRE_GEO': 'Hidden', 'PROYECTO': 'Hidden', 'SYMBOL': 'Hidden', 'FECHA': 'Hidden', 'RULEID': 'Hidden', 'PK_CUE': 'Hidden', 'EJE_VIAL': 'TextEdit', 'SHAPE_LENG': 'Hidden', 'GLOBALID': 'Hidden', 'Shape_Le_1': 'Hidden', 'FID_OTANCH': 'Hidden', 'ID_ESPACIA': 'Hidden', 'AREA_OFICI': 'Hidden', 'ENTIDAD_TE': 'Hidden', 'NOM_DEPART': 'TextEdit', 'NOM_MUNICI': 'TextEdit', 'COD_DEPTO': 'Hidden', 'COD_DANE': 'Hidden', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_Ecosistemas_Otanche_1.set('fieldLabels', {'NOM_DEPART': 'header label', 'NOM_MUNICI': 'header label', 'AREA': 'header label', 'PERIMETER': 'header label', 'ECOSISTEMA': 'header label', });
lyr_Vas_Otanche_2.set('fieldLabels', {'EJE_VIAL': 'header label', 'NOM_DEPART': 'header label', 'NOM_MUNICI': 'header label', 'SHAPE_AREA': 'header label', 'SHAPE_LEN': 'header label', });
lyr_Vas_Otanche_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});