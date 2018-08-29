(function (win) {
    const ip = "10.1.1.90";
    const port = 8080;
    const domain = `http:// + ${ ip } + : + ${ port }`;
    win.domainPath = { staticPath: "" };
    win.apiConfig= {
        start:{
            name: '',
            address: domain +"/page1/_search?pretty",
            loopTime: 20000
        }
    };
})(window)