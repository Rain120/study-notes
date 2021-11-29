## Code

### 代码详解

```jsx
import React, { Component } from "react";
import propTypes from "prop-types";

import BetterScroll from "./BetterScroll";
import classnames from "classnames";
import isEqual from "lodash.isequal";

import "./sticky.scss";

export default class Sticky extends Component {
  static propTypes = {
    className: propTypes.string,
    data: propTypes.any
  };

  static defaultProps = {
    className: "",
    data: {}
  };

  state = {
    listHeight: [],
    scrollY: -1,
    currentIndex: 0,
    diff: -1,
    fixedTop: 0
  };

  bsref = null;
  fixTitleref = null;
  listGroup = [];
  TITLE_HEIGHT = 30;

  componentDidMount() {
    let { scrollY } = this.state;
    setTimeout(() => {
      this._calculateHeight();
      this.setState({ scrollY });
    }, 20);
  }

  componentDidUpdate(nextProps, prevState) {
    if (!isEqual(nextProps.data, this.props.data)) {
      setTimeout(() => {
        this.bsref.refresh();
        this._calculateHeight();
      }, 20);
    }
  }

  fixedTitle = () => {
    if (this.state.scrollY > 0) {
      return "";
    }
    let good = this.props.data[this.state.currentIndex];
    return good ? good.name : null;
  };

  _scrollY(newY) {
    let { currentIndex, listHeight, diff } = this.state;
    let scrollY = newY;
    if (newY > 0) {
      currentIndex = 0;
      return { currentIndex, diff, scrollY };
    }
    for (let i = 0; i < listHeight.length - 1; i++) {
      let height1 = listHeight[i];
      let height2 = listHeight[i + 1];
      if (-newY >= height1 && -newY < height2) {
        currentIndex = i;
        diff = height2 + newY;
        return { currentIndex, diff, scrollY };
      }
    }

    currentIndex = listHeight.length - 2;

    return { currentIndex, diff, scrollY };
  }

  _currentIndex() {
    let { scrollY, listHeight } = this.state;
    for (let i = 0; i < listHeight.length; i++) {
      let heightStart = listHeight[i];
      let heightEnd = listHeight[i + 1];
      if (!heightEnd || (scrollY >= heightStart && scrollY < heightEnd)) {
        return i;
      }
    }
    return 0;
  }

  _calculateHeight() {
    let listHeight = [];
    if (this.listGroup) {
      const lists = this.listGroup;
      let height = 0;
      listHeight.push(height);
      for (let i = 0; i < lists.length; i++) {
        if (lists[i]) {
          let item = lists[i];
          height += item.clientHeight;
          listHeight.push(height);
        }
      }
      this.setState({ listHeight });
    }
  }

  _diff(newVal) {
    let fixedTop =
      newVal > 0 && newVal < this.TITLE_HEIGHT ? newVal - this.TITLE_HEIGHT : 0;
    if (this.state.fixedTop === fixedTop) {
      return;
    }
    this.setState({ fixedTop });
    this.fixTitleref.style.transform = `translate3d(0, ${fixedTop}px, 0)`;
  }

  _scroll(posY) {
    let { currentIndex, diff, scrollY } = this._scrollY(posY);
    this.setState({ currentIndex, diff, scrollY }, () => {
      this._diff(diff);
      this.fixedTitle();
    });
  }

  render() {
    const { scrollY } = this.state;
    const { data } = this.props;

    return (
      <div className={classnames("sticky-wrapper", this.props.className)}>
        <BetterScroll
          ref={elem => (this.bsref = elem)}
          data={data}
          scrollY={true}
          scroll={pos => this._scroll(pos.y)}
          listenScroll={true}
        >
          <ul className="goods">
            {data.map((good, key) => (
              <li
                ref={elem => this.listGroup.push(elem)}
                className="good-wrapper"
                key={`good-${key}`}
              >
                <div className="good">
                  <div className="good-name">
                    <h3 className="title">{good.name}</h3>
                  </div>
                  <ul className="foods">
                    {good.foods.map((food, k) => (
                      <li className="food" key={`food-${k}`}>
                        <div className="food-name">{food.name}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ul>
          <div
            className={classnames("fixed-title", {
              "hide-title": scrollY > 0
            })}
            ref={elem => (this.fixTitleref = elem)}
          >
            <h3 className="title">{this.fixedTitle()}</h3>
          </div>
        </BetterScroll>
      </div>
    );
  }
}
```



