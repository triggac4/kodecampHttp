const http = require("http");
const fs = require("fs").promises;
const server = http.createServer(async (req, res) => {
    const path = req.url;

    if (path == "/") {
        const html = await fs.readFile("./pages/home_page.html", "utf-8");
        res.writeHead(200, "Ok", { "content-type": "text/html" });
        res.end(html);
    } else if (path == "/contact") {
        const html = await fs.readFile("./pages/contact_page.html", "utf-8");
        res.writeHead(200, "Ok", { "content-type": "text/html" });
        res.end(html);
    } else if (path == "/about") {
        const html = await fs.readFile("./pages/about_me_page.html", "utf-8");
        res.writeHead(200, "Ok", { "content-type": "text/html" });
        res.end(html);
    } else if (path == "/home") {
        const html = await fs.readFile("./pages/home_page.html", "utf-8");
        res.writeHead(302, "redirect", {
            location: "/",
            "content-type": "text/html",
        });
        res.end();
    }
});

server.listen("4000", console.log("server is running"));
