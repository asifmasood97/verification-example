async function post(url, body, authorizationHeader) {
    let response
    response = await fetch(url, {
        method: "POST",
      ...(authorizationHeader ? { 
            headers: new Headers(
            {
                Authorization: key,
                "Content-Type": "application/json"
            }) 
        } : {}),
        body: JSON.stringify(body),
    });
    return [
        response.status, 
        response.headers.get("Content-Type")?.startsWith("application/json") 
            ? await response.json() 
            : await response.text()
    ];
}