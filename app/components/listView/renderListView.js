import React, { Element, Children } from 'react';
import ListViewItem from './index';

const renderListView = (items): Element<*> => {
  return Children.toArray(Object.keys(items).map(item => {
    const { meta } = items[item];
    const { date } = meta;

    return (
      <ListViewItem
        title={meta.title}
        tags={meta.tags}
        year={meta.date.year}
        isNew={meta.isNew || false}
        isComingSoon={meta.isComingSoon || false}
        linkTo={`/work/${date.year}/${date.month}/${meta.pathname}`}
        style={{
          backgroundImage: `url(${meta.previewImage.url})`,
          backgroundColor: `rgb(${meta.primaryColor.rgb})`
        }}
      />
    );
  }));
};

export default renderListView;
