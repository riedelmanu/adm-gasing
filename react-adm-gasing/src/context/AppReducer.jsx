/* ejemplo de action: el type me dice lo que voy a hacer
{
    type: "ADD_TRANSACTION",
    playload: -20
}*/

export default (state, action) => {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return state
    default:
      return state
  }
};
