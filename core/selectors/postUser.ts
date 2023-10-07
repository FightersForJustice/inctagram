import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { POST_USER_KEY, USER_KEY } from '../reducers/constant_keys'
import { RootState } from '../reducers'

const selectPostUser = (state: RootState) => state[POST_USER_KEY]

const postUserSelector = createSelector([selectPostUser], (postUser) => ({
  postLast: postUser.PostUserData.postLast,
  totalCount: postUser.PostUserData.totalCount,
  pageSize: postUser.PostUserData.pageSize,
  items: postUser.PostUserData.items,
}))

export const usePostUserSelector = () => useSelector(postUserSelector)
