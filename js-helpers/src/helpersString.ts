/**
 * @StringHelpers
 * @version 0.0.1
 * @link omegatester@gmail.com
 * @author Maksim Zaytsev
 * @license MIT
 */
 
import {v4 as uuid} from 'uuid';

export const HelpersStrings = {
    getUuid: ()=> {
        return uuid()
    }
}
