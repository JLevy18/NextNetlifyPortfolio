import Image from 'next/image';


function Card(props) {
    return(
        <div id={props.index} className="iconWrapper" onClick={props.onClick}>
              <div className='front'>
                <div className="icon">
                  <Image src={props.card.iconSrc} layout='fill' />
                </div>
                <p>{props.card.note}</p>
              </div>
              <div className='back'><div className='color' id='red'></div></div>
        </div>
    )
}export default Card