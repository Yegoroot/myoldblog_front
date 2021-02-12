export const theSameDocument = ({ documentId, getState, MODULE }) => {
  const { data } = getState()[`${MODULE}`].item
  const id = data ? data.id : null
  if (id === documentId) return true
}

export default {
  theSameDocument
}
