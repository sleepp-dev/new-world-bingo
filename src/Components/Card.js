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
        gap: '1rem',
    }

    return (
            <div className='card'>
                <div className='cardHeader' style={cardStyles}>
                    <div className='headerCell'>B</div>
                    <div className='headerCell'>I</div>
                    <div className='headerCell'>N</div>
                    <div className='headerCell'>G</div>
                    <div className='headerCell'>O</div>
                </div>
                <div className='cardBody' style={cardStyles}>
                   {tiles}
                </div>
            </div>
    )
}