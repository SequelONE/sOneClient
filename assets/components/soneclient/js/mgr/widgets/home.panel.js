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
            html: '<h2>' + _('soneclient') + '</h2>',
            cls: '',
            style: {margin: '15px 0'}
        }, {
            xtype: 'modx-tabs',
            defaults: {border: false, autoHeight: true},
            border: true,
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
