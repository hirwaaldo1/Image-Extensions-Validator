const regex = /\w+\.(jpg|jpeg|png|tif|tiff|raw|ai|webp|ico|svg|eps)$/g;
const pathname = "example.jpg";
const wrongPathname =
  "example.txt" || "example.gif" || ".gif" || "example..tif";
regex.test(pathname); //true
regex.test(wrongPathname); //false
