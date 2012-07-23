Ext.define("satellite-search.view.Main", {
    extend: 'Ext.Container',
    config: {
        baseCls: 'mainpanel',
        layout: 'vbox',
        items: [
            {
               xtype: 'panel',
               flex: 0.3,
               items: [
                       {
                          xtype: 'panel',
                          left: '35%',
                          width: '35%',
                          height: '60%',
                          top: '35%',
                          baseCls: 'rectangular_panel'
                        },
                        {
                          xtype: 'panel',
                          top: '54%',
                          left: '35%',
                          height: '23%',
                          width: '3%',
                          baseCls: 'circle_panel'
                         },
                        {
                          xtype: 'panel',
                          top: '10%',
                          left: '35%',
                          height: '20%',
                          width: '20%',
                          baseCls: 'rectangular_panel'
                        },
                        {
                           xtype: 'panel',
                           top: '35%',
                           left: '63%',
                           height: '15%',
                           width: '7%',
                           baseCls: 'rectangular_panel'
                        },
                        {
                           xtype: 'panel',
                           top: '49%',
                           left: '63%',
                           height: '15%',
                           width: '7%',
                           baseCls: 'rectangular_panel'

                        }
                      ]
            },
             {
                xtype: 'panel',
                flex: 0.3,
                items: [
                       {
                          xtype: 'panel',
                          left: '35%',
                          width: '35%',
                          height: '60%',
                          top: '35%',
                          baseCls: 'rectangular_panel'
                        },
                        {
                          xtype: 'panel',
                          top: '54%',
                          left: '35%',
                          height: '23%',
                          width: '3%',
                          baseCls: 'circle_panel'
                         },
                        {
                          xtype: 'panel',
                          top: '10%',
                          left: '35%',
                          height: '20%',
                          width: '20%',
                          baseCls: 'rectangular_panel'
                        },
                        {
                           xtype: 'panel',
                           top: '35%',
                           left: '63%',
                           height: '15%',
                           width: '7%',
                           baseCls: 'rectangular_panel'
                        },
                        {
                           xtype: 'panel',
                           top: '49%',
                           left: '63%',
                           height: '15%',
                           width: '7%',
                           baseCls: 'rectangular_panel'

                        }
                      ]
             },
             {
                xtype: 'panel',
                flex: 0.3,
                items: [
                       {
                          xtype: 'panel',
                          left: '35%',
                          width: '35%',
                          height: '60%',
                          top: '35%',
                          baseCls: 'rectangular_panel'
                        },
                        {
                          xtype: 'panel',
                          top: '54%',
                          left: '35%',
                          height: '23%',
                          width: '3%',
                          baseCls: 'circle_panel'
                         },
                        {
                          xtype: 'panel',
                          top: '10%',
                          left: '35%',
                          height: '20%',
                          width: '20%',
                          baseCls: 'rectangular_panel'
                        },
                        {
                           xtype: 'panel',
                           top: '35%',
                           left: '63%',
                           height: '15%',
                           width: '7%',
                           baseCls: 'rectangular_panel'
                        },
                        {
                           xtype: 'panel',
                           top: '49%',
                           left: '63%',
                           height: '15%',
                           width: '7%',
                           baseCls: 'rectangular_panel'

                        }
                      ]
             },
            {
                    flex: 0.1,
                    xtype: 'panel'
            }
        ]
    }
});
