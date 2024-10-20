import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/auth", "/general", "/orders/consideration", "/orders/accepted", "/orders/declined", "/todo"],
            }
        ],
        sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`
    }
}