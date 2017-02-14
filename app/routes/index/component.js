// @flow
import React, { Component, Element, createElement } from 'react';
import RouteContainer from '../../components/routeContainer';
import Text, { types } from '../../components/text';
import Row from '../../components/row';
import Column from '../../components/column';
import ListView from '../../components/listView';
import requestHandler from '../../support/requestHandler';

type Props = {
  children: Element<*>
}

class IndexRoute extends Component {
  constructor(props: Props, context: Object) {
    super(props, context);

    this.state = {
      isPending: true
    };
  }

  state: {
    isPending: boolean
  };

  componentWillMount() {
    requestHandler.call(this, `${DATABASE_URL}/projects.json`);
  }

  props: Props;

  render(): RouteContainer {
    const { isPending, data } = this.state;

    return (
      <RouteContainer>
        <Row>
          <Text
            type={types.HEADER_1}
            style={{
              marginBottom: '3rem'
            }}
          >Patrick Burtchaell is a product design intern at Facebook, studying design at Loyola University New Orleans.</Text>
        </Row>
        <Row>
          <Column size={8}>
            <Text
              type={types.HEADER_2}
              style={{
                marginBottom: '8rem'
              }}
            >Previously, he worked for Fixt, Fileee, Gigster, NewAperio, and others.</Text>
          </Column>
        </Row>
        <Row>
          <Text type={types.HEADER_3}>Selected Works</Text>
        </Row>
        <ListView
          isPending={isPending}
          items={isPending ? null : Object.keys(data).map((key) => {
            const { meta } = data[key];
            const { date } = meta;
            const defaultStyles = {
              height: '25rem',
              borderRadius: '1px',
              backgroundSize: 'cover'
            };

            return ({
              id: meta.id,
              title: meta.title,
              linkTo: `/work/${date.year}/${date.month}/${meta.pathname}`,
              style: {
                ...defaultStyles,
                backgroundImage: `url(${meta.previewImage.url})`,
                backgroundColor: meta.color
              }
            });
          })}
        />
      </RouteContainer>
    );
  }
}

IndexRoute.propTypes = {};

export default IndexRoute;
