export function deptSlug(name: string): string {
  return name.toLowerCase().replaceAll(" ", "-").replaceAll("&", "and").replaceAll("/", "-");
}
