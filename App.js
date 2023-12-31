import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './scr/screens/IndexScreen';
import ShowScreen from './scr/screens/ShowScreen';

import { Provider as BlogProvider } from './scr/context/BlogContext';

const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show: ShowScreen
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs'
    }
  }
)

const App = createAppContainer(navigator)

export default () => (
  <BlogProvider>
    <App />
  </BlogProvider>
)
