try {
    var base_url = 'https://palapadev.big.go.id'
    var palapa_api_url = base_url + '/api/'
    var _proxy = base_url + '/api' + '/proxy?url='
    var local_gs = base_url + '/geoserver/wms'
    var map_extent = [94.9723, -11.0097, 141.012, 6.07724]
    var peta_url = 'http://palapadev.big.go.id/geoserver/wms'
} catch (error) {
    var base_url = ''
    var palapa_api_url = 'http://palapa.agrisoft-cb.com/api/'
    var _proxy = 'http://palapa.agrisoft-cb.com/api/proxy?url='
    var local_gs = 'http://palapa.agrisoft-cb.com:8080/geoserver/wms'
    var map_extent = [94.9723, -11.0097, 141.012, 6.07724]
}
var embedded = true;

