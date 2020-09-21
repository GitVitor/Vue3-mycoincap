const url = "http://127.0.0.1:3000/cryptocurrency";

const headers = {
  method: "get",
  "content-type": "application/json",
};

export const getMap = () => {
  return fetch(`${url}/map`, {
    headers,
  }).then((res) => {
    return res.json();
  });
};
