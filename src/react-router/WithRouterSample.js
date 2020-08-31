import React from 'react';
import { withRouter } from 'react-router-dom';

const WithRouterSample = ({ location, match, history }) => {
	return (
		<div>
			<h4>location</h4>
			<textarea
				// 들여쓰기가 적용된 채로 JSON 문자열 생성
				value={JSON.stringify(location, null, 2)}
				rows={7}
				cols={50}
				readOnly={true}
			/>
			<h4>match</h4>
			<textarea
				// 들여쓰기가 적용된 채로 JSON 문자열 생성
				value={JSON.stringify(match, null, 2)}
				rows={8}
				cols={50}
				readOnly={true}
			/>
			<br />
			<button onClick={() => history.push('/')}>홈으로</button>
		</div>
	);
};

// withRouter를 사용하기 위한 컴포넌트를 내보낼 때 withRouter함수로 감싸준다.
export default withRouter(WithRouterSample);
