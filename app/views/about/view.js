import React, { Component } from 'react';
import View from 'components/layout/view';
import Section from 'components/layout/section';
import Image from 'components/core/image';

export default class AboutView extends Component {
  render() {
    return (
      <View {...this.props.route.config}>
        <Section name="about" style={{
          paddingBottom: '1rem'
        }}>
          <div className="row">
            <div className="col col-l-2 col-s-12">
              <h1 className="page-title">About</h1>
            </div>
            <div className="col col-l-10 col-s-12">
              <figure className="image-bleed">
                <Image
                  src={require('images/me-large.png')}
                  height="500"
                />
              </figure>
              <p>Considering myself a multi-faceted designer with a passion for programming, I specialize in graphic design, user-interface design and front-end web development.</p>
              <p>I spend my time enrolled as a full-time design and computer science undergraudate student at Loyola University New Orleans and as a part-time web developer and designer. I operate through <a href="http://lawnchair.io">Lawn Chair Studios</a>, where I am a co-founder and CEO. I expect to graduate from Loyola in 2018.</p>
              <p>I am currently unavailable for projects and part-time work. However, if you have a project or idea that you think would interest me, I would love to still talk with you about it.</p>
              <p>Over the past several years, I have had the oppurtunity to work with several startups and organizations from the New Orleans area, the United States and Europe to design and build web product. My venture is about meeting new teams, building powerful & sustainable products, having fun, and learning new things.</p>
              <p>If you are interested in hiring me, via Lawn Chair, for your next project, send me an email at <a href="mailto:patrick@lawnchair.io">patrick@lawnchair.io</a>. If you are just saying hello, you can get in touch at <a href="mailto:patrick@pburtchaell.com">patrick@pburtchaell.com</a>.</p>
            </div>
          </div>
        </Section>
        <Section name="contact" noPadding>
          <div className="row">
            <div className="col col-l-2 col-s-12">
              <h1 className="page-title">Contact</h1>
            </div>
            <div className="col col-l-10 col-s-12">
              <div className="row row-no-gutter">
                <div className="col col-l-6 col-s-6">
                  <div className="text-tertiary">
                    <a href="mailto:patrick@pburtchaell.com">patrick</a>
                    <span>@pburtchaell.com</span>
                  </div>
                  <div className="text-tertiary">
                    <a href="mailto:patrick@lawnchair.io">patrick</a>
                    <span>@lawnchair.io</span>
                  </div>
                  <div className="text-tertiary">
                    <a href="https://twitter.com/pburtchaell" target="blank">Twitter</a><span>, </span>
                    <a href="https://github.com/pburtchaell" target="blank">GitHub</a><span> & </span>
                    <a href="https://dribbble.com/purtchaell" target="blank">Dribbble</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
        <Section name="groups">
          <div className="row">
            <div className="col col-l-2 col-s-12">
              <h1 className="page-title">Groups & Organizations</h1>
            </div>
            <div className="col col-l-10 col-s-12">
              <div className="text-tertiary">
                Member, AIGA (American Institute of Graphic Artists) New Orleans
              </div>
              <div className="text-tertiary">
                Member, DSGN Loyola University New Orleans
              </div>
            </div>
          </div>
        </Section>
      </View>
    );
  }
}
