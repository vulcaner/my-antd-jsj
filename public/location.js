(function (win) {
    const IP = "10.1.1.90";
    const PORT = 8080;
    const DOMAIN = `http:// + ${ IP } + : + ${ PORT }`;
    win.domainPath = { staticPath: "" };
    win.apiConfig= {
        start:{
            name: '',
            address: DOMAIN +"/page1/_search?pretty",
            loopTime: 20000
        }
    }
})(window)