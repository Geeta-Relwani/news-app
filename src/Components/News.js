import React from "react";

class News extends React.Component {
	render() {
		return (
			<div className="news_info">
				<form onSubmit={this.props.getNews}>
					<button type="submit">Get News</button>
					<p>Title:{this.props.title}</p>
					<p>Description:{this.props.description}</p>
					<p>Content:{this.props.content}</p>
				</form>
			</div>
		);
	}
}

export default News;
