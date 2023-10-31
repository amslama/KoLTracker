export interface LinkButton {
    text: String;
    route: String;
}

const TrackerButton: LinkButton = {
    text: 'Tracker',
    route: '/tracker',
}

export const MenuOptions: LinkButton[] = 
[TrackerButton]