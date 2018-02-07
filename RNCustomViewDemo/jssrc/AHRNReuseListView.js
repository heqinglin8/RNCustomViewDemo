import React from 'react';
import PropTypes from 'prop-types';
import {requireNativeComponent, View} from 'react-native';


let iface = {
    name: 'AHRNReuseListView',
    propTypes: {
		itemSeparator:PropTypes.string,
    	footerData:PropTypes.object,
    	headerData:PropTypes.object,
      	data:PropTypes.array,
      	extraData:PropTypes.object,
      	refreshInitHints:PropTypes.string,
      	willRefreshHints:PropTypes.string,
      	refreshingHints:PropTypes.string,
		loadingHints:PropTypes.string,
		noDataHints:PropTypes.string,
		onSelectedItem:PropTypes.func,
		enablePullRefresh:PropTypes.bool,
		onPullRefresh:PropTypes.func,
		enableLoadMore:PropTypes.bool,
		onLoadMore:PropTypes.func,
		onListScroll:PropTypes.func,
		refreshing:PropTypes.bool,
		loadingMore:PropTypes.bool,
      	cellHeight:PropTypes.number,
        ...View.propTypes , //支持View组件的所有属性
    },
};

module.exports = requireNativeComponent('AHRNReuseListView', iface);