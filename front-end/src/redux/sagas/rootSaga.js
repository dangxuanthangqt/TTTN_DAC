
import { authenSaga } from './authenSaga';
function *rootSaga (){
    yield fork(authenSaga)
}