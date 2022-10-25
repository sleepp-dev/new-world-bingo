import Tile from './Tile'
// import bingoItems from '../utils/bingoItems'

let bingoItems = [
    'Ruling company loses Everfall/Windsward and subsequently falls apart',
    'Someone creates a server-wide discord',
    'Someone creates a new discord after being ostracized from the first discord',
    'A notable person is caught stealing company funds',
    'Somebody tries to orchestrate a company/faction coup',
    'Somebody reaches level 60 in 2 days',
    'Somebody clocks 100 hours of playtime in the first week',
    'Game-breaking bug discovered',
    'Joe Biden memes in Global chat',
    'Somebody reaches 600GS in the first month',
    'A company governor/consul is harassed into quitting the game',
    'Ruling faction splinters due to drama',
    'You are verbally assaulted after winning a 1v1',
    'Proximity chat used to play horrible music',
    'A /dice gambling ring forms',
    'You are verbally assaulted after losing a 1v1',
    'A company of veteran players joins the new server to shit on new players',
    'Reekwater flips 3 times in 1 week',
    'Somebody programs a discord bot',
    'Somebody uses their house to display expletives to everyone in Everfall',
    '50% of the player base quits after 3 weeks',
    'Faction alliance falls apart within 2 weeks of forming',
    'Everfall/Windsward flips and new company maxes out taxes',
    'There is a mass exodus from one faction to another',
    'Bots are back',
    'Dramalord claims to hate drama ',
    'Somebody makes a reference to the giant sausage',
    'A notable person is banned',
    'The company that claims the first territory loses it',
    'Somebody makes a New World drama calendar',
    'A sweatlord company advertises themselves as mercenaries',
    'Someone spams their Twitch in Global chat',
    'Streamer appears on server',
    'One company buys two territories',
]



function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]]
    }
    return array
}

export default function Card({n}) {

    const sampledItems = shuffle(bingoItems).slice(0, n*n)
    console.log(sampledItems)
    const tiles = sampledItems.map((item, i) => <Tile item={item} key={i} />)

    let cardStyles = {
        display: 'grid',
        gridTemplateColumns: `repeat(${n}, 1fr)`,
    }

    return (
        <div className='card' style={cardStyles}>
            {tiles}
        </div>
    )
}