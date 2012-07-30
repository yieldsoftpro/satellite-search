Ext.define("satellite-search.view.TitlePanel", {
      extend: 'Ext.Panel',
      id: 'titlePanel',
      xtype: 'titlePanel',
      config:{
                xtype: 'panel',
                top: '10%',
                left: '35%',
                height: '20%',
                width: '20%',
                baseCls: 'rectangular_panel',
                styleHtmlContent : true,
                styleHtmlCls : 'html_content',
                //html: 'dfdfdfd'
                //html: "<img src=\"resources/Fotos/star_image.jpg\" height=100% width=20%>"
                html: "<img src=\"resources/Fotos/star_image.jpg\">"
      }
});