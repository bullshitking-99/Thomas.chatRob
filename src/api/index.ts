const baseUrl = "http://123.249.22.189:80/api/";
interface IResponse {
  code: number;
  message: string;
  data: string;
}

export function useApi() {
  /**
   * 发送license请求验证
   * @param license
   * @returns
   */
  async function authen(license: string): Promise<IResponse> {
    // 发送登录验证请求
    let response = await fetch(baseUrl + "authorize", {
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: JSON.stringify({ orderId: "o9en6n5c3chkvgkgw6cg" }),
    });

    let res: IResponse = await response.json();

    if (res.code === 2000) localStorage.setItem("license", license);

    return { code: res.code, message: res.message, data: res.data };
  }

  /**
   * 发送消息
   * @param message
   */
  async function sendMessage(message: string) {}

  return {
    authen,
  };
}
