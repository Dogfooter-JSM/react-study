import React from 'react';
import WithRouterSample from './WithRouterSample';

const data = {
	velopert: {
		name: '김민준',
		description: '리액트 교재 저자',
	},
	manjjang2: {
		name: '장승만',
		description: '리액트를 공부하는 개발자',
	},
};

const Profile = ({ match }) => {
	// match.params : URL 파라미터 사용 (경로 추출)
	const { username } = match.params;
	const profile = data[username];

	if (!profile) {
		return <div>존재하지 않는 사용자입니다.</div>;
	}

	return (
		<div>
			<h3>
				{username}({profile.name})
			</h3>
			<p>{profile.description}</p>
			{/* 현재 자신을 보여주고 있는 라우트 컴포넌트를 기준으로 match가 전달된다. */}
			<WithRouterSample />
		</div>
	);
};

export default Profile;
