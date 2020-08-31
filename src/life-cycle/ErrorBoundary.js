import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        error: false
    }
    
    // 컴포넌트 렌더링 도중에 에러가 발생했을 때 호출되어 먹통이 되지 않고 오류 UI를 보여 줄 수 있게 한다.
    // error: 에러 종류, info: 에러 발생 위치
    // 주의 : 이 메서드는 자신의 this.props.children으로 전달되는 컴포넌트에서 발생하는 에러만 잡아낼 수 있다.  
    componentDidCatch(error, info) {
        this.setState({
            error: true
        });
        console.log({error, info});
    }

    render() {
        if (this.state.error) return <div>에러가 발생했습니다!</div>
        return this.props.children;
    }
}

export default ErrorBoundary;