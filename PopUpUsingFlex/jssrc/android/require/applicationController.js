define({
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("ListView.ProductGrid", "ProductGrid", "ProductGridController");
        kony.application.registerMaster({
            "namespace": "ListView",
            "classname": "ProductGrid",
            "name": "ListView.ProductGrid"
        });
        kony.mvc.registry.add("ListView.ProductGridWc", "ProductGridWc", "ProductGridWcController");
        kony.application.registerMaster({
            "namespace": "ListView",
            "classname": "ProductGridWc",
            "name": "ListView.ProductGridWc"
        });
        kony.mvc.registry.add("CopyCopyflxRow1", "CopyCopyflxRow1", "CopyCopyflxRow1Controller");
        kony.mvc.registry.add("frmProducts", "frmProducts", "frmProductsController");
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new kony.mvc.Navigation("frmProducts").navigate();
    }
});