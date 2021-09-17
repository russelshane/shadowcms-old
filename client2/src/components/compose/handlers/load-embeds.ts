/**
 * @description Properly load embedded article content with Iframe.ly
 * @author ShadowCMS
 */

function LoadIframelyEmbeds() {
  if (
    document.querySelectorAll("[data-iframely-url]").length === 0 &&
    document.querySelectorAll("iframe[src*='iframe.ly']").length === 0
  )
    return;
  const iframely = ((window as any).iframely = (window as any).iframely || {});
  if (iframely.load) {
    iframely.load();
  } else {
    const ifs = document.createElement("script");
    ifs.type = "text/javascript";
    ifs.async = true;
    ifs.src =
      ("https:" == document.location.protocol ? "https:" : "http:") + "//cdn.iframe.ly/embed.js";
    const s = document.getElementsByTagName("script")[0];
    (s as any).parentNode.insertBefore(ifs, s);
  }
}

export default LoadIframelyEmbeds;
