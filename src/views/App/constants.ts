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
  route: '/tracker/aviewdd'
}

export const TrackerOptions: LinkButton[] = [TrackerAddButton, TrackerSellButton, TrackerViewButton]
