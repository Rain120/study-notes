### 详细代码

```react
import React, { Component } from "react";
import propTypes from "prop-types";

import BetterScroll from "./BetterScroll";
import classnames from "classnames";
import isEqual from "lodash.isequal";

import "./slider.scss";

export default class Slider extends Component {
  static propTypes = {
    className: propTypes.string,
    data: propTypes.arrayOf(propTypes.any),
    interval: propTypes.number
  };

  static defaultProps = {
    className: "",
    data: [],
    interval: 4000
  };

  state = {
    currentPageIndex: 0
  };

  slider = null;
  sliderGroup = null;
  playTimer = 0;

  componentDidMount() {
    this._init();
  }

  componentDidUpdate(nextProps, prevState) {
    if (!isEqual(nextProps.data, this.props.data)) {
      this._init();

      window.addEventListener("resize", () => {
        if (!this.slider) {
          return;
        }
        this.slider.refresh();
      });
    }
  }

  componentWillUnmount() {
    clearTimeout(this.playTimer);
  }

  _onScrollEnd() {
    this.autoGoNext();
  }

  autoGoNext = () => {
    clearTimeout(this.playTimer);
    this.playTimer = setTimeout(() => {
      this.slider.scroll.next();
    }, this.props.interval);
  };

  _init = () => {
    clearTimeout(this.playTimer);
    setTimeout(() => {
      this._initSliderHooks();
      this.autoGoNext();
    }, 20);
  };

  _initSliderHooks = () => {
    this.slider &&
      this.slider.on([
        {
          name: "beforeScrollStart",
          handler: () => clearTimeout(this.playTimer)
        },
        {
          name: "scrollEnd",
          handler: () => this._onScrollEnd()
        },
        {
          name: "slideWillChange",
          handler: page => {
            this.setState({
              currentPageIndex: page.pageX
            });
          }
        }
      ]);
  };

  render() {
    const { currentPageIndex } = this.state;

    const { data } = this.props;
    return (
      <div className={classnames("slide-wrapper", this.props.className)}>
        <BetterScroll
          ref={elem => (this.slider = elem)}
          data={data}
          scrollX={true}
          scrollY={false}
          probeType={2}
          useTransition={true}
          momentum={false}
          bounce={false}
          stopPropagation={true}
          slide={{
            loop: true,
            threshold: 100
          }}
        >
          <div className="slider" ref={elem => (this.sliderGroup = elem)}>
            {data.map((img, key) => (
              <div className="slider-item" key={`img-${key}`}>
                <a className="img-wrapper" href={img.href}>
                  <img src={img.src} alt={img.alt} />
                </a>
              </div>
            ))}
          </div>
          <div className="dots">
            {data.map((img, key) => (
              <span
                className={classnames("dot", {
                  active: currentPageIndex === key
                })}
                key={key}
              />
            ))}
          </div>
        </BetterScroll>
      </div>
    );
  }
}


```



