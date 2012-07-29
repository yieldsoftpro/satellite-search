Ext.define("satellite-search.view.ServerInfoPanel_1", {
      extend: 'Ext.Panel',
      id: 'serverInfoPanel_1',
      xtype: 'serverInfoPanel_1',
      config:{
        items:[
                {
                    xtype: 'panel',
                    top: '10%',
                    left: '35%',
                    height: '20%',
                    width: '20%',
                    baseCls: 'rectangular_panel',
                    styleHtmlContent : true,
                    styleHtmlCls : 'html_content',
                    html: "<img src=\"resources/Fotos/star_image.jpg\">",
                    items:[{
                             xtype: 'panel',
                             top: '30%',
                             left: '20%',
                             html: "MOST VOTED",
                             baseCls: 'label_panel'
                          }]
                },
                {
                    xtype: 'panel',
                    left: '35%',
                    width: '35%',
                    height: '60%',
                    top: '35%',
                    baseCls: 'rectangular_panel',
                    items:[
                          {
                             xtype: 'button',
                             top: '5%',
                             left: '11%',
                             height: '35%',
                             width: '69%',
                             html: "<img src=\"resources/Fotos/web_site_reference_3.jpg\">",
                             styleHtmlContent : true,
                             styleHtmlCls : 'button_image'
                             //icon: "resources/Fotos/web_site_reference_3.jpg",
                             //iconAlign: "right"
                             //iconCls: 'button_image'
                          },
                          {
                            html: "<img src=\"resources/Fotos/server_image.jpg\">",
                            top: '43%',
                            left: '12%'
                          },
                          {
                           xtype: 'label',
                           html: 'In God We Trust (High Five)',
                           top: '50%',
                           left: '19%',
                           baseCls: 'label_panel'
                          },
                          {
                            html: "<img src=\"resources/Fotos/web_site_image.jpg\">",
                            top: '73%',
                            left: '11%'
                          },
                          {
                           xtype: 'label',
                           html: 'www.gamesites200.com/lineage2',
                           top: '79%',
                           left: '19%',
                           //height: '60%',
                           baseCls: 'label_panel'
                          }
                         ]
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
      }
});