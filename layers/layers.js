ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:5514").setExtent([-645778.233508, -1427964.854463, -121151.905054, -1014776.394398]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_mapa20152025_2 = new ol.format.GeoJSON();
var features_mapa20152025_2 = format_mapa20152025_2.readFeatures(json_mapa20152025_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5514'});
var jsonSource_mapa20152025_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mapa20152025_2.addFeatures(features_mapa20152025_2);
cluster_mapa20152025_2 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_mapa20152025_2
});
var lyr_mapa20152025_2 = new ol.layer.Vector({
                declutter: false,
                source:cluster_mapa20152025_2, 
                style: style_mapa20152025_2,
                popuplayertitle: 'mapa2015-2025',
                interactive: true,
                title: '<img src="styles/legend/mapa20152025_2.png" /> mapa2015-2025'
            });
var format_hranicaSR_2_3 = new ol.format.GeoJSON();
var features_hranicaSR_2_3 = format_hranicaSR_2_3.readFeatures(json_hranicaSR_2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5514'});
var jsonSource_hranicaSR_2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hranicaSR_2_3.addFeatures(features_hranicaSR_2_3);
var lyr_hranicaSR_2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_hranicaSR_2_3, 
                style: style_hranicaSR_2_3,
                popuplayertitle: 'hranicaSR_2',
                interactive: false,
                title: '<img src="styles/legend/hranicaSR_2_3.png" /> hranicaSR_2'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_mapa20152025_2.setVisible(true);lyr_hranicaSR_2_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_mapa20152025_2,lyr_hranicaSR_2_3];
lyr_mapa20152025_2.set('fieldAliases', {'fid': 'fid', 'Lokalita': 'Lokalita', 'Slovenský názov': 'Slovenský názov', 'Latinský názov': 'Latinský názov', 'Lat': 'Lat', 'Lon': 'Lon', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Početnosť': 'Početnosť', 'Min.Hgmg/kgSH': 'Min.Hgmg/kgSH', 'Max, Hg (mg/kg SH)2': 'Max, Hg (mg/kg SH)2', 'Min, THQ': 'Min, THQ', 'Max, THQ2': 'Max, THQ2', 'Min, MSCQ (g/osoba/deň)': 'Min, MSCQ (g/osoba/deň)', 'Max, MSCQ (g/osoba/deň)2': 'Max, MSCQ (g/osoba/deň)2', 'Hg min-max (mg/kg SH)': 'Hg min-max (mg/kg SH)', 'THQ min-max': 'THQ min-max', 'MSCQ min-max (g/osoba/deň ČH)': 'MSCQ min-max (g/osoba/deň ČH)', 'Link': 'Link', 'Foto': 'Foto', 'Autor fotografie': 'Autor fotografie', });
lyr_hranicaSR_2_3.set('fieldAliases', {'DOW': 'DOW', 'AUT': 'AUT', 'ACH': 'ACH', 'SOI': 'SOI', 'FACC': 'FACC', 'IDN1': 'IDN1', 'NM1': 'NM1', 'VYMERA': 'VYMERA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_mapa20152025_2.set('fieldImages', {'fid': 'TextEdit', 'Lokalita': 'TextEdit', 'Slovenský názov': 'TextEdit', 'Latinský názov': 'TextEdit', 'Lat': 'TextEdit', 'Lon': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Početnosť': 'Range', 'Min.Hgmg/kgSH': 'TextEdit', 'Max, Hg (mg/kg SH)2': 'TextEdit', 'Min, THQ': 'TextEdit', 'Max, THQ2': 'TextEdit', 'Min, MSCQ (g/osoba/deň)': 'TextEdit', 'Max, MSCQ (g/osoba/deň)2': 'TextEdit', 'Hg min-max (mg/kg SH)': 'TextEdit', 'THQ min-max': 'TextEdit', 'MSCQ min-max (g/osoba/deň ČH)': 'TextEdit', 'Link': 'TextEdit', 'Foto': 'ExternalResource', 'Autor fotografie': 'TextEdit', });
lyr_hranicaSR_2_3.set('fieldImages', {'DOW': '', 'AUT': '', 'ACH': '', 'SOI': '', 'FACC': '', 'IDN1': '', 'NM1': '', 'VYMERA': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_mapa20152025_2.set('fieldLabels', {'fid': 'hidden field', 'Lokalita': 'inline label - always visible', 'Slovenský názov': 'inline label - always visible', 'Latinský názov': 'inline label - always visible', 'Lat': 'hidden field', 'Lon': 'hidden field', 'Latitude': 'hidden field', 'Longitude': 'hidden field', 'Početnosť': 'inline label - always visible', 'Min.Hgmg/kgSH': 'hidden field', 'Max, Hg (mg/kg SH)2': 'hidden field', 'Min, THQ': 'hidden field', 'Max, THQ2': 'hidden field', 'Min, MSCQ (g/osoba/deň)': 'hidden field', 'Max, MSCQ (g/osoba/deň)2': 'hidden field', 'Hg min-max (mg/kg SH)': 'inline label - always visible', 'THQ min-max': 'inline label - always visible', 'MSCQ min-max (g/osoba/deň ČH)': 'inline label - always visible', 'Link': 'inline label - always visible', 'Foto': 'inline label - always visible', 'Autor fotografie': 'inline label - always visible', });
lyr_hranicaSR_2_3.set('fieldLabels', {'DOW': 'no label', 'AUT': 'no label', 'ACH': 'no label', 'SOI': 'no label', 'FACC': 'no label', 'IDN1': 'no label', 'NM1': 'no label', 'VYMERA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_hranicaSR_2_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});