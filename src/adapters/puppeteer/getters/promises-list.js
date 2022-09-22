function getHandleElementsPromisesList(handlerList, selector) {
  const tasksPromisesList = handlerList.map(async (handler) => handler.$$eval(
    selector,
    (localHandlerList) => localHandlerList.map((localHandler) => localHandler.textContent),
  ));
  return tasksPromisesList;
}

module.exports = getHandleElementsPromisesList;
