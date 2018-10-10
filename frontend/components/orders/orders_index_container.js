import { connect } from 'react-redux';
import React from 'react';
import OrdersIndex from './orders_index';
import { fetchOrders, updateOrder } from '../../actions/order_actions';
import { fetchRackets } from '../../actions/racket_actions';
import { fetchCords } from '../../actions/cord_actions';
import { fetchOrderLines } from '../../actions/order_line_actions';
import values from 'lodash/values';

const mapStateToProps = (state) => {
  const orders = values(state.entities.orders);
  const orderLines = values(state.entities.orderLines);
  const loading = state.ui.loading.loading;
  return({
    orders,
    orderLines,
    loading
  })
};

const mapDispatchToProps = (dispatch) => ({
  fetchOrders: () => dispatch(fetchOrders()),
  fetchRackets: () => dispatch(fetchRackets()),
  fetchCords: () => dispatch(fetchCords()),
  fetchOrderLines: orderId => dispatch(fetchOrderLines(orderId)),
  updateOrder: order => dispatch(updateOrder(order)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrdersIndex);