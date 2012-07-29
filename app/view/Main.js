Ext.define("satellite-search.view.Main", {
    extend: 'Ext.Container',
    requires: ['satellite-search.view.ServerInfoPanel_1',
               'satellite-search.view.ServerInfoPanel_2',
               'satellite-search.view.ServerInfoPanel_3',
               'satellite-search.view.TitlePanel',
               'satellite-search.view.SearchPanel'
              ],
    config: {
        baseCls: 'mainpanel',
        layout: 'vbox',
        items: [
            {
               flex: 0.3,
               xtype: 'carousel',
               direction: 'horizontal',
               items: [
                       {
                          xtype: 'serverInfoPanel_1'
                       },
                       {
                          html : 'Item 1',
                          style: 'background-color: #5E99CC'
                       }
                      ]

            },
            {
                flex: 0.3,
                xtype: 'carousel',
                items: [
                        {
                          xtype: 'serverInfoPanel_2'
                        },
                        {
                          html : 'Item 1',
                          style: 'background-color: #5E99CC'
                        }
                  ]
             },
             {
                flex: 0.3,
                xtype: 'carousel',
                items: [
                        {
                           xtype: 'serverInfoPanel_3'
                        },
                        {
                           html : 'Item 1',
                           style: 'background-color: #5E99CC'
                        }
                      ]
             },
             {
                 flex: 0.1,
                 xtype: 'searchPanel'
             }
        ]
    }
});