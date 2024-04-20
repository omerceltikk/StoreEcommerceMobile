

export const FetchGetMethod = async (url) => {

  const getUrl = await fetch(`https://ksvc-storeecommerceapp-omerceltik123-dev.apps.sandbox-m3.1530.p1.openshiftapps.com/${url}`, {
    method: 'GET',
    mode: "cors",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      //  "Authorization": currUser?.accessToken
    },
  })
    .then((res) => res.json())

  return getUrl;
}
export const FetchDeleteMethod = async (url, id) => {

  await fetch(`https://ksvc-storeecommerceapp-omerceltik123-dev.apps.sandbox-m3.1530.p1.openshiftapps.com/${url}/${id}`, {
    method: 'DELETE',
    mode: "cors",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      // "Authorization": currUser?.accessToken

    }
  }).catch((e) => console.log(e))
}



export const FetchPostMethod = (url, body) => {

  const request = fetch(`https://ksvc-storeecommerceapp-omerceltik123-dev.apps.sandbox-m3.1530.p1.openshiftapps.com/${url}`, {
    method: 'POST',
    mode: "cors",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      // "Authorization": currUser?.accessToken
    },
    body: JSON.stringify(body)
  })
  return request
}
export const FetchPutMethod = (url, body) => {
  const request = fetch(`https://ksvc-storeecommerceapp-omerceltik123-dev.apps.sandbox-m3.1530.p1.openshiftapps.com/${url}`, {
    method: 'PUT',
    mode: "cors",
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
      // "Authorization": currUser?.accessToken
    },
    body: JSON.stringify(body)
  })
  return request
}
export const RefreshToken = () => {
  const request = fetch(`https://ksvc-storeecommerceapp-omerceltik123-dev.apps.sandbox-m3.1530.p1.openshiftapps.com/auth/refresh`, {
    method: 'POST',
    mode: "cors",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: currUser.userId,
      // refreshToken: currUser.refreshToken,
    })
  })
  return request;
}