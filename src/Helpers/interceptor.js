export default async function Interceptor(
  endpoint,
  method = "GET",
  body = {},
  contentType = "application/json"
) {
  const hostName = "http://localhost:4000";

  body = contentType === "application/json" ? JSON.stringify(body) : body;

  let reqOptions = {
    method,
    headers: {
      "Content-Type": contentType,
    },
    body,
  };

  // delete user Auth header if userData is not present

  // delete data body if body is not supplied
  if (contentType !== "application/json") {
    delete reqOptions.headers["Content-Type"];
  }

  if (
    (!Object.keys(body).length && contentType === "application/json") ||
    method.toLowerCase() === "get"
  ) {
    delete reqOptions.body;
  }

  // console.log(reqOptions)
  try {
    const response = await fetch(`${hostName}/${endpoint}`, reqOptions).then(
      async (res) => {
        let status = res.status;
        let resp = await res.json();
        return [status, resp];
      }
    );
    return response;
  } catch (error) {
    console.error(error);
    return [
      500,
      {
        message: "We are experincing issues please contact the technical team",
      },
    ];
  }
}
