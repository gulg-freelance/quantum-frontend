import qs from "qs";

const API_URL = new URL("api/", import.meta.env.STRAPI_URL);

export async function fetchApi(
  endpoint: string,
  parameters: any,
): Promise<any> {
  const url = new URL(endpoint, API_URL);
  const paramsQs = qs.stringify(parameters);
  if (paramsQs) url.search = "?" + paramsQs;

  const response = await fetch(url, {
    headers: { Authorization: `bearer ${import.meta.env.STRAPI_TOKEN}` },
  });
  if (!response.ok)
    throw new Error(
      `API request failed (${response.status} ${response.statusText}): ${url.href}`,
    );
  return await response.json();
}

export async function* getAll(
  endpoint: string,
  parameters: any,
): AsyncGenerator<any> {
  const { data, meta } = await fetchApi(endpoint, parameters);
  yield* data;

  for (let page = 2; page <= meta.pagination.pageCount; ++page)
    yield* (
      await fetchApi(endpoint, {
        ...parameters,
        pagination: { ...(parameters.pagination ?? {}), page },
      })
    ).data;
}
