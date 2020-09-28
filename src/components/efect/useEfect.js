import React, {useEfect, useState} from 'react';
import ReactDom from 'react-dom';



const App = () => {
    const [value, setValue] = useState(0);
    const [visibile, setVisible] = useState(true);


    if (visibile) {
        return (
            <div>
                <button
                onClick={() => setValue((v) => v+1)}>+</button>
                <button
                onClick={() => setVisible(false)}>hide</button>
                <PlanetInfo id={value} />

            </div>
        )
    }
}

const HookCounter = ( { value} ) => {
    
    useEfect(() => {
        console.log('mount');
    }, []);  // componentDidMoumt useEfect(() => console.log('mount'), []);
    useEfect(() => {
        console.log('update');
    }); // componentDidUpdate useEfect(() => console.log('update'));
    useEfect(() => {
       return () => {
            console.log('clear') 
        } 
    }); // componentWilUnMount   useEfect(() => () => console.log('clear'));
    return <p>{value}</p>
}


const Notificationn = () => {
    const [ visibile, setVisible] = useState(true);

    useEfect(() => {
        const timeout =  setTimeout(
              () => setVisible(false), 1500);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div>
            { visibile && <p> Hello</p>}
        </div>
    )


}


const PlanetInfo = ( { id } ) => {

    const [name, setName ] = useState(null);
    

    useEfect(() => {
    let canselled = false;
    fetch(`https://swapi.co/api/planets/${id}`)
        .then(res => res.json())
        .then(data => !canselled && setName(data.name));
    return () => canselled = true;        
    }, [id])



    return(
    <div> {id} - {name} </div>
    )
}


ReactDom.render(<App />,
    document.getElementById('root'));