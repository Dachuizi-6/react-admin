import service from "../utils/request";

// 登录接口
export function login(data) {
  return service.request({
    url: "/login/",
    method: "post",
    data,
  });
}

export function getCode(data) {
  return service.request({
    url: "/getSms/",
    method: "post",
    data,
  });

  // return axios.post("/devApi/getSms", data);
}
