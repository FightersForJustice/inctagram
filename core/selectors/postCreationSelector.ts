import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'
import { POST_CREATION_KEY } from '../reducers/constant_keys'
import { RootState } from '../reducers'

const selectPostCreationData = (state: RootState) => state[POST_CREATION_KEY]

const postCreationDataSelector = createSelector([selectPostCreationData], (post) => ({
  photos: post.postData.photos,
  description: post.postData.description,
}))

export const usePostCreationDataSelector = () => useSelector(postCreationDataSelector)
