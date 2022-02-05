export const appendElement = (target: string, content: string) => {
  const div = document.createElement('div')
  div.append(content)
  document.querySelector(target).appendChild(div)
}
