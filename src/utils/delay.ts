export default function dalay(ms: number) {
  new Promise((res) => setTimeout(res, ms));
}
