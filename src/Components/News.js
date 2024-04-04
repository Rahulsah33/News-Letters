import React, { Component } from "react";
import NewsItems from "./NewsItems";
import { Spinner } from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {
  static defaultProps ={
    country : 'in',
    pageSize : 9,
    category: 'general'

  }

  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number,
    category: PropTypes.string,
  }


  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading : false,
      page: 1,
      totalResults: 0, // Initialize totalResults
    };
    document.title = `${this.props.category}-News Letter`
  }

  async componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=953f1a96ee2c4135929985f83a173bd8&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    this.setState({
      articles: data.articles,
      totalResults: data.totalResults,
      loading: false,
    });
  }
  
  handlePrevClick = async () => {
    const { page } = this.state;
    if (page > 1) {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=953f1a96ee2c4135929985f83a173bd8&page=${page - 1}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      this.setState({
        page: page - 1,
        articles: data.articles,
        loading: false,
      });
    }
  };
  
  handleNextClick = async () => {
    const { page, totalResults } = this.state;
    const nextPage = page + 1;
    const totalPages = Math.ceil(totalResults / this.props.pageSize);
    if (nextPage <= totalPages) {
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=953f1a96ee2c4135929985f83a173bd8&page=${nextPage}&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      this.setState({
        page: nextPage,
        articles: data.articles,
        loading: false,
      });
    }
  };
  

  render() {
    const { articles, page, totalResults } = this.state;
    return (
      <div className="container my-3 mb-3">
        <h2>Today's Top Headlines</h2>
        {this.state.loading && <Spinner />}

        <div className="row">
          {!this.state.loading && articles.map((element) => (
            <div className="col-md-4" key={element.url}>
              <NewsItems
                title={element.title}
                description={element.description}
                imgurl={element.urlToImage}
                newsurl={element.url} author = {element.author} date = {element.publishedAt}
              />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between my-4">
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handlePrevClick}
            disabled={page === 1}
          >
            &larr; Previous
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={this.handleNextClick}
            disabled={page >= Math.ceil(totalResults / this.props.pageSize)}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
