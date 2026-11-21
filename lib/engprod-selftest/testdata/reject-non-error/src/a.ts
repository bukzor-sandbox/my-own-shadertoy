export async function fail(): Promise<never> {
  return Promise.reject("not an Error");
}
