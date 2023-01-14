const SitePrerender = require('site-prerender');
const path = require("path");
const cwd = process.cwd();
const fs = require("fs");

async function main() {
    const distPath = path.join(cwd, "dist"); // (vite -> build -> outDir) configi ile aynı olmalı
    const tmpOutputPath = path.join(cwd, "output");

    const sp = new SitePrerender({
        staticPath: distPath,
        outputFolder: tmpOutputPath,
        routes: ['/', '/about', '/skills', '/blogs', '/projects', '/contact'] // routes to crawl
    });

    await sp.init();
    await sp.start();
    await sp.close();
    
    fs.rmSync(distPath, { recursive: true, force: true }); // eski dist buildini sil
    fs.renameSync(tmpOutputPath, distPath); // outputu dist olarak yeniden isimlendir
}

main();