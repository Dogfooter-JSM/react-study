import React from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import Profile from './Profile';
import WithRouterSample from './WithRouterSample';

const Profiles = () => {
	//
	const activeStyle = {
		background: 'black',
		color: 'white',
	};

	const showJSX = () => {
		return <div>사용자를 선택해주세요.</div>;
	};

	return (
		<div>
			<h3>사용자 목록:</h3>
			<ul>
				<li>
					{/* <Link to='/profiles/velopert'>velopert 프로파일</Link> */}
					<NavLink activeStyle={activeStyle} to='/profiles/velopert' active>
						velopert
					</NavLink>
				</li>
				<li>
					{/* <Link to='/profiles/manjjang2'>manjjang2 프로파일</Link> */}
					<NavLink activeStyle={activeStyle} to='/profiles/manjjang2' active>
						manjjang2
					</NavLink>
				</li>
			</ul>

			{/* render property : 보여주고 싶은 JSX를 넣어줄 수 있다 */}
			<Route path='/profiles' exact render={() => <div>사용자를 선택해주세요.</div>} />

			{/* match.params.username으로 조회 */}
			<Route path='/profiles/:username' component={Profile} />

			{/* 현재 자신을 보여주고 있는 라우트 컴포넌트를 기준으로 match가 전달된다. */}
			{/* <WithRouterSample /> */}
		</div>
	);
};

export default Profiles;
