define("CopyCopyflxRow1", function() {
    return function(controller) {
        var CopyCopyflxRow1 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45%",
            "id": "CopyCopyflxRow1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "skin": "CopyCopyslFbox0d8acc0db222641"
        }, {}, {});
        CopyCopyflxRow1.setDefaultUnit(kony.flex.DP);
        var flxLeft = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "99%",
            "id": "flxLeft",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "onClick": controller.AS_FlexContainer_ba43100732044f69b6ecc430bea3969a,
            "skin": "slFbox",
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
        var flxRight = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "99%",
            "id": "flxRight",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "50%",
            "onClick": controller.AS_FlexContainer_ef206091290941f587fabe131e95b6e0,
            "skin": "slFbox",
            "top": "0%",
            "width": "49%",
            "zIndex": 1
        }, {}, {});
        flxRight.setDefaultUnit(kony.flex.DP);
        var imgProductR = new kony.ui.Image2({
            "centerX": "50%",
            "height": "32%",
            "id": "imgProductR",
            "isVisible": true,
            "skin": "CopyslImage005302c75dd054c",
            "src": "konymp_pl_shoe_2_list.png",
            "top": "7%",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblProductNameR = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblProductNameR",
            "isVisible": true,
            "skin": "CopyslLabel0bb00f3405ef749",
            "text": "Sneakers",
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
        var lblDescriptionR = new kony.ui.Label({
            "centerX": "50%",
            "height": "13.50%",
            "id": "lblDescriptionR",
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
        var flxRatingImagesR = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "6%",
            "id": "flxRatingImagesR",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "skin": "CopyCopyslFbox4",
            "top": "0%",
            "width": "45%",
            "zIndex": 1
        }, {}, {});
        flxRatingImagesR.setDefaultUnit(kony.flex.DP);
        var imgStar1R = new kony.ui.Image2({
            "height": "100%",
            "id": "imgStar1R",
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
        var imgStar2R = new kony.ui.Image2({
            "height": "100%",
            "id": "imgStar2R",
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
        var imgStar3R = new kony.ui.Image2({
            "height": "100%",
            "id": "imgStar3R",
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
        var imgStar4R = new kony.ui.Image2({
            "height": "100%",
            "id": "imgStar4R",
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
        var imgStar5R = new kony.ui.Image2({
            "height": "100%",
            "id": "imgStar5R",
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
        flxRatingImagesR.add(imgStar1R, imgStar2R, imgStar3R, imgStar4R, imgStar5R);
        var lblRateR = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblRateR",
            "isVisible": true,
            "skin": "CopyslLabel0c4a966efae0d41",
            "text": "$899.00",
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
        var flxColorOptionsR = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "5%",
            "id": "flxColorOptionsR",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "skin": "CopyCopyslFbox4",
            "top": "2%",
            "width": "30%",
            "zIndex": 1
        }, {}, {});
        flxColorOptionsR.setDefaultUnit(kony.flex.DP);
        var imgROne = new kony.ui.Image2({
            "height": "100%",
            "id": "imgROne",
            "isVisible": true,
            "left": "3%",
            "skin": "CopyslImage005302c75dd054c",
            "src": "konymp_pl_color5.png",
            "top": "0dp",
            "width": "30%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgRTwo = new kony.ui.Image2({
            "height": "100%",
            "id": "imgRTwo",
            "isVisible": true,
            "left": "2%",
            "skin": "CopyslImage005302c75dd054c",
            "src": "konymp_pl_color6.png",
            "top": "0dp",
            "width": "30%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var imgRThree = new kony.ui.Image2({
            "height": "100%",
            "id": "imgRThree",
            "isVisible": true,
            "left": "2%",
            "skin": "CopyslImage005302c75dd054c",
            "src": "konymp_pl_color4.png",
            "top": "0dp",
            "width": "30%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxColorOptionsR.add(imgROne, imgRTwo, imgRThree);
        var lblStatusR = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblStatusR",
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
        flxRight.add(imgProductR, lblProductNameR, lblDescriptionR, flxRatingImagesR, lblRateR, flxColorOptionsR, lblStatusR);
        var flxBottom = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "0.20%",
            "id": "flxBottom",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "skin": "flxskin",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxBottom.setDefaultUnit(kony.flex.DP);
        flxBottom.add();
        var flxMiddle = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxMiddle",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "49%",
            "skin": "flxskin",
            "top": "0%",
            "width": "0.20%",
            "zIndex": 1
        }, {}, {});
        flxMiddle.setDefaultUnit(kony.flex.DP);
        flxMiddle.add();
        CopyCopyflxRow1.add(flxLeft, flxRight, flxBottom, flxMiddle);
        return CopyCopyflxRow1;
    }
})