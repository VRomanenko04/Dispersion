import Script from "next/script";


const Analytics = () => {
    return (
        <>
            <Script 
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTIC_ID}`}
            />
            <Script>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', '${process.env.GOOGLE_ANALYTIC_ID}');
                `}
            </Script>
        </>
    )
}

export default Analytics;