Ext.define("satellite-search.view.Main", {
    extend: 'Ext.Container',
    requires: ['satellite-search.view.ServerInfoPanel'],
    config: {
        baseCls: 'mainpanel',
        layout: 'vbox',
        items: [
            {
               xtype: 'panel',
               flex: 0.3,
               items: [
                       {
                          //xtype: 'panel',
                          //xtype: 'serverInfoPanel',
                          left: '35%',
                          width: '35%',
                          height: '60%',
                          top: '35%',
                          baseCls: 'rectangular_panel'
                        },
                        {
                          xtype: 'panel',
                          top: '47%',
                          left: '35%',
                          height: '36%',
                          width: '4%',
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
                          top: '47%',
                          left: '35%',
                          height: '36%',
                          width: '4%',
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
                          top: '47%',
                          left: '35%',
                          height: '36%',
                          width: '4%',
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
                    xtype: 'panel',
                    items: [
                        {
                          xtype: 'panel',
                          left: '40%',
                          height: '90%',
                          width: '25%',
                          baseCls: 'rectangular_panel',
                          items:[
                                 {
                                   xtype: 'label',
                                   html: 'SEARCH',
                                   top: '30%',
                                   left: '3%',
                                   height: '60%',
                                   baseCls: 'label_panel'
                                 },
                                 {
                                   xtype: 'textfield',
                                   clearIcon : false,
                                   top: '5%',
                                   left: '25%',
                                   height: '70%',
                                   baseCls: 'textfield',
                                   inputCls: 'textfield_input'
                                 }
                                ]
                        },
                        {
                           xtype: 'panel',
                           top: '6%',
                           left: '63%',
                           height: '80%',
                           width: '5%',
                           baseCls: 'search_panel'
                        },
                        {
                           xtype: 'panel',
                           left: '65%',
                           height: '90%',
                           width: '5%',
                           baseCls: 'black_panel'
                         },
                        {
                           xtype: 'panel',
                           top: '15%',
                           left: '64%',
                           height: '60%',
                           width: '3%',
                           baseCls: 'search_panel'
                        }
                      ]
            }
        ]
    }
});