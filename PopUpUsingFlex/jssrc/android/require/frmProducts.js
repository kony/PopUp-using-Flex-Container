define("frmProducts", function() {
    return function(controller) {
        function addWidgetsfrmProducts() {
            this.setDefaultUnit(kony.flex.DP);
            var ProductGridWc = new ListView.ProductGridWc({
                "clipBounds": true,
                "height": "100%",
                "id": "ProductGridWc",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "skin": "CopyCopyslFbox4",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            ProductGridWc.onItemClick = controller.AS_UWI_aa16b192154841278a42eafad74819ab;
            var flxTrans = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "blur": {
                    "enabled": false,
                    "value": 78
                },
                "clipBounds": true,
                "height": "100%",
                "id": "flxTrans",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "onClick": controller.AS_FlexContainer_c299d87ccb2148b5a5a5aa2b3b576a8d,
                "skin": "flxtransskin",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxTrans.setDefaultUnit(kony.flex.DP);
            var flxPopup = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "48%",
                "id": "flxPopup",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "13dp",
                "onClick": controller.AS_FlexContainer_hd93b7a0a6b14cbab953cc487865b286,
                "skin": "flxskin",
                "top": "206dp",
                "width": "80%",
                "zIndex": 5
            }, {}, {});
            flxPopup.setDefaultUnit(kony.flex.DP);
            var flxLeft = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "99%",
                "id": "flxLeft",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "skin": "CopyCopyslFbox4",
                "top": "0%",
                "width": "49%",
                "zIndex": 1
            }, {}, {});
            flxLeft.setDefaultUnit(kony.flex.DP);
            var imgProduct = new kony.ui.Image2({
                "centerX": "50%",
                "height": "32%",
                "id": "imgProduct",
                "isVisible": true,
                "skin": "CopyslImage005302c75dd054c",
                "src": "shoe1grid.png",
                "top": "7%",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblProductName = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblProductName",
                "isVisible": true,
                "skin": "CopyslLabel0bb00f3405ef749",
                "text": "T-Rock Men's",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDescription = new kony.ui.Label({
                "centerX": "50%",
                "height": "13.50%",
                "id": "lblDescription",
                "isVisible": true,
                "maxNumberOfLines": 2,
                "skin": "CopyslLabel0adb02ca3e47642",
                "text": "Black Runnig Shoe Description lines",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_NONE,
                "top": 5,
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxRatingImages = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "6%",
                "id": "flxRatingImages",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0%",
                "skin": "CopyCopyslFbox4",
                "top": "0%",
                "width": "45%",
                "zIndex": 1
            }, {}, {});
            flxRatingImages.setDefaultUnit(kony.flex.DP);
            var imgStar1 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgStar1",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyslImage005302c75dd054c",
                "src": "staractive.png",
                "top": "0%",
                "width": "20%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgStar2 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgStar2",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyslImage005302c75dd054c",
                "src": "staractive.png",
                "top": "0%",
                "width": "20%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgStar3 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgStar3",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyslImage005302c75dd054c",
                "src": "staractive.png",
                "top": "0%",
                "width": "20%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgStar4 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgStar4",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyslImage005302c75dd054c",
                "src": "staractive.png",
                "top": "0%",
                "width": "20%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgStar5 = new kony.ui.Image2({
                "height": "100%",
                "id": "imgStar5",
                "isVisible": true,
                "left": "0%",
                "skin": "CopyslImage005302c75dd054c",
                "src": "starinactive.png",
                "top": "0%",
                "width": "20%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRatingImages.add(imgStar1, imgStar2, imgStar3, imgStar4, imgStar5);
            var lblRate = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblRate",
                "isVisible": true,
                "skin": "CopyslLabel0c4a966efae0d41",
                "text": "$299.00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "3%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxColorOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "5%",
                "id": "flxColorOptions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0%",
                "skin": "CopyCopyslFbox4",
                "top": "2%",
                "width": "30%",
                "zIndex": 1
            }, {}, {});
            flxColorOptions.setDefaultUnit(kony.flex.DP);
            var imgOne = new kony.ui.Image2({
                "height": "100%",
                "id": "imgOne",
                "isVisible": true,
                "left": "3%",
                "skin": "CopyslImage005302c75dd054c",
                "src": "konymp_pl_color3.png",
                "top": "0dp",
                "width": "30%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgTwo = new kony.ui.Image2({
                "height": "100%",
                "id": "imgTwo",
                "isVisible": true,
                "left": "2%",
                "skin": "CopyslImage005302c75dd054c",
                "src": "konymp_pl_color2.png",
                "top": "0dp",
                "width": "30%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgThree = new kony.ui.Image2({
                "height": "100%",
                "id": "imgThree",
                "isVisible": true,
                "left": "2%",
                "skin": "CopyslImage005302c75dd054c",
                "src": "konymp_pl_color1.png",
                "top": "0dp",
                "width": "30%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxColorOptions.add(imgOne, imgTwo, imgThree);
            var lblStatus = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblStatus",
                "isVisible": true,
                "skin": "sknLblStatus",
                "text": "Instock for delivery",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "2%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxLeft.add(imgProduct, lblProductName, lblDescription, flxRatingImages, lblRate, flxColorOptions, lblStatus);
            var imgclose = new kony.ui.Image2({
                "height": "20dp",
                "id": "imgclose",
                "isVisible": true,
                "onTouchEnd": controller.AS_Image_b1e7e1b751ee47d4bc544d245e97d979,
                "right": "15dp",
                "skin": "slImage",
                "src": "close_icon.png",
                "top": "15dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPopup.add(flxLeft, imgclose);
            flxTrans.add(flxPopup);
            this.add(ProductGridWc, flxTrans);
        };
        return [{
            "addWidgets": addWidgetsfrmProducts,
            "enabledForIdleTimeout": false,
            "id": "frmProducts",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});