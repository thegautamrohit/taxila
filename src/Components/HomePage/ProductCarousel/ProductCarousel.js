import React from "react";

import Bathroom from "../../../Assets/images/HomePage/Bathroom.webp";
import Kitchen from "../../../Assets/images/HomePage/Kitchen.webp";
import LivingRoom from "../../../Assets/images/HomePage/LivingRoom.webp";
import Outdoor from "../../../Assets/images/HomePage/Outdoor.webp";
import Commercial from "../../../Assets/images/HomePage/Commercial.webp";

import "./ProductCarousel.css";
import { GrNext, GrPrevious } from "react-icons/gr";

const images = [
  {
    id: 1,
    src: Bathroom,
    title: "BATHROOMS",
  },
  {
    id: 2,
    src: Outdoor,
    title: "OUTDOORS",
  },
  {
    id: 3,
    src: Kitchen,
    title: "KITCHEN",
  },
  {
    id: 4,
    src: LivingRoom,
    title: "LIVING ROOM",
  },
  {
    id: 5,
    src: Commercial,
    title: "COMMERCIAL",
  },
  {
    id: 6,
    src: Bathroom,
    title: "BATHROOMS",
  },
  {
    id: 7,
    src: Outdoor,
    title: "OUTDOORS",
  },
  {
    id: 8,
    src: Kitchen,
    title: "KITCHEN",
  },
  {
    id: 9,
    src: LivingRoom,
    title: "LIVING ROOM",
  },
  {
    id: 10,
    src: Commercial,
    title: "COMMERCIAL",
  },
];
class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      level: this.props.level,
    };
  }

  render() {
    const className = "item level" + this.props.level;
    const overlay = "overlay" + this.props.level;
    // console.log(this.props.level);
    return (
      <div
        className={className}
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div className={overlay}></div>
        <img src={this.props.images} alt={this.props.title} />
        <div className="product__item__itemName">
          <p>{this.props.title}</p>
          <a href="/">explore {this.props.title} </a>
        </div>
      </div>
    );
  }
}

class ProductCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: images,
      active: 0,
      direction: "",
    };
    this.rightClick = this.moveRight.bind(this);
    this.leftClick = this.moveLeft.bind(this);
  }

  generateItems() {
    let items = [];
    let level;

    for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
      var index = i;
      if (i < 0) {
        index = this.state.items.length + i;
      } else if (i >= this.state.items.length) {
        index = i % this.state.items.length;
      }
      level = this.state.active - i;
      items.push(
        <Item
          key={index}
          id={this.state.items[index]}
          level={level}
          images={this.state.items[index].src}
          title={this.state.items[index].title}
        />
      );
    }
    return items;
  }

  moveLeft() {
    var newActive = this.state.active;
    newActive--;
    this.setState({
      active: newActive < 0 ? this.state.items.length - 1 : newActive,
      direction: "left",
    });
  }

  moveRight() {
    var newActive = this.state.active;
    this.setState({
      active: (newActive + 1) % this.state.items.length,
      direction: "right",
    });
  }

  render() {
    return (
      <>
        <h3 className="mobile__note">Inspirations</h3>
        <div className="productCarousal">
          <div id="carousel" className="noselect">
            <div className="arrow arrow-left" onClick={this.rightClick}>
              <GrPrevious color="white" />
            </div>
            {this.generateItems()}
            <div className="arrow arrow-right" onClick={this.leftClick}>
              <GrNext color={"white"} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductCarousel;
