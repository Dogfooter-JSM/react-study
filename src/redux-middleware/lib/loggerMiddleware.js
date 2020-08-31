// 미들웨어는 특정 조건에 따라 액션을 무시하게 할 수도 있고,
// 액션 정보를 가로채서 변경한 후 리듀서에게 전달할 수도 있고,
// 특정 액션에 기반하여 새로운 액션을 여러번 디스패치할 수도 있다.
const loggerMiddleware = store => next => action => {
  // 미들웨어의 기본 구조
  console.group(action && action.type); // 액션 타입으로 log를 그룹화함
  console.log('이전 상태', store.getState());
  console.log('액션', action);
  next(action); // 다음 미들웨어 혹은 리듀서에 전달
  console.log('다음 상태', store.getState()); // 업데이트된 상태
  console.groupEnd(); // 그룹 끝
};

export default loggerMiddleware;