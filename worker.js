export default {
  async fetch(request) {
    const url = new URL(request.url);
    // 将流量无缝反代给你的 Deno 节点
    url.hostname = "important-bear-50.hezhanleiok.deno.net"; 
    return fetch(new Request(url, request));
  }
}
