export function toBookSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}
