require(["gitbook", "jquery"], function (gitbook, $) {
    // var SITES = {
    //     facebook: {
    //         label: "Facebook",
    //         icon: "fa fa-facebook",
    //         onClick: function (e) {
    //             e.preventDefault();
    //             window.open(
    //                 "http://www.facebook.com/sharer/sharer.php?s=100&p[url]=" +
    //                     encodeURIComponent(location.href)
    //             );
    //         },
    //     },
    //     twitter: {
    //         label: "Twitter",
    //         icon: "fa fa-twitter",
    //         onClick: function (e) {
    //             e.preventDefault();
    //             window.open(
    //                 "http://twitter.com/home?status=" +
    //                     encodeURIComponent(document.title + " " + location.href)
    //             );
    //         },
    //     },
    // };
    gitbook.events.bind("start", function (e, config) {
        console.log("custom js", config);
        gitbook.toolbar.createButton({
            icon: "synctree",
            label: "Share",
            position: "right",
            onClick: function (e) {
                e.preventDefault();
                window.open("https://www.synctree101.com/");
            },
        });
        gitbook.toolbar.createButton({
            icon: "fa fa-file-pdf-o",
            label: "Share",
            position: "right",
            onClick: function (e) {
                e.preventDefault();
                window.open("/SyncTree_Guide_Book_v3.1.0.pdf");
            },
        });
        gitbook.toolbar.createButton({
            icon: "fa fa-naver",
            label: "Share",
            position: "right",
            onClick: function (e) {
                e.preventDefault();
                window.open(
                    "https://blog.naver.com/PostList.naver?blogId=nntuple"
                );
            },
        });

        // $.each(SITES, function (sideId, site) {
        //     gitbook.toolbar.createButton({
        //         icon: site.icon,
        //         label: site.text,
        //         position: "right",
        //         onClick: site.onClick,
        //     });
        // });
    });
});
