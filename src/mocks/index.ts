export async function initMocks() {
  console.log("initMocks")
  if (process.env.NODE_ENV !== "development") return;
  if (typeof window === "undefined") {
    // 서버 사이드
    const { server } = await import("./server");
    server.listen();
  } else {
    // 클라이언트 사이드
    const { worker } = await import("./browser");
    await worker.start();
  }
}