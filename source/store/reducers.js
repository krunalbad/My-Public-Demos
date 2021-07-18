import common from '@common/reducer';
import routes from '@navigation/store/reducer';
import home from '@home/store/reducer';
import auth from '@auth/store/reducer';
import { reducer as form } from 'redux-form';

export { form, auth, routes, common, home };
