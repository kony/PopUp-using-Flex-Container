define({ 

 //Type your controller code here 
  getSelectedRowData : function(params){
    //alert("test:"+params);
    this.view.flxOverlay.isVisible=true;
    this.view.imgProduct.src=params.imgProduct;
    this.view.lblProductName.text=params.lblProductName;
    this.view.lblDescription.text=params.lblDescription;
    this.view.imgStar1.src=params.imgStar1;
    this.view.imgStar2.src=params.imgStar2;
    this.view.imgStar3.src=params.imgStar3;
    this.view.imgStar4.src=params.imgStar4;
    this.view.imgStar5.src=params.imgStar5;
    this.view.lblRate.text=params.lblRate;
    this.view.lblStatus.text=params.lblStatus;
    this.view.imgOne.src=params.imgOne;
    this.view.imgTwo.src=params.imgTwo;
    this.view.imgThree.src=params.imgThree;
    this.view.skin="frmTranskin";
    //this.view.ProductGrid.segList.onRowClick=null;
  },
  popupdismiss:function(){
    this.view.flxOverlay.isVisible=false;
    this.view.skin="frmWhiteSkin";
  
  }

 });