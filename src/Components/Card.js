import Tile from './Tile'

export default function Card({n, items}) {

    const tiles = items.map((item, i) => {
        if (i===12) {
            return <Tile item={'FREE'} i={i} key={i} />
        } else {
            return <Tile item={item} i={i} key={i} />
        }
    }
    )

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