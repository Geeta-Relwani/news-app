import React from "react";
//import logo from "./logo.svg";
import "./App.css";

import News from "./Components/News";

//const API_KEY = "2730e71f6b2746899e520287a0f483ec";

class App extends React.Component {
	state = {
		title: undefined,
		description: undefined,
		content: undefined
	};

	getNews = async e => {
		e.preventDefault();
		const api_call = await fetch(
			`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2730e71f6b2746899e520287a0f483ec`
		);
		const data = await api_call.json();
		console.log(data);

		this.setState({
			title: data.articles[2].title,
			description: data.articles[3].description,
			content: data.articles[7].content
		});
	};

	render() {
		return (
			<div>
				<News
					getNews={this.getNews}
					title={this.state.title}
					description={this.state.description}
					content={this.state.content}
				/>
			</div>
		);
	}
}

export default App;
