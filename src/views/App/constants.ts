import type { LinkButton } from './shared.constants'

const TrackerAddButton: LinkButton = {
  text: 'Add',
  route: '/tracker/add'
}
const TrackerSellButton: LinkButton = {
  text: 'Sell',
  route: '/tracker/sell'
}
const TrackerViewButton: LinkButton = {
  text: 'View',
  route: '/tracker/view'
}

export const TrackerOptions: LinkButton[] = [TrackerAddButton, TrackerSellButton, TrackerViewButton]

export interface SideLinkButton {
  icon: string;
  text: string;
  children?: SideLinkButton[]
}

const AddTrackerLink: SideLinkButton = {
  icon: 'circle-plus', text: 'Purchase'
}
const SellTrackerLink: SideLinkButton = {
  icon: 'circle-minus', text: 'Sell'
}

const ConvertTrackerLink:SideLinkButton = {
  icon: 'handshake', text: 'Convert'
}

const ViewTrackerLink: SideLinkButton = {
  icon: 'chart-line', text: 'View Inventory'
}

const TrackerLinks: SideLinkButton = {
  icon: "file-sign",text: 'Tracker',
 children:[AddTrackerLink, SellTrackerLink, ConvertTrackerLink, ViewTrackerLink]
}



export const SideBarLinks: SideLinkButton[] = [
TrackerLinks
]