sOneClient.panel.Home = function (config) {
    config = config || {};
    Ext.apply(config, {
        baseCls: 'modx-formpanel',
        layout: 'anchor',
        /*
         stateful: true,
         stateId: 'soneclient-panel-home',
         stateEvents: ['tabchange'],
         getState:function() {return {activeTab:this.items.indexOf(this.getActiveTab())};},
         */
        hideMode: 'offsets',
        items: [{
            xtype: 'modx-tabs',
            defaults: {border: false, autoHeight: true},
            border: false,
            hideMode: 'offsets',
            items: [{
                title: _('soneclient_items'),
                layout: 'anchor',
                items: [{
                    html: _('soneclient_intro_msg'),
                    cls: 'panel-desc',
                }, {
                    xtype: 'soneclient-grid-items',
                    cls: 'main-wrapper',
                }]
            }]
        }]
    });
    sOneClient.panel.Home.superclass.constructor.call(this, config);
};
Ext.extend(sOneClient.panel.Home, MODx.Panel);
Ext.reg('soneclient-panel-home', sOneClient.panel.Home);
