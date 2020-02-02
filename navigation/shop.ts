import { createStackNavigator } from 'react-navigation-stack';

import { COLORS } from '../constants';

import {
  CartScreen,
  OrdersScreen,
  ProductsOverviewScreen,
  ProductDetailScreen,
} from '../screens/shop';

const screens = {
  ProductsOverview: {
    screen: ProductsOverviewScreen,
  },
};

const config = {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: COLORS.primary,
    },
    headerTintColor: '#fff',
  },
};

export const ShopNavigator = createStackNavigator(screens, config);
