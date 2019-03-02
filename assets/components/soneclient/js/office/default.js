Ext.onReady(function () {
    sOneClient.config.connector_url = OfficeConfig.actionUrl;

    var grid = new sOneClient.panel.Home();
    grid.render('office-soneclient-wrapper');

    var preloader = document.getElementById('office-preloader');
    if (preloader) {
        preloader.parentNode.removeChild(preloader);
    }
});