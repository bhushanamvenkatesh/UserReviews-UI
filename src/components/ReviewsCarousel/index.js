import {Component} from 'react'
import './index.css'
// Write your code here

class ReviewsCarousel extends Component {
  state = {index: 0}

  onLeftArrowClick = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(prevState => ({index: prevState.index - 1}))
    }
  }

  onRightArrowClick = listLength => {
    const {index} = this.state
    if (index < listLength - 1) {
      this.setState(prevState => ({index: prevState.index + 1}))
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props

    const listLength = reviewsList.length

    return (
      <div className="app-container">
        <h1 className="reviews-text">Reviews</h1>
        <img
          src={reviewsList[index].imgUrl}
          className="dp-image"
          alt={reviewsList[index].username}
        />

        <div className="reveiew-profile">
          <button
            className="arrow-button"
            type="button"
            onClick={() => this.onLeftArrowClick(listLength)}
            testid="leftArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              className="arrow-mark"
              alt="left arrow"
            />
          </button>

          <div className="dp-name-container">
            <p className="user-name">{reviewsList[index].username}</p>
          </div>
          <button
            className="arrow-button"
            type="button"
            onClick={() => this.onRightArrowClick(listLength)}
            testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              className="arrow-mark"
              alt="right arrow"
            />
          </button>
        </div>
        <p>{reviewsList[index].companyName}</p>
        <p className="description">{reviewsList[index].description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
