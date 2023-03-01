export const render = <ElementType extends HTMLElement>(str: string) => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(str, 'text/html')

  return doc.body as ElementType
}
