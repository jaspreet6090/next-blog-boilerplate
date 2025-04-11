export default function formatTitle(title: string) {
    if (!title) return "";
    return title.toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}