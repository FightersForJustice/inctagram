import { MakeIcon } from './MakeIcon'
import { IconsPropsType } from './iconsType'
import HomeOutline from '@/public/sidebar-icons/home-outline.svg'
import Home from '@/public/sidebar-icons/home.svg'
import CreateOutline from '@/public/sidebar-icons/plus-square-outline.svg'
import Create from '@/public/sidebar-icons/plus-square.svg'
import ProfileOutline from '@/public/sidebar-icons/person-outline.svg'
import Profile from '@/public/sidebar-icons/person.svg'
import MessageOutline from '@/public/sidebar-icons/message-circle-outline.svg'
import Message from '@/public/sidebar-icons/message-circle.svg'
import SearchOutline from '@/public/sidebar-icons/search-outline.svg'
import Search from '@/public/sidebar-icons/search.svg'
import TrendingUpOutline from '@/public/sidebar-icons/trending-up-outline.svg'
import TrendingUp from '@/public/sidebar-icons/trending-up.svg'
import BookmarkOutline from '@/public/sidebar-icons/bookmark-outline.svg'
import Bookmark from '@/public/sidebar-icons/bookmark.svg'
import LogoutOutline from '@/public/sidebar-icons/log-out-outline.svg'
import Logout from '@/public/sidebar-icons/log-out.svg'


export const Icons = {
  Home: (props: IconsPropsType) => (
    <MakeIcon Icon={Home} OutlineIcon={HomeOutline} text={props.customText ? props.customText : 'Home'} {...props} />
  ),
  Create: (props: IconsPropsType) => (
    <MakeIcon Icon={Create} OutlineIcon={CreateOutline} text={props.customText ? props.customText : 'Create'} {...props} />
  ),
  Profile: (props: IconsPropsType) => (
    <MakeIcon Icon={Profile} OutlineIcon={ProfileOutline} text={props.customText ? props.customText : 'My Profile'} {...props} />
  ),
  Messenger: (props: IconsPropsType) => (
    <MakeIcon Icon={Message} OutlineIcon={MessageOutline} text={props.customText ? props.customText : 'Messenger'} {...props} />
  ),
  Search: (props: IconsPropsType) => (
    <MakeIcon Icon={Search} OutlineIcon={SearchOutline} text={props.customText ? props.customText : 'Search'} {...props} />
  ),
  Statistics: (props: IconsPropsType) => (
    <MakeIcon Icon={TrendingUp} OutlineIcon={TrendingUpOutline} text={props.customText ? props.customText : 'Statistics'} {...props} />
  ),
  Favorites: (props: IconsPropsType) => (
    <MakeIcon Icon={Bookmark} OutlineIcon={BookmarkOutline} text={props.customText ? props.customText : 'Favorites'} {...props} />
  ),
  Logout: (props: IconsPropsType) => (
    <MakeIcon Icon={Logout} OutlineIcon={LogoutOutline} text={props.customText ? props.customText : 'Log Out'} {...props} />
  ),
}
