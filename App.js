import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import CreateScreen from './scr/screens/CreateScreen';
import EditScreen from './scr/screens/EditScreen';
import IndexScreen from './scr/screens/IndexScreen';
import ShowScreen from './scr/screens/ShowScreen';

import { Provider as BlogProvider } from './scr/context/BlogContext';

const navigator = createStackNavigator(
  {
    Create: CreateScreen,
    Edit: EditScreen,
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
