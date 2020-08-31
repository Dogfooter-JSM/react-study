import React, { Component } from 'react';

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  }

  myRef = null;   // ref를 설정할 부분
  // myRef = React.createRef();

  // 컴포넌트를 새로 만들 때마다 호출되는 클래스 생성자 메서드
  // 초기 state를 정할 수 있다.
  constructor(props) {
    super(props);
    console.log('constructor');
  }

  // props에 있는 값을 state에 동기화 시키는 용도로 사용하는 메서드
  // 컴포넌트가 마운트될 때와 업데이트될 때 호출된다.
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log('getDerivedStateFromProps');
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  // 컴포넌트를 만들고, 첫 렌더링을 다 마친 후 실행된다.
  // 보통 비동기 작업을 처리 (setTimeout, api 호출 등)
  componentDidMount() {
    console.log('componentDidMount');
  }

  // props 또는 state를 변경했을 때, 리렌더링을 시작할지 여부를 지정하는 메서드
  // 지정하지 않을 지 항상 return true. false 리턴 시 화면 업데이트 하지 않음
  // 현재 props와 state는 this.props, this.state로 접근
  shouldComponentUpdate(nextProps, nextState) {
      console.log('shouldComponentUpdate', nextProps, nextState);
      // 숫자의 마지막 자리가 4면 리렌더링하지 않는다
      return nextState.number % 10 !== 4;
  }

  // render에서 만들어진 결과물이 브라우저에 실제로 반영되기 직전에 호출됨.
  // 반환값은 componentDidUpdate에서 세 번째 파라미터인 snapshot 값으로 전달받을 수 있다.
  // 주로 업데이트하기 직전의 값을 참고할 일이 있을 때 활용됨 (예: 스크롤바 위치 유지)
  getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('getSnapshotBeforeUpdate');
      if (prevProps.color !== this.props.color) {
          return this.myRef.style.color;
          // return this.myRef.current.style.color;
      }
      return null;
  }

  // 리렌더링을 완료한 후 실행됨. prevProps, prevState를 사용하여 이전 값에 접근 가능
  // getSnapshotBeforeUpdate에서 반환한 값이 있다면 여기서 snapshot 값을 전달받을 수 있다.
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('componentDidUpdate', prevProps, prevState);
    if (snapshot) {
      console.log('업데이트되기 직전 색상: ', snapshot);
    }
  }

  // 컴포넌트를 DOM에서 제거할 때 실행됨. 
  // componentDidMount에서 등록한 이벤트, 타이머, 직접 생성한 DOM이 있다면 여기서 제거
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  componentDidCatch(error, info) {
    this.setState({
      error: true
    });
    console.log({ error, info });
  }

  // 더하기 버튼 클릭 이벤트 핸들러
  handleClick = () => {
    this.setState({
      number: this.state.number + 1
    });
  }

  render() {
    console.log('render');
    const style = {
      color: this.props.color
    };

    return (
      <div>
        {/* {this.props.missing.value} */}
        <h1 style={style} ref={ref => this.myRef = ref}>
        {/* <h1 style={style} ref={this.myRef}> */}
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>
          더하기
        </button>
      </div>
    )
  }
}

export default LifeCycleSample;