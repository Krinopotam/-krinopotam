import { nanoid } from 'nanoid';
/** Generate new nano id
 * It uses a larger alphabet than UUID (A-Za-z0-9_-). So ID size was reduced from 36 to 21 symbols.
 * */
export const GetNanoId = (size) => {
    return nanoid(size);
};
