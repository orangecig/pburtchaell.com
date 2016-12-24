// @flow
import React, { Component } from 'react';
import './styles.css';

type Props = {
  src: string,
  alt: string,
  height: string,
  width: string
};

const INITIAL_STATE = {
  isPending: true
};

/*
 * @class Image
 * @description The image component fetches an image and
 * handles showing the blurred image while the fullsize is pending.
 */
class Image extends Component {
  constructor(props: Props, context: Object) {
    super(props, context);

    this.state = INITIAL_STATE;
  }

  // Local state stores the state of the image request
  state: {
    isPending: boolean
  }

  componentDidMount() {
    const image = new window.Image();
    image.onload = this.handleLoad.bind(this);
    image.src = this.props.src;
  }

  handleLoad() {
    this.setState({
      isPending: false
    });
  }

  props: Props;

  render() {
    const { isPending } = this.state;
    const pendingClassName: string = 'is-pending';

    /**
     * Preloaded images have a unique class name because I don't want
     * the transition effect to apply to all images.
     */
    const containerClassName: string = 'image-preload-container';
    const imageClassName: string = 'image-preload';

    return (
      <div
        className={isPending ? `${containerClassName} ${pendingClassName}` : containerClassName}
        style={{
          height: `${this.props.height}px`,
          width: `${this.props.width}px`
        }}
      >
        {isPending ? null : (
          <img
            src={this.props.src}
            alt={this.props.alt}
            className={imageClassName}
            style={{
              maxHeight: '100%',
              maxWidth: '100%'
            }}
          />
        )}
      </div>
    );
  }
}

export default Image;
