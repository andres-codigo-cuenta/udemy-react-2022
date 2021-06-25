import React from 'react';
import ReactDOM from 'react-dom';

import faker from 'faker';

import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

if (module.hot) {
	module.hot.accept();
}

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<div>
					<h4>Warning</h4>
				</div>
				Are you sure you want to do this?
			</ApprovalCard>
			
			<ApprovalCard>
				<CommentDetail 
					avatar={faker.image.avatar()} 
					author="George" 
					timeAgo="Today at 4:45PM" 
					content="Comment 1" 
				/>
			</ApprovalCard>

			<ApprovalCard>
				<CommentDetail 
					avatar={faker.image.avatar()} 
					author="John" 
					timeAgo="Today at 2:45PM" 
					content="Comment 2" 
				/>
			</ApprovalCard>
			
			<ApprovalCard>
				<CommentDetail 
					avatar={faker.image.avatar()} 
					author="Paul" 
					timeAgo="Yesterday at 1:45PM" 
					content="Comment 3" 
				/>
			</ApprovalCard>
			
			<ApprovalCard>
				<CommentDetail 
					avatar={faker.image.avatar()} 
					author="Ringo" 
					timeAgo="Yesterday at 8:45PM" 
					content="Comment 4" 
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));