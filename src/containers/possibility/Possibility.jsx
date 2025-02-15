import './Possibility.css';
import possibilityImage from '../../assets/possibility.png';

function Possibility() {
    return (
        <div className='gpt3__possibility section__padding' id='possibility'>
            <div className='gpt3__possibility-image'>
                <img src={possibilityImage} alt="possibilityImage" />
            </div>
            <div className='gpt3__possibility-content'>
                <h4>Request early acces to get started</h4>
                <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
                <h4>Request early acces to get started</h4>
            </div>
        </div>
    );
}

export default Possibility;