/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://www.sricode.com',
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    robotsTxt: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
        additionalSitemaps: [
            'https://www.sricode.com/sitemap.xml',
        ],
    },
    exclude: ['/admin/*'],
    changefreq: 'monthly',
    priority: 0.7,
    transform: async (config, path) => {
        return {
            loc: path,
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        }
    },
}
