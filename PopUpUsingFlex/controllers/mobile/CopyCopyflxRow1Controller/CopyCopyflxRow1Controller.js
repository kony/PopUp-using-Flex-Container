define({ 

 //Type your controller code here 
	getselectedrow:function(context){
      var rawData=context.widgetInfo.selectedRowItems[0];
      var  data = {lblRate:rawData.lblRate,lblProductName:rawData.lblProductName,imgProduct:rawData.imgProduct,lblDescription:rawData.lblDescription,lblStatus:rawData.lblStatus,imgStar1:rawData.imgStar1,imgStar2:rawData.imgStar2,imgStar3:rawData.imgStar3,imgStar4:rawData.imgStar4,imgStar5:rawData.imgStar5,imgOne:rawData.imgOne,imgTwo:rawData.imgTwo,imgThree:rawData.imgThree};
    // alert(data);
      this.executeOnParent("getSelectedRowData",data);
    },
  	getSelectedrowright:function(context){
      var rawData=context.widgetInfo.selectedRowItems[0];
      var  data = {lblRate:rawData.lblRateR,lblProductName:rawData.lblProductNameR,imgProduct:rawData.imgProductR,lblDescription:rawData.lblDescriptionR,lblStatus:rawData.lblStatusR,imgStar1:rawData.imgStar1R,imgStar2:rawData.imgStar2R,imgStar3:rawData.imgStar3R,imgStar4:rawData.imgStar4R,imgStar5:rawData.imgStar5R,imgOne:rawData.imgROne,imgTwo:rawData.imgRTwo,imgThree:rawData.imgRThree};
      //alert(data);
      this.executeOnParent("getSelectedRowData",data);
    }
 });