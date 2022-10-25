export default function Tile( {item} ) {
    return (
        <div className='tile'>
            <div className='tileInner'>
                <div className='front'>
                    <p>{item}</p>
                </div>
                <div className='back'>
                    <p>New World</p>
                </div>
            </div>
        </div>
    )
}