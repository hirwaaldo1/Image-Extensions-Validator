# Image-Extensions-Validator
This regular expression matches all file names which has image extension. It matches file names that end with .jpg, .jpeg, .png, .tif, .tiff, .raw, .ai, .webp, .ico, .svg, or .eps.

## Regular Expression
`/\w+\.(jpg|jpeg|png|tif|tiff|raw|ai|webp|ico|svg|eps)$/g`

## Explanation
- `/\w+` matches one or more word characters at the beginning of the string.
- `\.` matches a dot character.
- `(jpg|jpeg|png|tif|tiff|raw|ai|webp|ico|svg|eps)` matches any string that has one of this extension.
- `$` matches the end of the string.
- `/g` at the end of the regex enables global matching.

## Examples
### Matches
- `example.jpg`
- `example.me.jpeg`
- `example.png`
- `example.tif`

### Non-Matches
- `example.txt`
- `example.gif`
- `.gif`
- `example..tif`
