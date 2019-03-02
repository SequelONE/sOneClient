sOneClient.page.Home = function (config) {
    config = config || {};
    Ext.applyIf(config, {
        components: [{
            xtype: 'soneclient-panel-home',
            renderTo: 'soneclient-panel-home-div'
        }]
    });
    sOneClient.page.Home.superclass.constructor.call(this, config);
};
Ext.extend(sOneClient.page.Home, MODx.Component);
Ext.reg('soneclient-page-home', sOneClient.page.Home);