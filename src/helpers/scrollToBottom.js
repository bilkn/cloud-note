export function scrollToBottom(elt) {
  elt.scroll({
    top: getElementScrollHeight(elt),
  });
}
const getElementScrollHeight = (elt) => elt.scrollHeight;
