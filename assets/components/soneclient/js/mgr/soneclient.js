var sOneClient = function (config) {
    config = config || {};
    sOneClient.superclass.constructor.call(this, config);
};
Ext.extend(sOneClient, Ext.Component, {
    page: {}, window: {}, grid: {}, tree: {}, panel: {}, combo: {}, config: {}, view: {}, utils: {}
});
Ext.reg('soneclient', sOneClient);

sOneClient = new sOneClient();