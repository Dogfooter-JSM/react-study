import React, { Component } from 'react';
// import { ColorConsumer } from '../contexts/color';
import ColorContext from '../contexts/color';

const color = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

/*
const SelectColors = () => {
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      <ColorConsumer>
        {/* ColorConsumer.actions를 파라미터로하는 함수를 ColorContext로 넘긴다. *//*}
        {({ actions }) => (
          <div style={{ display: 'flex' }}>
            {color.map(color => (
              <div
                key={color}
                style={{
                  background: color,
                  width: '24px',
                  height: '24px',
                  cursor: 'pointer'
                }}
                // 메인 컬러 변경
                onClick={() => actions.setColor(color)}
                onContextMenu={e => {
                  // 마우스 오른쪽 버튼 클릭 시 메뉴가 뜨는 것을 무시함
                  e.preventDefault();
                  // 서브 컬러 변경
                  actions.setSubcolor(color);
                }}
              />
            ))}
          </div>
        )}
      </ColorConsumer>
      <hr />
    </div>
  );
};
*/

// 클래스형 컴포넌트에서 Context를 좀 더 쉽게 사용하고 싶다면 contextType를 정의
class SelectColors extends Component {
  // this.context를 조회했을 때 현재 Context의 value를 가리키게 된다.
  // 단점: 하나의 컨텍스트만 사용할 수 있다. (this.context)
  static contextType = ColorContext;

  handlerSetColor = color => {
    this.context.actions.setColor(color);
  };

  handlerSetSubcolor = subcolor => {
    this.context.actions.setSubcolor(subcolor);
  }

  render () {
    return (
      <div>
      <h2>색상을 선택하세요.</h2>
        <div style={{ display: 'flex' }}>
          {color.map(color => (
            <div
              key={color}
              style={{
                background: color,
                width: '24px',
                height: '24px',
                cursor: 'pointer'
              }}
              // 메인 컬러 변경
              onClick={() => this.handlerSetColor(color)}
              onContextMenu={e => {
                // 마우스 오른쪽 버튼 클릭 시 메뉴가 뜨는 것을 무시함
                e.preventDefault();
                // 서브 컬러 변경
                this.handlerSetSubcolor(color);
              }}
            />
          ))}
        </div>
      <hr />
    </div>
    );
  }
}

export default SelectColors;