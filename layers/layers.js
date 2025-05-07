ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([110.367787, -7.820286, 110.402603, -7.800834]);
var wms_layers = [];


        var lyr_GoogleTrafficRoadmap_0 = new ol.layer.Tile({
            'title': 'Google Traffic Roadmap',
            'opacity': 0.407000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt0.google.com/vt?lyrs=m@159000000,traffic|seconds_into_week:-1&style=3&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_KECAMATAN_2 = new ol.format.GeoJSON();
var features_KECAMATAN_2 = format_KECAMATAN_2.readFeatures(json_KECAMATAN_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KECAMATAN_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KECAMATAN_2.addFeatures(features_KECAMATAN_2);
var lyr_KECAMATAN_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KECAMATAN_2, 
                style: style_KECAMATAN_2,
                popuplayertitle: 'KECAMATAN',
                interactive: true,
                title: '<img src="styles/legend/KECAMATAN_2.png" /> KECAMATAN'
            });
var format_KELURAHAN_3 = new ol.format.GeoJSON();
var features_KELURAHAN_3 = format_KELURAHAN_3.readFeatures(json_KELURAHAN_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_KELURAHAN_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KELURAHAN_3.addFeatures(features_KELURAHAN_3);
var lyr_KELURAHAN_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KELURAHAN_3, 
                style: style_KELURAHAN_3,
                popuplayertitle: 'KELURAHAN',
                interactive: true,
                title: '<img src="styles/legend/KELURAHAN_3.png" /> KELURAHAN'
            });
var format_RW_4 = new ol.format.GeoJSON();
var features_RW_4 = format_RW_4.readFeatures(json_RW_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_RW_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RW_4.addFeatures(features_RW_4);
var lyr_RW_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RW_4, 
                style: style_RW_4,
                popuplayertitle: 'RW',
                interactive: true,
                title: '<img src="styles/legend/RW_4.png" /> RW'
            });
var format_2025_5 = new ol.format.GeoJSON();
var features_2025_5 = format_2025_5.readFeatures(json_2025_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_2025_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2025_5.addFeatures(features_2025_5);
var lyr_2025_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2025_5, 
                style: style_2025_5,
                popuplayertitle: '2025',
                interactive: true,
                title: '<img src="styles/legend/2025_5.png" /> 2025'
            });

lyr_GoogleTrafficRoadmap_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_KECAMATAN_2.setVisible(true);lyr_KELURAHAN_3.setVisible(true);lyr_RW_4.setVisible(true);lyr_2025_5.setVisible(true);
var layersList = [lyr_GoogleTrafficRoadmap_0,lyr_OpenStreetMap_1,lyr_KECAMATAN_2,lyr_KELURAHAN_3,lyr_RW_4,lyr_2025_5];
lyr_KECAMATAN_2.set('fieldAliases', {'fid': 'fid', 'Provinsi': 'Provinsi', 'Kabkot': 'Kabkot', 'Kecamatan': 'Kecamatan', 'kec': 'kec', 'ID_Kec': 'ID_Kec', 'Kode_Kec': 'Kode_Kec', });
lyr_KELURAHAN_3.set('fieldAliases', {'fid': 'fid', 'Provinsi': 'Provinsi', 'Kabkot': 'Kabkot', 'Kecamatan': 'Kecamatan', 'Desa': 'Desa', 'ID_Kab': 'ID_Kab', 'ID_Kec': 'ID_Kec', 'ID_Desa': 'ID_Desa', 'ID_BPS': 'ID_BPS', 'D_No.': 'D_No.', 'D_Nama Kec': 'D_Nama Kec', 'D_Kode Kec': 'D_Kode Kec', 'D_Nama Kel': 'D_Nama Kel', 'D_1. P.Lah': 'D_1. P.Lah', 'D_2. P.Sar': 'D_2. P.Sar', 'D_3. P.Tdk': 'D_3. P.Tdk', 'D_4. P.Jal': 'D_4. P.Jal', 'D_5. P.NoW': 'D_5. P.NoW', 'D_6. P.Ten': 'D_6. P.Ten', 'D_INDEKS K': 'D_INDEKS K', 'D_PERINGKA': 'D_PERINGKA', 'D_PRIO KOM': 'D_PRIO KOM', 'ID_YK': 'ID_YK', 'ID_YK2': 'ID_YK2', });
lyr_RW_4.set('fieldAliases', {'kecamatan': 'KECAMATAN', 'kelurahan': 'KELURAHAN', 'luas_area': 'luas_area', 'keterangan': 'RW', 'fillcolor': 'fillcolor', });
lyr_2025_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_KECAMATAN_2.set('fieldImages', {'fid': 'TextEdit', 'Provinsi': 'TextEdit', 'Kabkot': 'TextEdit', 'Kecamatan': 'TextEdit', 'kec': 'TextEdit', 'ID_Kec': 'TextEdit', 'Kode_Kec': 'TextEdit', });
lyr_KELURAHAN_3.set('fieldImages', {'fid': 'TextEdit', 'Provinsi': 'TextEdit', 'Kabkot': 'TextEdit', 'Kecamatan': 'TextEdit', 'Desa': 'TextEdit', 'ID_Kab': 'TextEdit', 'ID_Kec': 'TextEdit', 'ID_Desa': 'TextEdit', 'ID_BPS': 'TextEdit', 'D_No.': 'TextEdit', 'D_Nama Kec': 'TextEdit', 'D_Kode Kec': 'TextEdit', 'D_Nama Kel': 'TextEdit', 'D_1. P.Lah': 'TextEdit', 'D_2. P.Sar': 'TextEdit', 'D_3. P.Tdk': 'TextEdit', 'D_4. P.Jal': 'TextEdit', 'D_5. P.NoW': 'TextEdit', 'D_6. P.Ten': 'TextEdit', 'D_INDEKS K': 'TextEdit', 'D_PERINGKA': 'TextEdit', 'D_PRIO KOM': 'TextEdit', 'ID_YK': 'TextEdit', 'ID_YK2': 'TextEdit', });
lyr_RW_4.set('fieldImages', {'kecamatan': 'TextEdit', 'kelurahan': 'TextEdit', 'luas_area': 'TextEdit', 'keterangan': 'TextEdit', 'fillcolor': 'TextEdit', });
lyr_2025_5.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_KECAMATAN_2.set('fieldLabels', {'fid': 'hidden field', 'Provinsi': 'hidden field', 'Kabkot': 'hidden field', 'Kecamatan': 'inline label - visible with data', 'kec': 'hidden field', 'ID_Kec': 'hidden field', 'Kode_Kec': 'hidden field', });
lyr_KELURAHAN_3.set('fieldLabels', {'fid': 'hidden field', 'Provinsi': 'hidden field', 'Kabkot': 'hidden field', 'Kecamatan': 'hidden field', 'Desa': 'inline label - visible with data', 'ID_Kab': 'hidden field', 'ID_Kec': 'hidden field', 'ID_Desa': 'hidden field', 'ID_BPS': 'hidden field', 'D_No.': 'hidden field', 'D_Nama Kec': 'hidden field', 'D_Kode Kec': 'hidden field', 'D_Nama Kel': 'hidden field', 'D_1. P.Lah': 'hidden field', 'D_2. P.Sar': 'hidden field', 'D_3. P.Tdk': 'hidden field', 'D_4. P.Jal': 'hidden field', 'D_5. P.NoW': 'hidden field', 'D_6. P.Ten': 'hidden field', 'D_INDEKS K': 'hidden field', 'D_PERINGKA': 'hidden field', 'D_PRIO KOM': 'hidden field', 'ID_YK': 'hidden field', 'ID_YK2': 'hidden field', });
lyr_RW_4.set('fieldLabels', {'kecamatan': 'inline label - visible with data', 'kelurahan': 'inline label - visible with data', 'luas_area': 'hidden field', 'keterangan': 'inline label - visible with data', 'fillcolor': 'hidden field', });
lyr_2025_5.set('fieldLabels', {'id': 'inline label - visible with data', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_2025_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});